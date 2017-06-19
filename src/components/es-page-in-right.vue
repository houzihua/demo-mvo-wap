
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
<style scoped>
    .es-page-in-right{position: fixed;width: 100%;height: 100%; top: 0;right: 0;
      -webkit-transform: translate3d(0, 0, 0);transform: translate3d(0, 0, 0);
      -webkit-transition: .3s ease-out;
      transition: .3s ease-out;
    }
    .popup-slide-right-enter, .popup-slide-right-leave-active {
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
    }

</style>
