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
                    <a href="javascript:void(0)" class="filterby stopPop" @click="showFilterPop()">Filter by</a>
                </div>
                <div class="accessory-result">
                    <!-- filter -->
                    <div class="filter stopPop" id="filter" :class="{'filterby-show':filterBy}">
                        <dl class="filter-price">
                            <dt>Price:</dt>
                            <dd>
                                <a href="javascript:void(0)" :class="{'cur':priceChecked=='all'}" @click="setPriceFilter('all')">All</a>
                            </dd>
                            <dd v-for="(price,index) in priceFilter" :key="index">
                                <a href="javascript:void(0)" @click="setPriceFilter(index)" :class="{'cur':priceChecked==index}"> {{price.startPrice}} - {{price.endPrice}}</a>
                            </dd>
                        </dl>
                    </div>
                    <!-- search result accessories list -->
                    <div class="accessory-list-wrap">
                        <div class="accessory-list col-4">
                            <ul>
                                <li v-for="(item,index) in goodsList" :data-id="item.productId" :key="index">
                                    <div class="pic">
                                        <a href="#"> <img v-lazy="'/static/img/' + item.prodcutImg" alt=""> </a>
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
        <div class="md-overlay" v-show="overLayFlag" @click="closeFilterPop"></div>
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
                goodsList: [],
                priceFilter: [
                    {
                        startPrice: '0.00',
                        endPrice: '500.00'
                    },
                    {
                        startPrice: '500.00',
                        endPrice: '1000.00'
                    },
                    {
                        startPrice: '1000.00',
                        endPrice: '2000.00'
                    }
                ],
                priceChecked: 'all',
                filterBy: false,
                overLayFlag: false
            }
        },
        methods: {
            getGoodsList () {
                axios.get('/api/goods').then((json) => {
                    this.goodsList = json.data.result
                })
            },
            showFilterPop () {
                this.filterBy = true
                this.overLayFlag = true
            },
            closeFilterPop () {
                this.filterBy = false
                this.overLayFlag = false
            },
            setPriceFilter (index) {
                this.priceChecked = index
                this.filterBy = false
                this.overLayFlag = false
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
