# Build stage
FROM node:20 AS build
WORKDIR /app
COPY . .
RUN npm install && npm run build

# Production stage
FROM node:20-alpine
WORKDIR /app
COPY --from=build /app/dist /app/dist
CMD ["node", "dist/server/main.js"]
