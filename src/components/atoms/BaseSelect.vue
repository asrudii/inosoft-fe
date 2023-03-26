<template>
  <select class="select" :id="id" :name="name" @change="onChange($event)">
    <option
      v-for="(item, i) in options"
      :selected="i === 0"
      :key="item.id"
      :value="item.value"
    >
      {{ item.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    id: String,
    name: String,
    value: String,
    options: Array,
    onChange: Function,
  },
};
</script>

<style lang="scss" scoped>
.select {
  @apply bg-gray-50 h-10 rounded-sm px-3 text-gray-400 pr-8 appearance-none bg-no-repeat bg-right w-full;
  background-image: url("/src/assets/icons/chevron-down.svg");

  &:focus {
    @apply outline-none;
  }
}
</style>
