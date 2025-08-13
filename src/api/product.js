import api from "./api";

export const getProducts = async () => {
    try{
        const response = await api.get('/products');
        let data = await response.data.products
        return data;

    }catch(error){
        console.log(error.message);
    }
}