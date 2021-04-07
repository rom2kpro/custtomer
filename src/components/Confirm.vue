<template>
    <div class="container h-100">
        <div class="row h-100">
            <div class="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
                <div class="d-table-cell align-middle">
                    <div class="card mt-5">
                        <div class="card-body text-center">
                            <div class="m-sm-4">
                                <div class="text-center">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="Andrew Jones" class="img-fluid rounded-circle" width="132" height="132">
                                </div>
                                <div>{{ message }}</div>
                                <router-link 
                                    tag="button"
                                    to="/"
                                    class="btn btn-lg btn-primary mt-5"
                                >Return Home</router-link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
import RepositoryFactory from '../api/repositoryFactory'
const CustomerRepository = RepositoryFactory.get('customer')

export default {
    data() {
        return {
            token: this.$route.query.confirm,
            message: "",
        }
    },
    mounted() {
        this.confirm()
    },
    watch: {
        '$route'(to) {
            this.token = to.query.confirm
            this.confirm()
        }
    },
    methods: {
        confirm() {
            if(this.token) {
                if(!this.$store.state.customer.login) {
                    this.$router.push('/login')
                } else {
                    CustomerRepository.confirm({confirm_token: this.token}, this.$store.state.customer.access_token).then(
                        response => {
                            console.log(response)
                        }
                    )
                }
                this.message = "Tài khoản bạn đã được xác thực!"
            } else {
                this.message = "Tài khoản của bạn chưa được xác thực, vui lòng kiểm tra email và nhấp vào link để xác thực!"
            }
        }
    },
}
</script>
<style scoped>
    .card {
        margin-bottom: 1.5rem;
        box-shadow: 0 1px 15px 1px rgba(52,40,104,.08);
    }

    .card {
        position: relative;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-direction: column;
        flex-direction: column;
        min-width: 0;
        word-wrap: break-word;
        background-color: #fff;
        background-clip: border-box;
        border: 1px solid #e5e9f2;
        border-radius: .2rem;
    }
</style>