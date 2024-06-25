import type { Quote } from "../utils/types.js";

export function removeQuoteFromLocalStorage(quote: Quote) {
    const savedQuotes = localStorage.getItem("saved-quotes");
    let savedQuotesArray: Quote[] = [];
    if (savedQuotes) {
        savedQuotesArray = JSON.parse(savedQuotes);
    }
    const index = savedQuotesArray.findIndex(item => item.author === quote.author && item.quote === quote.quote);
    if (quote && index > -1) {
        savedQuotesArray.splice(index, 1);
        localStorage.setItem("saved-quotes", JSON.stringify(savedQuotesArray));
    }
}