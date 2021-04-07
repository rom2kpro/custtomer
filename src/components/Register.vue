<template>
    <div class="container h-100">
        <div class="row h-100">
            <div class="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
                <div class="d-table-cell align-middle">

                    <div class="text-center mt-4 mb-4">
                        <h1 class="h2">Đăng ký</h1>
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
                                        <input class="form-control form-control-lg" type="email" v-model="email" placeholder="Enter your email">
                                    </div>
                                    <div class="form-group">
                                        <label>Password</label>
                                        <input class="form-control form-control-lg" type="password" v-model="password" placeholder="Enter your password">
                                    </div>
                                    <div class="form-group">
                                        <label>Confirm Password</label>
                                        <input class="form-control form-control-lg" type="password" name="password" placeholder="Enter confirm your password">
                                    </div>
                                    <div class="text-center mt-3">
                                        <button class="btn btn-lg btn-primary" type="button" @click="Register">Sign up</button>
                                        <!-- <button type="submit" class="btn btn-lg btn-primary">Sign in</button> -->
                                    </div>
                                    <div class="text-center mt-2">
                                            Đã có tài khoản 
                                            <router-link 
                                                tag="a"
                                                to="/login"
                                            >Đăng nhập</router-link>
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
            email: "",
            password: ""
        }
    },
    methods: {
        Register() {
            CustomerRepository.register({
                customer_email: this.email,
                customer_password: this.password,
                url_confirm: "localhost:8080/confirm" 
            }).then(response => {
                console.log(response)
                // event.preventDefault();  
            })
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