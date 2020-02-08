<template>
  <transition
    name="custom-classes-transition"
    enter-active-class="animated fadeIn faster"
    leave-active-class="animated fadeOut faster"
    mode="out-in"
  >
    <spinner v-if="loading" key="1" />
    <table :class="$options.name" key="2" v-else>
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
  </transition>
</template>

<script>
import SvgIcon from '../icons/SvgIcon';
import Spinner from '../lib/Spinner';

export default {
  name: 'AppTable',
  components: { SvgIcon, Spinner },
  props: {
    date: {
      type: String,
      required: true,
    },
    rows: {
      type: Array,
      required: true,
    },
    loading: {
      type: Boolean,
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
