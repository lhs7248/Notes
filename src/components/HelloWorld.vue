<template>
  <div>
    <div class="header">随记</div>
    <div class="row-item" v-for="item in rows ">
      <a class="item"  v-bind:href=item.url target="_blank">{{item.name}}</a>
      <div style="background-color: #999999;width: 100%;height: 1px;margin-top: 5px"></div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      rows: [

        {name: 'Block底层的实现原理', url: 'http://note.youdao.com/noteshare?id=87c50ddb8a0abeb0940f1f723d7822a6'},
        {name: '关于autoreleasepool', url: 'http://note.youdao.com/noteshare?id=6a30a362e72f10f3c3adbb646a7e801d'},
        {name: 'iOS 关于 setting 使用', url: 'http://note.youdao.com/noteshare?id=cde930c76efd9c17b16a26a50aa2a65f'},
        {name: '如何动态修改plist文件', url: 'http://note.youdao.com/noteshare?id=3085e10c682b9193b3fc0c11a5b03b9f'},
        {name: '位运算的相关操作', url: 'http://note.youdao.com/noteshare?id=44cd40eb66db1851f7895a914f1870c4'},
        {name: '无痕埋点的思路', url: 'http://note.youdao.com/noteshare?id=aa3b248ada4c3645f977e63462195db1'},
        {name: '链表的概念', url: 'http://note.youdao.com/noteshare?id=0e933256544b7ceedb80331994d2d12b'},
        {name: '堆和栈道概念', url: 'http://note.youdao.com/noteshare?id=4cead06389496ef506a4afc0ab42d588'},
        {name: '响应者链条', url: 'http://note.youdao.com/noteshare?id=708ff59b73e523a191ace7a0cec1f110'},
        {name: 'KVO原理及如何自己实现KVO', url: 'http://note.youdao.com/noteshare?id=0280ba59e08534bd28cc8b77ae842972'},

        {name: 'class 、object及method', url: 'http://note.youdao.com/noteshare?id=572f853d39f266957f0b7fda83df66a9'}


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
