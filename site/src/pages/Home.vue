<script lang="ts" setup>
import Navbar from "@/views/Navbar.vue"
import { ref, computed } from "vue";

const formInvalidMsg = ref(false)
const snackBarMessage = ref('')
const snackBarColor = ref('info')

const name = ref('')

const email = ref('')

const message = ref('')

const form = ref()

const isValidName = computed(() => name.value.length > 0)
const isValidEmail = computed(() => /^[^@]+@\w+(\.\w+)+\w$/.test(email.value))
const isFormValid = computed(() => isValidName.value && isValidEmail.value)

const handleSubmit = () => {

    // set up email send out

    if (isFormValid.value) {
        formInvalidMsg.value = true
        snackBarColor.value = 'success'
        snackBarMessage.value = 'Form has been successfully submitted.'
    } else {
        formInvalidMsg.value = true
        snackBarColor.value = 'error'
        snackBarMessage.value = 'Form fields have been inputted wrongly. Please try again.'
    }

}

</script>

<template>
    <VSnackbar v-model="formInvalidMsg" location="top center" variant="flat" :color="snackBarColor">
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
            <VRow class="align-center">
                <VCol cols="6">
                    <VCard variant="text">
                        <VCardTitle class="text-white"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
                            molestiae quibusdam qui deserunt voluptatum quis nobis, perferendis eum dolorem cupiditate
                            eligendi voluptates ad, inventore, explicabo nisi soluta reiciendis nesciunt obcaecati?
                        </VCardTitle>'
                        <VBtn class="rounded-pill px-9" text="Lorem Ipsum"></VBtn>
                    </VCard>
                </VCol>
                <VCol cols="6">
                    <VImg :width=500 class="ml-auto" src='@/assets/technology.png' />
                </VCol>
            </VRow>
        </section>

        <!-- About -->
        <section class="section about">
            <div class="d-inline-flex" style="position : relative;">
                <VImg :width="200" src='@/assets/cloud.png' />
                <VImg style="position : absolute; right: 0; top: -25%;" :width="50" src='@/assets/sun.png' />
            </div>
            <h2 class="text-h2 text-white mt-4"> About Me </h2>
            <VCard class="d-flex px-5 py-5 mt-4">
                <!-- <VImg /> -->
                <VRow class="align-center">
                    <VCol cols="3">
                        <div style="background-image: linear-gradient(#2fb5c8, #286ede); width: 250px; height: 200px;">
                        </div>
                    </VCol>
                    <VCol cols="9">
                        <VCardTitle> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore veniam debitis harum
                            mollitia minus rem perferendis nobis</VCardTitle>
                        <VCardText> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum corporis odit nesciunt
                            beatae? Minus veniam sit neque eum. Qui, ab!</VCardText>
                    </VCol>
                </VRow>
            </VCard>
            <VRow class="justify-center align-center" style="margin-top : 2rem;">
                <VBtn text="Lorem Ipsum" class="mx-auto rounded-pill px-9" />
            </VRow>
        </section>

        <section class="section featured">
            <h2 class="text-h2 text-white font-italic"> Featured Works </h2>
            <VRow></VRow>
            <VRow></VRow>
            <VRow></VRow>
            <VRow class="justify-center align-center" style="margin-top: 2rem;">
                <VBtn text="View All Works" class="mx-auto rounded-pill px-9" />
            </VRow>
        </section>

        <section class="section contact">
            <h2 class="text-h2 text-white d-inline-flex"> 
                Reach Me <VImg :width="50" src="@/assets/network-icon.png" />
            </h2>
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
        </section>

        <VRow class="justify-center align-center" style="margin-top : 4rem;">
            <h6 class="text-h6 text-white"> Copyright &copy; Kervyn Tan All Rights Reserved </h6>
        </VRow>
    </VContainer>
</template>

<style>
.hero .v-col.v-col-6 {
    padding: 0;
}

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
  