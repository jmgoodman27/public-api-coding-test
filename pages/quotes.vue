<script setup>
useSeoMeta({
  title: "Your Quotes",
  description: "Save your favorite quotes!",
});
</script>

<template>
  <div class="p-4">
    <h1 class="font-primary text-3xl pb-4">Your Quotes</h1>
    <!-- 'Your quotes' are stored in local storage, so need to render this component client side only -->
    <ClientOnly fallback-tag="p" fallback="Loading quotes..." class="font-primary">
        <YourQuotes />
    </ClientOnly>
  </div>
</template>