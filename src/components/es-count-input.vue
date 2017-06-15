
<template>
  <div class="es-count-input flex-box">
    <div class="count-btn-wrap">
      <div class="count-btn" @touchstart = 'sub'>
        -
      </div>
    </div>
    <div class="flex-1 input-wrap">
      <input type="number" v-model="value" style="display: none">
      <input ref="input"  :value="editVal"   @input="updateValue($event.target.value)" class="input flex-1"  type="number" />
    </div>
    <div class="count-btn-wrap">
      <div class="count-btn" @touchstart = 'add'>
        +
      </div>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return {
        editVal: this.value,
      }
    },
    props: {
      //值，默认 0
      value: { default: 0},
      //小数点位数， 默认2，可选 0 1 2 3
      decimalLength: { default: 2},
      min:{ default: 0},
      max:{ default: 10000000}
    },
    methods: {
      updateValue: function (value) {
        var formattedValue = value .trim();
        //先把非数字的都替换掉，除了数字和.
        if(this.decimalLength==0){
          formattedValue = parseInt(formattedValue)+'';
        }else{
          formattedValue = formattedValue.replace(/[^\d\.]/g,'');
        }
        //必须保证第一个为数字而不是.
        formattedValue = formattedValue.replace(/^\./g,'');
        //保证只有出现一个.而没有多个.
        formattedValue = formattedValue.replace(/\.{2,}/g,'.');
        //保证.只出现一次，而不能出现两次以上
        formattedValue = formattedValue.replace('.','$#$').replace(/\./g,'').replace('$#$','.');
        //小数点位数
        if(this.decimalLength==1){
          formattedValue = formattedValue.replace(/^(\-)*(\d+)\.(\d).*$/,'$1$2.$3');
        }else if(this.decimalLength==2){
          formattedValue = formattedValue.replace(/^(\-)*(\d+)\.(\d\d).*$/,'$1$2.$3');
        }else if(this.decimalLength==3){
          formattedValue = formattedValue.replace(/^(\-)*(\d+)\.(\d\d\d).*$/,'$1$2.$3');
        }


        if (formattedValue !== value) {
          this.$refs.input.value = formattedValue
        }
        this.$emit('input', Number(formattedValue))
      },
      add:function () {console.log(this.decimalLength)
        this.editVal++;
        this.$emit('input', this.editVal);
      },
      sub:function () {
        this.editVal--;
        if(this.editVal<this.min){
          this.editVal = this.min
        }
        this.$emit('input', this.editVal);
      }
    },
    watch: {
      value(val) {
        this.editVal = val;//value的watch，监听变更并同步到editVal上
      },
      editVal(val){
        console.log(val);
        console.log(this.value)
      }
    }

  }

</script>
<style scoped>
  .es-count-input{width: 60%}
  .count-btn{width: 36px;height: 36px;border: solid 1px #e3e3e3;display: block;text-align: center;font-size: 18px;line-height: 34px;overflow: hidden}
  .input-wrap{margin: 0 5px}
  .input{height: 36px;border: solid 1px #e3e3e3;width: 100%;text-align: center}
</style>
