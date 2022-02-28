
import {ElLoading} from "element-plus";
import request from "../plugins/http.js";


export function req(url,then){
    let listJson = sessionStorage.getItem(url)
    try {
        listJson = JSON.parse(listJson)
    } catch (e) {
        listJson = null;
    }
    if (listJson == null) {
        let loading = ElLoading.service({
            lock: true,
            text: 'Loading',
            background: 'rgba(0, 0, 0, 0.7)',
        });
        request({
            //请求地址..
            url:url,
            //请求方式..
            method:"get",
            //post请求时使用..
            /* data:{
                 name:'lisi'
             },
             //get请求时使用..
             params:{
                 id:'hahahhaahah'
             }*/
        }).then(function (res) {
            sessionStorage.setItem(url, JSON.stringify(res))
            loading.close();
            listJson = res
            then(listJson);
        })
    } else {
        then(listJson);
    }

}