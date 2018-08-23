<template>
  <div>
   {{parentValue}}
   child
  </div>
</template>
<script>
export default {
  name: "child",
  props: ["parentValue"],
  data() {
    return {
      value: "我是子组件"
    };
  }
};
</script>
