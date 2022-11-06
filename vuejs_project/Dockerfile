FROM node:latest

ENV AppPath=/app
RUN mkdir -p $AppPath
WORKDIR $AppPath

COPY ./movie_manager_app/package*.json $AppPath/
RUN npm install && npm install -g http-server

ADD launch_vuesjs_dev.sh /launch_vuesjs_dev
RUN chmod +x /launch_vuesjs_dev
