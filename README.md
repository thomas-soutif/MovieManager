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

## Architecture

### Relations between the model api and the front code

When the website received data's from the DRF API, a cast is being effectued to custom model class in javascript.
```js
const res = await axios.get(/api/movie/ + id);
let movie_model = new MovieModel(res.data)
```
```js
class MovieModel{
  constructor(movie_struct){
    this.id = movie_struct.api;
    this.title = movie_struct.title;
    [...]
  }
}
```
This object is then use in all vuejs page, so be sure to update these model and use them, to keep a link between the api and your front code.
An alternative would be to use `interface` by using typescript, but this is not the case in this project.

