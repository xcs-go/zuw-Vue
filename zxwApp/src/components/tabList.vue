<template>
  <div>
    <v-header :headData = "headData"></v-header>
    <router-view></router-view>
    <ul class="tab-bar">
      <li><a href="#/tablist/home">首页</a></li>
      <li><a href="#/tablist/list">分类</a></li>
      <li><a href="#/tablist/cart">购物车</a></li>
      <li><a href="#/tablist/mine">我的</a></li>
      <li><a href="#/tablist/more">更多</a></li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from './common/header.vue'
  export default {
    name: 'tabList',
    data () {
      return {
        headData: {
          back: '返回',
          title: '首页',
          rightBtn: '登录/注册'
        }
      }
    },
    components: {
      'v-header': header
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped>
  @import '../../static/style/index.scss';
  div{
    width:100%;
    overflow: hidden;
    .tab-bar{
      position: fixed;
      left:0;
      bottom:0;
      @include h(1rem);
      @include w(100%);
      @include bgColor($tabBgColor);
      li{
        float:left;
        height:1rem;
        @include w(20%);
        text-align: center;
        border-top:1px solid #eeeeee;
        a{
          display: block;
          @include w(100%);
          @include h(100%);
          @include lh(1rem);
          @include fs(0.35rem);
          color:$fc;
        }
      }
    }
  }

</style>

