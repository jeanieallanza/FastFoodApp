import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import OnBoarding from '../views/OnBoarding.vue';
import InputLayout from '../components/InputLayout.vue';
import Loginpage from '../views/Loginpage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/onboarding'
  },
  {
    path: '/onboarding',
    name: 'onboarding',
    component: OnBoarding
  },

  // for authentication
  {
    path: '/auth',
    redirect: '/login',
    name: 'Auth',
    component: InputLayout,
    children: [
      {
        path: '/login',
        name: 'Login',
        component: Loginpage
      }
    ]
  },

  //  for content
  {
    path: '/home',
    name: 'Homepage',
    component: () => import('../views/Homepage.vue')
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
