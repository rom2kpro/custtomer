<template>
    <div class="container pb-5 mt-n2 mt-md-n3 mt-5">
        <div class="row" style="background: white;" v-if="isLoading">
            <div class="col-xl-9 col-md-8">
                <h2 class="h6 d-flex flex-wrap justify-content-between align-items-center px-4 py-3"><span>Products</span>
                <router-link 
                    tag="a"
                    class="font-size-sm"
                    to="/"
                ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left" style="width: 1rem; height: 1rem;"><polyline points="15 18 9 12 15 6"></polyline></svg>Continue shopping</router-link></h2>
                <!-- Item-->
                <div class="d-sm-flex justify-content-between my-4 pb-4 border-bottom" v-for="cart in carts" :key="cart.product_id">
                    <div class="media d-block d-sm-flex text-sm-left">
                        <a class="cart-item-thumb mx-auto mr-sm-4" href="#"><img :src="'data:image/png;base64,' + cart.product_thumbnail.image_base64"></a>
                        <div class="media-body pt-3 ml-5">
                            <h3 class="product-card-title font-weight-semibold border-0 pb-0"><a href="#">{{cart.product_name}}</a></h3>
                            <div class="font-size-lg text-primary pt-2">{{parseInt(cart.product_price).toLocaleString('vi', {style : 'currency', currency : 'VND'})}}</div>
                        </div>
                    </div>
                    <div class="pt-2 pt-sm-0 pl-sm-3 mx-auto mx-sm-0 text-center text-sm-left" style="max-width: 10rem;">
                        <div class="form-group mb-2">
                            <label for="quantity1">Quantity</label>
                            <input class="form-control form-control-sm" type="number" id="quantity1" v-model="cart.quantity">
                        </div>
                        <button class="btn btn-outline-secondary btn-sm btn-block mb-2" type="button" @click="editCart(cart.product_id)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-refresh-cw mr-1">
                                <polyline points="23 4 23 10 17 10"></polyline>
                                <polyline points="1 20 1 14 7 14"></polyline>
                                <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                            </svg>Update cart</button>
                        <button class="btn btn-outline-danger btn-sm btn-block mb-2" type="button" @click="deleteCart(cart.product_id)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2 mr-1">
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                <line x1="14" y1="11" x2="14" y2="17"></line>
                            </svg>Remove</button>
                    </div>
                </div>
            </div>
            <!-- Sidebar-->
            <div class="col-xl-3 col-md-4 pt-3 pt-md-0 mt-3 mb-4">
                <!-- <h2 class="h6 px-4 py-3 bg-info text-center">Total</h2>
                <div class="h3 font-weight-semibold text-center py-3">${{total}}</div> -->
                <!-- <hr> -->
                <div class="font-weight-semibold">Name: {{user.customer_name}}</div>
                <div class="font-weight-semibold">Phone: {{user.customer_phone}}</div>
                <div class="font-weight-semibold">Address: {{user.customer_address}}</div>
                <hr>
                <h3 class="h6 pt-4 font-weight-semibold"><span class="badge badge-success mr-2">Note</span>Additional comments</h3>
                <textarea class="form-control mb-3" id="order-comments" rows="5"></textarea>
                <h2 class="h6 px-4 py-3 bg-info text-center">Subtotal</h2>
                <div class="h3 font-weight-semibold text-center py-3">${{parseInt(total).toLocaleString('vi', {style : 'currency', currency : 'VND'})}}</div>
                <a class="btn btn-primary btn-block" href="#" @click="Buy">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-credit-card mr-2">
                        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                        <line x1="1" y1="10" x2="23" y2="10"></line>
                    </svg>Proceed to Checkout</a>
            </div>
        </div>
    </div>
</template>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>

<script>
import RepositoryFactory from '../api/repositoryFactory'
const CartRepository = RepositoryFactory.get('cart')
export default {
    data() {
        return {
            isLoading: false,
            carts: [],
            total: 0,
            store: this.$store,
            this: this,
            user: this.$store.state.customer.user
        }
    },
    mounted() {
        this.fetch()  
    },
    methods: {
        async fetch(){
            const { data } = await CartRepository.getCart(this.$store.state.customer.access_token);
            const total = await CartRepository.getTotalPrice(this.$store.state.customer.access_token);
            this.carts = data.cart;
            this.total = total.data.total;
            this.isLoading = true;
        },
        editCart(id) {
            var store = this.store;
            var ok = this.this
            this.carts.filter(function(n){
                if(n.product_id === id){
                    CartRepository.editCart({product_id: id, quantity: n.quantity}, store.state.customer.access_token).then(
                        response => {
                            CartRepository.getTotalPrice(store.state.customer.access_token).then(
                                response => {
                                    ok.total = response.data.total
                                }
                            )
                        }
                    )
                }
            })
        },
        deleteCart(id) {
            CartRepository.deleteCart(id, this.$store.state.customer.access_token).then(
                response => {
                    this.fetch()
                }
            )
        },
        Buy() {
            CartRepository.buy(this.$store.state.customer.access_token).then(
                response => {
                    console.log(response.data)
                }
            )
        }
    },
    
}
</script>

<style scoped>
    .cart-item-thumb {
        display: block;
        width: 10rem
    }

    .cart-item-thumb>img {
        display: block;
        width: 100%
    }

    .product-card-title>a {
        color: #222;
        text-decoration: none;
    }

    .font-weight-semibold {
        font-weight: 600 !important;
    }

    .product-card-title {
        display: block;
        margin-bottom: .75rem;
        padding-bottom: .875rem;
        border-bottom: 1px dashed #e2e2e2;
        font-size: 1rem;
        font-weight: normal;
    }

    .text-muted {
        color: #888 !important;
    }

    .bg-secondary {
        background-color: #f7f7f7 !important;
    }

    .accordion .accordion-heading {
        margin-bottom: 0;
        font-size: 1rem;
        font-weight: bold;
    }
    .font-weight-semibold {
        font-weight: 600 !important;
    }
</style>