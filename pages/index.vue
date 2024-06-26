<script setup>
/* 
  All pages will SSR by default. This can be changed in nuxt.config.ts with routeRules
  Individual components can be set to CSR only with the <ClientOnly> tag
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
      <img
        sizes="(max-width: 768px) 100vw, 50vw"
        src="/images/typewriter/300.jpg"
        srcset="/images/typewriter/300.jpg 300w,
          /images/typewriter/600.jpg 600w,
          /images/typewriter/900.jpg 900w,
          /images/typewriter/1200.jpg 1200w,
          /images/typewriter/1500.jpg 1500w"
        alt="Typewriter"
        loading="lazy"
        class="w-full" />
    </div>
  </div>
</template>