import Vue from 'vue'
import Router from 'vue-router'
import iOSBlog from '@/pages/iOSBlog'

import vueBlog from '@/pages/vueBlog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/iOSBlog',
      name: 'iOSBlog',
      component: iOSBlog
    }, {
      path: '/vueBlog',
      name: 'vueBlog',
      component: vueBlog
    }
  ]
})
