import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import A from '@/components/1'
import B from '@/components/2'
import C from '@/components/3'
import Player from '@/components/player'
import P1 from '@/components/profile'
import P2 from '@/components/status'
import myHeader from '@/components/my-header'
import mySlider from '@/components/my-slider'
import myFooter from '@/components/my-footer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        myHeader:myHeader,
        mySlider:mySlider,
        myFooter:myFooter
      }
    },
    {
      path:'/1',
      component:A
    },
    {
      path:'/2',
      component:B
    },
    {
      path:'/3',
      component:C
    },
    {
      path:'/player/:uid',
      component:Player,
      name:'Player',
      children:[
        {
          path:'profile',
          component:P1
        },
        {
          path:'status',
          component:P2
        }
      ]
    }
  ]
})
