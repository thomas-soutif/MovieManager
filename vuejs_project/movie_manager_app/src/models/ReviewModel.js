import MovieModel from "@/models/MovieModel";


class ReviewModel{
    constructor(review_array) {
        // If review_array is null, ignore
        if (review_array == null) {
            return;
        }
        this.id = review_array.id;
        this.movie = new MovieModel(review_array.movie);
        this.grade = review_array.grade;
    }
}

export default ReviewModel;