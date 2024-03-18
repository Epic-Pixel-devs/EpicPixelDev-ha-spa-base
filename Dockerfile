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

# export port 80
# EXPOSE 80

# use user root
# USER root

# add on group on directory
# RUN chown -R nginx:nginx ./app

# change permission
# RUN chgrp -R $(id -gn nginx) /etc/nginx && chmod -R 777 /etc/nginx

# config nginx
COPY ./.ci/conf.d/spa-base.conf /etc/nginx/conf.d/default.conf
COPY ./.ci/nginx.conf /etc/nginx/nginx.conf

# from container build copy all files and share pulic nginx
COPY --from=base /app/build/ /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
