
<template>
  <li class="es-item-info item" >
    <div class="con">
      <div class="img-wrap">
        <div class="img-inner-wrap">
          <img class="img" :src="item.url">
        </div>
      </div>
      <div class="info-wrap">
        <div class="ellipsis">
          <p class="item-name">{{item.name}}</p>
          <p>品牌：{{item.pinpai}}</p>
          <p>类目：{{item.leimu}}</p>
          <p>商品款数：{{item.num}}款</p>
        </div>
        <div class="more-btn" @click="changeCover">
          ...
        </div>
        <transition name="slide-fade-right">
          <div v-if="showCover" class="es-item-cover" @click="changeCover">
            <div class="c-666 ellipsis">
              <p>货号：AB1111</p>
              <p>商品：12*13*65(cm)</p>
              <p>外箱：10*12*16(cm)</p>
              <p>证书：3C、5C</p>
              <p>版权：自有版权</p>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </li>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return {
        showCover:false,
      }
    },
    props: {
      //内容模板
      item:{
        default: ''
      },
      //id,在父级根据id是否相等判断是否显示遮罩
      id:{
        default:-1
      }
    },
    methods:{
      changeCover:function () {
        if(this.showCover){
          this.showCover = false;
        }else{
          this.closeOtherCoverAll();
        }
      },
      closeOtherCoverAll: function () {
        var id = this.id;
        this.$emit('prd-item-touched', id);
      }
    },
    watch:{

    },
    created: function () {
    }
  }

</script>
<style scoped>
  .item{width: 50%;background: #f7f7f7;padding: 2px 0;float: left}
  .item:nth-child(odd){padding-right: 1px;}
  .item:nth-child(even){padding-left: 1px;}
  .con{background: #fff;height: 100%}
  .item-name{line-height: 25px;color: #333;font-size: 16px;margin-top: 2px;font-weight: bold}
  .img-wrap{text-align: center;height: 0;padding-top: 100%;position: relative}
  .img-inner-wrap{position: absolute;left: 0;top: 0;width: 100%;height: 100%;}
  .info-wrap{padding: 0 10px;position: relative;font-size: 12px;line-height: 18px;color: #999}
  .img{width: 100%;height: 100%;position: absolute; top: 50%; left: 50%; transform: translate3d(-50%,-50%,0); -webkit-transform: translate3d(-50%,-50%,0);}
  .more-btn{position: absolute;right: 0;bottom: 0;background: #fff;line-height: 30px;padding: 0px 10px;font-size: 20px;color: #333}
  .es-item-cover{background: #fff;position: absolute;width: 100%;bottom: 0;right: 0;padding: 5px 10px}
</style>
<style>
  .slide-fade-right-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-right-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-right-enter, .slide-fade-right-leave-active {
    transform: translateX(100%);
    opacity: 0;
  }

  /*切换显示*/
  .prd-row-wiew .es-item-info{width: 100%;padding: 0;margin-top: 5px;}
  .prd-row-wiew .con{display: flex;display: -webkit-flex;height: 110px;overflow: hidden}
  .prd-row-wiew .img-wrap{width: 100px;height: 100px;padding: 0;margin: 5px;}
  .prd-row-wiew .info-wrap{-webkit-flex-grow: 1;flex-grow: 1;}
  .prd-row-wiew .img{width: 100%;height: 100%}
  .prd-row-wiew .es-item-cover{height: 100%}
</style>
