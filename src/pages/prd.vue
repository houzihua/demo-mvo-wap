<template>
  <div>
    <mt-header fixed title="商品列表"></mt-header>
    <div class="header-space"></div>
    <div class="page-search">
      <mt-search autofocus v-model="value" :result="filterResult"></mt-search>
    </div>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">销售中</mt-tab-item>
      <mt-tab-item id="2">审核中</mt-tab-item>
      <mt-tab-item id="3">审核不通过</mt-tab-item>
      <mt-tab-item id="4">已停产</mt-tab-item>
    </mt-navbar>

    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <ul class="clearfix">
          <li v-for="(item,index) in prdlist"
              :item="item" is="es-item-info"
              @prd-item-touched="broadItemChangeCover"
              :id="index"
              ref="items">
          </li>
        </ul>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell v-for="n in 4" :key="n" :title="'测试 ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <mt-cell v-for="n in 6" :key="n" :title="'选项 ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="4">
        <mt-cell v-for="n in 6" :key="n" :title="'选项 ' + n" />
      </mt-tab-container-item>
    </mt-tab-container>

    <es-footer selected="2"></es-footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import EsFooter from '../components/es-footer.vue';
  import EsItemInfo from '../components/es-item-info.vue';
  import dict from '../../static/js/data/data';
  export default {
    props: {
    },
    data(){
      return {
        value: '',
        selected: '1',
        showCoverId: '-100',
        defaultResult: dict.__getServerDictCategory('search_result').s,
      };
    },
    methods:{
      //所有组件改变弹窗
      broadItemChangeCover: function (data) {
        for(var item of this.$refs.items){
          if(item.id !=data){
            item.showCover = false;
          }else{
            item.showCover = true;
          }
        }
      }
    },
    components: {
      EsFooter: EsFooter ,
      EsItemInfo: EsItemInfo
    },
    computed: {
      filterResult() {
        return this.defaultResult.filter(value => new RegExp(this.value, 'i').test(value));
      },
      prdlist(){
        let list = dict.__getServerDictCategory('prd_items').s;
        for(var i = 1;i<=list.length;i++)
        {
          if(i == 8 ){
            list[i-1].url='../../static/img/test/00'+i+'.png';
          }else{
            list[i-1].url='../../static/img/test/00'+i+'.jpg';
          }
        }
        var newlist = [];
        for(let i = 0;i<15;i++){
          let num = Math.round(Math.random()*6.5);
          newlist.push(list[num])
        }
        return newlist
      }
    }
  }

</script>
<style scoped>
  .mint-search{height: 44px;overflow: visible;position: relative;z-index: 2}
 </style>
<style>
  .mint-searchbar{background: #f7f7f7}
</style>
