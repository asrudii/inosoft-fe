import Vue from "vue";
import Vuex from "vuex";
import banks from "../data/banks.json";
import currency from "../data/currency.json";
import uom from "../data/uom.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    itemsForm: [1],
    banks,
    currency,
    uom,
  },
  getters: {},
  mutations: {
    increment(state) {
      state.count++;
    },
    addItemForm(state) {
      state.itemsForm = [
        ...state.itemsForm,
        state.itemsForm[state.itemsForm.length - 1] + 1 || 1,
      ];
    },
    removeItemForm(state, no) {
      state.itemsForm = state.itemsForm.filter((item) => item !== no);
    },
  },
  actions: {},
  modules: {},
});
