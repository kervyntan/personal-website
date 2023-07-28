<script setup lang="ts">
const props = defineProps({
    imgFileName: String,
    skill: String
})

const getImageUrl = () => {
  return new URL(`../assets/${props.imgFileName}`, import.meta.url)
}
</script>

<template>
    <div class="d-inline-flex align-center" style="gap: 0.75rem; padding-inline: 20px; padding-block: 5px; border-radius: 25px; border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));">
         <VImg :width=10 :src="getImageUrl().href" />
         <p class="text-white"> {{ props.skill }} </p>
    </div>
</template>