<script setup lang="ts">
import CloudAndSun from "@/views/CloudAndSun.vue"
import SkillLabel from "@/views/SkillLabel.vue";

const items = [
    {
        id: 1,
        color: 'info',
        icon: 'mdi-information',
    },
    {
        id: 2,
        color: 'error',
        icon: 'mdi-alert-circle',
    },
]

</script>

<template>
    <VContainer>
        <section class="intro-section">
            <div class="text-center">
                <CloudAndSun />
            </div>
            <h2 class="text-h2 text-center text-white my-5"> About Me </h2>
        </section>

        <section class="timeline">
            <!-- <VIcon> mdi-account </VIcon> -->
            <VTimeline truncate-line="start" align="start" side="end" direction="vertical">
                <!-- <VTimelineItem v-for="item in items" :key="item.id" :dot-color="item.color" size="small"> -->
                <VTimelineItem :dot-color="items[0].color" size="small">
                    <VCard class="text-white" variant="text">
                        <h3 class="text-h3 text-md-h5 d-inline-flex">
                            Who Is Kervyn? <VCardText> (Formally)</VCardText>
                        </h3>
                        <VCardText>
                            Hi! I am Kervyn. I'm a 22 year old undergraduate studying Computer Science in the National
                            University of Singapore! :-)
                            Over the past 2-3 years, through my internship and project experiences, I have discovered a
                            inner passion of mine - <strong> Programming & Problem Solving in general</strong>.
                        </VCardText>
                        <VCardText>

                            I thoroughly enjoy getting my feet wet in whatever new technology that comes my way, as well as
                            always being on the
                            lookout for different creative ways to harness the power of technology to solve problems we face
                            on a day-to-day basis!
                        </VCardText>
                        <VCardText>
                            Scroll down further and get to know more about me! :-)
                        </VCardText>
                    </VCard>
                </VTimelineItem>
                <VTimelineItem :dot-color="items[0].color" size="small">
                    <VCard class="text-white" variant="text">
                        <h3 class="text-h3">
                            Hobbies & Interests
                        </h3>
                        <VCardText>
                            Without sounding cliche, one of my biggest hobbies is learning new things! I really enjoy
                            exploring new programming languages
                            as well as different ways to go about performing different tasks, such as the use of different
                            web frameworks/libraries such as
                            Vue and ReactJS in order to build a website.
                        </VCardText>

                        <!-- <VCardText>
                            
                        </VCardText>

                        <VCardText>
                            
                        </VCardText> -->
                    </VCard>
                </VTimelineItem>

                <VTimelineItem size="small" v-motion-fade-visible>
                    <VCard class="text-white" variant="text">
                        <h3 class="text-h3 mb-5">
                            Experiences
                        </h3>
                        <VTimeline align="start">
                            <VTimelineItem size="x-small" v-motion-fade-visible>
                                <!-- <VCard variant="text"> -->
                                    <h4 class="text-h4">
                                        May 2023 - Jul 2023
                                    </h4>
                                    <VRow style="padding: 1rem 0rem 0rem 0rem;" no-gutters>
                                        <SkillLabel skill="Simplified Technology" imgFileName="web-dev.png" />
                                    </VRow>

                                    <VCardText>
                                        - Built 2 QMS (Queue Management System) using Vue, Vuetify frontend and C# backend
                                        with .NET Core, Entity Framework, Flurl, and SeriLog.
                                    </VCardText>
                                    <VCardText>

                                        - Experienced in hardware device integration such as ESC/POS Printer using C#.
                                    </VCardText>
                                    <VCardText>
                                        - Implemented software engineering principles, including Pull Requests (PRs) and
                                        Issues on GitHub, to maintain a clean codebase.
                                    </VCardText>

                                    <VCardText>
                                        - Developed a RESTful API using C# to synchronize a local SQLite database with an
                                        AWS Cloud database using MQTT Protocol.
                                    </VCardText>
                                <!-- </VCard> -->

                            </VTimelineItem>

                            <VTimelineItem size="x-small" v-motion-fade-visible> 
                                <VCard variant="text">
                                    <h4 class="text-h4">
                                        Aug 2022 - May 2023
                                    </h4>
                                    <VRow style="padding: 1rem 0rem 0rem 0rem;" no-gutters>
                                        <SkillLabel skill="Simplified Technology" imgFileName="web-dev.png" />
                                    </VRow>

                                    <VCardText>
                                        - Created an interactive news page from scratch using HTML, CSS, JavaScript, and
                                        Slick Slider.
                                    </VCardText>
                                    <VCardText>

                                        - Conducted website maintenances and compiled page health, page speed findings into
                                        reports for clients.
                                    </VCardText>
                                    <VCardText>
                                        - Assisted in the architecture and conceptualiztion of a QMS (Queue Management
                                        System).
                                    </VCardText>

                                    <VCardText>
                                        - Developed websites using WordPress while employing custom styling to suit client’s
                                        needs.
                                    </VCardText>
                                </VCard>

                            </VTimelineItem>

                            <VTimelineItem size="x-small" v-motion-fade-visible>
                                <VCard variant="text">
                                    <h4 class="text-h4">
                                        Nov 2021 - Aug 2022
                                    </h4>
                                    <VRow style="padding: 1rem 0rem 0rem 0rem;" no-gutters>
                                        <SkillLabel skill="Oangle" imgFileName="web-dev.png" />
                                    </VRow>
                                            <VCardText>
                                                - Led the development of a hardware devices dashboard using Vue, Vuetify,
                                                and
                                                in-house API.
                                            </VCardText>
                                            <VCardText>
                                                - Assisted in building a payment collection system using React frontend,
                                                MySQL
                                                backend and communicating with hardware and payment APIs.
                                            </VCardText>
                                            <VCardText>
                                                - Conceptualized and developed a luggage deposit and retrieval system using
                                                React frontend, PostgreSQL backend, and Banana PI for the in-house API.
                                            </VCardText>

                                            <VCardText>
                                                - Spearheaded the implementation and development of a website using Shopify,
                                                involving the creation of custom embedded code using HTML, CSS, and JS.
                                            </VCardText>

                                            <VCardText>
                                                - Assisted in the development and sitemap construction of websites using
                                                WordPress.
                                            </VCardText>

                                            <VCardText>
                                                - Custom development of a website built on top of a Wix template.
                                            </VCardText>
                                </VCard>

                            </VTimelineItem>
                        </VTimeline>
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
.v-timeline--vertical .v-timeline-divider__after {
    bottom: -12px !important;
}
</style>