<template>
  <div class="cart">
    <v-header :headData="headData"></v-header>
    <div class="cart-content clearfix" v-if="cartListData.length">
      <p class="total">
        <span>商品数量：2</span>
        <span>应付总额(不含运费): <i class="price">￥598</i></span>
      </p>
      <ul class="list">
        <li class="clearfix" v-for="cart in cartListData">
          <img :src="cart.goodsListImg" alt="">
          <div>
            <p class="shopName" v-text="cart.goodsName"></p>
            <p class="shopPrice">单价：<i class="price" v-text="cart.price"></i></p>
            <p class="shopNum"><span>数量：</span>
              <input type="button" placeholder="-" class="min">
              <input type="text" placeholder="1" disabled class="num" :number="cart.number">
              <input type="button" placeholder="+" class="plus">
            </p>
          </div>
          <a href="javascript:;" id="del">删除</a>
        </li>
      </ul>
    </div>
    <div class="anythingShop" v-if="!cartListData.length">
      您还未登录，请登录查看购物车!!!
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from './header.vue'
  // let username = window.localStorage.getItem('username')
  export default {
    name: 'cart',
    data () {
      return {
        headData: {
          back: '',
          title: '购物车',
          rightBtn: '结算'
        }
      }
    },
    computed: {
      cartListData () {
        console.log(this.$store.getters.cartList)
        return this.$store.getters.cartList
      }
    },
    mounted () {
      let user = {
        userID: 'xcs'
      }
      this.$store.dispatch('showCartAction', user)
    },
    components: {
      'v-header': header
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" type="text/scss" scoped>
  @import "../../../static/style/index";
  .cart{
    .cart-content{
      position: relative;
      @include fs(0.35rem);
      @include w(100%);
      @include mt(1rem);
      .total{
        @include h(1rem);
        @include w(100%);
        @include lh(1rem);
        background-color:$tabBgColor;
        span{
          color: $fc;
        }
      }
      .list{
        margin-top:0;
        @include fs(0);
        li{
          position: relative;
          @include pr(0.6rem);
          @include pb(0.2rem);
          @include pt(0.2rem);
          border-bottom:1px solid #e3e3e3;
          img{
            float:left;
            @include w(2rem);
            @include h(2rem);
          }
          div{
            text-align: left;
            float: left;
            @include w(3rem);
            @include h(2rem);
            @include fs(0.35rem);
            @include pl(0.3rem);
            p{
              @include pb(0.2rem);
              @include mb(0.1rem);
              &.shopName{
                @include w(100%);
                @include h(0.45rem);
                overflow : hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
              }
              &.shopNum{
                @include fs(0.35rem);
                span{
                  float: left;
                }
                input{
                  float: left;
                  @include w(0.5rem);
                  @include h(0.5rem);
                  @include mr(0.1rem);
                  @include tl(center);
                  border-radius: 0.1rem;
                  &.min, &.plus{
                    background-color:$cartBtnColor;
                    box-shadow:0 0 0.01rem  0.01rem $cartBtnColor;
                    &::-webkit-input-placeholder{
                      color:$fc;
                    }
                  }
                }
              }
            }
          }
          #del{
            position: absolute;
            @include fs(0.35rem);
            right:0.8rem;
            top:0.2rem;
            color:$priceColor;
          }
        }
      }
    }
    .price{
        font-style: normal;
        color:$addToCartBg;
    }
    .anythingShop{
      position: absolute;
      left: 0;
      top:3rem;
      @include w(100%);
      @include fs(0.4rem);
      text-align:center;
      color:$detailColor;
    }
  }
</style>

