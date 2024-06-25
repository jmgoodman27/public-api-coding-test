<script setup>
/* 
  All pages will SSR by default. This can be changed in nuxt.config.ts with routeRules
  https://nuxt.com/docs/guide/concepts/rendering
*/

useSeoMeta({
  title: "Quote of the Day",
  description: "Get your daily inspiration with a quote of the day!",
});
</script>

<template>
  <div class="md:flex">
    <div class="md:w-1/2">
      <Quote type="today" title="Quote of the day" :showSaveBtn="true" :showNewQuoteBtn="false" />
    </div>
    <div class="md:w-1/2">
      <img class="w-full" src="../public/typewriter_bg.jpg" sizes="100vw" />
    </div>
  </div>
</template>