/** 
 * ajax请求，返回promise对象
 * 异步返回：response.data数据
*/
import axios from 'axios'
import { resolve } from 'path';
export default function ajax(url, data={}, type='GET'){
  return new Promise(function (reslove, reject){
    //执行异步ajax请求
    let promise
    if (type==='GET') {
      //准备URL，query参数数据
      let dataStr = '' //拼接字符串
      Object.keys(data).forEach(key =>{
        dataStr +=key +'='+data[key] + '&'
      })
      if (dataStr !== ''){
        dataStr = dataStr.substring(0,dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      //发送get请求
      promise = axios.get(url)
    } else {
      promise = axios.post(url,data)
    } 
    promise.then(function(response){
      //成功调用resolve()
      resolve(response.data)
    }).catch(function(error){
    //失败调用reject()
    reject(error)
    })
  })
}
