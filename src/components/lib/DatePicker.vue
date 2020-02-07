<template>
  <div :class="$options.name">
    <datepicker :value="value" :inline="true" :id="id" @input="handler" />
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';

export default {
  name: 'DatePicker',
  components: { Datepicker },
  props: {
    id: {
      type: String,
      required: true,
    },
    value: [String, Array],
    handler: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import '../../scss/settings/color';

.DatePicker {
  .vdp-datepicker {
    &__calendar {
      border-radius: 5px;
      border: 1px solid #e8e8e8;
      margin-top: 24px;
      width: 100%;
      max-width: 300px;
      .cell.selected {
        background: $color-primary;
        color: #ffffff;
        &:hover {
          border: 1px solid $color-primary;
          background: $color-primary;
        }
      }
      .cell:not(.blank):not(.disabled).day {
        border-radius: 5px;
        &:hover {
          border: 1px solid $color-primary;
        }
      }
    }
  }
}
</style>
