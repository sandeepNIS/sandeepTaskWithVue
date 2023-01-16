import { createRouter, createWebHistory } from 'vue-router'
import userForm from './components/userForm.vue';
import userDetails from './components/userDetails.vue';

const routes = [
  {
    path: '/',
    name: 'Register',
    component: userForm
  },

  {
    path: '/details',
    name: 'details',
    component:userDetails
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
