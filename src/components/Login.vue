<template>
    <div class="container h-100">
        <div class="row h-100">
            <div class="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
                <div class="d-table-cell align-middle">

                    <div class="text-center mt-4">
                        <h1 class="h2">Đăng nhập</h1>
                        <p class="lead">
                            Đăng nhập để tiếp tục
                        </p>
                    </div>

                    <div class="card">
                        <div class="card-body">
                            <div class="m-sm-4">
                                <div class="text-center">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="Andrew Jones" class="img-fluid rounded-circle" width="132" height="132">
                                </div>
                                <form>
                                    <div class="form-group">
                                        <label>Email</label>
                                        <input class="form-control form-control-lg" type="email"  placeholder="Enter your email" v-model="account.customer_email">
                                    </div>
                                    <div class="form-group">
                                        <label>Password</label>
                                        <input class="form-control form-control-lg" type="password" name="password" placeholder="Enter your password" v-model="account.customer_password">
                                        <small>
                                            <a href="pages-reset-password.html">Forgot password?</a>
                                        </small>
                                    </div>
                                    <div>
                                        <div class="custom-control custom-checkbox align-items-center">
                                            <input type="checkbox" class="custom-control-input" value="remember-me" name="remember-me" checked="">
                                            <label class="custom-control-label text-small">Remember me next time</label>
                                        </div>
                                    </div>
                                    <div class="text-center mt-3">
                                        <button class="btn btn-lg btn-primary" type="button" @click="Login">Sign in</button>
                                        <!-- <button type="submit" class="btn btn-lg btn-primary">Sign in</button> -->
                                    </div>
                                    <div class="text-center mt-2">
                                            Chưa có tài khoản 
                                            <router-link 
                                                tag="a"
                                                to="/register"
                                            >Đăng ký</router-link>
                                    </div>
                                </form>
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
            account:{
                customer_email: "",
                customer_password: "",
            },
        }
    },
    methods: {
        Login(){
            if(this.account.customer_username == ""){
                alert("Vui long nhap username");
            } else if (this.account.customer_password == "") {
                alert("Vui long nhap password");
            } else { 
                CustomerRepository.login(this.account).then(response => {
                    const { data } = response;
                    // console.log(data)
                    return data;
                }).then(data => {
                    if(!data.status){
                        if(data.confirm == false){
                            this.$store.state.customer.access_token = data.access_token;
                            this.$store.state.customer.login = true;
                            this.$store.state.customer.confirm = false;
                            this.$router.push({path: '/confirm'});
                        }
                    } else {
                        this.$store.state.customer.login = true;
                        this.$store.state.customer.access_token = data.access_token;
                        this.$store.state.customer.name = data.user.customer_name;
                        this.$store.state.customer.id = data.user.customer_id;
                        this.$store.state.customer.confirm = true;
                        this.$router.push({path: '/user'});
                    }
                })
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