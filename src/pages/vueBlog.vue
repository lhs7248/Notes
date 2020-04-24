<template>
  <div>
    <div class="row-item" v-for="item in rows " v-bind:key="item">
      <a class="item"  v-bind:href=item.url target="_blank">{{item.name}}</a>
      <div style="background-color: #999999;width: 100%;height: 1px;margin-top: 5px"></div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'vueBlog',
  data () {
    return {
      rows: [

        {name: 'vue 初使用', url: 'http://note.youdao.com/noteshare?id=e33b4c7529e8db7bd384979fa86a32a1'},
        {name: 'vue的环境变量配置', url: 'http://note.youdao.com/noteshare?id=2945d8c6a21d94fd649ed88a54db1dce'},
        {name: 'vue 网络请求', url: 'http://note.youdao.com/noteshare?id=17846368fe5ed62317933de4ddfe1c90'},
        {name: 'vue-router 使用', url: 'http://note.youdao.com/noteshare?id=435b1a8b8f45639690a2ebdbf708e960'}
      ]
    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
.header{
  color: blue;
  font-size: 32px;
  margin-top: 44px;
  margin-left: 44px;
  color: #42b983;
  margin-bottom: 44px;
}
  .row-item{
    height: 44px;
    margin-left: 44px;
    margin-right: 44px;
    color: #333333;
    text-align: left;

  }

  .item{
    text-decoration: none;
  }
</style>
