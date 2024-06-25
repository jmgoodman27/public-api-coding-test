import type { Response, Quote } from "../../utils/types.ts";

let API_URL;
const ERROR_TOO_MANY_REQUESTS = 'Too many requests. Wait 30 seconds and try again.';
const ERROR_NO_QUOTE = 'There is no quote of the day. Check back tomorrow';

export default defineEventHandler(async (event) => {
    if (event.path.includes('today')) {
        API_URL = `https://zenquotes.io/api/today/`;
    } else {
        API_URL = `https://zenquotes.io/api/random/`;
    }

    try {
        const response: Response[] = await $fetch(API_URL);
        if (!response || !response[0]) {
            return { error: ERROR_NO_QUOTE };
        }
        if (response[0].q.includes('Too many requests')) {
            return { error: ERROR_TOO_MANY_REQUESTS };
        }
        const quote: Quote = {
            author: response[0].a,
            quote: response[0].q
        }
        return quote;
    } catch (error) {
        console.error('Error fetching the quote of the day:', error);
        return { error: 'Failed to fetch quote of the day' }
    }
})