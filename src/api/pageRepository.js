import Repository from './repository'

const resource = "/product";

export default {
    getPage() {
        return Repository.get(`${resource}/all/count`);
    },

    getPageByProduct() {

    },

    getPageByPrice() {

    }
}