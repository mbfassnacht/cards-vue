<script lang="ts">
import { useCardsState } from "../stores/cards";

export default {
  methods: {
    filterChanged: (value: string) => {
      const { setFilter } = useCardsState();
      setFilter(value);
    },
  },
  computed: {
    filterValue() {
      const { filter } = useCardsState();
      return filter;
    },
  },
};
</script>
<template>
  <div>
    <label htmlFor="filter-input">Amount Filter</label>
    <input
      @input="(event) => filterChanged(event.target.value)"
      v-model="filterValue"
      type="number"
      id="filter-input"
      placeholder="Amount"
      data-testid="filter-input"
    />
  </div>
</template>

<style scoped>
input {
  width: 100%;
  height: 20px;
}
</style>
