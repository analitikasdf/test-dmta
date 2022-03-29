import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ErrorView from '../views/ErrorView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView
		},
		{
			path: '/score',
			name: 'score',
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import('../views/ScoreView.vue')
		},
		{
			path: '/error404',
			name: 'error',
			component: ErrorView
		},
		{ path: '/:pathMatch(.*)*', component: ErrorView }
	]
})

export default router
