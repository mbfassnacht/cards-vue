<script lang="ts">
import { useCardsState } from "../stores/cards";
import type { Card } from "../types/card";

export default {
  props: ["card", "bgColor"],
  computed: {
    cssProps() {
      return {
        "--bg-color": this.bgColor,
      };
    },
  },
  methods: {
    selectCard: (card: Card) => {
      const { setSelectedCard } = useCardsState();
      setSelectedCard(card);
    },
  },
};
</script>
<template>
  <div @click="selectCard(card)" :style="cssProps" class="card">
    <p>{{ card.description }}</p>
    <p>{{ card.id }}</p>
  </div>
</template>

<style>
.card {
  width: 280px;
  height: 155px;
  border-radius: 20px;
  color: white;
  padding: 20px;
  font-size: 24px;
  background-color: var(--bg-color);
  cursor: pointer;
}

.card:hover {
  opacity: 0.6;
}
</style>
