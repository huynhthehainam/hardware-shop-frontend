### STAGE 2: Run ###
FROM nginx:1.21.4
COPY nginx /etc/nginx/conf.d

COPY ./build /usr/share/nginx/html
