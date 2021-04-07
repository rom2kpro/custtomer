import Repository from './repository'

const resource = "/comment";

export default {
    create(payload, token) {
        return Repository.post(`${resource}/create`, payload,{
            headers: {
                "x-access-token": token
            }
        });
    },
    get(product_id){
        return Repository.get(`${resource}/all?product_id=${product_id}`)
    }
}