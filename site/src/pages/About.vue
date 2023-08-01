<script setup lang="ts">
import CloudAndSun from "@/views/CloudAndSun.vue"

const items = [
    {
        id: 1,
        color: 'info',
        icon: 'mdi-information',
    },
    {
        id: 2,
        color: 'error',
        icon: 'mdi-alert-circle',
    },
]

const truth = true
</script>

<template>
    <VContainer>
        <section class="intro-section">
            <div class="text-center">
                <CloudAndSun />
            </div>
            <h2 class="text-h2 text-center text-white mt-4"> About Me </h2>
        </section>

        <section class="timeline">
            <VIcon> mdi-account </VIcon>
            <VTimeline side="end" direction="vertical">
                <VTimelineItem v-for="item in items" :key="item.id" :dot-color="item.color" size="small">
                    <VAlert :value="truth" :color="item.color" :icon="item.icon">
                        Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod
                        convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an
                        salutandi sententiae.
                    </VAlert>
                </VTimelineItem>
            </VTimeline>
        </section>

    </VContainer>
</template>

<style>
.v-timeline-item__opposite {
    display : none;
}
</style>