
<template>
    <mt-popup v-model="popupVisible" position="right" class="es-page-in-right">
        <slot></slot>
    </mt-popup>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return {

      }
    },
    methods:{
    },
    props: {
      popupVisible: false
    },
    watch:{
    },
    created: function () {
    }
  }

</script>
<style>
    .es-page-in-right{position: fixed;width: 100%;height: 100%;}
</style>
