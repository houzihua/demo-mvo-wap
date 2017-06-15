<template>
  <div>
    <mt-header fixed title="回复询价"></mt-header>
    <div class="header-space"></div>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">待回复(22)</mt-tab-item>
      <mt-tab-item id="2">已回复(33)</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <ul class="clearfix inquiry-list">
          <li class="item" v-for="item in prdlist">
            <div class="flex-box con">
              <div class="img-wrap">
                <div class="img-inner-wrap">
                  <img v-lazy="item.url">
                </div>
              </div>

              <div class="ellipsis mlr-10 pad">
                <p class="fs-16 b lineh-25 mt-5">{{item.name}}</p>
                <p class="fs-12 c-999 lineh-18">国家：俄罗斯</p>
                <p class="fs-12 c-999 lineh-18">询价时间：2017-05-22 11:11</p>
                <p class="fs-12 c-999 lineh-18">交货日期：2017-06-22</p>
              </div>
            </div>
            <div class="bottom c-999 flex-box ellipsis">
              <div class="flex-1 ellipsis">
                历史询价：30张询价单/8款商品（共8箱）
              </div>
              <div>
                金额：￥222333.33
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
    <es-footer selected="3"></es-footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import EsFooter from '../components/es-footer.vue'
  import img1 from '../../static/img/test/001.jpg';
  import img2 from '../../static/img/test/002.jpg';
  import img3 from '../../static/img/test/003.jpg';
  import img4 from '../../static/img/test/004.jpg';
  import img5 from '../../static/img/test/005.jpg';
  import img6 from '../../static/img/test/006.jpg';
  import img7 from '../../static/img/test/007.jpg';
  import img8 from '../../static/img/test/008.png';
  import img9 from '../../static/img/test/009.jpg';
  export default {
    props: {
    },
    data(){
      return {
        selected: '1',
      }
    },
    methods:{

    },
    components: { EsFooter: EsFooter },
    computed:{
      prdlist(){
        let list = [
          {
            name:'蜘蛛侠',
            pinpai:'超级厉害',
            leimu:'玩具>积木',
            num:3,
            url: img1,
          },
          {
            name:'美女',
            pinpai:'时尚',
            leimu:'玩具>美女',
            num: 4,
            url: img2
          },
          {
            name:'美女2',
            pinpai:'时尚',
            leimu:'模特>美女',
            num: 4,
            url: img3
          },
          {
            name:'美女',
            pinpai:'时尚',
            leimu:'玩具>美女',
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
            name:'美女',
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
<style>

  .inquiry-list .item{border-bottom: solid 1px #e3e3d3;background: #fff;margin-bottom: 10px}
  .inquiry-list .item .con{padding: 10px}
  .inquiry-list .item .img-wrap{width: 100px;height: 100px;position: relative}
  .inquiry-list .item img{max-width: 100%;max-height: 100%;position: absolute; top: 50%; left: 50%; transform: translate3d(-50%,-50%,0); -webkit-transform: translate3d(-50%,-50%,0);}

  .inquiry-list .item .bottom{line-height: 40px;height: 40px;border-top: solid 1px #e3e3e3;padding: 0 10px;font-size: 12px;}
</style>
