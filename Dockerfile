# install node
FROM node:20.11.1-alpine as base

# choose which directory will work
WORKDIR /app

# copy only package json
COPY ./package* ./

# run npm install to instal dependencies
RUN npm install

# copy all directories
COPY ./public ./public
COPY ./src ./src

# create build project
RUN npm run build

# install ngnix
FROM nginx:1.23.3 as nginx

# config nginx
COPY ./.ci/conf.d/spa-base.conf /etc/nginx/conf.d/default.conf
COPY ./.ci/nginx.conf /etc/nginx/nginx.conf

# from container build copy all files and share pulic nginx
COPY --from=base /app/build/ /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
