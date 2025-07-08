# Build stage
FROM node:24-alpine AS build
WORKDIR /app

# Accept build arguments
ARG VITE_API_HOST=http://backend
ARG VITE_API_PORT=5084

# Set environment variables for build
ENV VITE_API_HOST=$VITE_API_HOST
ENV VITE_API_PORT=$VITE_API_PORT
ENV NODE_ENV=production

COPY package*.json ./
RUN npm install --legacy-peer-deps --ignore-scripts
COPY . .
RUN npx quasar prepare
RUN npm run build:ssr

# Production stage
FROM node:24-alpine
WORKDIR /app
COPY --from=build /app/dist /app/dist
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/package.json /app/package.json
ENV NODE_ENV=production
ENV VITE_API_HOST=http://backend
ENV VITE_API_PORT=5084
EXPOSE 3000
CMD ["node", "dist/ssr/index.js"]
