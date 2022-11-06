import axios from 'axios';
import HOST from "../../services.config";
const url = HOST + 'api/reviews';

class ReviewService{

    static getAllReviews(){

        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url)
                resolve(res.data)
            }catch (err){
                reject(err)
            }
        });
    }

}

export default ReviewService