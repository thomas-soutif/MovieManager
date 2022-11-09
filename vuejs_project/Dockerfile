FROM node:latest

ENV AppPath=/app
RUN mkdir -p $AppPath
WORKDIR $AppPath

COPY ./movie_manager_app/package*.json $AppPath/
RUN npm install && npm install -g http-server

COPY ./movie_manager_app/ $AppPath/
RUN npm run build
ADD launch_vuesjs_prod.sh /launch_vuesjs_prod
RUN chmod +x /launch_vuesjs_prod

