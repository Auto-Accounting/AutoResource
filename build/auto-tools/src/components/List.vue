<template>

  <div>
    <el-cascader
        v-model="value"
        :options="options"
        placeholder="请选择分类后查看"
    ></el-cascader>

    <el-button type="primary" style="margin-left:10px " @click="onSelectAndClickSearch">查找 →</el-button>
  </div>

  <el-table :data="tableData" style="width: 100%">
    <el-table-column type="expand">
      <template #default="props">
        <pre><b>简介:</b><br> {{ props.row.remark }}</pre>
        <pre><b>更新日志:</b><br> {{ props.row.log }}</pre>
      </template>
    </el-table-column>
    <el-table-column label="规则名称" prop="name"/>
    <el-table-column label="更新时间" prop="date"/>
    <el-table-column label="版本号" prop="version"/>
    <el-table-column label="作者" prop="author"/>

    <el-table-column fixed="right" label="操作" >
      <template #default="props">
        <el-button
            size="small" type="primary" plain
            @click="handleEdit(props.$index, props.row)"
        >查看</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script>

import {ref} from 'vue'
import {req} from "@/request/request";




const value = ref('')

let List = {
  name: "List",
  data() {
    return {
      tableData: [],
      value: value,
      options: [
        {
          value: 'category',
          label: '自动分类规则',
        },
        {
          value: 'app',
          label: 'App规则',
          children: [
            {
              value: 'com.tencent.mm',
              label: '微信',
            },
            {
              value: 'com.eg.android.AlipayGphone',
              label: '支付宝',
            },
            {
              value: 'com.tencent.mobile',
              label: 'QQ',
            },
            {
              value: 'com.unionpay',
              label: '云闪付',
            },
          ],
        },
        {
          value: 'helper',
          label: '无障碍规则',
          children: [
            {
              value: 'com.tencent.mm',
              label: '微信',
            },
            {
              value: 'com.eg.android.AlipayGphone',
              label: '支付宝',
            },
            {
              value: 'com.tencent.mobile',
              label: 'QQ',
            },
          ],
        },
        {
          value: 'sms',
          label: '短信规则',
          children: [],
        },
        {
          value: 'notice',
          label: '通知规则',
          children: [],
        },
      ]

    }
  },
  created() {
    let that = this;
    req("regulars/list.json",function (listJson) {
      onSetRegularTypes(listJson);
    })

    function onSetRegularTypes(allData) {
      let child = []
      for (let i in allData["sms"]) {
        child.push({value: i, label: i})
      }
      that.options[3]["children"] = child
      child = []
      for (let i in allData["notice"]) {
        let j = i;
        switch (i) {
          case "com.tencent.mm":
            j = "微信";
            break;
          case "com.unionpay":
            j = "云闪付";
            break;
          case "com.icbc":
            j = "工商银行";
            break;
        }
        child.push({value: i, label: j})
      }
      that.options[4]["children"] = child

    }
  },
  methods: {

    onSelectAndClickSearch: function () {

      function add0(m){return m<10?'0'+m:m }
      function format(t)
      {
        const time = new Date(t);
        const y = time.getFullYear();
        const m = time.getMonth()+1;
        const d = time.getDate();
        const h = time.getHours();
        const mm = time.getMinutes();
        const s = time.getSeconds();
        return y+'年'+add0(m)+'月'+add0(d)+'日 '+add0(h)+':'+add0(mm)+':'+add0(s);
      }

      let listJson = sessionStorage.getItem("regulars/list.json")
      try {
        listJson = JSON.parse(listJson)
      }catch (e) {
        return
      }
      const value = ref(this.value)
      const data =value.value;
      const f = data[0];
      const c = data[1];
      let table
      if (c!==undefined){
        table =  listJson[f][c]
      }else{
        table =  listJson[f]
      }
      let ret = []
      for(let i in table){
        let obj = table[i]
        obj["cloud_id"]=i
        //@dreamncn
        obj["name"] = obj["name"].split("@")[0]

        obj["date"] = format(parseInt(obj["date"])*1000)

        obj["log"] = obj["log"]===""?"无":obj["log"]
        ret.push(obj)
      }
      this.tableData=ret
    },
    handleEdit:  function (index,row) {
      this.$router.push({ path: '/Edit', query: { type: 'cloud',id:row["cloud_id"]} })
    }
  }
}
export default List

</script>

<style scoped>

</style>