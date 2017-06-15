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
        <ul class="clearfix flex-box flex-wrap">
          <li  v-for="item in prdlist" :item="item" is="es-item-info">
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
        defaultResult: ['Apple', 'Banana', 'Orange', 'Durian', 'Lemon', 'Peach', 'Cherry', 'Berry', 'Core', 'Fig', 'Haw', 'Melon', 'Plum', 'Pear', 'Peanut', 'Other']
      };
    },
    methods:{

    },
    components: {
      EsFooter: EsFooter ,
      EsItemInfo: EsItemInfo
    },
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
 </style>
<style>
  .mint-searchbar{background: #f7f7f7}
</style>
