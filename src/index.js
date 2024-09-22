import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/HomePage.vue';
import BuyForm from '@/components/BuyForm.vue';
import HelloWorld from '@/components/HelloWorld.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/buy/:bookId',
    name: 'BuyForm',
    component: BuyForm
  },
  {
    path: '/example',
    name: 'Example',
    component: HelloWorld
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

// export default createRouter({
//   history: createWebHistory(),
//   routes: [
//     {path: '/', component: Home},
//     {path: '/example', component: HelloWorld},
//     {path: '/buy/:bookId', component: BuyForm},
//   ]
// })