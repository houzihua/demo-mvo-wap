<template>
    <div>
        <mt-header fixed title="个人中心"></mt-header>
        <div class="header-space"></div>

        <div class="es-single-link">
            <mt-cell title="count1" @click.native="popupVisible1 = true" is-link :value="count1"></mt-cell>
        </div>

        <div class="es-single-link">
            <mt-cell title="count2" @click.native="popupVisible1 = true" is-link :value="count2"></mt-cell>
        </div>

        <div class="es-single-link">
            <mt-cell title="count3" @click.native="popupVisible1 = true" is-link :value="count3"></mt-cell>
        </div>

        <div class="es-single-link">
            <mt-cell title="count4" @click.native="popupVisible1 = true" is-link :value="count4"></mt-cell>
        </div>

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


        <es-page-in-right :popupVisible="popupVisible1">

            <mt-button @click.native="popupVisible1 = false" size="large" type="default">关闭 popup</mt-button>
            <es-count-input ref="test" v-model="count1" decimalLength="0"></es-count-input>
            <es-count-input ref="test" v-model="count2" decimalLength="1"></es-count-input>
            <es-count-input ref="test" v-model="count3" decimalLength="2"></es-count-input>
            <es-count-input ref="test" v-model="count4" decimalLength="4"></es-count-input>

            <div class="mt-10">
                <mt-button @click.native="popupVisible2 = true" size="large" type="primary">打开新 popup</mt-button>
            </div>

            <div class="bottom-full-wrap">
                <mt-button @click.native="popupVisible1 = false" class="btn-orange" size="large" type="default">关闭
                    popup
                </mt-button>
            </div>
        </es-page-in-right>

        <es-page-in-right :popupVisible="popupVisible2">
            <mt-button @click.native="popupVisible2 = false" size="large" type="default">关闭 popup</mt-button>
        </es-page-in-right>
        <es-footer selected="4">

        </es-footer>


    </div>
</template>

<script type="text/ecmascript-6">
    import EsFooter from '../../components/es-footer.vue';
    import EsPageInRight from '../../components/es-page-in-right.vue';
    import EsCountInput from '../../components/es-count-input.vue';
    import EsCountInputTest from '../../components/es-count-input-test.vue';


    export default {
        props: {},
        data(){
            return {
                popupVisible1: false,
                popupVisible2: false,
                popupVisible3: false,
                popupVisible4: false,
                count1: 1,
                count2: 22,
                count3: 333,
                count4: 4444
            }
        },
        methods: {
            test: function () {
//        console.log('money： '+this.$refs.test.value)
                console.log('this.count： ' + this.count)
            }
        },
        watch: {
            money(val) {
                console.log('moneyNew:' + val)
            }
        },
        components: {
            EsFooter: EsFooter,
            EsPageInRight: EsPageInRight,
            EsCountInput: EsCountInput,
            EsCountInputTest: EsCountInputTest

        },
        computed: {
            money: function () {
                return this.count
            }
        }
    }

</script>
<style>

    .es-single-link {
        padding: 0px;
        margin-bottom: 10px;
        background: #fff;
    }

    .es-single-link .mint-cell {
        background: #fff;
        padding: 0 10px
    }

    .es-single-link .mint-cell-wrapper {
        line-height: 47px;
        background: #fff
    }

    .es-link-list {
        background: #fff;
        padding: 0;
    }

    .es-link-item .mint-cell {
        padding: 0 10px
    }

    .es-link-item .mint-cell-wrapper {
        border-bottom: solid 1px #eee
    }

    .es-link-item:last-child .mint-cell {
        background: none
    }

    .es-link-item:last-child .mint-cell-wrapper {
        border-bottom: none
    }

    .es-link-item:first-child .mint-cell-wrapper {
        background: none
    }


</style>
