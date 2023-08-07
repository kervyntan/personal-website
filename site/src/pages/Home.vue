<script lang="ts" setup>
import ContactForm from "@/views/ContactForm.vue"
import CloudAndSun from "@/views/CloudAndSun.vue"
import { watch } from "vue";
import { ref } from "vue";
import { useFormStore } from "@/store/useFormStore";
import { storeToRefs } from "pinia";

const formStore = useFormStore();
const { isFormValid, formSubmissionCounter } = storeToRefs(formStore)

const formInvalidMsg = ref(false)
const snackBarMessage = ref('')
const snackBarColor = ref('info')

watch(formSubmissionCounter, () => {
    if (isFormValid.value) {
        formInvalidMsg.value = true
        snackBarColor.value = 'success'
        snackBarMessage.value = 'Form has been successfully submitted.'
    } else {
        formInvalidMsg.value = true
        snackBarColor.value = 'error'
        snackBarMessage.value = 'Form fields have been inputted wrongly. Please try again.'
    }
})

</script>

<template>
    <VSnackbar v-model="formInvalidMsg" timeout="3000" location="top center" variant="flat" :color="snackBarColor">
        {{ snackBarMessage }}

        <template #actions>
            <VBtn color="info" @click="formInvalidMsg = false">
                Close
            </VBtn>
        </template>
    </VSnackbar>
    <VContainer>

        <!-- Hero -->
        <section class="section hero">
            <VRow class="align-center flex-column flex-sm-row" no-gutters>
                <VCol xs="12" sm="6" class="order-2 order-sm-1">
                    <VCard variant="text" class="text-center text-sm-left">
                        <VCardTitle class="text-white"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
                            molestiae quibusdam qui deserunt voluptatum quis nobis, perferendis eum dolorem cupiditate
                            eligendi voluptates ad, inventore, explicabo nisi soluta reiciendis nesciunt obcaecati?
                        </VCardTitle>'
                        <VBtn class="rounded-pill px-9" text="Lorem Ipsum"></VBtn>
                    </VCard>
                </VCol>
                <VCol xs="12" sm="6" class="order-1 order-sm-2">
                    <VImg :width=500 class="ml-auto" src='@/assets/technology.png' />
                </VCol>
            </VRow>
        </section>

        <!-- About -->
        <section class="section about text-center text-sm-left" v-motion-fade>
            <CloudAndSun />
            <h2 class="text-h2 text-white mt-4"> About Me </h2>
            <VCard class="d-flex px-5 py-5 mt-4">
                <!-- <VImg /> -->
                <VRow class="align-center justify-space-between flex-column flex-sm-row" no-gutters>
                    <VCol xs="12" sm="4">
                        <div style="background-image: linear-gradient(#2fb5c8, #286ede); height: 200px;">
                        </div>
                    </VCol>
                    <VCol xs="12" sm="7">
                        <VCardTitle class="text-blue font-weight-bold text-left"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore veniam debitis harum
                            mollitia minus rem perferendis nobis</VCardTitle>
                        <VCardText class="pl-0 text-left"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum corporis odit nesciunt
                            beatae? Minus veniam sit neque eum. Qui, ab!</VCardText>
                    </VCol>
                </VRow>
            </VCard>
            <VRow class="justify-center align-center" style="margin-top : 2rem;" no-gutters> 
                <VBtn text="Lorem Ipsum" class="mx-auto rounded-pill px-9" />
            </VRow>
        </section>

        <section class="section featured" v-motion-fade-visible>
            <h2 class="text-h2 text-white font-italic"> Featured Works </h2>
            <VRow  no-gutters></VRow>
            <VRow  no-gutters></VRow>
            <VRow  no-gutters></VRow>
            <VRow class="justify-center align-center" style="margin-top: 2rem;" no-gutters>
                <VBtn text="View All Works" class="mx-auto rounded-pill px-9" />
            </VRow>
        </section>

        <section class="section contact" v-motion-fade-visible>
            <h2 class="text-h2 text-white d-inline-flex">
                Reach Me
                <VImg :width="50" src="@/assets/network-icon.png" />
            </h2>
            <ContactForm style="margin-top: 2rem;"/>
        </section>

        <VRow class="justify-center align-center" style="margin-top : 4rem;">
            <h6 class="text-h6 text-white text-center"> Copyright &copy; Kervyn Tan <br class="d-block d-sm-none"/>All Rights Reserved </h6>
        </VRow>
    </VContainer>
</template>

<style>
.hero .v-col.v-col-6 {
    padding: 0;
}
</style>
  