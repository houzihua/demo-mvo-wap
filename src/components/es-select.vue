
<template>
  <div class="es-select">

  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return {
        mode:''

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

</style>
