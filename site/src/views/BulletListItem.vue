<script setup lang="ts">

const props = defineProps({
    text: String
})
</script>

<template>
    <VListItem prepend-icon="mdi-circle-small" tag="li">
        {{ props.text }}
    </VListItem>
</template>