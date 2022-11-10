# MovieManager

MovieManager is an application writen in Django and VueJs, allowing users to do movie reviews.

## Installation

The application is divided into 3 containers : 
- API (Django server)
- Database (postgres)
- Website Production (Vuejs)

### Docker-compose
```bash
docker-compose up -d --build
```
## Usage

The website by default will be available at `localhost:8080/`

The API is consumed by the website, you can access it by default at `localhost:8005`

### API endpoint
To change the host of the API in your website, changed the `HOST` value in `movie_manager_app/services.config.js`
```js
let HOST = "http://localhost:8005/"
```

## Framework uses 

`Django`, `Django Rest Framework` , `Vue`, `Vue router`, `Vuex`, `Vuetify`

## Development tools

### Run the vuejs dev server

A makefile is available to help you building your vuejs server development.

```bash
make vuejs-dev
```

### Dump of the database

When the postgresql container starts, a migration will be done automatically to apply the dump located in `db/dump_db.sql`

## Architecture

### Relations between model API and front code

When the website received datas from the DRF API, a cast is made to a custom model class in javascript.
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
This object is then used in all vuejs page, so be sure to update these models and to use them, to keep a link between the API and your front code.
An alternative would be to use `interface` by using Typescript, but this is not the case in this project.

An advantage by using theses custom models is the possibility to create getters and setters to reduce code duplications and help maintening good code :
```js
let movie_model = new MovieModel(res.data)
let names_of_actors = movie_model.getAllFullNameActors()
console.log(names_of_actors) 
// Charlie Chaplin, Tom Hanks
```

### Services for consume the API

I also created a service architecture, that will help you maintaining and adding new API easily.
```js
let movie_service = new MovieService();
movie_service.getMovie(id).then(movie_model => {
  // the movie_model is a MovieModel object
  });
```
```js
class MoviesService {
  constructor(limit) {
          self.url = HOST + 'api/movies';
          self.limit = limit;
      }
  getMovie(id){
    [...]
  }
}
