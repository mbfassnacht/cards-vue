import { defineStore } from "pinia";
import type { Card } from "../types/card";
import type { Transaction } from "../types/transaction";
import { cards as cardsMock } from "../mocks/cards";
import { transactions as transactionsMock } from "../mocks/transactions";

export enum CardColor {
  COLOR_1 = "#2a9d8f",
  COLOR_2 = "#264653",
  COLOR_3 = "#e9c46a",
  COLOR_4 = "#f4a261",
  COLOR_5 = "#e76f51",
}

export const cardColors = Object.values(CardColor);

export const useCardsState = defineStore("todos", {
  state: () => ({
    cards: [] as Card[],
    cardsColors: {} as Record<string, CardColor>,
    transactions: [] as Transaction[],
    selectedCard: undefined,
    filter: "",
  }),
  getters: {
    filteredTransactions() {
      if (this.filter.trim() === "") {
        return this.transactions;
      } else {
        return this.transactions.filter(
          (transaction: Transaction) =>
            transaction.amount >= Number.parseFloat(this.filter)
        );
      }
    },
  },
  actions: {
    async fetchCards() {
      const fetchedCards = await new Promise((resolve) =>
        setTimeout(() => resolve(cardsMock), 300)
      );

      const colors: Record<string, CardColor> = {};
      fetchedCards.forEach((card, index) => {
        colors[card.id] = cardColors[index % 5];
      });
      this.cardsColors = colors;
      this.cards = fetchedCards;
    },

    setFilter(filter: string) {
      this.filter = filter;
    },
    setCards(cards: Card[]) {
      this.cards = cards;
    },
    setTransactions(transactions: Transaction[]) {
      this.transaction = transactions;
    },
    async setSelectedCard(selectedCard: Card) {
      this.selectedCard = selectedCard;

      console.log(`Fetching transactions for card id: ${selectedCard.id}`);
      const fetchedTransactions = await new Promise((resolve) =>
        setTimeout(() => {
          const transactionsForCard = transactionsMock[selectedCard.id];
          resolve(transactionsForCard);
        }, 300)
      );

      this.transactions = fetchedTransactions;
      this.filter = "";
    },
  },
});
