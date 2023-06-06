import axios from "axios";
export const ProductService = {
    async getProductsData() {
        try {
            const response = await axios.get("http://localhost:3000/api/videogames");
            return response.data;
        } catch (error) {
            console.error("Error al obtener los datos de los entrenadores:", error);
            return [];
        }
    },
    async getProductsMini() {
        return Promise.resolve(await this.getProductsData().slice(0, 5));
    },

    async getProductsSmall() {
        return Promise.resolve(await this.getProductsData().slice(0, 10));
    },

    async getProducts() {
        return Promise.resolve(await this.getProductsData());
    },

    async getProductsWithOrdersSmall() {
        return Promise.resolve(await this.getProductsWithOrdersData().slice(0, 10));
    },

    async getProductsWithOrders() {
        return Promise.resolve(this.getProductsWithOrdersData());
    }


};

