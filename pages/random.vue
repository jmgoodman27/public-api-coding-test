<script setup>
useSeoMeta({
  title: "Random Quotes",
  description: "Get and save random quotes.",
});
</script>

<template>
  <div>
    <Quote type="random" title="Random Quote" :showSaveBtn="true" :showNewQuoteBtn="true" />
  </div>
</template>