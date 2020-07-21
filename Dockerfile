# Nodejs Base image
FROM node:latest as node 
WORKDIR /app

COPY . .

RUN npm install
RUN npm run build --prod


# deploy nginx 
FROM nginx:alpine
COPY --from=node /app/dist/ADLTest /usr/share/nginx/html