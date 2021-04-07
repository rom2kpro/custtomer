
import Home from './components/Home'
import Detail from './components/Detail'
import Cart from './components/Cart'
import User from './components/user/User'
import Profile from './components/user/Profile'
import Order from './components/user/Order'
import Login from './components/Login'
import Register from './components/Register'
import Edit from './components/user/Edit'
import Confirm from './components/Confirm'

const makeRoutes = (store) => {
    const routes = [
        {path: '/', name: 'homepage', component: Home},
        {path: '/detail/:id', name: 'deltailpage', component: Detail},
        {path: '/cart', name: 'cartpage', component: Cart, beforeEnter: (to, from, next) => {
            if(store.state.customer.login){
                if(!store.state.customer.confirm){
                    next({path: '/confirm'})
                }
                next()
            }else next({path: '/login'})
        }
        },
        {path: '/user', name: 'userpage', component: User, beforeEnter: (to, from, next) => {
            if(store.state.customer.login){
                if(!store.state.customer.confirm){
                    next({path: '/confirm'})
                } 
                next()
            }else next({path: '/login'})
        }, children: [ 
            { path: '', name: 'profile', component: Profile },
            { path: 'order', name: 'userorder', component: Order },
            { path: 'edit', name: 'editprofile', component:Edit}
        ]},
        {path: '/login', name:'loginpage', component: Login},
        {path: '/register', name:'registerpage', component: Register},
        {path: '/confirm', name: 'confirmpage', component: Confirm},
    ]
    return routes
}

export default makeRoutes
