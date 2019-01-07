<template>
  <section class="msite">
      <!--首页头部-->
      <HeaderTop :title="address.name">  <!--":"强制绑定-->
        <span class="header_search" slot="left">
          <i class="iconfont icon-search"></i>
        </span>
        <span class="header_login" slot="right">
          <span class="header_login_text">登录|注册</span>
        </span>
      </HeaderTop>
      <!--首页导航-->
      <nav class="msite_nav">
        <div class="swiper-container" v-if="categroys.length">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for = "(categroys, index) in categroysArr" :key="index">
              <a href="javascript:" class="link_to_food" v-for = "(categroy, index) in categroys" :key="index">
                <div class="food_container">
                  <img :src="baseImageUrl + categroy.image_url">
                </div>
                <span>{{categroy.title}}</span>
              </a>
            </div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
        </div>
        <img src="./images/msite_back.svg" alt="back" v-else>
      </nav>
      <!--首页附近商家-->
      <div class="msite_shop_list">
        <div class="shop_header">
          <i class="iconfont icon-xuanxiang"></i>
          <span class="shop_header_title">附近商家</span>
        </div>
        <ShopList></ShopList>
      </div>
  </section>
</template>

<script>
  import {mapState} from 'vuex'
  import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
  import ShopList from '../../components/ShopList/ShopList.vue'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  //import { setTimeout } from 'timers';
  export default {
    data () {
      return {
        baseImageUrl: 'https://fuss10.elemecdn.com'
      }
    },
    mounted(){
    this.$store.dispatch('getCategroys')
    this.$store.dispatch('getShops')
    this.$store.dispatch('getUserInfo')
    },
    //计算属性
    computed: {
      ...mapState(['address', 'categroys', 'userInfo']),
      //根据categroies一维数组生成一个二维数组
      categroysArr(){
        const {categroys} = this
        //准备二位数组
        const arr = []
        //准备小数组（最大长度为8）
        let minArr = []
        //遍历数组
        categroys.forEach(element => {
          //如果小数组满了，创建词汇表新的数组
          if (minArr.length === 8){
            minArr = []
          }
          //如果小数组是空的，将小数组保存到大叔组中
          if (minArr.length === 0){
            arr.push(minArr)
          }
          //将分类保存到小数组中
          minArr.push(element)
        })
        return arr
      }
    },
    watch: {
      categroys (value) { //categroys中有数据，在异步更新前执行
        /*
        setTimeout(() => {// 可实现效果，不是最佳
          new Swiper('.swiper-container', {
            loop:true, //循环轮播
            pagination:{ //分页器
              el:'.swiper-pagination'
            }
          })
        }, 100)
        */
        //界面更新立刻创建swiper对象
        this.$nextTick(() => { //界面更新后立刻调用
          new Swiper('.swiper-container', {
            loop:true, //循环轮播
            pagination:{ //分页器
              el:'.swiper-pagination'
            }
          })
        })
      }
    },
    components:{
      HeaderTop,
      ShopList  
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  &.msite  //首页
    width 100%
    .header
      background-color #02a774
      position fixed
      z-index 100
      left 0
      top 0
      width 100%
      height 45px
      .header_search
        position absolute
        left 15px
        top 50%
        transform translateY(-50%)
        width 10%
        height 50%
        .icon-sousuo
          font-size 25px
          color #fff
      .header_title
        position absolute
        top 50%
        left 50%
        transform translate(-50%, -50%)
        width 50%
        color #fff
        text-align center
        .header_title_text
          font-size 20px
          color #fff
          display block
      .header_login
        font-size 14px
        color #fff
        position absolute
        right 15px
        top 50%
        transform translateY(-50%)
        .header_login_text
          color #fff
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774
    .msite_shop_list
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff
      .shop_header
        padding 10px 10px 0
        .shop_icon
          margin-left 5px
          color #999
        .shop_header_title
          color #999
          font-size 14px
          line-height 20px
</style>