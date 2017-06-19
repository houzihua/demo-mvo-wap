<template>
  <div>
    <mt-header fixed title="商品资料库"></mt-header>
    <div class="header-space"></div>
    <div class="tip-row">

    </div>
    <div class="base-breadcrumb">

    </div>


  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {},
    data(){
      return {
        popupVisible1: false,
        popupVisible2: false,
        popupVisible3: false,
        popupVisible4: false,
      }
    },
    methods: {
      test: function () {
      }
    },
    watch: {},
    components: {},
    computed: {
      money: function () {
        var string = '"[{"id":1473377,"name":"新建文件夹1","isCategory":null,"fileId":null,"$$hashKey":"11R"},{"id":1473381,"name":"新建文件夹123","isCategory":null,"fileId":null,"$$hashKey":"11S"},{"id":1473382,"name":"新建文件夹1133","isCategory":null,"fileId":null,"$$hashKey":"11T"}]"';
        var test = JSON.parse(string);
        return test
      }
    }
  }

</script>
<style>

</style>
