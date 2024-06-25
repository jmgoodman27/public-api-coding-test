<script setup lang="ts">
    const props = defineProps<{
        text?: string
    }>();

    const showMessage = ref(true);

    setTimeout(() => {
        showMessage.value = false;
    }, 3000)
</script>

<template>
    <div v-if="showMessage" class="w-fit bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
        <p class="success">{{ props.text }}</p>
    </div>
</template>