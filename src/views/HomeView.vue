<template>
  <div class="flex gap-3 justify-center">
    <CustomButton icon="plus" type="primary" size="medium" />
    <CustomButton icon="minus" type="secondary" size="medium" />
    <CustomButton title="Cancel" type="base" size="medium" />
    <CustomButton title="Save as Draft" type="outline" size="medium" />
    <CustomButton title="Submit" type="primary" size="medium" />
    <div>
      <BaseInput />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import BaseInput from "@/components/atoms/BaseInput.vue";
import CustomButton from "@/components/atoms/CustomButton.vue";

export default {
  name: "HomeView",
  components: {
    CustomButton,
    BaseInput,
  },
};
</script>
