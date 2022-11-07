import ActorModel from "@/models/ActorModel";

class MovieModel{
    constructor(movie_array) {
        this.id = movie_array.id;
        this.title = movie_array.title;
        this.description = movie_array.description;
        this.actors = movie_array.actors.map(actor => new ActorModel(actor));
    }
    getActors(){
        return this.actors;
    }
    getTitle(){
        return this.title;
    }
}

export default MovieModel;
