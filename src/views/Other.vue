<template>
  <div class="home">
    <h1>Other page</h1>
    <table-Pagination></table-Pagination>
  </div>
</template>

<script>
import tablePagination from "@/components/Table.vue";
export default {
  name: "other",
  components: {
    tablePagination
  },
  data() {
    return {};
  }
};
</script>
