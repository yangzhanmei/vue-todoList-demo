<template>
  <div>
    <h2 class="header">TodoList</h2>
    <input  v-model="value" ref="valueRef" placeholder="please input" @keydown="addTodo($event)"/>
    <ul>
    <li v-for="(todo,index) in todoList" :key="todo.id">
      {{todo.name}} <button v-on:click="deleteTodo(index)">X</button>
    </li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'TodoList',
  data () {
    return {
      todoList: [],
      value: ''
    }
  },
  created: function () {
    this.$nextTick(async function () {
      const res = await axios.get('http://127.0.0.1:9090/')
      const { data } = res
      this.todoList = data
    })
  },
  methods: {
    submit (e) {
      if (e.keyCode === 13) {
        this.todoList.push(this.value)
        this.value = ''
      }
    },
    deleteTodo (index) {
      this.todoList.splice(index, 1)
    },
    async addTodo (e) {
      if (e.keyCode === 13) {
        const res = await axios.post('http://127.0.0.1:9090/', this.value)
        console.log(res)
      }
    }
  }
}
</script>
<style scoped>
  @import '../styles/index.less'
</style>
