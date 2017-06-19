<template>
  <div>
    <mt-header fixed title="商品资料库">
      <router-link to="/my" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="header-space"></div>
    <div class="tip-row flex-box">
      <div class="flex-1 c-f70">请选择文件夹</div>
      <div>如需添加文件夹，请到PC操作</div>
    </div>

    <!--面包屑路径-->
    <es-breadcrumb :list="navList" @bread-crumb-choose="chooseItem"></es-breadcrumb>

    <!--文件夹列表-->
    <ul class="es-link-list mb-10">
      <li class="es-link-item" v-for="(item,index) in itemList" @="addItem($event)">
        <mt-cell :title="item.name" id="1" is-link @click.native="addItem(item)"></mt-cell>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  //面包屑
  import EsBreadcrumb from '../../../components/es-breadcrumb.vue';

  export default {
    props: {},
    data(){
      return {
        navList:[]
      }
    },
    methods: {
      addItem: function (item) {
        this.navList.push(item);
      },
      //点击面包屑内容后触发的事件
      chooseItem: function (data) {
        let choosedId = data.id;
        if(choosedId==-1){
          this.navList = [];
        }else{
          for(let i = 0;i< this.navList.length;i++){
             let navItem = this.navList[i];
            if(navItem.id == choosedId){
              this.navList.splice(i+1);
              return;
            }
          }
        }
      }
    },
    watch: {
    },
    components: {EsBreadcrumb:EsBreadcrumb},
    computed: {
      itemList() {
        var list =[{ id: 1, name:'一级文件夹啊啊'},{ id: 2, name:'二级文件夹啊啊'},{ id: 3, name:'三级文件夹啊啊'},{ id: 4, name:'四级级文件夹的啊'}];
        return list
      }
    }
  }

</script>

