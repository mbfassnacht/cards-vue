<script setup lang="ts">
import { useCardsState } from "../stores/cards";
import { storeToRefs } from "pinia";
import TransactionItem from "./TransactionItem.vue";

const cardsStore = useCardsState();
const { transactions, cardsColors, selectedCard, filter } =
  storeToRefs(cardsStore);
</script>

<template>
  <ul>
    <TransactionItem
      v-for="(transaction, index) in transactions.filter((transaction) => {
        return filter.trim() === ''
          ? true
          : transaction.amount >= Number.parseFloat(filter);
      })"
      :transaction="transaction"
      :bg-color="cardsColors[selectedCard.id]"
      :index="index"
      :key="transaction.id"
    />
  </ul>
</template>

<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: center;
  padding: 0px;
}
</style>
