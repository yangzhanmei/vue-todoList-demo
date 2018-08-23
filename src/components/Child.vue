<template>
  <div>
   {{value}}
   child
  </div>
</template>
<script>

export default {
  name: 'child',
  data () {
    return {
      value: '我是子组件',
      props: ['value']
    }
  }
}
</script>
