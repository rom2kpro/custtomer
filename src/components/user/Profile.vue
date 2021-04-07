<template>
    <div class="about-text go-to" v-if="isLoading">
        <router-link 
            tag="a"
            class="btn btn-sm btn-outline-primary pull-right"
            to="/user/edit"
        >Edit Profile</router-link>
        <!-- <a class="btn btn-sm btn-outline-primary pull-right" href="#">Edit Profile</a> -->
        <h3 class="dark-color">About Me</h3>
        <div class="row about-list">
            <div class="col-md-6">
                <div class="media">
                    <label>Name</label>
                    <p>{{user.customer_name}}</p>
                </div>
                <div class="media">
                    <label>Phone</label>
                    <p>{{user.customer_phone}}</p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="media">
                    <label>Address</label>
                    <p>{{user.customer_address}}</p>
                </div>
                <div class="media">
                    <label>E-mail</label>
                    <p>{{user.customer_email}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import RepositoryFactory from '../../api/repositoryFactory'
const CustomerRepository = RepositoryFactory.get('customer')
export default {
    data() {
        return {
            isLoading: false,
            user: null
        }
    },
    mounted() {
        this.fetch()
    },
    methods: {
        async fetch() {
            const { data } = await CustomerRepository.getProfile(this.$store.state.customer.access_token);
            this.user = data.user
            this.$store.state.customer.user = this.user
            this.isLoading = true
        }
    },
}
</script>

<style scoped>
    .about-text{
        background: white;
        padding: 20px;
        border-radius: 15px;
    }
    .about-text h3 {
        font-size: 45px;
        font-weight: 700;
        margin: 0 0 6px;
    }
    @media (max-width: 767px) {
        .about-text h3 {
            font-size: 35px;
        }
    }
    .about-text h6 {
        font-weight: 600;
        margin-bottom: 15px;
    }
    @media (max-width: 767px) {
        .about-text h6 {
            font-size: 18px;
        }
    }
    .about-text p {
        font-size: 18px;
        max-width: 450px;
    }
    .about-text p mark {
        font-weight: 600;
        color: #20247b;
    }

    .about-list {
        padding-top: 10px;
    }
    .about-list .media {
        padding: 5px 0;
    }
    .about-list label {
        color: #20247b;
        font-weight: 600;
        width: 88px;
        margin: 0;
        position: relative;
    }
    .about-list label:after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        right: 11px;
        width: 1px;
        height: 12px;
        background: #20247b;
        -moz-transform: rotate(15deg);
        -o-transform: rotate(15deg);
        -ms-transform: rotate(15deg);
        -webkit-transform: rotate(15deg);
        transform: rotate(15deg);
        margin: auto;
        opacity: 0.5;
    }
    .about-list p {
        margin: 0;
        font-size: 15px;
    }
</style>