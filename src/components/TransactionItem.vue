<script lang="ts">
export default {
  props: ["transaction", "bgColor"],
  computed: {
    cssProps() {
      return {
        "--bg-color": this.bgColor,
      };
    },
  },
};
</script>
<template>
  <div :style="cssProps" class="transaction">
    <p>{{ transaction.description }}</p>
    <p>{{ transaction.amount }}</p>
  </div>
</template>

<style scoped>
.transaction {
  width: 100%;
  border-radius: 10px;
  color: white;
  padding: 10px;
  background-color: var(--bg-color);
  margin: 10px 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
