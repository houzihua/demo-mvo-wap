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

   <!-- <div>
      <mt-cell class="page-part" title="当前选中">{{ selected }}</mt-cell>
    </div>-->

    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <ul class="clearfix">
          <li class="item" v-for="item in prdlist">
            <div class="con">
              <div class="img-wrap">
                  <div class="img-inner-wrap">
                      <img v-lazy="item.url">
                  </div>
              </div>

              <div class="ellipsis mlr-10 pad">
                <p class="fs-16 b lineh-25 mt-5">{{item.name}}</p>
                <p class="fs-12 c-999 lineh-18">品牌：{{item.pinpai}}</p>
                <p class="fs-12 c-999 lineh-18">类目：{{item.leimu}}</p>
                <p class="fs-12 c-999 lineh-18">商品款数：{{item.num}}款</p>
              </div>
            </div>
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
  import img1 from '../assets/test/001.jpg';
  import img2 from '../assets/test/002.jpg';
  import img3 from '../assets/test/003.jpg';
  import img4 from '../assets/test/004.jpg';
  import img5 from '../assets/test/005.jpg';
  import img6 from '../assets/test/006.jpg';
  import img7 from '../assets/test/007.jpg';
  import img8 from '../assets/test/008.png';
  import img9 from '../assets/test/009.jpg';

  export default {
    props: {
    },
    data(){
      return {
        value: '',
        selected: '1',
        defaultResult: [
          'Apple',
          'Banana',
          'Orange',
          'Durian',
          'Lemon',
          'Peach',
          'Cherry',
          'Berry',
          'Core',
          'Fig',
          'Haw',
          'Melon',
          'Plum',
          'Pear',
          'Peanut',
          'Other'
        ]
      };
    },
    methods:{

    },
    components: { EsFooter: EsFooter },
    computed: {
      filterResult() {
//        console.log(this.defaultResult.filter(value => new RegExp(this.value, 'i').test(value)))
        return this.defaultResult.filter(value => new RegExp(this.value, 'i').test(value));
      },
      prdlist(){
        let list = [
          {
            name:'蜘蛛侠',
            pinpai:'超级厉害',
            leimu:'玩具>积木',
            num:3,
            url: img1
          },
          {
            name:'美女',
            pinpai:'时尚',
            leimu:'玩具>美女',
            num: 4,
            url: img2
          },
          {
            name:'有一个美女',
            pinpai:'时尚',
            leimu:'模特>美女',
            num: 4,
            url: img3
          },
          {
            name:'这个是啥',
            pinpai:'时尚',
            leimu:'玩具>画画',
            num: 41,
            url: img4
          },
          {
            name:'图片',
            pinpai:'一般',
            leimu:'玩具>画画',
            num: 5,
            url: img5
          },
          {
            name:'沙滩',
            pinpai:'时尚',
            leimu:'玩具>美女',
            num: 4,
            url: img6
          },
          {
            name:'猫',
            pinpai:'动物',
            leimu:'玩具>猫',
            num: 4,
            url: img7
          },
        ]
        var newlist = [];
        for(let i = 0;i<50;i++){
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
  .item{width: 50%;padding: 2px 2px 2px 2px;background: #f7f7f7;display: block;float: left;}
  /*.item:nth-child(even){margin-left: -2px;padding-left: 3px;}*/
  .item .con{background: #fff;height: 100%}
  .item .img-wrap{text-align: center;height: 0;padding-top: 60%;position: relative}
  .item .img-inner-wrap{position: absolute;left: 0;top: 0;width: 100%;height: 100%;}
  .item img{max-width: 100%;max-height: 100%;position: absolute; top: 50%; left: 50%; transform: translate3d(-50%,-50%,0); -webkit-transform: translate3d(-50%,-50%,0);}
</style>
<style>
  .mint-searchbar{background: #f7f7f7}
</style>
