<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <ButtonCount></ButtonCount>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import ButtonCount from "@/components/ButtonCount.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    ButtonCount
  },
  computed: {
    query_string() {
      return this.$route.query;
    }
  },
  methods: {}
};
</script>
