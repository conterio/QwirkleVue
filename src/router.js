import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import NewGame from '@/components/NewGame'
import Pieces from '@/components/QwirklePieces'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/new-game',
      name: 'New Game',
      component: NewGame
    },
    {
      path: '/pieces',
      name: 'Pieces',
      component: Pieces
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
