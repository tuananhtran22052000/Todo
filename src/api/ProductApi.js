import AxiosClient from "./AxiosClient";

const ProductApi =  {
    getAll: ( params ) =>{
        const url = '/products';
        return AxiosClient.get(url, { params });
    },
    get: ( id ) =>{
        const url = `/products/${id}`;
        return AxiosClient.get(url);
    }
}
export default ProductApi