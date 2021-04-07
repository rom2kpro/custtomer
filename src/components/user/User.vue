<template>
    <div class="container padding-bottom-3x mb-5 mt-5">
        <div class="row" >
            <div class="col-lg-4" >
                <aside class="user-info-wrapper">
                    <div class="user-cover" style="background-image: url(https://bootdey.com/img/Content/bg1.jpg);">
                        <div class="info-label" data-toggle="tooltip" title="" data-original-title="You currently have 290 Reward Points to spend"><i class="icon-medal"></i>290 points</div>
                    </div>
                    <div class="user-info">
                        <div class="user-avatar">
                            <a class="edit-avatar" href="#"></a><img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="User"></div>
                        <div class="user-data">
                            <h4>Daniel Adams</h4><span>Joined February 06, 2017</span>
                        </div>
                    </div>
                </aside>
                <ul class="list-group">
                    <router-link 
                        tag="a"
                        to="/user"
                        class="list-group-item list-group-item-action"
                        active-class="active"
                        exact
                    ><i class=" fa fa-user"></i>Profile</router-link>
                    <router-link 
                        tag="a"
                        to="/user/order"
                        class="list-group-item list-group-item-action width-badge"
                        active-class="active"
                    ><i class=" fa fa-th"></i>Order <span class="badge badge-primary badge-pill">6</span></router-link>
                    <a href="#" class="list-group-item list-group-item-action" @click="logOut"><i class="fa fa-sign-out"></i> Sign out</a>
                </ul>
            </div>
            <div class="col-lg-8">
                <transition name="fade" mode="out-in">
                    <router-view></router-view>
                </transition>
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
            
        }
    },
    methods: {
        logOut() {
            CustomerRepository.logOut(this.$store.state.customer.access_token).then(
                response => {
                    // console.log(response)
                    response
                    this.$store.state.customer = {} 
                    this.$router.push('/')
                }
            )
        }
    },
}
</script>

<style scoped>
    .user-info-wrapper {
        position: relative;
        width: 100%;
        margin-bottom: -1px;
        padding-top: 90px;
        padding-bottom: 30px;
        border: 1px solid #e1e7ec;
        border-top-left-radius: 7px;
        border-top-right-radius: 7px;
        overflow: hidden;
        background: white;
    }

    .user-info-wrapper .user-cover {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 120px;
        background-position: center;
        background-color: #f5f5f5;
        background-repeat: no-repeat;
        background-size: cover
    }

    .user-info-wrapper .user-cover .tooltip .tooltip-inner {
        width: 230px;
        max-width: 100%;
        padding: 10px 15px
    }

    .user-info-wrapper .info-label {
        display: block;
        position: absolute;
        top: 18px;
        right: 18px;
        height: 26px;
        padding: 0 12px;
        border-radius: 13px;
        background-color: #fff;
        color: #606975;
        font-size: 12px;
        line-height: 26px;
        box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.18);
        cursor: pointer
    }

    .user-info-wrapper .info-label>i {
        display: inline-block;
        margin-right: 3px;
        font-size: 1.2em;
        vertical-align: middle
    }

    .user-info-wrapper .user-info {
        display: table;
        position: relative;
        width: 100%;
        padding: 0 18px;
        z-index: 5
    }

    .user-info-wrapper .user-info .user-avatar,
    .user-info-wrapper .user-info .user-data {
        display: table-cell;
        vertical-align: top
    }

    .user-info-wrapper .user-info .user-avatar {
        position: relative;
        width: 115px
    }

    .user-info-wrapper .user-info .user-avatar>img {
        display: block;
        width: 100%;
        border: 5px solid #fff;
        border-radius: 50%
    }

    .user-info-wrapper .user-info .user-avatar .edit-avatar {
        display: block;
        position: absolute;
        top: -2px;
        right: 2px;
        width: 36px;
        height: 36px;
        transition: opacity .3s;
        border-radius: 50%;
        background-color: #fff;
        color: #606975;
        line-height: 34px;
        box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2);
        cursor: pointer;
        opacity: 0;
        text-align: center;
        text-decoration: none
    }

    .user-info-wrapper .user-info .user-avatar .edit-avatar::before {
        font-family: feather;
        font-size: 17px;
        content: '\e058'
    }

    .user-info-wrapper .user-info .user-avatar:hover .edit-avatar {
        opacity: 1
    }

    .user-info-wrapper .user-info .user-data {
        padding-top: 48px;
        padding-left: 12px
    }

    .user-info-wrapper .user-info .user-data h4 {
        margin-bottom: 2px
    }

    .user-info-wrapper .user-info .user-data span {
        display: block;
        color: #9da9b9;
        font-size: 13px
    }

    .user-info-wrapper+.list-group .list-group-item:first-child {
        border-radius: 0
    }

    .user-info-wrapper+.list-group .list-group-item:first-child {
        border-radius: 0;
    }
    .list-group-item:first-child {
        border-top-left-radius: 7px;
        border-top-right-radius: 7px;
    }
    .list-group-item:first-child {
        border-top-left-radius: .25rem;
        border-top-right-radius: .25rem;
    }
    a.list-group-item {
        padding-top: .87rem;
        padding-bottom: .87rem;
    }
    a.list-group-item, .list-group-item-action {
        transition: all .25s;
        color: #606975;
        font-weight: 500;
    }
    .list-group-item.active {
        background: #0d6efd;
        color: white;
    }
    .with-badge {
        position: relative;
        padding-right: 3.3rem;
    }
    .list-group-item {
        border-color: #e1e7ec;
        background-color: #fff;
        text-decoration: none;
    }
    .list-group-item {
        position: relative;
        display: block;
        padding: .75rem 1.25rem;
        margin-bottom: -1px;
        background-color: #fff;
        border: 1px solid rgba(0,0,0,0.125);
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