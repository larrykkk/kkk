<template>
  <div>
    <el-row type="flex" justify="center">
      <el-col :span="8">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="帳號" class="login_input">
            <el-input v-model="form.email" class="text"></el-input>
          </el-form-item>
          <el-form-item label="密碼" class="login_input">
            <el-input v-model="form.password" class="text"></el-input>
          </el-form-item>
          <el-button>登入</el-button>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "loginform",
  props: {},
  data() {
    return {
      form: {
        email: "",
        password: ""
      }
    };
  },
  computed: mapState({}),
  methods: {
    ...mapMutations([]),
    ...mapMutations({})
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}

/deep/ .el-form-item {
  margin-bottom: 5px;
}
/deep/ .el-form-item__label {
  width: unset !important;
}
/deep/ .el-form-item__content {
  margin-left: unset !important;
}
/deep/ .el-button {
  margin-top: 10px;
}
</style>
