<template>
    <div>
        <!--头部公共  -->
        <mall-header></mall-header>
        <bread-crumb>
            <span>商品页</span>
        </bread-crumb>
        <div class="accessory-result-page accessory-page">
            <div class="container">
                <div class="filter-nav">
                    <span class="sortby">Sort by:</span>
                    <a href="javascript:void(0)" class="default cur">Default</a>
                    <a href="javascript:void(0)" class="price">Price
                        <svg class="icon icon-arrow-short">
                            <use xlink:href="#icon-arrow-short"></use>
                        </svg>
                    </a>
                    <a href="javascript:void(0)" class="filterby stopPop">Filter by</a>
                </div>
                <div class="accessory-result">
                    <!-- filter -->
                    <div class="filter stopPop" id="filter">
                        <dl class="filter-price">
                            <dt>Price:</dt>
                            <dd>
                                <a href="javascript:void(0)">All</a>
                            </dd>
                            <dd>
                                <a href="javascript:void(0)">0 - 100</a>
                            </dd>
                            <dd>
                                <a href="javascript:void(0)">100 - 500</a>
                            </dd>
                            <dd>
                                <a href="javascript:void(0)">500 - 1000</a>
                            </dd>
                            <dd>
                                <a href="javascript:void(0)">1000 - 2000</a>
                            </dd>
                        </dl>
                    </div>
                    <!-- search result accessories list -->
                    <div class="accessory-list-wrap">
                        <div class="accessory-list col-4">
                            <ul>
                                <li v-for="item in goodsList" :key="item" :data-id="item.productId">
                                    <div class="pic">
                                        <a href="#">
                                            <img :src="'/static/img/' + item.prodcutImg" alt=""> </a>
                                    </div>
                                    <div class="main">
                                        <div class="name">{{item.productName}}</div>
                                        <div class="price">{{item.prodcutPrice}}</div>
                                        <div class="btn-area">
                                            <a href="javascript:;" class="btn btn--m">加入购物车</a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <mall-Footer></mall-Footer>
    </div>
</template>

<script>
    import mallHeader from '@/components/Header'
    import mallFooter from '@/components/Footer'
    import breadCrumb from '@/components/breadCrumb'

    import axios from 'axios'

    export default {
        name: 'GoodList',
        data () {
            return {
                msg: 'aaa',
                goodsList: [],
            }
        },
        methods: {
            getGoodsList () {
                axios.get('/api/goods').then((json) => {
                    this.goodsList = json.data.result;
                })
            }
        },
        mounted () {
            this.getGoodsList();
        },
        components: {
            mallHeader,
            mallFooter,
            breadCrumb
        }
    }
</script>

<style>
    
</style>
