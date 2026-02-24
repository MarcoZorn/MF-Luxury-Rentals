#!/bin/bash

# MF Luxury Rentals - Asset Download Script
mkdir -p src/assets/images/cars/

download_car() {
    local id=$1
    local url1=$2
    local url2=$3
    
    echo "Downloading images for $id..."
    
    # Download first image
    if [ ! -z "$url1" ]; then
        curl -L -o "src/assets/images/cars/${id}-1.jpg" "$url1" -H "User-Agent: Mozilla/5.0"
    fi
    
    # Download second image
    if [ ! -z "$url2" ]; then
        curl -L -o "src/assets/images/cars/${id}-2.jpg" "$url2" -H "User-Agent: Mozilla/5.0"
    fi
}

# 1. Audi RSQ8
download_car "audi-rsq8" \
    "https://www.hdcarwallpapers.com/download/audi_rsq8_performance_2024_5k__3840x2160__wallpaper.jpg" \
    "https://images.mad4wheels.com/audi/rsq8-2024/wallpaper-001.jpg"

# 2. Audi Q8 S-line
download_car "audi-q8-sline" \
    "https://www.wallpaperflare.com/static/image/audi-q8-s-line-black-edition-wallpaper.jpg" \
    "https://images.4kwallpapers.com/cars/audi-q8-s-line-2024-5k.jpg"

# 3. Porsche Cayenne
download_car "porsche-cayenne" \
    "https://www.hdcarwallpapers.com/download/porsche_cayenne_coupe_turbo_gt_2024_5k.jpg" \
    "https://images.mad4wheels.com/porsche/cayenne-turbo-gt/wallpaper-002.jpg"

# 4. Mercedes G63
download_car "mercedes-g63" \
    "https://www.hdcarwallpapers.com/download/mercedes_amg_g63_2024_5k_wallpaper.jpg" \
    "https://images.wallpaperflare.com/mercedes-g63-amg-black-night-package.jpg"

# 5. Maserati Levante
download_car "maserati-levante" \
    "https://www.mad4wheels.com/maserati/levante-gts-2022/car-wallpaper.jpg" \
    "https://images.4kwallpapers.com/cars/maserati-levante-gts-2023.jpg"

# 6. Lamborghini Urus
download_car "lamborghini-urus" \
    "https://www.hdcarwallpapers.com/download/lamborghini_urus_s_2024_5k_wallpaper.jpg" \
    "https://images.mad4wheels.com/lamborghini/urus-s-2024/wallpaper-001.jpg"

# 7. Porsche Macan
download_car "porsche-macan" \
    "https://www.hdcarwallpapers.com/download/porsche_macan_s_2024_5k_wallpaper.jpg" \
    "https://images.4kwallpapers.com/cars/porsche-macan-s-2024.jpg"

# 8. Audi RSQ3
download_car "audi-rsq3" \
    "https://www.hdcarwallpapers.com/download/audi_rsq3_sportback_2024_5k_wallpaper.jpg" \
    "https://images.wallpaperflare.com/audi-rsq3-sportback-edition-10-years.jpg"

# 9. Ferrari Purosangue
download_car "ferrari-purosangue" \
    "https://www.hdcarwallpapers.com/download/ferrari_purosangue_2024_5k_wallpaper.jpg" \
    "https://images.mad4wheels.com/ferrari/purosangue-2024/wallpaper-001.jpg"

# 10. BMW M4
download_car "bmw-m4" \
    "https://www.hdcarwallpapers.com/download/bmw_m4_competition_2024_5k_wallpaper.jpg" \
    "https://images.4kwallpapers.com/cars/bmw-m4-competition-g82-2024.jpg"

# 11. Audi RS3
download_car "audi-rs3" \
    "https://www.hdcarwallpapers.com/download/audi_rs3_sedan_2024_5k_wallpaper.jpg" \
    "https://images.wallpaperflare.com/audi-rs3-sportback-2024-nardo-grey.jpg"

# 12. Audi RS6
download_car "audi-rs6" \
    "https://www.hdcarwallpapers.com/download/audi_rs6_avant_performance_2024_5k_wallpaper.jpg" \
    "https://images.mad4wheels.com/audi/rs6-performance-2024/wallpaper-001.jpg"

