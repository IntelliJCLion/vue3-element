import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'



const router = createRouter({
  history:createWebHistory(),
  routes:[
    {
      path:"/",
      name:"login",
      component:()=>import(/* webpackChunkName: "login" */"@/components/login.vue"),
      // children:[
      // ]

    },
    {
      path: '/enroll',
      name: 'enroll',
      component: () => import(/* webpackChunkName: "enroll" */"@/components/login/entry/add.vue")

    },
    {
      path:'/index',
      component:()=>import(/* webpackChunkName: "index" */"@/components/index.vue"),
      children:[
        {
          path:'/list',
          name:'list',
          component: ()=>import(/* webpackChunkName: "list" */'@/components/login/entry/list.vue')
        },
        {
          path:'/emp/add',
          name:'emp/add',
          component: ()=>import(/* webpackChunkName: "emp/add" */'@/components/login/entry/add.vue')
        },
        {
          path: '/emp/update',
          name:'update',
          component:()=>import(/* webpackChunkName: "update" */"@/components/login/entry/update.vue")
        },
        {
          path: '/tearoom',
          name:'tearoom',
          component:()=>import(/* webpackChunkName: "tearoom" */"@/components/login/tearoom/list.vue")

        }
      ]}
  ]


})


export default router
