#  section 1 for build
FROM node:alpine as builder
WORKDIR '/app'
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# section 2 for NGINX in Production
FROM nginx

EXPOSE 80

COPY --from=builder /app/build /usr/share/nginx/html
