import axios from "axios";

export class HttpVideogamesService {
    getAllVideoGames() {
        return axios.get('http://localhost:3000/videogames');
    }

    getVideoGameById(id){
        return axios.get(`http://localhost:3000/videogames/${id}`);
    }
}