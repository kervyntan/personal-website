<script setup lang="ts">
import PortfolioProjectCard from '@/views/PortfolioProjectCard.vue';

const projectSkillsFirst = ["Web Development", "React", "Firebase Hosting", "Firestore Database"]
const projectSkillsSecond = ["Web Development", "Python", "Selenium"]

</script>

<template> 
    <!-- Option to change the type of animation for the elements atop the page  -->
    <VContainer>
        <section class="intro-section">
            <div class="text-center">
                <VImg :width=100 class="mx-auto" src="@/assets/bulb-icon.png" />
            </div>
            <h2 class="text-h2 text-center text-white mt-4"> Portfolio </h2>
        </section>

        <section class="projects-section">
            <VRow no-gutters class="mt-5 justify-space-between" style="gap: 2rem;">
                <!-- Each Portfolio Project Card text will be abstracted into database, input from CMS  -->
                <PortfolioProjectCard 
                projectTitle="Leave Management" 
                imgFilePath="projects/leaveManagement/home.png" 
                description="This is a Leave Management Web Application."
                :skills="projectSkillsFirst"
                />
                <PortfolioProjectCard 
                projectTitle="Python Job Scrapper"
                imgFilePath="projects/jobScrapper/job_scrapper.png" 
                description="This is a Web scraper/crawler that helps to assemble desired job listings into one text file."
                :skills="projectSkillsSecond"
                v-motion-fade-visible
                />
            </VRow>
        </section>
    </VContainer>
</template>