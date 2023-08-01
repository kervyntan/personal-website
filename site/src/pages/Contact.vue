<script setup lang="ts">
import ContactForm from '@/views/ContactForm.vue';
import DownloadCV from '@/views/DownloadCV.vue';


</script>

<template>
    <VContainer>
        <div class="text-center">
            <VImg class="mx-auto" :width="200" src="@/assets/plane.png" />
            <h2 class="text-h2 text-white d-inline-flex">
                Contact
            </h2>
        </div>
        <VRow justify-sm="center" justify-md="space-between" class="flex-sm-column flex-md-row" style="gap: 2rem;" no-gutters>
            <ContactForm class="w-75"/>
            <DownloadCV style="width: 20%;"/>
        </VRow>
    </VContainer>
</template>