import type { Quote } from "../utils/types.js";

export function getSavedQuotes() {
    const savedQuotes = localStorage.getItem("saved-quotes");
    let savedQuotesArray: Quote[] = [];
    if (savedQuotes) {
        savedQuotesArray = JSON.parse(savedQuotes);
    }
    return savedQuotesArray;
}