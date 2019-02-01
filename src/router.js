import Vue from 'vue'
import Router from 'vue-router'
import PageHome from './views/PageHome.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'page-home',
			component: PageHome
		}
	]
})