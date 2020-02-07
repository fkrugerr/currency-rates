<template>
  <div>
    <label class="typo__label">{{ title }}</label>
    <multiselect
      :placeholder="placeholder"
      :value="value"
      :options="options"
      :searchable="false"
      :multiple="multiple"
      :id="id"
      :hideSelected="true"
      :allowEmpty="allowEmpty"
      :showLabels="false"
      @input="handler"
    />
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect';

export default {
  components: { Multiselect },
  props: {
    title: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    allowEmpty: {
      type: Boolean,
      default: true,
    },
    options: {
      type: Array,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    taggable: {
      type: Boolean,
      default: false,
    },
    value: [String, Array],
    handler: {
      type: Function,
      required: true,
    },
  },
};
</script>