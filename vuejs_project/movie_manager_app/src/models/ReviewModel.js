import MovieModel from "@/models/MovieModel";


class ReviewModel{
    constructor(review_array) {
        this.id = review_array.id;
        this.movie = new MovieModel(review_array.movie);
    }
}

export default ReviewModel;