import Vue from 'vue'
import Vuex from 'vuex'
// import RepositoryFactory from '../api/repositoryFactory'
// const ProductsRepository = RepositoryFactory.get('products')

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        customer: {
            login: false,
            access_token: "",
            name: "",
            id: "",
            confirm: false,
            user: [],
        }
        
    }
    // products: fetch
})
