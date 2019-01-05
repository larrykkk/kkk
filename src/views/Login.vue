<template>
  <div class="home">
    <h1>Login page</h1>
    <loginform></loginform>
  </div>
</template>

<script>
// @ is an alias to /src
import loginform from "@/components/Loginform.vue";
export default {
  name: "login",
  components: {
    loginform
  },
  data() {
    return {};
  }
};
</script>
