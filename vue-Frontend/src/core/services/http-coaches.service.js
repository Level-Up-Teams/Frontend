import axios from "axios"

export class CoachesService2 {
    getAll() {
        return axios.get("http://localhost:3000/api/coaches");
    }
    addCoach(obj) {
        return axios.post("http://localhost:3000/api/coaches");
    }
    getById(id) {
        return axios.get(`http://localhost:3000/api/coaches/${id}`);
    }
}