
<template>
  <div class="es-breadcrumb-wrap">
    <div class="es-breadcrumb" ref="scrollNav">
      <a @click="chooseItem(-1)" href="javascript:void(0)" class="crumb-link">全部文件</a>
      <i v-if="list.length>0" class="f-esst c-999">&gt;</i>
      <span v-for="(item,index) in list"
            :class="{last:index==list.length-1}"
            @click="chooseItem(item)">
            <a class="crumb-link" href="javascript:void(0)">{{item.name}}</a>
            <i class="f-esst c-999">&gt;</i>
          </span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return {

      }
    },
    methods:{
      chooseItem:function (param) {
        if(param==-1){
          param = {id:-1,name:'全部文件'}
        }
        this.$emit('bread-crumb-choose', param);
      }
    },
    props: {
      //必须包含id和name
      list:{
        default:function () {
          return []
        }
      }
    },
    watch:{
      list(val){
        this.$nextTick(function(){
          var scrollNav = this.$refs.scrollNav;
          scrollNav.scrollLeft = scrollNav.scrollWidth;
        })
      }

    },
    created: function () {

    }
  }

</script>
<style scoped>
  .es-breadcrumb-wrap{height: 48px;overflow: hidden;border-bottom: solid 1px #ccc}
  .es-breadcrumb{height: 60px;line-height: 48px;background: #fff;overflow: auto;white-space: nowrap;padding:0 10px 0px 10px}
  .es-breadcrumb .crumb-link{color: #999}
  .es-breadcrumb .crumb-link:active{color: #666;background: #f7f7f7}
  .es-breadcrumb .last .crumb-link{color: #0099e9}
  .es-breadcrumb .last .f-esst{display: none}
</style>
