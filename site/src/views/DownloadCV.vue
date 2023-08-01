<script setup lang="ts">

const downloadResume = () => {
    
}

</script>

<template>
    <VCard class="download-card flex-1-1" variant="tonal" rounded>
        <div class="text-center">
            <a href="src/assets/resumes/Kervyn Tan-Resume.pdf" download>
                <VIcon size="75" @click="downloadResume"> mdi-file-download-outline </VIcon>
                <!-- <VCardText> Download CV </VCardText> -->
            </a>
            <VCardText class="text-white"> View My CV </VCardText>
        </div>
    </VCard>
</template>