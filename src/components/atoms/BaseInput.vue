<template>
  <input
    class="input"
    :type="type"
    :placeholder="placeholder"
    :id="id"
    :name="name"
    :value="type === 'number' ? +value?.toLocaleString() : value"
    @change="onChange ? onChange($event) : null"
  />
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    id: String,
    name: String,
    placeholder: String,
    type: String,
    value: String,
    onChange: Function,
  },
};
</script>

<style lang="scss" scoped>
.input {
  @apply bg-gray-50 h-10 rounded-sm px-3 text-gray-400 w-full;

  &:focus {
    @apply outline-none;
  }
}
.input::-webkit-outer-spin-button,
.input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
.input[type="number"] {
  @apply text-right;
  -moz-appearance: textfield;

  &::placeholder {
    @apply text-left;
  }
}
</style>
