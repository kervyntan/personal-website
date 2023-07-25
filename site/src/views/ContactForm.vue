<script setup lang="ts">
import { ref } from 'vue';
import { useFormStore } from '@/store/useFormStore';
import { storeToRefs } from 'pinia';

const formStore = useFormStore();

const { name, email, message } = storeToRefs(formStore)

const form = ref()

const handleSubmit = async () => {
    await formStore.submitForm()
}
</script>

<template>
    <VForm ref="form" @submit.prevent="handleSubmit">
        <VRow style="margin-top: 2rem;">
            <VCol cols="6">
                <VTextField class="landing-input" rounded variant="solo" v-model="name" label="Name">
                </VTextField>
            </VCol>
            <VCol cols="6">
                <VTextField class="landing-input" rounded variant="solo" v-model="email" label="Email Address">
                </VTextField>
            </VCol>
        </VRow>

        <VRow style="margin-top: 2rem;">
            <VCol cols="12">
                <VTextarea class="landing-input landing-textarea" v-model="message" label="Message"></VTextarea>
            </VCol>
        </VRow>

        <VRow class="justify-center align-center" style="margin-top: 2rem;">
            <VBtn text="Lorem Ipsum" class="mx-auto rounded-pill px-9" type="submit" />
        </VRow>
    </VForm>
</template>