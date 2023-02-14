<script setup lang="ts">
import CardsList from "../components/CardsList.vue";
import FilterItem from "../components/FilterItem.vue";
import TransactionsList from "../components/TransactionsList.vue";
import { useCardsState } from "../stores/cards";
import { storeToRefs } from "pinia";

const cardsStore = useCardsState();
cardsStore.fetchCards();
const { selectedCard } = storeToRefs(cardsStore);
</script>

<template>
  <main class="main-container">
    <CardsList />
    <FilterItem v-if="selectedCard !== undefined" />
    <TransactionsList v-if="selectedCard !== undefined" />
    <p v-if="!selectedCard">
      <strong>Hint: </strong>Select a card to see the transactions related to
      this card.
    </p>
  </main>
</template>

<style scoped>
.main-container {
  margin: 0 auto;
  max-width: 800px;
  border: 1px solid black;
  padding: 20px;
}
</style>
