<template>
  <el-container>
    <el-header class="hidden-sm-and-down">


      <el-row :gutter="20">
        <el-col :span="6" style="text-align: left">
          <div class="grid-content navbar">
            <el-badge value="Tools" class="item">
              <a href="/" class="home-link router-link-active" one-link-mark="yes">
                <img
                    src="http://image.ankio.net/uPic/2021_12_31_14_10_42_1640931042_1640931042780_PWT1aN.png"
                    alt="自动记账" class="logo">
                <span class="site-name">自动记账</span></a>
            </el-badge>
          </div>
        </el-col>
        <el-col :span="18">
          <div class="grid-content">
            <el-menu
                class="el-menu-demo"
                :default-active="$route.path"
                mode="horizontal"
                router="router"
            >
              <el-menu-item index="/" route="/">首页</el-menu-item>
              <el-menu-item index="/List" route="/List">在线规则</el-menu-item>
              <el-menu-item index="/Edit" route="/Edit">规则编写</el-menu-item>
              <el-menu-item index="/Upload" route="/Upload">规则上传</el-menu-item>
              <el-menu-item index="/Wechat" route="/Wechat">微信适配</el-menu-item>
              <el-menu-item index="/Question" route="/Question">问题反馈</el-menu-item>
              <el-menu-item index="/Docs" route="/Docs">文档</el-menu-item>
              <el-menu-item index="/Github" route="/Github">Github</el-menu-item>
            </el-menu>
          </div>
        </el-col>
      </el-row>


    </el-header>
    <el-main>
      <router-view>

      </router-view>
    </el-main>
    <el-footer>
      <div class="footer">
        Copyright © 2020-2022
        <span>Ankio | GPL3.0 License</span></div>
    </el-footer>
  </el-container>

</template>

<script>
import 'element-plus/lib/theme-chalk/display.css'



export default {
  name: 'App',
  components: {},
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

.el-row {
  margin-bottom: 20px;
}

.el-row:last-child {
  margin-bottom: 0;
}

.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.navbar {
  padding: 0.7rem 1.5rem;
  line-height: 2.2rem;
  transition: transform 0.3s;
}

.navbar {

  z-index: 20;
  top: 0;
  left: 0;
  right: 0;
  height: 3.6rem;

  box-sizing: border-box;

}

.navbar a, .navbar span, .navbar img {
  display: inline-block;
}

.navbar .logo {
  height: 2.2rem;
  min-width: 2.2rem;
  margin-right: 0.8rem;
  vertical-align: top;
}

.navbar a, .navbar span, .navbar img {
  display: inline-block;
  margin-right: 5px;
}

.navbar .site-name {
  font-size: 1.3rem;
  font-weight: 600;
  color: #004050;
  position: relative;
}

.item {
  margin-top: 10px;
  margin-right: 40px;
}
body {
  margin: 0;
}
</style>
