<template>
  <div class="mine">
    这是我的界面
   <!-- <v-header :head-data="headData"></v-header>
    <div class="mine-content">
      <div class="user"></div>-->
      <!--<div class="user-actions">
        <mt-cell
          title="我的订单"
          to="//github.com"
          is-link
          value="">
        </mt-cell>
      </div>-->
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from './header.vue'
  export default {
    name: 'mine',
    data () {
      return {
        headData: {
          back: '',
          title: '我的秀',
          rightBtn: '充值'
        }
      }
    },
    components: {
      'v-header': header
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" type="text/scss" scoped>
  @import "../../../static/style/index";
  .mine{
    position: relative;
    .mine-content{
      position: absolute;
      left: 0;
      right:0;
      bottom:1rem;
      top:1rem;
      background-color:$mineBg;
      .user{
        @include w(100%);
        @include h(5rem);
      }
    }
  }
  /*div[data-v-043d3542]{
    overflow: inherit;
  }*/
</style>

