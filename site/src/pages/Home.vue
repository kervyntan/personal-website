<script lang="ts" setup>
import Navbar from "@/views/Navbar.vue"
import { ref } from "vue";

const name = ref('')

const email = ref('')

const message = ref('')


</script>

<template>
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
                    <VImg :width=500 class="mx-auto" src='@/assets/technology.png' />
                </VCol>
            </VRow>
        </section>

        <!-- About -->
        <section class="section about">
            <VImg :width="200" src='@/assets/cloud.png' />
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
            <h2 class="text-h2 text-white"> Reach Me </h2>
            <VForm @submit.prevent="() => { }">
                <VRow style="margin-top: 2rem;">
                    <VCol cols="6">
                        <VTextField class="landing-input" rounded variant="solo" v-model="name" label="Name"></VTextField>
                    </VCol>
                    <VCol cols="6">
                        <VTextField class="landing-input" rounded variant="solo" v-model="email" label="Email Address"></VTextField>
                    </VCol>
                </VRow>
                
                <VRow style="margin-top: 2rem;">
                    <VCol cols="12">
                        <VTextarea class="landing-input landing-textarea" rounded v-model="message" label="Message"></VTextarea>
                    </VCol>
                </VRow>

                <VRow class="justify-center align-center" style="margin-top: 2rem;">
                    <VBtn text="Lorem Ipsum" class="mx-auto rounded-pill px-9" type="submit" />
                </VRow>
            </VForm>
        </section>

        <VRow class="justify-center align-center" style="margin-top : 4rem;">
            <h6 class="text-h6 text-white"> Copyright &copy Kervyn Tan All Rights Reserved </h6>
        </VRow>
    </VContainer>
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
    margin-inline-start : 30px !important;
}

.landing-textarea .v-label.v-field-label {
    top : 45% !important;
}

</style>
  