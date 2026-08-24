# syntax=docker/dockerfile:1

# ---- Stage 1: install deps and build vendor/ + public/build (frontend assets) ----
FROM dunglas/frankenphp:1-php8.3-bookworm AS build

RUN install-php-extensions pdo_pgsql pdo_sqlite pcntl intl zip opcache

RUN apt-get update \
    && apt-get install -y --no-install-recommends ca-certificates curl gnupg \
    && curl -fsSL https://deb.nodesource.com/setup_22.x | bash - \
    && apt-get install -y --no-install-recommends nodejs \
    && npm install -g pnpm@10 \
    && rm -rf /var/lib/apt/lists/*

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /app

COPY composer.json composer.lock ./
RUN composer install --no-dev --no-scripts --no-interaction --prefer-dist --optimize-autoloader

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .

# Wayfinder (a Vite plugin) shells out to `php artisan` while building, which needs a
# bootable app — APP_KEY only has to be well-formed here, the real key is set at runtime.
ENV APP_KEY=base64:MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA=
RUN composer dump-autoload --optimize \
    && pnpm build

# ---- Stage 2: runtime ----
FROM dunglas/frankenphp:1-php8.3-bookworm AS runtime

RUN install-php-extensions pdo_pgsql pdo_sqlite pcntl intl zip opcache

ENV SERVER_NAME=:80

WORKDIR /app

COPY --from=build /app /app

RUN chown -R www-data:www-data storage bootstrap/cache

COPY docker/entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

EXPOSE 80

ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
CMD ["--config", "/etc/frankenphp/Caddyfile", "--adapter", "caddyfile"]
