<template>
  <section class="es-full-page">
    <mt-header fixed title="商品列表"></mt-header>
    <div class="header-space"></div>
    <div class="es-search-wrap flex-box">
      <div class="pr flex-1">
        <i class="fa fa-search"></i>
        <input class="es-input" />
      </div>
      <div @click="changeView" class="change-icon">
        <i class="fa fa-list"></i>
      </div>
    </div>

    <mt-navbar v-model="statueSelected">
      <mt-tab-item id="1">销售中</mt-tab-item>
      <mt-tab-item id="2">审核中</mt-tab-item>
      <mt-tab-item id="3">审核不通过</mt-tab-item>
      <mt-tab-item id="4">已停产</mt-tab-item>
    </mt-navbar>

    <div class="es-page-infinite-wrapper" ref="wrapper"  :style="{ height: wrapperHeight + 'px' }">
      <ul class="clearfix" v-infinite-scroll="loadMore" infinite-scroll-disabled="loadingMore" infinite-scroll-distance="50" :class="viewClass">
        <li v-for="(item,index) in prdlist"
            :item="item" is="es-item-info"
            @prd-item-touched="broadItemChangeCover"
            :id="index"
            ref="items">
        </li>
      </ul>
      <p v-show="loadingMore" class="es-page-infinite-loading">
        <mt-spinner type="fading-circle"></mt-spinner>
        加载中...
      </p>
    </div>

    <es-footer selected="2"></es-footer>
  </section>
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
        //选中状态
        statueSelected: '1',
        showCoverId: '-100',
        defaultResult: dict.__getServerDictCategory('search_result').s,
        viewClass:'',
        loadingMore: false,
        allLoaded: false,
        wrapperHeight: 0
      };
    },
    methods:{
      //点击产品内容后触发，所有组件改变弹窗
      broadItemChangeCover: function (data) {
        for(var item of this.$refs.items){
          if(item.id !=data){
            item.showCover = false;
          }else{
            item.showCover = true;
          }
        }
      },
      changeView: function () {
        console.log(this.viewClass)
        this.viewClass = this.viewClass==''? 'prd-row-wiew':''
      },
      //加载更多方法
      loadMore() {
        this.loadingMore = true;
        setTimeout(() => {
          this.prdlist.push.apply(this.prdlist,this.creatList());
          console.log(this.prdlist.length)
          this.loadingMore = false;
        }, 2000);
      },
      //制作假数据，每次10个
      creatList(){
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
        for(let i = 0;i<10;i++){
          let num = Math.round(Math.random()*6);
          newlist.push(list[num])
        }
        return newlist
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
        var list = this.creatList()
        return list
      }
    },
    mounted() {
      this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top-55;
    },

  }

</script>
<style scoped>
  .change-icon{font-size: 16px;padding: 0 10px;color: #999}
  .es-search-wrap{padding-right: 0}
</style>
