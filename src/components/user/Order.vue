<template>
    <div>
        <div class="padding-top-2x mt-2 hidden-lg-up"></div>
        <div class="table-responsive wishlist-table margin-bottom-none" v-for="order in orders" :key="order.bill_id">
            <table class="table" style="background: white; border-radius: 15px; over-flow:hidden;">
                <thead>
                    <tr>
                        <th>Bill: {{order.bill_id}}</th>
                        <th>
                            <div>Day : {{order.time_create}}</div>
                            <div>Total : {{parseInt(order.total).toLocaleString('vi', {style : 'currency', currency : 'VND'})}}</div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in order.products" :key="product.product_id">
                        <td>
                            <div class="product-item" >
                                <router-link 
                                    tag="a"
                                    class="product-thumb" 
                                    :to="'/detail/' + product.product_id"
                                ><img :src="'data:image/png;base64,' + product.product_thumbnail.image_base64" alt="Product"></router-link>
                                <div class="product-info">
                                    <h4 class="product-title"><router-link 
                                    tag="a"
                                    class="product-thumb" 
                                    :to="'/detail/' + product.product_id"
                                >{{product.product_name}}</router-link></h4>
                                    <div class="text-lg text-medium text-muted">{{parseInt(product.product_price).toLocaleString('vi', {style : 'currency', currency : 'VND'})}}</div>
                                    <div>Quantity:
                                        <div class="d-inline">{{product.quantity}}</div>
                                    </div>
                                    <div>Status:
                                        <div class="d-inline text-success">In Stock</div>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td class="text-center"><a class="remove-from-cart" href="#" data-toggle="tooltip" title="" data-original-title="Remove item"><i class="icon-cross"></i></a></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <hr class="mb-4">
    </div>
</template>

<script>
import RepositoryFactory from '../../api/repositoryFactory'
const CustomerRepository = RepositoryFactory.get('customer')

export default {
    data() {
        return {
            orders: []
        }
    },
    mounted() {
        this.fetch()
    },
    methods: {
        async fetch() {
            const {data} = await CustomerRepository.order(this.$store.state.customer.access_token)
            this.orders = data.bills
        }
    },
}
</script>

<style scoped>
    .shopping-cart,
    .wishlist-table,
    .order-table {
        margin-bottom: 20px
    }

    .shopping-cart .table,
    .wishlist-table .table,
    .order-table .table {
        margin-bottom: 0
    }

    .shopping-cart .btn,
    .wishlist-table .btn,
    .order-table .btn {
        margin: 0
    }

    .shopping-cart>table>thead>tr>th,
    .shopping-cart>table>thead>tr>td,
    .shopping-cart>table>tbody>tr>th,
    .shopping-cart>table>tbody>tr>td,
    .wishlist-table>table>thead>tr>th,
    .wishlist-table>table>thead>tr>td,
    .wishlist-table>table>tbody>tr>th,
    .wishlist-table>table>tbody>tr>td,
    .order-table>table>thead>tr>th,
    .order-table>table>thead>tr>td,
    .order-table>table>tbody>tr>th,
    .order-table>table>tbody>tr>td {
        vertical-align: middle !important
    }

    .shopping-cart>table thead th,
    .wishlist-table>table thead th,
    .order-table>table thead th {
        padding-top: 17px;
        padding-bottom: 17px;
        border-width: 1px
    }

    .shopping-cart .remove-from-cart,
    .wishlist-table .remove-from-cart,
    .order-table .remove-from-cart {
        display: inline-block;
        color: #ff5252;
        font-size: 18px;
        line-height: 1;
        text-decoration: none
    }

    .shopping-cart .count-input,
    .wishlist-table .count-input,
    .order-table .count-input {
        display: inline-block;
        width: 100%;
        width: 86px
    }

    .shopping-cart .product-item,
    .wishlist-table .product-item,
    .order-table .product-item {
        display: table;
        width: 100%;
        min-width: 150px;
        margin-top: 5px;
        margin-bottom: 3px
    }

    .shopping-cart .product-item .product-thumb,
    .shopping-cart .product-item .product-info,
    .wishlist-table .product-item .product-thumb,
    .wishlist-table .product-item .product-info,
    .order-table .product-item .product-thumb,
    .order-table .product-item .product-info {
        display: table-cell;
        vertical-align: top
    }

    .shopping-cart .product-item .product-thumb,
    .wishlist-table .product-item .product-thumb,
    .order-table .product-item .product-thumb {
        width: 130px;
        padding-right: 20px
    }

    .shopping-cart .product-item .product-thumb>img,
    .wishlist-table .product-item .product-thumb>img,
    .order-table .product-item .product-thumb>img {
        display: block;
        width: 100%
    }

    @media screen and (max-width: 860px) {
        .shopping-cart .product-item .product-thumb,
        .wishlist-table .product-item .product-thumb,
        .order-table .product-item .product-thumb {
            display: none
        }
    }

    .shopping-cart .product-item .product-info span,
    .wishlist-table .product-item .product-info span,
    .order-table .product-item .product-info span {
        display: block;
        font-size: 13px
    }

    .shopping-cart .product-item .product-info span>em,
    .wishlist-table .product-item .product-info span>em,
    .order-table .product-item .product-info span>em {
        font-weight: 500;
        font-style: normal
    }

    .shopping-cart .product-item .product-title,
    .wishlist-table .product-item .product-title,
    .order-table .product-item .product-title {
        margin-bottom: 6px;
        padding-top: 5px;
        font-size: 16px;
        font-weight: 500
    }

    .shopping-cart .product-item .product-title>a,
    .wishlist-table .product-item .product-title>a,
    .order-table .product-item .product-title>a {
        transition: color .3s;
        color: #374250;
        line-height: 1.5;
        text-decoration: none
    }

    .shopping-cart .product-item .product-title>a:hover,
    .wishlist-table .product-item .product-title>a:hover,
    .order-table .product-item .product-title>a:hover {
        color: #0da9ef
    }

    .shopping-cart .product-item .product-title small,
    .wishlist-table .product-item .product-title small,
    .order-table .product-item .product-title small {
        display: inline;
        margin-left: 6px;
        font-weight: 500
    }

    .wishlist-table .product-item .product-thumb {
        display: table-cell !important
    }

    @media screen and (max-width: 576px) {
        .wishlist-table .product-item .product-thumb {
            display: none !important
        }
    }

    .badge.badge-primary {
        background-color: #0da9ef;
    }
    .with-badge .badge {
        position: absolute;
        top: 50%;
        right: 1.15rem;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
    }
    .list-group-item i {
        margin-top: -4px;
        margin-right: 8px;
        font-size: 1.1em;
    }
</style>
