import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TodoList from '@/components/TodoList'
import Parent from '@/components/Parent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'parent',
      component: Parent
    },
    {
      path: '/todoList',
      name: 'TodoList',
      component: TodoList
    },
  ]
})
