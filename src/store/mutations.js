/**
 * 直接更新state的多个方法的对象
 */
import {
  RECIEVE_ADDRESS,
  RECIEVE_CATEGROYS,
  RECIEVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO
} from './mutition-types'
//import state from './state';

export default{
   [RECIEVE_ADDRESS] (state, {address}) {
     state.address = address
   },
  [RECIEVE_CATEGROYS] (state, {categroys}) {
    state.categroys = categroys
  },
  [RECIEVE_SHOPS] (state, {shops}) {
    state.shops = shops
  },
  [RECEIVE_USER_INFO](state, {userInfo}) {
    state.userInfo = userInfo
  },
  [RESET_USER_INFO](state) {
  state.userInfo = {}
  }
}