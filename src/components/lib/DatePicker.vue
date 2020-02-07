<template>
  <div>
    <datepicker :value="value" :inline="true" :id="id" @input="handler" />
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';

export default {
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
.vdp-datepicker {
  &__calendar {
    border-radius: 5px;
    border: 1px solid #e8e8e8 !important;
    margin-top: 15px;
    .cell.selected {
      background: $color-primary !important;
      color: #ffffff;
      &:hover {
        border: 1px solid $color-primary !important;
        background: $color-primary !important;
      }
    }
    .cell:not(.blank):not(.disabled).day {
      border-radius: 5px;
      &:hover {
        border: 1px solid $color-primary !important;
      }
    }
  }
}
</style>