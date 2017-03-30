<template>
  <mt-header :title="headData.title" class="header">
    <router-link to="/" slot="left" class="left button" v-if="headData.back">
      <mt-button icon="back" v-text="headData.back" @click="goBack"></mt-button>
    </router-link>
    <mt-button icon="more" slot="right" class="button right" v-if="headData.rightBtn" @click="cartOrLogin" v-text="headData.rightBtn"></mt-button>
  </mt-header>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'header',
    props: {
      headData: {
        type: Object,
        default () {
          return {
            back: '',
            title: '商品详情',
            rightBtn: ''
          }
        }
      },
      'cart-login': {
        type: Function
      }
    },
    methods: {
      goBack () {
        window.history.go(-1)
      },
      cartOrLogin () {
        this.cartLogin()
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped>
  @import "../../../static/style/index.scss";
  .header {
    position: fixed;
    left:0;
    top:0;
    @include h(1rem);
    @include w(100%);
    color:$defaultBg;
    background:$headerColor;
    .title{
      font-weight:normal;
      @include fs(0.4rem);
    }
    .button{
      width:1rem;
      height:0.6rem;
      border-radius:0.1rem;
      background:$btnColor;
      border:none;
    }
    .left{
      left: 0.2rem;
    }
    .right{
      right:0.2rem;
      width:2rem;
    }
  }
</style>

