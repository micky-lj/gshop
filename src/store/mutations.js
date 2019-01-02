/**
 * 直接更新state的多个方法的对象
 */
import {
  RECIEVE_ADDRESS,
  RECIEVE_CATEGROYS,
  RECIEVE_SHOPS
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
  }
}