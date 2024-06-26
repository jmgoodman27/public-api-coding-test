<script setup lang="ts">
    const props = defineProps<{
        message?: string
    }>();
</script>

<template>
    <div class="w-fit bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
        <p class="success">{{ props.message }}</p>
    </div>
</template>