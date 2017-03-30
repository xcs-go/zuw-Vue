<template>
  <div class="list">
    <ul>
      <li v-for="(data,index) in listData">
        <a :href="'#/detail/' + data.goodsID"><img :src="data.goodsListImg" alt=""></a>
        <p class="name" v-text="data.goodsName"></p>
        <p class="price">
          <span class="selle-price">￥{{data.price}}</span>
          <del class="ori-price">{{(data.price / (data.discount?data.discount:1)).toFixed(2)}}</del>
        </p>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'list',
    mounted () {
      // 调配一个获取数据的action
      this.$store.dispatch('getListDataAction')
    },
    computed: {
      listData () {
        return this.$store.getters.listData
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" type="text/scss" scoped>
  @import "../../../static/style/index.scss";
  .list{
    @include mt(1rem);
    padding:0.34rem;
    @include w(100%);
    overflow:hidden;
    ul{

      li{
        @include w(3.2rem);
        @include h(4.8rem);
        @include mr(0.4rem);
        float: left;
        a{
          display: block;
          img{
            @include w(3.1rem);
            @include h(3rem);
          }
        }
        p{
          @include pt(0.2rem);
          @include fs(0.3rem);
          overflow: hidden;
          &.name{
            @include pb(0.3rem);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          &.price{
            @include pb(0.3rem);
            .selle-price{
              float: left;
              color:$priceColor;
              font-weight:bold;
            }
            .ori-price{
              float: right;
              color:#e3e3e3;
              font-weight: bold;
            }
          }
        }
      }
    }
  }
</style>

