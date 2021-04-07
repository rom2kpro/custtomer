import Repository from './repository'

const resource = "cart";

export default {
    addToCart(payload, token) {
        return Repository.post(`${resource}/create`, payload, {
            headers:{
                "x-access-token": token
            }
        });
    },
    getCart(token){
        return Repository.get(`${resource}`, {
            headers:{
                "x-access-token": token
            }
        });
    },
    getTotalPrice(token){
        return Repository.get(`${resource}/total`, {
            headers:{
                "x-access-token": token
            }
        });
    },
    editCart(payload, token) {
        return Repository.post(`${resource}/edit`, payload, {
            headers: {
                "x-access-token": token
            }
        })
    },
    deleteCart(product_id, token){
        return Repository.post(`${resource}/delete`, {product_id: product_id}, {
            headers: {
                "x-access-token": token
            }
        })
    },
    buy(token) {
        return Repository.post('/customer/buy', {}, {
            headers: {
                "x-access-token": token
            }
        })
    }
}