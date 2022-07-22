import API from "./api";
import axios from 'axios';

export default {
    async all() {
        // return API.post(endPoint);
        return await axios.get(`https://fakestoreapi.com/products`);

    },
    getByProductId(endPoint, payload = null) {
        if (payload) {
            return API.get(endPoint, {
                params: {
                    id: payload
                }
            });
        }
        return API.get(endPoint)
    },
    postProductFile(endPoint, payload) {
        return API.post(endPoint, payload)
    },
    addProduct(endPoint, payload) {
        return API.post(endPoint, payload)
    }
}