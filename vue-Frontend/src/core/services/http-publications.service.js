import axios from "axios"

export class PublicationsService {
    getInfo() {
        return axios.get("http://localhost:3000/api/publications");
    }
}