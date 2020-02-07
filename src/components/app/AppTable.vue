<template>
  <table :class="$options.name">
    <tr>
      <th></th>
      <th>Currency</th>
      <th>Value on {{ date }}</th>
    </tr>
    <tr v-for="item in rows" :key="item.currency">
      <td>
        <svg-icon :type="item.currency" />
      </td>
      <td>{{ item.currency }}</td>
      <td>{{ item.value }}</td>
    </tr>
  </table>
</template>

<script>
import SvgIcon from '../icons/SvgIcon';

export default {
  name: 'AppTable',
  components: { SvgIcon },
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
    text-align: center;
    &:first-child {
      width: 56px;
    }
    &:nth-child(3) {
      width: 50%;
    }
  }
  th {
    background: $color-secondary;
  }
}
</style>
