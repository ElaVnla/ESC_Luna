#!/bin/sh
set -e

DB_HOST="${DB_HOST:-db}"
DB_PORT="${DB_PORT:-3306}"

echo "Waiting for MySQL at ${DB_HOST}:${DB_PORT}..."
# try for up to ~60s
i=0
until nc -z -w 2 "$DB_HOST" "$DB_PORT"; do
  i=$((i+1))
  if [ "$i" -ge 30 ]; then
    echo "⚠️  Could not reach ${DB_HOST}:${DB_PORT} after 60s. Continuing anyway..."
    break
  fi
  echo "  MySQL not ready yet, sleeping..."
  sleep 2
done

echo "Running migrations..."
npm run migration:run

echo "Seeding (destinations) if empty..."
npm run seed:destinations || true

echo "Starting server..."
npm run start:prod
