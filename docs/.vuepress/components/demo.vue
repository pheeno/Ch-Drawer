<template>
  <div>
    <component :is='componentName'></component>
    <slot></slot>
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
