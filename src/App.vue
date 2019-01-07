<template>
    <div id="app">
        <router-view></router-view>
        <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
//import {reqFoodCategroys} from './api'
export default {
    async mounted(){
        // const result = await reqFoodCategroys()  //测试接口。异步获取ajax
        // console.log(result)
        //this.$store.dispatch('getAddress')
        this.getAddress() //用方法实现，另一种写法
        this.$store.dispatch('getUserInfo')
    },
    methods: {
        ...mapActions(['getAddress'])
    },
    components:{
        FooterGuide
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .app
        width 100%
        height 100%
        background #f5f5f5
</style>
