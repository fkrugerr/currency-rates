<template>
  <span class="icon">
    <dollar-icon v-if="type === 'USD'" />
    <euro-icon v-if="type === 'EUR'" />
    <sterling-icon v-if="type === 'GBP'" />
    <won-icon v-if="type === 'KRW'" />
    <yen-icon v-if="type === 'JPY'" />
    <frank-icon v-if="type === 'CHF'" />
  </span>
</template>

<script>
import DollarIcon from './Dollar';
import EuroIcon from './Euro';
import SterlingIcon from './Sterling';
import WonIcon from './Won';
import YenIcon from './Yen';
import FrankIcon from './SuisseFrank';

export default {
  name: 'SvgIcon',
  components: {
    DollarIcon,
    EuroIcon,
    SterlingIcon,
    WonIcon,
    YenIcon,
    FrankIcon,
  },
  props: {
    type: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.icon {
  width: 24dpx;
  height: 24dpx;
}
</style>
