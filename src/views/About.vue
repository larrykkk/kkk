<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="query">go</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "about",
  components: {},
  data() {
    return {
      ary: {
        a: ["123", "55", "77"],
        b: ["夏天", "英文", "中文"],
        c: ["ccc", "bbb", "aaa"]
      }
    };
  },
  computed: {
    // query_string() {
    //   return this.$router.query;
    // }
  },
  methods: {
    query() {
      this.$router.push({ path: "/", query: this.ary });
    }
  }
};
</script>
