import axios from "axios";
export const CoachesService = {
    async getCoachesData() {
        try {
            const response = await axios.get("http://localhost:3000/api/coaches");
            return response.data;
        } catch (error) {
            console.error("Error al obtener los datos de los entrenadores:", error);
            return [];
        }
    },

    async getCoachesMini() {
        const coachesData = await this.getCoachesData();
        return coachesData.slice(0, 2);
    },

    async getCoachesSmall() {
        const coachesData = await this.getCoachesData();
        return coachesData.slice(0, 8);
    },

    async getCoaches() {
        const coachesData = await this.getCoachesData();
        return coachesData;
    },
};