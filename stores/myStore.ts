import { defineStore } from 'pinia'
import type { Quote } from "../utils/types.js";

export const useStore = defineStore('quotes', {
    state: () => {
      return {
        savedQuotes: [] as Quote[]
      }
    },
    actions: {
      loadQuotes() {
        if (!process.server) {
          const quotesFromStorage = localStorage.getItem("saved-quotes");
          if (quotesFromStorage) {
            this.savedQuotes = JSON.parse(quotesFromStorage);
          }
        }
      },
      saveQuote(quote: Quote) {
        const quoteExists = this.savedQuotes.some(item => item.author === quote.author && item.quote === quote.quote);
        if (quote && !quoteExists) {
            this.savedQuotes.push(quote);
            localStorage.setItem("saved-quotes", JSON.stringify(this.savedQuotes));
            return true;
        }
        return false;
      },
      removeQuote(quote: Quote) {
        const index = this.savedQuotes.findIndex(item => item.author === quote.author && item.quote === quote.quote);
        if (quote && index > -1) {
          this.savedQuotes.splice(index, 1);
          localStorage.setItem("saved-quotes", JSON.stringify(this.savedQuotes));
        }
      }
    },
  })