# 13. BMW M8
download_car "bmw-m8" \
    "https://www.hdcarwallpapers.com/download/bmw_m8_competition_cabrio_2024_5k_wallpaper.jpg" \
    "https://images.4kwallpapers.com/cars/bmw-m8-competition-cabrio-2024.jpg"

# 14. Porsche 718
download_car "porsche-718" \
    "https://www.hdcarwallpapers.com/download/porsche_718_spyder_rs_2024_5k_wallpaper.jpg" \
    "https://images.mad4wheels.com/porsche/718-spyder-rs-2024/wallpaper-001.jpg"

# 15. Lamborghini Huracan
download_car "lamborghini-huracan" \
    "https://www.hdcarwallpapers.com/download/lamborghini_huracan_evo_spyder_2024_5k_wallpaper.jpg" \
    "https://images.wallpaperflare.com/lamborghini-huracan-evo-rwd-spyder-orange.jpg"

# 16. Porsche 911
download_car "porsche-911" \
    "https://www.hdcarwallpapers.com/download/porsche_911_992_4s_cabrio_2024_5k_wallpaper.jpg" \
    "https://images.mad4wheels.com/porsche/911-992-4s-cabriolet/wallpaper-001.jpg"

# 17. Ferrari 296
download_car "ferrari-296" \
    "https://www.hdcarwallpapers.com/download/ferrari_296_gtb_2024_5k_wallpaper.jpg" \
    "https://images.mad4wheels.com/ferrari/296-gtb-2022/wallpaper-001.jpg"

# 18. Ferrari 812
download_car "ferrari-812" \
    "https://www.hdcarwallpapers.com/download/ferrari_812_gts_2024_5k_wallpaper.jpg" \
    "https://images.wallpaperflare.com/ferrari-812-gts-v12-spyder.jpg"

# 19. Ferrari Portofino
download_car "ferrari-portofino" \
    "https://www.hdcarwallpapers.com/download/ferrari_portofino_m_2024_5k_wallpaper.jpg" \
    "https://images.mad4wheels.com/ferrari/portofino-m-2021/wallpaper-001.jpg"

# 20. Bentley Continental
download_car "bentley-continental" \
    "https://www.hdcarwallpapers.com/download/bentley_continental_gt_2024_5k_wallpaper.jpg" \
    "https://images.mad4wheels.com/bentley/continental-gt-azure-2024/wallpaper-001.jpg"

# 21. Maserati GranCabrio
download_car "maserati-grancabrio" \
    "https://www.hdcarwallpapers.com/download/maserati_grancabrio_2024_5k_wallpaper.jpg" \
    "https://images.mad4wheels.com/maserati/grancabrio-2024/wallpaper-001.jpg"

# 22. Ferrari SF90
download_car "ferrari-sf90" \
    "https://www.hdcarwallpapers.com/download/ferrari_sf90_stradale_2024_5k_wallpaper.jpg" \
    "https://images.mad4wheels.com/ferrari/sf90-stradale-2020/wallpaper-001.jpg"

# 23. Ferrari F8
download_car "ferrari-f8" \
    "https://www.hdcarwallpapers.com/download/ferrari_f8_tributo_2024_5k_wallpaper.jpg" \
    "https://images.mad4wheels.com/ferrari/f8-tributo-2019/wallpaper-001.jpg"

# 24. Lamborghini Revuelto
download_car "lamborghini-revuelto" \
    "https://www.hdcarwallpapers.com/download/lamborghini_revuelto_2024_5k_wallpaper.jpg" \
    "https://images.mad4wheels.com/lamborghini/revuelto-2024/wallpaper-001.jpg"

# 25. Ferrari Roma
download_car "ferrari-roma" \
    "https://www.hdcarwallpapers.com/download/ferrari_roma_2024_5k_wallpaper.jpg" \
    "https://images.mad4wheels.com/ferrari/roma-2020/wallpaper-001.jpg"

echo "Download complete. Verifying file sizes..."
find src/assets/images/cars/ -name "*.jpg" -size -1k -delete
echo "Small/broken files deleted."
ls -lh src/assets/images/cars/
