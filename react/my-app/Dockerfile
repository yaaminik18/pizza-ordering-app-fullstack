FROM node:18.13.0-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:18.13.0-alpine AS production
WORKDIR /app
COPY --from=build /app/build ./build
COPY package*.json ./
RUN npm install --only=production
CMD ["npm", "start"]
