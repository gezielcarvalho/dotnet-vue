# Build stage
FROM node:24-alpine AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npx quasar prepare
RUN npm run build:ssr

# Production stage
FROM node:24-alpine
WORKDIR /app
COPY --from=build /app/dist /app/dist
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/package.json /app/package.json
ENV NODE_ENV=production
EXPOSE 3000
CMD ["node", "dist/ssr/server/main.js"]
