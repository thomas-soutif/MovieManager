# MovieManager

A Fullstack application write with Django and VueJs, that allow to add reviews on movies.

## Installation

The application is divided into 3 containers : 
- API (a Django server)
- Database (postgres)
- Website Production (Vuejs)

### Docker-compose
```bash
docker-compose up --build
```
## Usage

The website by default will be available at `localhost:8080/`

The API is consume by the website, you can access it by default at `localhost:8005`

## Framework uses 

`Django`, `Django Rest Framework` , `Vue`, `Vue router`, `Vuex`, `Vuetify`

## Development tools

### Run the vuejs dev server

A makefile is available to help you building your vuejs server development.

```bash
make vuejs-dev
```
