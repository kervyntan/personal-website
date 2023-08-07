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
        <VRow class="flex-column flex-sm-row">
            <VCol xs="12" sm="6">
                <VTextField class="landing-input" rounded variant="solo" v-model="name" label="Name" />
            </VCol>
            <VCol xs="12" sm="6">
                <VTextField class="landing-input" rounded variant="solo" v-model="email" label="Email Address" />
            </VCol>
        </VRow>

        <VRow class="mt-9 mt-sm-5" no-gutters>
            <VCol cols="12">
                <VTextarea class="landing-input landing-textarea" v-model="message" label="Message" />
            </VCol>
        </VRow>

        <VRow class="justify-center align-center" style="margin-top: 2rem;" no-gutters>
            <VBtn text="Submit" class="mx-auto rounded-pill px-9" type="submit" />
        </VRow>
    </VForm>
</template>

<style>
.v-label {
    color: #fff;
    opacity: 1;
}

.landing-input .v-field--variant-solo {
    background: transparent;
}

.landing-input .v-label.v-field-label {
    margin-inline-start: 50px !important;
}
</style>