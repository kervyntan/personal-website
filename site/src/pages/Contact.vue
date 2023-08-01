<script setup lang="ts">
import ContactForm from '@/views/ContactForm.vue';
import DownloadCV from '@/views/DownloadCV.vue';


</script>

<template>
    <VContainer class="mb-9">
        <div class="text-center">
            <VImg class="mx-auto" :width="200" src="@/assets/plane.png" />
            <h2 class="text-h2 text-white d-inline-flex">
                Contact
            </h2>
        </div>
        <VRow justify-sm="center" justify-md="space-between" class="flex-sm-column flex-md-row" style="gap: 2rem;" no-gutters>
            <ContactForm class="flex-1-1" style="width: 70%;"/>
            <DownloadCV style="width: 25%;"/>
        </VRow>
    </VContainer>
</template>