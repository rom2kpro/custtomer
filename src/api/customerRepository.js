import Repository from './repository'

const resource = "";

export default {
    login(payload) {
        return Repository.post(`${resource}/login`, payload);
    },
    getProfile(token) {
        return Repository.get(`${resource}/profile`, {
            headers:{
                "x-access-token": token
            }
        });
    },
    update(payload ,token){
        return Repository.post(`${resource}/profile/edit`, payload, {
            headers:{
                "x-access-token": token
            }
        })
    },
    logOut(token) {
        return Repository.get('/logout', {
            headers: {
                "x-access-token": token
            }
        })
    },
    register(payload) {
        return Repository.post('/register', payload)
    },
    confirm(payload, token) {
        return Repository.post('/custormer/verify', payload, {
            headers: {
                "x-access-token": token
            }
        })
    },
    order(token){
        return Repository.get('/bill/all', {
            headers: {
                "x-access-token": token
            }
        })
    }
}