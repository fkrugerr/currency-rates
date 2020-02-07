<template>
  <header :class="$options.name">
    <div :class="`${$options.name}__wrapper`">
      <div :class="`${$options.name}__logo`">
        Exchange Rates Widget
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: `AppHeader`,
};
</script>

<style lang="scss" scoped>
@import '../../scss/settings/color';
@import '../../scss/objects/wrapper.mixin';

.AppHeader {
  padding-top: 1em;
  padding-bottom: 1em;
  background: $color-secondary;

  &__wrapper {
    @include wrapper();

    display: flex;
    align-items: center;
  }

  &__logo {
    text-decoration: none;
    font-weight: 500;

    @media (min-width: 30em) {
      font-size: 1.4em;
    }
  }
}
</style>
