<template>
  <input
    type="submit"
    :value="title"
    class="submit"
    :class="[
      {
        primary: type === 'primary',
        secondary: type === 'secondary',
        outline: type === 'outline',
        base: type === 'base',
        medium: size === 'medium',
      },
      title ? longPadding : shortPadding,
    ]"
  />
</template>

<script>
export default {
  name: "CustomSubmit",
  props: {
    title: String,
    type: String,
    size: String,
    icon: String,
  },
  data() {
    return {
      shortPadding: "px-2",
      longPadding: "px-14",
    };
  },
};
</script>

<style scoped lang="scss">
.submit {
  @apply rounded-sm flex items-center gap-3;

  &:hover {
    @apply opacity-70;
  }
}
.primary {
  @apply bg-primary text-white;
}
.secondary {
  @apply bg-gray-200 text-gray-400;
}
.outline {
  @apply bg-white text-gray-400 outline-none border-2 border-gray-300 px-5;
}
.base {
  @apply bg-white text-gray-400 outline-none px-5;
}
.medium {
  @apply h-10 w-fit;
}
.v-icon,
.custom-icon {
  @apply w-6;
}
</style>
