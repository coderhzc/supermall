import Vue from 'vue'       //底部导航栏的路由
import Router from 'vue-router'
import Detail from "@/views/detail/Detail";
Vue.use(Router)

const routes=[
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    component: () => import('@/views/home/Home')
  },
  {
    path:'/category',
    component: () => import('@/views/category/Category')
  },
  {
    path:'/shopcar',
    component: () => import('@/views/shopcar/Shopcar')
  },
  {
    path:'/profile',
    component: () => import('@/views/profile/Profile')
  },
  {
    path:'/detail/:iid',
    component: Detail
  },
]
export default new Router({
  routes,
  mode:'history'
})
