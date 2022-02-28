import axios from 'axios';
import qs from "qs";

const   service=axios.create({
    timeout:50000,                                   //超时时间
    baseURL:"https://cdn.jsdelivr.net/gh/dreamncn/AutoResource@master",             // 我们在请求接口的时候就不同写前面 会自动我们补全
    transformRequest: data => qs.stringify(data)    //post请求参数处理,防止post请求跨域
})
// http request 拦截器
service.interceptors.request.use(config=>{
    //如果存在jwt，则将jwt添加到每次请求之中..

    return config
},err=>{
    return err
})
// http response 拦截器
service.interceptors.response.use(response=>{
    //接收返回数据..
    return response.data
},err=>{
    return showMessage(err.message)
})

//封装错误提示信息..
function showMessage(msg){
    console.log(msg)
    return Promise.reject()
}
export default service;