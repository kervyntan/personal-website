<script setup lang="ts">
import PortfolioProjectCard from '@/views/PortfolioProjectCard.vue';

const projectSkillsFirst = ["Web Development", "React", "Firebase"]
const projectSkillsSecond = ["Web Development", "Python", "Selenium"]

</script>

<template>
    <VContainer>
        <section class="intro-section">
            <div class="text-center">
                <VImg :width=100 class="mx-auto" src="@/assets/bulb-icon.png" />
            </div>
            <h2 class="text-h2 text-center text-white mt-4"> Portfolio </h2>
        </section>

        <section class="projects-section">
            <VRow no-gutters class="mt-5" style="gap: 2rem;">
                <PortfolioProjectCard 
                projectTitle="Leave Management" 
                imgFilePath="projects/leaveManagement/home.png" 
                :skills="projectSkillsFirst"
                />
                <PortfolioProjectCard 
                projectTitle="Python Job Scrapper"
                imgFilePath="projects/jobScrapper/job_scrapper.png" 
                :skills="projectSkillsSecond"
                />
            </VRow>
        </section>
    </VContainer>
</template>