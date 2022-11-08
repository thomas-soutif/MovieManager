import axios from 'axios';
import HOST from "../../services.config";

class ReviewService{
    constructor(limit) {
        self.url = HOST + 'api/reviews';
        self.limit = limit;
    }

    postGradeForMovie(movie_id, grade) {
        return new Promise(async (resolve, reject) => {
            if(movie_id === undefined || grade === undefined) {
                reject("Invalid arguments");
            }
            try {
                const res = await axios.post(self.url +"/", {
                    movie: movie_id,
                    grade: grade
                });
                resolve(res.data)
            }catch (err){
                reject(err)
            }
        });

    }
}

export default ReviewService