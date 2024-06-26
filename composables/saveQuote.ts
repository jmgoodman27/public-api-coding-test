
import type { Quote } from "../utils/types.js";

export function saveQuoteToLocalStorage(quote: Quote) {
    const savedQuotes = localStorage.getItem("saved-quotes");
    let savedQuotesArray: Quote[] = [];
    if (savedQuotes) {
        savedQuotesArray = JSON.parse(savedQuotes);
    }
    const quoteExists = savedQuotesArray.some(item => item.author === quote.author && item.quote === quote.quote);
    if (quote && !quoteExists) {
        savedQuotesArray.push(quote);
        localStorage.setItem("saved-quotes", JSON.stringify(savedQuotesArray));
        return true;
    }
    return false;
}