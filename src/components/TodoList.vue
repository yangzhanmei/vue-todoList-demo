<template>
  <div>
    <h2>TodoList</h2>
    <input  v-model="value" ref="valueRef" placeholder="please input" @keydown="submit($event)"/>
    <ul>
    <li v-for="(todo,index) in todoList" :key="todo.id">
      {{todo}} <button v-on:click="deleteTodo(index)">X</button>
    </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'TodoList',
  data () {
    return {
      todoList: ['1', '2', '3', '4'],
      value: ''
    }
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
    }
  }
}
</script>
