# Use the official PHP image
FROM php:7.4-fpm

# Set the working directory in the container
WORKDIR /var/www/html

# Install system dependencies and PHP extensions
RUN apt-get update && apt-get install -y \
    git \
    zip \
    unzip \
    && docker-php-ext-install pdo pdo_mysql

# Copy Laravel files to the container
COPY . .

# Install Composer and Laravel dependencies
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN composer install

# Expose port 9000 for PHP-FPM
EXPOSE 9000

# Start PHP-FPM
CMD ["php-fpm"]
