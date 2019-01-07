/**
 * 通过mutations间接更新state的多个方法对象
 */
import {
  RECIEVE_ADDRESS,
  RECIEVE_CATEGROYS,
  RECIEVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO
} from './mutition-types'
import {
  reqAddress,
  reqFoodCategroys,
  reqShops,
  reqUserInfo
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
    const result = await reqLogout()
    if (result.code === 0) {
    commit(RESET_USER_INFO)
    }
  }
}