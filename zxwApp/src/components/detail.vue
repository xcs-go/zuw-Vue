<template>
  <div class="detail">
    <v-header :headData = "headData" :cart-login="cartLogin"></v-header>
    <div class="detailContent" v-if="detaileData.goodsName">
      <mt-swipe :auto="4000">
        <mt-swipe-item><img :src="detaileData.goodsListImg" alt=""></mt-swipe-item>
        <mt-swipe-item><img :src="detaileData.goodsListImg" alt=""></mt-swipe-item>
        <mt-swipe-item><img :src="detaileData.goodsListImg" alt=""></mt-swipe-item>
      </mt-swipe>
      <div class="show-detail">
        <p class="shopName" v-text="detaileData.goodsName"></p>
        <p class="price">
          <span class="sell-price">￥{{detaileData.price}}</span>
          <del class="ori-price" v-text="(isFinite(detaileData.price / (detaileData.discount)))?(detaileData.price / (detaileData.discount)).toFixed(2):detaileData.price"></del>
        </p>
        <p class="buy-number">购买人数：{{detaileData.buynumber}}</p>
        <p class="showDetaile"><a :href="'/singleShopDetaile' + goodsID">查看商品详情 <span> > </span></a></p>
        <p class="addToCart">
          <button class="cart" @click="addToCart">添加到购物车</button>
        </p>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from './common/header.vue'
  import {MessageBox} from 'mint-ui'
  let username = window.localStorage.getItem('username')
  export default {
    name: 'detail',
    data () {
      return {
        headData: {
          back: '<',
          title: '商品详情',
          rightBtn: ''
        }
      }
    },
    methods: {
      addToCart () {
        // 判断用户是否已经登录
        if (username) {
          let param = {
            username: username,
            goodsID: this.detaileData.goodsID,
            number: 1
          }
          // 派发一个更新购物车的action
          this.$store.dispatch('addShopNumber', param)
        } else {
          MessageBox({
            title: '提示',
            message: '请先登录',
            showCancelButton: true
          })
        }
      },
      cartLogin () {
        // 判断当前用户是否已经登录
        if (username) {
          // 跳转到购物车界面
        } else {
          // 跳转到登录页面
        }
      }
    },
    computed: {
      detaileData () {
        console.log(this.$store.getters.detaile[0])
        return this.$store.getters.detaile[0]
      }
    },
    created () {
      // 取出当前用户的localStorage
      if (username) {
        this.headData.rightBtn = '购物车'
      } else {
        this.headData.rightBtn = '登录/注册'
      }
      // 清除上一次的数据
      this.$store.getters.detaile[0] = {}
      // 当页面被创建时,派发一个action请求需要加载的商品的详情
      this.$store.dispatch('getDetaileDataAction', this.$route.params)
    },
    components: {
      'v-header': header
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" type="text/scss" scoped>
  @import "../../static/style/index.scss";
  .detail{
    @include w(100%);
    .detailContent{
      @include mt(1rem);
      @include w(100%);
      @include h(4rem);
      .mint-swipe-item{
        img{
          @include w(100%);
          @include h(4rem);
        }
      }
      .mint-swipe-indicator{
      background:#969696;
    }
      .show-detail{
        background-color:$detailBg;
        p{
          color:$detailColor;
          @include fs(0.3rem);
          @include pt(0.25rem);
          @include pb(0.25rem);
          @include tl(left);
          &.price{
            overflow: hidden;
            .sell-price{
              color:$detailPriceColor;
              @include mr(0.35rem);
            }
          }
          &.showDetaile{
            @include mt(0.3rem);
            @include h(0.6rem);
            @include lh(0.6rem);
            @include pr(0.5rem);
            @include pl(0);
            background: $defaultBg;
            a{
              @include ml(0.6rem);
              color:$detailColor;
              width:inherit;
              height:inherit;
              display:block;
              span{
                float: right;
              }
            }
          }
          &.addToCart{
            @extend .tl-center;
            @include h(1rem);
            @include lh(1rem);
            .cart{
              @include w(4rem);
              @include h(1rem);
              @include fs(0.3rem);
              color: $fc;
              background-color:$addToCartBg;
              outline-width:0;
              border:none;
              border-radius:0.2rem;
            }
          }
        }
      }
    }
  }
</style>

