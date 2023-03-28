<template>
  <form class="home" @submit="onSubmit">
    <CostForm />
    <div class="btn_wrap">
      <CustomButton title="Cancel" type="base" size="medium" />
      <CustomButton title="Save as Draft" type="outline" size="medium" />
      <CustomSubmit title="Submit" type="primary" size="medium" />
    </div>
  </form>
</template>

<script>
// @ is an alias to /src
import CustomButton from "@/components/atoms/CustomButton.vue";
import CustomSubmit from "@/components/atoms/CustomSubmit.vue";
import CostForm from "@/components/organisms/CostForm.vue";
import axios from "axios";
import { mapState } from "vuex";

export default {
  name: "HomeView",
  components: {
    CustomButton,
    CustomSubmit,
    CostForm,
  },
  computed: {
    ...mapState({
      itemsForm: "itemsForm",
    }),
  },
  data() {
    return {
      currencySelected: "",
      description: "",
    };
  },
  methods: {
    onSubmit(event) {
      if (event) {
        event.preventDefault();
        const { itemsForm } = this;
        const formData = new FormData();

        console.log("itemsForm", itemsForm);
        itemsForm?.map((item) => {
          const description = `data${item}description`;
          formData.append(
            `description+${item}`,
            event.target[description].value
          );
          const qty = `data${item}qty`;
          formData.append(`qty+${item}`, event.target[qty].value);
          const uom = `data${item}uom`;
          formData.append(`uom+${item}`, event.target[uom].value);
          const unit = `data${item}unit`;
          formData.append(`unit+${item}`, event.target[unit].value);
          const discount = `data${item}discount`;
          formData.append(`discount+${item}`, event.target[discount].value);
          const vat = `data${item}vat`;
          formData.append(`vat+${item}`, event.target[vat].value);
          const currency = `data${item}currency`;
          formData.append(`currency+${item}`, event.target[currency].value);
        });
        axios({
          method: "post",
          url: "http://127.0.0.1:8000/api/product",
          data: formData,
          headers: {
            "Content-Type": "multipart/form-data",
            "Access-Control-Allow-Origin": "*",
          },
        })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
        // console.log(response);
        // this.$vToastify.success("Data Submited");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  @apply p-10;

  .btn_wrap {
    @apply flex gap-3 justify-end mt-12;
  }
}
</style>
