<template>
  <div :class="$options.name">
    <app-hero />
    <div class="row">
      <div class="col-60">
        <div class="row">
          <div class="col-50">
            <select-field
              :options="currencies"
              :value="filteredData.base"
              title="Base"
              :handler="updateBase"
              id="baseSelect"
              :allowEmpty="false"
            />
          </div>
          <div class="col-50">
            <select-field
              :options="currencies"
              :value="filteredData.selected"
              title="Filter"
              :handler="updateSelected"
              id="filterSelect"
              :allowEmpty="true"
              :multiple="true"
              :taggable="true"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-100 my-1">
            <span v-if="error">{{ error }}</span>
            <span v-if="!error && !rates">No Data!</span>
            <app-table v-if="rates" :date="rates.date" :rows="rates.rates" />
          </div>
        </div>
      </div>
      <div class="col-40">
        <date-picker
          :value="filteredData.date"
          :handler="updateDate"
          id="dates"
          :disabledDates="disabledDates"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { equals } from 'rambda';

import AppHero from './AppHero.vue';
import AppTable from './AppTable.vue';
import SelectField from '../lib/SelectField';
import DatePicker from '../lib/DatePicker';

export default {
  name: `AppHome`,
  components: {
    AppHero,
    SelectField,
    DatePicker,
    AppTable,
  },
  computed: {
    ...mapGetters([
      'currencies',
      'filteredData',
      'rates',
      'error',
      'disabledDates',
    ]),
  },
  methods: {
    ...mapActions(['updateDate', 'updateSelected', 'updateBase', 'fetchRates']),
  },
  created() {
    this.fetchRates();
  },
  watch: {
    filteredData(next, prev) {
      if (!equals(next, prev)) {
        this.fetchRates();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../scss/objects/layout.mixin';
.AppHome {
  $section-spacing: 3em;

  &__teaserList {
    margin-top: $section-spacing;
  }
}
.my-1 {
  margin: 1rem 0;
}
.row {
  @include layout();
}
.col-100 {
  @include layout__item(1);
}
.col-60 {
  @include layout__item(0.6);
  @media (max-width: 769px) {
    @include layout__item(1);
    order: 1;
  }
}
.col-40 {
  @include layout__item(0.4);
  @media (max-width: 769px) {
    @include layout__item(1);
    order: 0;
  }
}
.col-50 {
  @include layout__item(0.5);
}
.icon {
  width: 100px;
  height: 100px;
}
</style>
