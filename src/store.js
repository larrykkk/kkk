import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userEmail: "",
    checkList: ["选中且禁用", "复选框 A"]
  },
  mutations: {
    handleVal(state, payload) {
      state.checkList = payload;
    }
    // setUserEmail(state, payload) {
    //   state.userEmail = payload;
    //   console.log("ji3y94");
    // },
    // test() {
    //   console.log("test");
    // },
    // test2(){
    //   console.log("test2")
    // }
  },
  actions: {}
});
