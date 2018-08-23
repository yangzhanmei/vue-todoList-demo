<template>
  <div>
   parent
   <child :parentValue="parentValue"/>
  </div>
</template>
<script>
import Child from './Child'
export default {
  name: 'parent',
  data () {
    return {
      parentValue: '我是父组件'
    }
  },
  components: {
    'child': Child,
  },
}
</script>