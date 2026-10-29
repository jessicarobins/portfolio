import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WorkView from '../views/WorkView.vue'
import StoryView from '../views/StoryView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, _from, savedPosition) {
    return savedPosition ?? { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: 'Jess is Cool — Product Engineering & Technical Leadership' },
    },
    {
      path: '/work',
      name: 'work',
      component: WorkView,
      meta: { title: 'Selected Work — Jess is Cool' },
    },
    {
      path: '/work/:slug',
      name: 'story',
      component: StoryView,
      meta: { title: 'Case Study — Jess is Cool' },
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: { title: 'About Jess — Jess is Cool' },
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
      meta: { title: 'Contact — Jess is Cool' },
    },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
})

router.afterEach((to) => {
  document.title = typeof to.meta.title === 'string' ? to.meta.title : 'Jess is Cool'
})

export default router
