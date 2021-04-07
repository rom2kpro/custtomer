import Repository from './repository'

const resource = "/product";

export default {
    get() {
        return Repository.get(`${resource}/all`);
    },
    getProduct(productId) {
        return Repository.get(`${resource}?product_id=${productId}`);
    },
    getProductByBrand(brand_id) {
        return Repository.get(`${resource}/all?brand_id=${brand_id}`)
    },
    getProductByPrice(low_price, high_price){
        return Repository.get(`${resource}/all?low_price=${low_price}&high_price=${high_price}`)
    },
    getProductByName(name) {
        return Repository.get(`${resource}/all?product_name=${name}`)   
    }
}