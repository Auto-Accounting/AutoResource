<template>
  <div class="hello">
    <img
        src="http://image.ankio.net/uPic/2021_12_31_14_10_42_1640931042_1640931042780_PWT1aN.png"
        alt="自动记账" class="logo">
    <h1>自动记账 • 在线工具</h1>
    <p>
      🚀一款基于Xposed和无障碍的记账插件
    </p>
    <router-link to="/Docs"><el-button type="primary">文档 →</el-button></router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello .logo {
  height: 6rem;
  min-width: 6rem;
  margin-top: 2.2rem;
}

</style>
