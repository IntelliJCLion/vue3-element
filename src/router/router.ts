import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'



const router = createRouter({
  history:createWebHistory(),
  routes:[
    {
      path:"/",
      component:()=>import("@/components/login.vue"),
      children:[
      ]

    },
    {
      path:'/index',
      component:()=>import("@/components/index.vue"),
      children:[
        {
          path:'/list',
          name:'list',
          component: ()=>import(/* webpackChunkName: "list" */'@/components/login/entry/list.vue')
        },
        {
          path:'/emp/add',
          name:'emp/add',
          component: ()=>import(/* webpackChunkName: "list" */'@/components/login/entry/add.vue')
        },
        {
          path: '/emp/update',
          name:'update',
          component:()=>import("@/components/login/entry/update.vue")
        },
        {
          path: '/tearoom',
          name:'tearoom',
          component:()=>import("@/components/login/tearoom/list.vue")

        }

      ]
    },
    {
      path: '/enroll',
      // name: 'enroll',
      component:()=>import("@/components/login/entry/add.vue")
    }
  ]
})


export default router
