/**
 * 通过mutations间接更新state的多个方法对象
 */
import {
  RECIEVE_ADDRESS,
  RECIEVE_CATEGROYS,
  RECIEVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  RECEIVE_GOODS,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT
} from './mutition-types'
import {
  reqAddress,
  reqFoodCategroys,
  reqShops,
  reqUserInfo,
  reqLogOut,
  reqShopInfo,
  reqShopRatings,
  reqShopGoods
} from '../api'

export default{
  //异步获取地址
  async getAddress ({commit, state}) {
    //发送ajax异步请求
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    //提交一个mutation
    if (result.code === 0){
      const address = result.data
      commit(RECIEVE_ADDRESS, {address})
    }
  },
  //异步获取商品分类
  async getCategroys ({commit}) {
    //发送ajax异步请求
    const result = await reqFoodCategroys()
    //提交一个mutation
    if (result.code === 0){
      const categroys = result.data
      commit(RECIEVE_CATEGROYS, {categroys})
    }
  },
  //异步获取商店
  async getShops ({commit, state}) {
    //发送ajax异步请求
    const {longitude, latitude} = state
    const result = await reqShops(longitude, latitude)
    //提交一个mutation
    if (result.code === 0){
      const shops = result.data
      commit(RECIEVE_SHOPS, {shops})
    }
  },
  //记录用户信息
  recordUserInfo({commit}, userInfo) {
    commit(RECEIVE_USER_INFO, {userInfo})
  },
  // 异步获取用户信息
  async getUserInfo({commit}) {
  const result = await reqUserInfo()
    if (result.code === 0) {
    commit(RECEIVE_USER_INFO, {userInfo: result.data})
    }
  },
  // 退出登陆
  async logout({commit}) {
    const result = await reqLogOut()
    if (result.code === 0) {
    commit(RESET_USER_INFO)
    }
  },
  // 异步获取商家信息
  async getShopInfo({commit}) {
    const result = await reqShopInfo()
    if (result.code === 0) {
    const info = result.data
    info.score = 3.5
    commit(RECEIVE_INFO, {info})
    }
  },
  // 异步获取商家评价列表
  async getShopRatings({commit}) {
    const result = await reqShopRatings()
    if (result.code === 0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS, {ratings})
    }
  },
  // 异步获取商家商品列表
  async getShopGoods({commit}, callback) {
    const result = await reqShopGoods()
    if (result.code === 0) {
      const goods = result.data
      commit(RECEIVE_GOODS, {goods})
      // 如果组件中传递了接收消息的回调函数, 数据更新后, 调用回调通知调用的组件
      callback && callback()
    }
  },
  // 更新指定food 的count
  updateFoodCount ({commit}, {food, isAdd}) {
    if (isAdd) { // 增加
      commit(INCREMENT_FOOD_COUNT, {food})
    } else { // 减少
      commit(DECREMENT_FOOD_COUNT, {food})
    }
  }
}