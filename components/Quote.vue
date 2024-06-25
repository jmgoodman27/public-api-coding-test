<script setup lang="ts">
const props = defineProps<{
    type?: string,
    title?: string,
    showSaveBtn?: boolean,
    showNewQuoteBtn?: boolean
}>();

const author = ref("");
const quote = ref("");
const error = ref("");
const savedQuote = ref(false);

/* 
  server/api directory handles calls to the public api
  useFetch is used so that data fetched through SSR is not fetched again when hydrating on the client
*/
async function fetchQuote() {
    const { data } = await useFetch(`/api/quote?type=${props.type}`);
    if (data.value.author) author.value = data.value.author;
    if (data.value.quote) quote.value = data.value.quote;
    if (data.value.error) error.value = data.value.error;
}
await fetchQuote();

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
    <h1 class="font-primary text-3xl pb-4">{{ props.title }}</h1>
    <p class="pb-2">{{ quote }}</p>
    <p>{{ author }}</p>
    <div v-if="!error" class="flex gap-4 mt-4 mb-6">
        <button v-if="props.showSaveBtn" class="bg-blue-100 hover:bg-blue-200 p-2" @click="saveQuote">Save Quote</button>
        <button v-if="props.showNewQuoteBtn" class="bg-amber-100 hover:bg-amber-200 p-2" @click="fetchQuote">Get new quote</button>
    </div>
    <Success v-if="savedQuote" text="Your quote has been saved!" />
    <Error v-if="error" :error="error" />
  </div>
</template>
