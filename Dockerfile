#  section 1 for build
FROM node:alpine as builder
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# section 2 for NGINX in Production
FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html
