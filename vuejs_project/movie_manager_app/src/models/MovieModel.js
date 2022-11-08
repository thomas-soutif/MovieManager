import ActorModel from "@/models/ActorModel";

class MovieModel{
    constructor(movie_array) {
        if (movie_array == null) {
            return;
        }
        this.id = movie_array.id;
        this.title = movie_array.title;
        this.description = movie_array.description;
        this.actors = movie_array.actors.map(actor => new ActorModel(actor));
        this.averageGrade = movie_array.average_grade;
    }
    getActors(){
        return this.actors;
    }
    getTitle(){
        return this.title;
    }
    getAverageGrade(){
        return this.averageGrade;
    }
    getAllFullNameActors(){
        let finale_string= ""
        this.actors.forEach(actor => {
            finale_string += actor.getFullName() + ", "
        });
        return finale_string;
    }
}

export default MovieModel;
