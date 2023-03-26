<template>
  <div class="form_cost">
    <CustomButton
      icon="chevron-down"
      title="Cost Detail"
      type="parimary-base"
      size="medium"
      :onClick="toogleShowTable"
    />

    <table :class="{ hide: isHideTable }">
      <thead>
        <tr>
          <th>Description</th>
          <th>Qty</th>
          <th>UOM</th>
          <th>Unit Price</th>
          <th>Discount (%)</th>
          <th>VAT (%)</th>
          <th>Currency</th>
          <th>VAT Amount</th>
          <th>Subtotal</th>
          <th>Total</th>
          <th>Charge To</th>
        </tr>
      </thead>
      <tbody>
        <ItemCostForm
          v-for="(item, i) in itemsForm"
          :key="item + i"
          :onRemoveItemForm="() => onRemoveItemForm(item)"
        />
      </tbody>
      <tfoot>
        <tr>
          <td colspan="6" rowspan="2">
            <div class="flex items-center">
              <span>Exchange Rate 1 USD = </span>
              <div class="w-28 mx-2">
                <BaseInput type="number" value="36725" />
              </div>
              <span>AED</span>
            </div>
          </td>
          <td class="bg-gray-200">AED in Total</td>
          <td class="bg-gray-200">0.00</td>
          <td class="bg-gray-200">0.00</td>
          <td class="bg-gray-200">0.00</td>
          <td rowspan="2">
            <div class="flex justify-end">
              <CustomButton
                icon="plus"
                type="primary"
                size="medium"
                :onClick="onAddItemForm"
              />
            </div>
          </td>
        </tr>
        <tr>
          <td class="bg-gray-200">
            <div><span>USD in Total</span></div>
          </td>
          <td class="bg-gray-200">0.00</td>
          <td class="bg-gray-200">0.00</td>
          <td class="bg-gray-200">0.00</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import BaseInput from "../atoms/BaseInput.vue";
import CustomButton from "../atoms/CustomButton.vue";
import ItemCostForm from "../molecules/ItemCostForm.vue";

export default {
  name: "CostForm",
  components: { ItemCostForm, BaseInput, CustomButton },
  data() {
    return {
      itemsForm: [1],
      isHideTable: false,
    };
  },
  methods: {
    onAddItemForm() {
      this.itemsForm = [
        ...this.itemsForm,
        this.itemsForm[this.itemsForm.length - 1] + 1 || 1,
      ];
    },
    onRemoveItemForm(no) {
      this.itemsForm = this.itemsForm.filter((item) => item !== no);
    },
    toogleShowTable() {
      this.isHideTable = !this.isHideTable;
    },
  },
};
</script>

<style lang="scss" scoped>
.form_cost {
  table,
  tr {
    @apply border-gray-200 border-2;
  }
  .hide {
    @apply invisible opacity-0;
  }
  table {
    @apply w-full visible opacity-100 text-sm transition-all ease-in-out duration-300;

    th {
      @apply text-left p-2 bg-gray-100 font-normal text-gray-500;
    }

    td {
      @apply p-2 text-left text-gray-500;
    }

    tfoot {
      tr:nth-child(1) {
        @apply border-b-4 border-b-white;
      }
    }
  }
}
</style>
