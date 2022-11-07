import axios from 'axios';
import HOST from "../../services.config";

class MoviesService {
    constructor(limit) {
        self.url = HOST + 'api/movies';
        self.limit = limit;
    }
    getAllMovies(offset){
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(self.url + "?limit=" + self.limit + "&offset=" + offset);

                resolve(res.data.results)
            }catch (err){
                reject(err)
            }
        });
    }

}

export default MoviesService