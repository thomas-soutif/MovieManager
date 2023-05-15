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
```
### API error handler 

I implemented a custom errors handler for the front to display errors from the API.
A dispatcher is call first to return the abstract `ApiErrorHander` object, that have many children that can inherit from it.

```js
// Get a list of ApiErrorHanler object
let custom_errors = new ApiErrorDispatcher(err.response.status,err.response);
```

For example, when patching a review , a list of `Api400Handler` objects are return if a badrequest error occured.

I implemented also a store dispatcher for the errors , that will help propagate the error into sub component. An implementation have been make
when adding a review. 
For exemple, when you're adding a review, if a bad request error occur from the API :

```js
.catch((custom_errors) => {
    // custom_errors : ApiErrorHandler[]
    custom_errors.forEach((custom_error) => {
      // We're going to dispatch the error (that is an ApiErrorHandler object) to the store, that will be used by the component in charge of displaying the error
      this.$store.dispatch('showError', custom_error)
    })
 ```
 
As you can see, the bad request error (the class `Api400Handler`) is not propagate directly with his class, but by his abstract class that it herits. (the `ApiErrorHandler`) 
That mean you can dispatch to the store your own custom error class !

Now, always with our exemple of adding a review, let's see how a component listen the store to know what error to display

The component `AddAReview` listen to the store to display a bunch of erros related to the "grade" field, and the erros are
propagated from the `MovieView` view by passing to the store.

```html
<div v-for="error in $store.getters.getBadRequestErrors('grade')">
      <v-alert type="error" border="left" elevation="10" color="red" dismissible>
        {{ error.getErrorMessage() }}
      </v-alert>
</div>
```

The method `getBadRequestErrors` has been custom in the store to be able to find in the list of error (always in the store), those who are BadRequest type (that mean a class of `Api400Handler`).
There is here a part of the code of this function if you want to understand more how it works (you would like to extend this architectur and add your own custom function !)

```js
const find_errors = state.errors_api_handler.filter(error => error.isBadRequest()).[...]
```
We filter only on the objects that are BadRequest(). Remember that here , an "error" is an abstract `ApiErrorHanler`
Let's see a part of our `Api400Handler` and `ApiErrorHandler` class

```js
class Api400Handler extends ApiErrorHandler {
  constructor(response, attributeName, errorMessage) {
    super(400,response);
    [...]
  }
}

class ApiErrorHandler {
  constructor(code,response) {
    this.code = code;
    this.response = response;
  }
  isBadRequest() {
    return this.code === 400;
  }
}
```

And this is how we can filter with the method isBadRequest(), keep that implementation in mind, and I hope it will help you finding new ways of expending it for your own use! 

It took me quite a while and some rewriting before deciding to keep all these architectur, they can be improved for sure, but I'm quite proud of being able to propose you my own version and with a documentation !

