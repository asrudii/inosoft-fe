<template>
  <tr>
    <td>
      <BaseInput
        type="text"
        placeholder="description"
        :onChange="onChangeDescription"
      />
    </td>
    <td>
      <div class="w-20">
        <BaseInput
          type="text"
          placeholder="Qty"
          :onChange="onChangeDescription"
        />
      </div>
    </td>
    <td>
      <div class="w-20">
        <BaseSelect :options="uom" :onChange="onChangeCurrency" />
      </div>
    </td>
    <td>
      <div class="w-28">
        <BaseInput
          type="text"
          placeholder="Unit Price"
          :onChange="onChangeDescription"
        />
      </div>
    </td>
    <td>
      <div class="w-28">
        <BaseInput
          type="text"
          placeholder="Discount"
          :onChange="onChangeDescription"
        />
      </div>
    </td>
    <td>
      <div class="w-28">
        <BaseInput
          type="text"
          placeholder="VAT"
          :onChange="onChangeDescription"
        />
      </div>
    </td>
    <td>
      <BaseSelect :options="currency" :onChange="onChangeCurrency" />
    </td>
    <td><div class="w-24">0.00</div></td>
    <td><div class="w-20">0.00</div></td>
    <td><div class="w-20">0.00</div></td>
    <td>
      <div class="w-full flex items-center gap-2">
        <BaseSelect :options="charge" :onChange="onChangeCurrency" />
        <CustomButton
          icon="minus"
          type="secondary"
          size="medium"
          :onClick="onRemoveItemForm"
        />
      </div>
    </td>
  </tr>
</template>

<script>
import BaseInput from "../atoms/BaseInput.vue";
import BaseSelect from "../atoms/BaseSelect.vue";
import CustomButton from "../atoms/CustomButton.vue";

export default {
  name: "ItemCostForm",
  components: { BaseSelect, CustomButton, BaseInput },
  props: {
    onRemoveItemForm: Function,
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
      charge: [
        {
          id: 1,
          name: "Select an option",
          value: "1",
        },
        {
          id: 2,
          name: "IDR",
          value: "idr",
        },
      ],
      uom: [
        {
          id: 1,
          name: "SHP",
          value: "1",
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
tr {
  @apply border-gray-200 border-2;

  td {
    @apply p-2 text-left text-gray-500;
  }
}
</style>
