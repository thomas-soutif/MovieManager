#!make
DOCKER_COMP_EXEC=$(which docker-compose)
NPM_EXEC=$(which npm)
vuejs-dev:
	$(NPM_EXEC) npm run serve --prefix ./vuejs_project/movie_manager_app/
