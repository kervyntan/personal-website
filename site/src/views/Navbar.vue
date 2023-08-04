<script setup lang="ts">
import { VImg } from 'vuetify/lib/components/index.mjs';



</script>

<template class="navbar">
    <VContainer>
        <VRow class="align-center" no-gutters>
            <VCol class="w-25">
                <a class="" href="/">
                    <VImg class="navbar-logo" src="@/assets/cloud.png" />
                </a>
            </VCol>
            <VCol class="w-75">
                <div class="d-flex justify-end">
                    <a class="mr-5 text-decoration-none text-white" href="/about"> About </a>
                    <a class="mr-5 text-decoration-none text-white" href="/portfolio"> Portfolio </a>
                    <a class="text-decoration-none text-white" href="/contact"> Contact </a>
                </div>
            </VCol>
        </VRow>
    </VContainer>
</template>

<style>
.v-list.v-theme--light.v-list--density-default.v-list--one-line.d-flex {
    background: transparent;
}

.navbar-logo .v-img__img {
    width: 200px;
}
</style>