<script setup lang="ts">
const author = ref("");
const quote = ref("");
const error = ref("");
const savedQuote = ref(false);

/* 
  quote-of-the-day.ts in the server/api directory calls the public api
  useFetch is used so that data fetched through SSR is not fetched again when hydrating on the client
*/
const { data } = await useFetch("/api/quote-of-the-day");
if (data.value.author) author.value = data.value.author;
if (data.value.quote) quote.value = data.value.quote;
if (data.value.error) error.value = data.value.error;

function saveQuote() {
  if (author.value && quote.value) {
    saveQuoteToLocalStorage({
      author: author.value,
      quote: quote.value,
    });
    savedQuote.value = true;
  }
}
</script>

<template>
  <div class="p-4 font-primary">
    <h1 class="font-primary text-3xl pb-4">Quote of the day</h1>
    <p class="pb-2">{{ quote }}</p>
    <p>{{ author }}</p>
    <Error v-if="error" :error="error" />
    <button v-if="!error && !savedQuote" class="bg-red-100 p-2 mt-6" @click="saveQuote">Save Quote</button>
    <p v-if="savedQuote" class="bg-green-100 p-2 mt-6 w-fit">Saved!</p>
  </div>
</template>
