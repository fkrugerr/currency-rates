<template>
  <div :class="$options.name">
    <h2>Exchange Rates</h2>
  </div>
</template>

<script>
export default {
  name: `AppHero`,
};
</script>

<style lang="scss" scoped>
.AppHero {
  h2 {
    font-size: 1.8rem;
    font-weight: bold;
    margin: 0 0 1.5rem 0;
  }
}
</style>
