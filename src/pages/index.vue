
<template>
  <div>

    <mt-header fixed title="ESSA">
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="header-space"></div>
    <div class="page-swipe">
      <mt-swipe :auto="4000">
        <mt-swipe-item class="slide1">全新的渠道与模式</mt-swipe-item>
        <mt-swipe-item class="slide2">带来无限商机</mt-swipe-item>
        <mt-swipe-item class="slide3">专业于外贸行业</mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="person flex-box">
      <div class="es-half t-right">
        <div class="img-wrap inline-block">
          <img class="img" src="../../static/img/logo.png"/>
        </div>
      </div>

      <div class="words es-half ellipsis pad-10" style="margin-top: 2px">
        <h2>小樱桃</h2>
        <p style="font-size: 12px;color: #999">商品管理员</p>
      </div>
    </div>

    <div class="mt-20 t-center mlr-20">
      您还有21条待回复询价
      <div class="mt-10">
        <router-link to="/inquiry" >
          <mt-button size="large" type="primary">回复询价</mt-button>
        </router-link>
      </div>
    </div>


    <es-footer selected="1"></es-footer>
  </div>
</template>

<script type="text/ecmascript-6">

  import EsFooter from '../components/es-footer.vue'

  export default {
    props: {
      headerProps: Object
    },
    data(){
      return {}
    },
    methods:{
      test(){
        Toast('我是Tip');
      }
    },
    components: { EsFooter: EsFooter },
    mounted : function mounted() {
      var fetch = require('node-fetch');

//      function* gen(){
//        var url = 'https://api.github.com/users/github';
//        var result = yield fetch(url);
//        console.log(result.bio);
//      }



    }

  }
</script>
<style scoped>
  .page-swipe .mint-swipe { height: 200px; color: #fff; font-size: 30px; text-align: center; margin-bottom: 20px; }
  .page-swipe .mint-swipe-item { line-height: 200px; }
  .page-swipe .slide1 { background-color: #0089dc; color: #fff; }
  .page-swipe .slide2 { background-color: #ffd705; color: #000; }
  .page-swipe .slide3 { background-color: #ff2d4b; color: #fff; }
  .page-swipe-desc { text-align: center; color: #666; margin-bottom: 5px; }

  .person{height: 60px;line-height: 60px;text-align: center;}
  .img-wrap{font-size: 0;border-radius: 60px;width: 60px;overflow: hidden}
  .img{width: 60px;height: 60px;}
  .words{text-align: left;line-height: normal}
</style>
