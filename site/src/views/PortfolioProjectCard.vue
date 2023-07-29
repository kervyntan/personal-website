<script setup lang="ts">
import { ref } from 'vue';
import SkillLabel from './SkillLabel.vue';

const showDescription = ref(false)

const props = defineProps({
    imgFilePath: String,
    projectTitle: String,
    skills: Array<string>,
    description: String
})

const getImageUrl = () => {
    return new URL(`../assets/${props.imgFilePath}`, import.meta.url)
}
</script>

<template>
    <VCard color="transparent" variant="text" class="flex-1-1-100">
        <VRow class="d-flex flex-wrap" style="gap: 0.75rem;">
            <SkillLabel v-for="skill in skills" :key="skills?.indexOf(skill)" imgFileName="web-dev.png" :skill="skill" />
        </VRow>
        <VCardTitle class="project-title text-white">
            {{ props.projectTitle }}
            <!-- Look for dropdown looking icon -->
            <VIcon v-if="!showDescription" @click="() => showDescription = !showDescription"> mdi-menu-up </VIcon>
            <VIcon v-if="showDescription" @click="() => showDescription = !showDescription"> mdi-menu-down </VIcon>
            <VCard v-show="showDescription" v-motion-fade-visible>
                <VCardText>
                    {{ props.description }}
                </VCardText>
            </VCard>
        </VCardTitle>
            <VImg class="project-img elevation-24" :src="getImageUrl().href" :cover="true" />
    </VCard>
</template>