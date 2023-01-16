// import { createRouter, createWebHistory } from 'vue-router'
// // import userForm from './components/userForm.vue';
// // import userDetails from './components/userDetails.vue';
// import Register from './Register.vue'
// i
// const routes = [
//   {
//     path: '/',
//     name: 'Register',
//     component: Register
//   },

//   {
//     path: '/details',
//     name: 'details',
//     component:userDetails
//   }
// ]

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes
// })

// export default router
// import Vue from 'vue'
// import VueRouter from 'vue-router'
// // import Register from './Register.vue'
//   import Register from '../pages/Register.vue'
// Vue.use(VueRouter)
  
// const routes = [
//     {
//         path: '/',
//         name: 'Register',
//         component: Register
//     },
//     //  Added our new route file named profile.vue
//     {
//         path: '/profile',
//         name: 'Profile',
//         Component: Profile
  
//     }
// ]
  
// // Create Vue Router Object
// const router = new VueRouter({
//     mode: 'history',
//     base: process.env.BASE_URL,
//     routes
// })
  
// export default router

import Vue from 'vue'
import Router from 'vue-router'
import Register from '../pages/Register.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Register',
      name: 'Register',
      component: Register
    }
  ]
})
