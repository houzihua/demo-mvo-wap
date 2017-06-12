<template>
  <div>
    <mt-header fixed title="个人中心"></mt-header>
    <div class="header-space"></div>
    <div class="es-single-link">
      <mt-cell title="我的积分" is-link value="224"></mt-cell>
    </div>
    <div class="es-single-link">
      <mt-cell title="公司认证" is-link value="已认证"></mt-cell>
    </div>
    <div class="es-single-link">
      <mt-cell title="我的品牌" is-link></mt-cell>
    </div>
    <div class="es-single-link">
      <mt-cell title="资料库" is-link></mt-cell>
    </div>

    <ul class="es-link-list mb-10">
      <li class="es-link-item">
        <mt-cell title="个人信息" is-link></mt-cell>
      </li>
      <li class="es-link-item">
        <mt-cell title="修改密码" is-link></mt-cell>
      </li>
      <li class="es-link-item">
        <mt-cell title="更换手机号" is-link></mt-cell>
      </li>
    </ul>

    <ul class="es-link-list mb-10">
      <li class="es-link-item">
        <mt-cell title="公司信息" is-link></mt-cell>
      </li>
      <li class="es-link-item">
        <mt-cell title="公司形象" is-link></mt-cell>
      </li>
      <li class="es-link-item">
        <mt-cell title="公司证书" is-link></mt-cell>
      </li>
      <li class="es-link-item">
        <mt-cell title="公司联系人" is-link></mt-cell>
      </li>
      <li class="es-link-item">
        <mt-cell title="去看官方demo" is-link to="http://elemefe.github.io/mint-ui/#/"></mt-cell>
      </li>
    </ul>

    <es-footer selected="4">

    </es-footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import EsFooter from '../../components/es-footer.vue'

  export default {
    props: {
    },
    data(){
      return {}
    },
    methods:{

    },
    components: { EsFooter: EsFooter }

  }

</script>
<style>

  .es-single-link {padding: 0px;margin-bottom: 10px;background: #fff}
  .es-single-link .mint-cell{background: #fff;padding: 0 10px}
  .es-single-link .mint-cell-wrapper{background: #fff}

  .es-link-list{background: #fff;padding: 0;}
  .es-link-item .mint-cell{padding: 0 10px}
  .es-link-item .mint-cell-wrapper{border-bottom: solid 1px #eee}
  .es-link-item:last-child .mint-cell{background: none}
  .es-link-item:last-child .mint-cell-wrapper{border-bottom: none}
  .es-link-item:first-child .mint-cell-wrapper{background: none}

</style>
