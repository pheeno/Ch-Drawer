<template>
  <div>
    <component :is='componentName'></component>
  </div>
</template>
<script>
export default {
  name: "demo",
  props: {
    componentName: String
  }
};
</script>
