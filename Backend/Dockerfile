FROM node:20-alpine
WORKDIR /app

# Optional: you don't really need netcat since you use healthcheck on db
# RUN apk add --no-cache netcat-openbsd

# ts-node needs dev deps -> do NOT omit dev
COPY package*.json ./
RUN npm ci

# Copy the rest
COPY . .

# No build step needed when using ts-node
# RUN npm run build   <-- remove

# If you keep entrypoint.sh, make sure it runs npm run start:all
# Otherwise skip entrypoint and run directly:
EXPOSE 3000
CMD ["sh", "-lc", "npm run start:all"]
