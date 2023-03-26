<template>
  <div class="home">
    <CostForm />
  </div>
</template>

<script>
// @ is an alias to /src
import CostForm from "@/components/organisms/CostForm.vue";

export default {
  name: "HomeView",
  components: {
    CostForm,
  },
  data() {
    return {
      currency: [
        {
          id: 1,
          name: "USD",
          value: "usd",
        },
        {
          id: 2,
          name: "IDR",
          value: "idr",
        },
      ],
      currencySelected: "",
      description: "",
    };
  },
  methods: {
    onChangeCurrency(event) {
      this.currencySelected = event.target.value;
    },
    onChangeDescription(event) {
      this.description = event.target.value;
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  @apply p-10;
}
</style>
