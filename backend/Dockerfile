# Use the official PHP image
FROM php:8.2-fpm

# Set the working directory in the container
WORKDIR /var/www/html

# Install system dependencies and PHP extensions '\' is for breaking a line
# redis is installed via pecl then enable the Redis dependency
RUN apt-get update && apt-get install --quiet -y \
    git \
    libzip-dev \
    zip \
    unzip \
    && docker-php-ext-install zip pdo pdo_mysql
 #   && pecl install  - -f redis-5.1.1 \
  #  && docker-php-ext-enable redis

# Copy Laravel files to the container
COPY . .

# Install Composer and Laravel dependencies
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer


RUN php artisan view:clear
RUN php artisan route:clear
RUN php artisan config:cache
RUN php artisan cache:clear

RUN php artisan passport:install




#create user
#RUN group --gid 1000 appuser \
#    && useradd --uid 1000 -g appuser \
#    -G www-data,root --shell /bin/bash \
#    --create-home appuser
#
#USER appuser

# Expose port 9000 for PHP-FPM
EXPOSE 8000

# Start PHP-FPM
CMD php artisan serve --host=0.0.0.0
