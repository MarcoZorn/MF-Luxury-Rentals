# Stage 1: Build (Node/Vite)
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies using clean install for production
COPY package*.json ./
RUN npm ci

# Copy source code
COPY . .

# Build the application (compiles to /app/dist)
RUN npm run build

# Stage 2: Serve (Nginx) - Bare Metal Performance
FROM nginx:alpine

# Copy custom Nginx configuration optimized for React SPA
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy compiled static files from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Disable server tokens (security)
RUN sed -i 's/server_tokens on;/server_tokens off;/' /etc/nginx/nginx.conf || true

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
