<template>
  <table :class="$options.name">
    <tr>
      <th></th>
      <th>Currency</th>
      <th>Value</th>
    </tr>
    <tr>
      <td>7uu</td>
    </tr>
  </table>
</template>

<script>
export default {
  name: 'AppTable',
  props: {
    date: {
      type: String,
      required: true,
    },
    rows: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../scss/settings/color';

.AppTable {
  width: 100%;
  tr {
    border-bottom: 1px solid $color-secondary;
  }
  th,
  td {
    padding: 0.8rem 1rem;
  }
  th {
    background: $color-secondary;
    font-weight: bold;
  }
}
</style>
