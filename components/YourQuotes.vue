<script setup lang="ts">
// Use global store with Pinia to get saved quotes
const store = useStore()
store.loadQuotes();
</script>

<template>
  <div class="font-primary">
    <ul>
      <li class="mb-4" v-for="(quote, index) in store.savedQuotes" :key="index">
        {{ quote.quote }} - {{ quote.author }}
        <button class="bg-red-100 p-1 ml-2" @click="store.removeQuote(quote)">Remove</button>
      </li>
    </ul>
    <p v-if="store.savedQuotes.length == 0">You have no quotes saved.</p>
  </div>
</template>
