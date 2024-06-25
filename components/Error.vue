<script setup lang="ts">
    const props = defineProps<{
        error?: string
    }>();
</script>

<template>
    <div class="w-fit bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <p class="error">{{ props.error }}</p>
    </div>
</template>