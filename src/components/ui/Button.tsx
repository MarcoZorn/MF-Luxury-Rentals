import React from 'react';
import { motion } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onAnimationStart' | 'onDragStart' | 'onDragEnd' | 'onDrag'> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    className,
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    children,
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center font-display font-bold tracking-[0.1em] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed uppercase";

    const variants = {
        primary: "bg-transparent border border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-black hover:shadow-[0_0_20px_rgba(212,175,55,0.6)] hover:scale-[1.05]",
        secondary: "bg-luxury-gold text-luxury-black hover:bg-white hover:text-black hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] hover:scale-[1.05]",
        outline: "bg-transparent border border-white/20 text-white hover:border-luxury-gold hover:text-luxury-gold hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]",
        ghost: "bg-transparent text-luxury-gold hover:text-white hover:text-shadow-glow",
    };

    const sizes = {
        sm: "px-4 py-2 text-xs",
        md: "px-6 py-3 text-sm",
        lg: "px-8 py-4 text-base",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
                baseStyles,
                variants[variant],
                sizes[size],
                fullWidth ? "w-full" : "",
                className
            )}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
