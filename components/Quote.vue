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

const isQuoteSaved = ref(false);
const showSavedFeedback = ref(false);
const timeoutId = ref(null)

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
    const isSaved: boolean = saveQuoteToLocalStorage({
      author: author.value,
      quote: quote.value,
    });
    isQuoteSaved.value = isSaved;
    showSavedFeedback.value = true;

    // Remove success or error message from UI after 3 seconds
    if (timeoutId.value) {
      clearTimeout(timeoutId.value)
    }
    timeoutId.value = setTimeout(() => {
      showSavedFeedback.value = false;
    }, 3000);
  }
}
</script>

<template>
  <div class="p-4 font-primary">
    <h1 class="font-primary text-3xl pb-4">{{ props.title }}</h1>
    <p class="pb-2">{{ quote }}</p>
    <p>{{ author }}</p>
    <div v-if="!error" class="mt-4 mb-6">
      <div class="flex gap-4">
        <button v-if="props.showSaveBtn" class="bg-blue-100 hover:bg-blue-200 p-2" @click="saveQuote">Save Quote</button>
        <button v-if="props.showNewQuoteBtn" class="bg-amber-100 hover:bg-amber-200 p-2" @click="fetchQuote">Get new quote</button>
      </div>
      <div v-if="showSavedFeedback" class="mt-4">
        <Success v-if="isQuoteSaved" message="Your quote has been saved!" />
        <Error v-if="!isQuoteSaved" message="This quote is already saved.">
          <NuxtLink to="/quotes" class="pl-2 underline">See Your Quotes</NuxtLink>
        </Error>
      </div>
    </div>
    <div v-else>
      <Error v-if="error" :message="error" />
    </div>
  </div>
</template>
