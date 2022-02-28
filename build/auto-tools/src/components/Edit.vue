
<template>
  <el-container>
    <el-aside class="hidden-sm-and-down">
      <el-menu
          :default-active="activity"
          class="el-menu-vertical-demo"
          @select="handleSelect"
      >
        <el-menu-item index="category@ui" >
          <span>自动分类规则(可视化编辑)</span>
        </el-menu-item>
        <el-menu-item index="category@js">
          <span>自动分类规则(JS编辑)</span>
        </el-menu-item>
        <el-menu-item index="app">
          <span>APP规则编辑</span>
        </el-menu-item>
        <el-menu-item index="helper" >
          <span>无障碍规则编辑</span>
        </el-menu-item>
        <el-menu-item index="sms">
          <span>短信规则编辑</span>
        </el-menu-item>
        <el-menu-item index="notice">
          <span>通知规则编辑</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main style="height: max-content;">
      <iframeTemplate :url="url" :_data="Idata"  :type="type"></iframeTemplate>
    </el-main>
  </el-container>

</template>

<script>


import {req} from "@/request/request";
import IframeTemplate from "@/components/IframeTemplate";


export default {
  name: "Edit",
  components:{
    IframeTemplate
  },
  data(){
    return {
      "activity":"category@ui","url":"./auto/cate/index.html","Idata":"","type":"app"
    }
  },
  created(){
    if(this.$route.query["site"]!==undefined){
      this.activity = this.$route.query["site"];
      return
    }
    if(this.$route.query["type"]==="cloud"){
      this.analyze(this.$route.query["id"]);
    }
  },
  methods:{
    randString:function () {
      let len =  32;
      var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
      var maxPos = $chars.length;
      var pwd = '';
      for (let i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
      }
      return pwd;
    },
    handleSelect:function(key,path) {
      this.activity = key
      console.log(this.activity,key,path)
      switch (key){
        case "sms":case "notice":case "helper":case "app":{
          let json = {
            "id":"",
            "identify":key,
            "dataId":this.randString(),
            "version":"1",
            "regular_name":"",
            "regular_remark":"",
            "regular_app":"",
            "regex_input":"",
            "str_input":"",
            "type":"",
            "account_name1":"",
            "account_name2":"",
            "money":"",
            "fee":"",
            "shopName":"",
            "shopRemark":"",
            "time":"",
            "auto":"0"
          }
          this.url="./auto/reg/index.html?t="+(new Date()).getMilliseconds()
          this.type=key
          this.Idata = JSON.stringify(json);
          break;
        }
        case "category@js":{
          let json = {
            "id":"",
            "dataId":this.randString(),
            "version":"1",
            "regular_name":"",
            "regular_remark":"",
            "code":"/*\r\n* 可用变量\r\n*\r\n* shopName 商户名称,shopRemark 商户备注,type 账单类型（支出、收入）,hour 当前时,minute 当前分,money 金额\r\n* 可用内置函数（判断是否在当前时间段） isInTimeInner(minTime, maxTime,timeHour,timeMinute)\r\n* minTime 最小时间（如12:00）, maxTime 最大时间（如13:00）,timeHour 当前时,timeMinute 当前分\r\n* 比如：if(true)return '其它';\r\n*/\r\n\r\n"
          }
          this.url="./auto/cate/js.html?t="+(new Date()).getMilliseconds()
          this.type=key
          this.Idata = JSON.stringify(json);
          break;
        }case "category@ui":{
          let json = {
            "id":"",
            "dataId":this.randString(),
            "version":"1",
            "regular_name":"",
            "regular_remark":"",
            "regular_time1":"00:00",
            "regular_time2":"23:00",
            "regular_money1_link":"=",
            "regular_money1":"",
            "regular_money2_link":"=",
            "regular_money2":"",
            "regular_shopName_link":"包含",
            "regular_shopName":"",
            "regular_shopRemark_link":"包含",
            "regular_shopRemark":"",
            "regular_type":"支出",
            "regular_sort":"其它"
          }
          this.url="./auto/cate/index.html?t="+(new Date()).getMilliseconds()
          this.type=key
           this.Idata = JSON.stringify(json);
          break;
        }
      }
     // console.log(key, keyPath)
    },
    analyze:function (id) {
      let that= this;
      req("regulars/"+id+".json",function (listJson) {
        that.setData(listJson["from"],JSON.stringify(listJson).indexOf('{\\"code\\":')!==-1,listJson)
      })
      //从云端获取数据并渲染
    },
    setData:function (type,isJs,data) {
      if(type==="category"){
        if(isJs){
          this.activity = type+"@js"
          this.url="./auto/cate/js.html"
        }else{
          this.activity = type+"@ui"
          this.url="./auto/cate/index.html"
        }
        this.type=type
        this.Idata = data.data[0].data;
      }else{
        this.activity = type
        this.url="./auto/reg/index.html"
        this.type=type
        this.Idata = data.data[0].data;
      }
      console.log(type,isJs,data)
    },

  }
}
</script>

<style scoped>
.el-aside {
  text-align: left;
  --el-aside-width:210px
}
</style>