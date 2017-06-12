
<template>
  <div class="es-footer">
    <ul class="bar">
      <li class="item" :class="{'selected':name1}">
        <router-link to="/" >
          <div class="icon-wrap"><i class="fa fa-home"></i> </div>
          首页
        </router-link>
      </li>
      <li class="item" :class="{'selected':name2}">
        <router-link to="/prd" >
          <div class="icon-wrap"><i class="fa fa-list-ul"></i> </div>
          商品
        </router-link>
      </li>
      <li class="item" :class="{'selected':name3}">
        <router-link to="/inquiry" >
          <div class="icon-wrap"><i class="fa fa-money"></i> </div>
          询价
        </router-link>
      </li>
      <li class="item" :class="{'selected':name4}">
        <router-link to="/my" >
          <div class="icon-wrap"><i class="fa fa-user"></i> </div>
          我的
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return {
        name1:false,
        name2:false,
        name3:false,
        name4:false,
      }
    },
    methods:{
    },
    props: {
      selected: String
    },
    watch:{
      selected(val, oldValue) {
        console.log(val)
      }
    },
    created: function () {
      this['name'+this.selected] = true
    }
  }

</script>
<style scoped>
.es-footer{height: 55px;position: relative;color: #999;}
.bar{background: #fff;position: fixed;left: 0;right: 0;bottom: 0;z-index: 1;display: flex;text-align: center;padding: 5px 0;height: 55px;}
.item{width: 25%;}
.icon-wrap{font-size: 20px;line-height: 22px;margin-bottom: 1px;}
.item.selected { background: #fff; color: #f70; }
</style>
