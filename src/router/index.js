import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import index from '@/pages/index'
import weekly_index from '@/components/test-weekly_index'
import ci from '@/components/test-ci'
import appreport from '@/components/test-ciappreport'
// import First from '@/components/views/First'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'index',
      component: index,
	  children: [
		{
		  path: '/weekly_index',
		  name: 'weekly_index',
		  component: weekly_index
		},
		{
		  path: '/ci',
		  name: 'ci',
		  component: ci,
		  children: [
			{
			  path: '/ci/appreport',
			  name: 'appreport',
			  component: appreport
			}
		  ]
		}
	  ]
    }
  ]
})
