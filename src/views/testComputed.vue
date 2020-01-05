<template>
  <div>
    <ul>
      <li v-for="(item, index) in colors" :key="index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "testComputed",
  data() {
    return {
      data: {
        list: [
          {
            text: "1",
            color: "red"
          },
          {
            text: "2",
            color: "blue"
          },
          {
            text: "3",
            color: "green"
          }
        ]
      }
    };
  },
  computed: {
    colors() {
      return this.data.list.map(x => x.color);
    }
  }
};
</script>

<style lang="scss"></style>
