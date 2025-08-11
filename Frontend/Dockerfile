# --- Build stage (Debian) ---
FROM node:20-bookworm-slim AS build
WORKDIR /app

# IMPORTANT: copy ONLY package.json so the Windows lockfile isn't used
COPY package.json ./
RUN npm install

# pass API base into the build
ARG VITE_API_BASE=/api
ENV VITE_API_BASE=$VITE_API_BASE

# Now copy the rest of the project
COPY . .

# Build (no TS typecheck in Docker)
RUN npm run build:docker

# --- Runtime stage (tiny nginx) ---
FROM nginx:1.27-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
