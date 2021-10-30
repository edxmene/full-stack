import httpClient from "./httpClient";

const END_POINT = "/api/products";

const getAllProducts = () => httpClient.get(END_POINT);
const createProducts = (product) => httpClient.post(END_POINT,product);
const getProduct = (code) => httpClient.get(END_POINT+"/"+code);
const editProduct = (code, product) => httpClient.put(END_POINT+"/"+code,product);
const deleteProduct = (code) => {
    httpClient.delete(END_POINT+"/"+code)
    console.log(`Producto con código ${code} eliminado`);
};


export {
    getAllProducts,
    createProducts,
    getProduct,
    editProduct,
    deleteProduct
}