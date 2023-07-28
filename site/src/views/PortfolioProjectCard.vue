<script setup lang="ts">
import SkillLabel from './SkillLabel.vue';

const props = defineProps({
    imgFilePath: String,
    projectTitle: String,
    skills: Array<string>
})

const getImageUrl = () => {
    return new URL(`../assets/${props.imgFilePath}`, import.meta.url)
}
</script>

<template>
    <VCard color="transparent" variant="text" class="flex-1-1">
        <div class="d-flex" style="gap: 0.75rem;">
            <SkillLabel 
            v-for="skill in skills" 
            :key="skills?.indexOf(skill)" 
            imgFileName="web-dev.png" 
            :skill="skill" />
        </div>
        <VCardTitle class="project-title text-white"> {{ props.projectTitle }} </VCardTitle>
        <VImg :src="getImageUrl().href" />
    </VCard>
</template>