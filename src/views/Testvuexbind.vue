<template>
  <el-checkbox-group v-model="checkList">
    <el-checkbox label="复选框 A"></el-checkbox>
    <el-checkbox label="复选框 B"></el-checkbox>
    <el-checkbox label="复选框 C"></el-checkbox>
    <el-checkbox label="禁用" disabled></el-checkbox>
    <el-checkbox label="选中且禁用" disabled></el-checkbox>
  </el-checkbox-group>
</template>
<script>
export default {
  data() {
    return {
      //   checkList: ["选中且禁用", "复选框 A"]
    };
  },
  computed: {
    checkList: {
      get() {
        // 这里也是用了Vuex里的 modules 大家可以当成普通的变量来看
        return this.$store.state.checkList;
      },
      set(newVal) {
        this.$store.commit("handleVal", newVal);
      }
    }
  }
};
</script>
