import { createRouter, createWebHistory } from 'vue-router';

import Details from './pages/coaches/Details.vue';
import List from './pages/coaches/List.vue';
import Registration from './pages/coaches/Registration.vue';
import ContachCoach from './pages/requests/ContactCoach.vue';
import Requests from './pages/requests/Requests.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: List },
    {
      path: '/coaches/:id',
      component: Details,
      children: [{ path: 'contact', component: ContachCoach }],
    },
    { path: '/register', component: Registration },
    { path: '/requests', component: Requests },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

export default router;
