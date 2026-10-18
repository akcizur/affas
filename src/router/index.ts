import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
 {path:'/',component:()=>import('@/pages/Home')},
 {path:'/installation',component:()=>import('@/pages/Installation')},
 {path:'/posts',component:()=>import('@/pages/ListPosts')},
 {path:'/:pathMatch(.*)*',redirect:'/'}
]
export default createRouter({history:createWebHashHistory(),routes,scrollBehavior:()=>({top:0})})
