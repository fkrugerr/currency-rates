<template>
  <footer :class="$options.name">
    <div :class="`${$options.name}__wrapper`">
      &copy; Currency rates
    </div>
  </footer>
</template>

<script>
export default {
  name: `AppFooter`,
};
</script>

<style lang="scss" scoped>
@import '../../scss/settings/color';
@import '../../scss/objects/wrapper.mixin';

.AppFooter {
  padding-top: 1em;
  padding-bottom: 1em;
  background-color: $color-secondary;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;

  &__wrapper {
    @include wrapper();
  }
}
</style>
