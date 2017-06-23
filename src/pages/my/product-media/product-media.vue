<template>
  <div>
    <mt-header fixed title="商品资料库">
      <router-link to="/my" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="header-space"></div>
    <div class="es-tip-row flex-box">
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



    <div class="filerow clearfix">
      <div class="input-wrap">
        <div class="icon-wrap">
          <i class="fa fa-video-camera" ></i>
        </div>
        <input ref="file-input" class="file-input" type="file" accept="video/*">
      </div>
      <div>
        <video id="showVideo" width="320" height="240" controls="controls" class="show-item" src="http://www.w3school.com.cn/i/movie.mp4">
        </video>
      </div>
    </div>
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
      },
      init:function () {
        var self = this;
        console.log(2222)

        $("input[type='file']").change(function(){
          console.log(1111)
          self.readURL(this);
        });
      },
      readURL: function(input) {
        if (input.files && input.files[0]) {
          var $input = $(input);
          var $row = $input.parents('.filerow');
          var reader = new FileReader();
          reader.onload = function (e) {
            var src = e.target.result;
            console.log(input.files)
            console.log(src)
            var $showItem = $row.find('.show-item');
            if ($showItem.length = 1) {
              $showItem.attr('src', src).show();
            } else {

            }
          }
          reader.readAsDataURL(input.files[0]);
        }
      }
    },
    watch: {
    },
    components: {EsBreadcrumb:EsBreadcrumb},
    computed: {
      //假数据
      itemList() {
        var list =[{ id: 1, name:'一文件夹啊啊'},{ id: 2, name:'二文件夹啊啊'},{ id: 3, name:'三文件夹啊啊'},{ id: 4, name:'四文件夹的啊'}];
        return list
      }
    },
    mounted: function mounted() {
      this.init();
    }
  }

</script>
<style>
  .filerow .input-wrap{height: 100px;position: relative;float: left;margin: 10px;}
  .filerow .icon-wrap{line-height: 100px;height: 100px;width: 100px;position: absolute;left: 0;text-align: center;font-size: 40px; top:0;border: solid 1px #e3e3e3;z-index: 1}
  .filerow .file-input{ height: 100px; width: 100px; opacity: 0; position: relative; display: block; z-index: 10; }
  .filerow .show-item{height: 100px;width: 100px; border: solid 1px #e3e3e3;margin: 10px;}
</style>
