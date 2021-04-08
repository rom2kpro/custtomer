<template>
    <section id="tabs">
        <div class="container">
            <h6 class="section-title h1">SHOP HKT</h6>
            <div class="row">
                <div class="col-xs-12 ">
                    <nav>
                        <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                            <router-link 
                                tag="a"
                                class="nav-item nav-link"
                                to="/"
                                active-class="active"
                                exact
                            >Home</router-link>
                            <router-link 
                                tag="a"
                                class="nav-item nav-link"
                                to="/user"
                                active-class="active"
                            >Profile</router-link>
                            <router-link 
                                tag="a"
                                class="nav-item nav-link"
                                to="/Cart"
                                active-class="active"
                            >Cart</router-link>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    /* Tabs*/
    section {
        padding: 60px 0;
    }

    section .section-title {
        text-align: center;
        color: #007b5e;
        margin-bottom: 50px;
        text-transform: uppercase;
    }
    #tabs{
        background: #007b5e;
        color: #eee;
    }
    #tabs h6.section-title{
        color: #eee;
    }

    #tabs .nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {
        color: #f3f3f3;
        background-color: transparent;
        border-color: transparent transparent #f3f3f3;
        border-bottom: 4px solid !important;
        font-size: 20px;
        font-weight: bold;
    }
    #tabs .nav-tabs .nav-link {
        border: 1px solid transparent;
        border-top-left-radius: .25rem;
        border-top-right-radius: .25rem;
        color: #eee;
        font-size: 20px;
    }
</style>
