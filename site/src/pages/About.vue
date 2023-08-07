<script setup lang="ts">
import CloudAndSun from "@/views/CloudAndSun.vue"
import SkillLabel from "@/views/SkillLabel.vue";
import BulletListItem from "@/views/BulletListItem.vue";
import { ref } from 'vue'

const showDescription = ref(true)

</script>

<template>
    <VContainer>
        <section class="intro-section">
            <div class="text-center">
                <CloudAndSun />
            </div>
            <h2 class="text-h3 text-md-h2 text-center text-white my-5"> About Me </h2>
        </section>

        <section class="timeline">
            <VTimeline truncate-line="start" align="start" side="end" direction="vertical">
                <VTimelineItem dot-color="info" size="small">
                    <VCard class="text-white" variant="text">
                        <h3 class="text-h4 text-md-h3 text-no-wrap align-center d-inline-flex">
                            Who Is Kervyn?
                            <VCardText> (Formally)</VCardText>
                        </h3>
                        <VList bg-color="transparent" tag="ul">
                            <VListItem tag="li">
                                Hi! I am Kervyn. I'm a 22 year old undergraduate studying Computer Science in the
                                National
                                University of Singapore! :-)
                                Over the past 2-3 years, through my internship and project experiences, I have
                                discovered a
                                inner passion of mine - <span class="font-weight-bold"> Programming & Problem Solving in
                                    general </span>.
                            </VListItem>

                            <VListItem tag="li">
                                I thoroughly enjoy getting my feet wet in whatever new technology that comes my way, as
                                well as
                                always being on the
                                lookout for different creative ways to harness the power of technology to solve problems
                                we face
                                on a day-to-day basis!
                            </VListItem>

                            <VListItem tag="li">
                                Scroll down further and get to know more about me! :-)
                            </VListItem>
                        </VList>
                    </VCard>
                </VTimelineItem>
                <VTimelineItem dot-color="info" size="small">
                    <VCard class="text-white" variant="text">
                        <h3 class="text-h4 text-md-h3">
                            Hobbies & Interests
                        </h3>
                        <VList bg-color="transparent" tag="ul">
                            <VListItem tag="li">
                                Without sounding cliche, one of my biggest hobbies is learning new things! I really
                                enjoy
                                exploring new programming languages
                                as well as different ways to go about performing different tasks, such as the use of
                                different
                                web frameworks/libraries such as
                                Vue and ReactJS in order to build a website.
                            </VListItem>
                            <VListItem tag="li">
                                Other hobbies of mine include reading, cycling on the weekends and getting to know new
                                people!
                            </VListItem>
                        </VList>
                    </VCard>
                </VTimelineItem>

                <VTimelineItem size="small" v-motion-fade-visible>
                    <VCard class="text-white" variant="text">
                        <h3 class="text-h4 text-md-h3 mb-5 d-inline-flex d-sm-block">
                            Experiences
                            <VIcon class="d-xs-inline d-sm-none" v-if="!showDescription"
                                @click="() => showDescription = !showDescription"> mdi-menu-up
                            </VIcon>
                            <VIcon class="d-xs-inline d-sm-none" v-if="showDescription"
                                @click="() => showDescription = !showDescription"> mdi-menu-down
                            </VIcon>
                        </h3>
                        <VTimeline v-if="showDescription" align="start">
                            <VTimelineItem size="x-small" v-motion-fade-visible>
                                <!-- <VCard variant="text"> -->
                                <h4 class="text-h5 text-md-h4">
                                    May 2023 - Jul 2023
                                </h4>
                                <VRow style="padding: 1rem 0rem 0rem 0rem;" no-gutters>
                                    <SkillLabel skill="Simplified Technology" imgFileName="web-dev.png" />
                                </VRow>

                                <VList tag="ul" bg-color="transparent">
                                    <BulletListItem class="mt-5" text="Built 2 QMS (Queue Management System) using Vue, Vuetify frontend and C#
                                        backend with .NET Core, Entity Framework, Flurl, and SeriLog." /> 

                                    <BulletListItem class="mt-2" text="Experienced in hardware device integration such as ESC/POS Printer using C#." />

                                    <BulletListItem class="mt-2" text="Implemented software engineering principles, including Pull Requests (PRs) and
                                        Issues on GitHub, to maintain a clean codebase."/>

                                    <BulletListItem class="mt-2 " text="Developed a RESTful API using C# to synchronize a local SQLite database with
                                        an AWS Cloud database using MQTT Protocol."/>
                                </VList>

                            </VTimelineItem>

                            <VTimelineItem size="x-small" v-motion-fade-visible>
                                <VCard variant="text">
                                    <h4 class="text-h5 text-md-h4">
                                        Aug 2022 - May 2023
                                    </h4>
                                    <VRow style="padding: 1rem 0rem 0rem 0rem;" no-gutters>
                                        <SkillLabel skill="Simplified Technology" imgFileName="web-dev.png" />
                                    </VRow>

                                    <VList bg-color="transparent" tag="ul">

                                        <BulletListItem class="mt-5" text="Created an interactive news page from scratch using HTML, CSS, JavaScript, and Slick Slider." />

                                        <BulletListItem class="mt-2 " text="Conducted website maintenances and compiled page health, page speed findings into reports for clients." />

                                        <BulletListItem class="mt-2" text="Assisted in the architecture and conceptualiztion of a QMS (Queue Management System)."/>

                                        <BulletListItem class="mt-2" text="Developed websites using WordPress while employing custom styling to suit client’s needs."/>
                                    </VList>
                                </VCard>

                            </VTimelineItem>

                            <VTimelineItem size="x-small" v-motion-fade-visible>
                                <VCard variant="text">
                                    <h4 class="text-h5 text-md-h4">
                                        Nov 2021 - Aug 2022
                                    </h4>
                                    <VRow style="padding: 1rem 0rem 0rem 0rem;" no-gutters>
                                        <SkillLabel skill="Oangle" imgFileName="web-dev.png" />
                                    </VRow>
                                    <VList bg-color="transparent" tag="ul">

                                        <BulletListItem class="mt-5" text="Led the development of a hardware devices dashboard using Vue, Vuetify,
                                            and in-house API."/>

                                        <BulletListItem class="mt-2" text="Assisted in building a payment collection system using React frontend,
                                            MySQL backend and communicating with hardware and payment APIs."/>

                                        <BulletListItem class="mt-2" text="Conceptualized and developed a luggage deposit and retrieval system using
                                            React frontend, PostgreSQL backend, and Banana PI for the API."/>

                                        <BulletListItem class="mt-2" text="Spearheaded the implementation and development of a website using Shopify,
                                            involving the creation of custom embedded code using HTML, CSS, and JS."/>

                                        <BulletListItem class="mt-2" text="Assisted in the development and sitemap construction of websites using
                                            WordPress."/>

                                        <BulletListItem class="mt-2 " text="Custom development of a website built on top of a Wix template." />
                                  
                                    </VList>
                                </VCard>

                            </VTimelineItem>
                        </VTimeline>
                        <!-- <div class="relative">
                            <VImg :width=50 src="@/assets/bottom-path.png" />
                        </div> -->
                    </VCard>
                </VTimelineItem>
            </VTimeline>
        </section>

    </VContainer>
</template>

<style>
.v-timeline-item__opposite {
    display: none;
}

.v-list-item--density-default:not(.v-list-item--nav).v-list-item--one-line {
    padding-inline-start: 0px !important;
}

.v-list-item__prepend>.v-icon {
    margin-inline-end: 0px !important;
}

.v-timeline--vertical .v-timeline-divider__after {
    bottom: -12px !important;
}
</style>