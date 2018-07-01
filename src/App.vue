<template>
  <div id="app">
    <!--<router-view/>-->
    <el-container >
      <el-header >
        <div style="text-align: left">
          <span>随记</span>
        </div>
      </el-header>
      <el-container style="height: 1000px;width: 100%; border: 1px solid #eee">
        <el-aside width="100px" style="background-color: rgb(238, 241, 246)">
          <el-menu style="width: 100%" :default-openeds="['1']"
                   @select="handleSelect">
            <el-menu-item style="width: 100%" index="1">iOS-Blog</el-menu-item>

            <el-menu-item style="width: 100%"  index="2">Vue-Blog</el-menu-item>
          </el-menu>
        </el-aside>
        <router-view/>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App',

  methods: {
    handleSelect (key, keyPath) {
      if (parseInt(key) === 1) {
        this.$router.push({name: 'iOSBlog'})
      } else if (parseInt(key) === 2) {
        this.$router.push({name: 'vueBlog'})
      }
      console.log(key)
    }
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
