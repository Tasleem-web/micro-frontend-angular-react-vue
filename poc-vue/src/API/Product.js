import API from "./api";
// import axios from 'axios';

export default {
    all(endPoint) {
        return API.post(endPoint);
        // const res = await axios.get(`some-url/todos`);
        // console.log(res)
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