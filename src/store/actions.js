/**
 * 通过mutations间接更新state的多个方法对象
 */
import {
  RECIEVE_ADDRESS,
  RECIEVE_CATEGROYS,
  RECIEVE_SHOPS
} from './mutition-types'
import {
  reqAddress,
  reqFoodCategroys,
  reqShops
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
}
}