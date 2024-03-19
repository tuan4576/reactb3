import {axiosInstance} from "./axiosInstance";
export const productApi = {
    getAll(params) {
        var url = '/products';
        return axiosInstance.get(url, { params })
    },
    get(id) {
        var url = `/product/${id}`;
        return axiosInstance.get(url)
    },
    add(data) {
        var url = `/product`
        return axiosInstance.post(url, data)
    },
    update(id, data) {
        var url = `/product/${id}`
        return axiosInstance.put(url, data)
    },
    del(id) {
        var url = `/product/${id}`
        return axiosInstance.delete(url)
    }
}