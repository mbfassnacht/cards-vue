<script setup lang="ts">
import CardItem from "./CardItem.vue";
import { useCardsState } from "../stores/cards";
import { storeToRefs } from "pinia";

const cardsStore = useCardsState();
cardsStore.fetchCards();
const { cards, cardsColors } = storeToRefs(cardsStore);
</script>

<template>
  <div>
    <h2>Your cards</h2>
    <ul class="cards-list">
      <CardItem
        v-for="(card, index) in cards"
        :card="card"
        :bg-color="cardsColors[card.id]"
        :index="index"
        :key="card.id"
      />
    </ul>
  </div>
</template>

<style scoped>
.cards-list {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: space-between;
  padding: 0px;
}
</style>
