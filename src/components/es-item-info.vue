
<template>
  <div class="es-item-info item flex-1">
    <div class="con">
      <div class="img-wrap">
        <div class="img-inner-wrap">
          <img v-lazy="item.url">
        </div>
      </div>
      <div class="ellipsis mlr-10 pad" @click="changeShow">
        <p class="fs-16 b lineh-25 mt-5">{{item.name}}</p>
        <p class="fs-12 c-999 lineh-18">品牌：{{item.pinpai}}</p>
        <p class="fs-12 c-999 lineh-18">类目：{{item.leimu}}</p>
        <p class="fs-12 c-999 lineh-18">商品款数：{{item.num}}款</p>
        <transition name="slide-fade-right">
          <div v-if="show">hello</div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return {
        show:false,

      }
    },
    methods:{
      changeShow:function () {
        if(this.show){
          this.show=false;
        }else{
          this.closeOtherCoverAll();
        }
      },
      closeOtherCoverAll: function () {
        var id = this.id;
        this.$emit('prd-item-touched', id);
      }
    },
    props: {
      item:{
        default:''
      },
      id:{
        default:-1
      }
    },
    watch:{

    },
    created: function () {
    }
  }

</script>
<style scoped>
  .item{width: 50%;background: #f7f7f7;padding: 2px 0}
  .item:nth-child(odd){padding-right: 1px;}
  .item:nth-child(even){padding-left: 1px;}
  .item .con{background: #fff;height: 100%}
  .item .img-wrap{text-align: center;height: 0;padding-top: 60%;position: relative}
  .item .img-inner-wrap{position: absolute;left: 0;top: 0;width: 100%;height: 100%;}
  .item img{max-width: 100%;max-height: 100%;position: absolute; top: 50%; left: 50%; transform: translate3d(-50%,-50%,0); -webkit-transform: translate3d(-50%,-50%,0);}
</style>
<style>
  .slide-fade-right-enter-active {
    transition: all .5s ease;
  }
  .slide-fade-right-leave-active {
    transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-right-enter, .slide-fade-right-leave-active {
    transform: translateX(100%);
    opacity: 0;
  }
</style>
