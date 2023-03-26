<template>
  <button
    class="btn"
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
  >
    {{ title }}
    <custom-icon v-if="icon" :name="icon" base-class="custom-icon" />
  </button>
</template>

<script>
import customIcon from "vue-icon/lib/vue-feather.esm";
export default {
  name: "CustomButton",
  props: {
    title: String,
    type: String,
    size: String,
    icon: String,
  },
  created() {
    // props are exposed on `this`
    console.log(this.title);
  },
  data() {
    return {
      shortPadding: "px-2",
      longPadding: "px-14",
    };
  },
  components: {
    customIcon,
  },
};
</script>

<style scoped lang="scss">
.btn {
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
  width: 24px;
}
</style>
