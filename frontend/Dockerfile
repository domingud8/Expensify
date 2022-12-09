# Stage 1 - the build process
FROM node:16.13-alpine3.12 as build-deps
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . ./

ARG MODE=production
RUN npm run build_${MODE}

# Stage 2 - the production environment
FROM nginx:1.21.4-alpine
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
