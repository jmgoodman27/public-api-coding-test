<script setup lang="ts">
const savedQuotes = ref([]);
savedQuotes.value = getSavedQuotes();

function remove(quote) {
  removeQuoteFromLocalStorage(quote);
  savedQuotes.value = getSavedQuotes();
}
</script>

<template>
  <div class="font-primary">
    <ul>
      <li class="mb-4" v-for="(quote, index) in savedQuotes" :key="index">
        {{ quote.quote }} - {{ quote.author }}
        <button class="bg-red-100 p-1 ml-2" @click="remove(quote)">Remove</button>
      </li>
    </ul>
    <p v-if="savedQuotes.length == 0">You have no quotes saved.</p>
  </div>
</template>
