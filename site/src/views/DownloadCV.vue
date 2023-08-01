<script setup lang="ts">

const downloadResume = () => {
    
}

</script>

<template>
    <VCard class="download-card" variant="text" rounded="true">
        <div>
            <a href="src/assets/resumes/Kervyn Tan-Resume.pdf" download>
                <VIcon @click="downloadResume"> mdi-file-download-outline </VIcon>
            </a>
        </div>
    </VCard>
</template>