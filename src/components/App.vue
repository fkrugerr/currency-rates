<template>
  <div :class="$options.name">
    <layout-default>
      <app-home />
    </layout-default>
  </div>
</template>

<script>
import LayoutDefault from './layout/LayoutDefault.vue';
import AppHome from './app/AppHome';

export default {
  name: `App`,
  components: {
    LayoutDefault,
    AppHome,
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
html body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif;
}
</style>
