<script setup lang="ts">
import ContactForm from '@/views/ContactForm.vue';


</script>

<template>
    <VContainer>
        <div class="text-center">
            <VImg class="mx-auto" :width="200" src="@/assets/plane.png" />
            <h2 class="text-h2 text-white d-inline-flex">
                Contact
            </h2>
        </div>
        <ContactForm />
    </VContainer>
</template>