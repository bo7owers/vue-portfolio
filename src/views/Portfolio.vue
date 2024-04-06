<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref } from 'vue';
import ExternalLink from '../components/ExternalLink.vue'
import Card from '../components/Card.vue'
import ActionCard from '../components/ActionCard.vue'

const { t, locale } = useI18n()

const showIframe = ref<boolean>(false)

const courses = {
    inc118: {
        title: 'Fostering an Inclusive Workplace',
        href: 'https://catalogue.csps-efpc.gc.ca/product?catalog=INC118&cm_locale=en',
        desc: 'Access in the Learning Platform',
        body:
            ['Use a custom, gulp-based workflow to create interactive activities.',
                'Use React Email to design engaging emails that are being sent to learners using the Brightspace Intelligent Agent System.',
                'Use release conditions to tailor the learer experience for students.',
                'Test pages for accessibility errors and fix them.']
    },
    inc101: {
        title: 'Introduction to Gender-based Analysis Plus (GBA Plus)',
        href: 'https://catalogue.csps-efpc.gc.ca/product?catalog=INC101&cm_locale=en',
        desc: 'Access in the Learning Platform',
        body: [
            `Collaborate with Instructional Designer (ID) to prototype a branching activity using Figma.`,
            ` Program activity with Brightspace's What you see is what you get (WYSIWYG) HTML editor so that IDs can edit the activity without the need of a multimedia technician.`,
            `Test pages for accessibility errors and fix them.`,
        ]
    },
    wmt203: {
        title: 'Mental Health and the Workplace: Raising Awareness',
        href: 'https://catalogue.csps-efpc.gc.ca/product?catalog=WMT203&cm_locale=en',
        desc: 'Access in the Learning Platform',
        body: [
            ` Assist fellow multimedia technician with building an Interactive Toolkit using Vue Js.`,
            ` Add an interactive video player to some videos in the course.`,
            ` Build a bilingual glossary.`,
            `  Test pages for accessibility errors and fix them.`,
        ]
    }
}

const projects = {
    gift: {
        title: 'Interactive Gift Label',
        desc: `It's a fun, little web app that allows you to customise holiday labels for those times when you are wrapping presents and forget to buy labels. Just remember to allow background colors when printing!`,
        href: `https://bo7owers.github.io/aov-gift-label/`,
    },
    tree: {
        title: 'Vue Christmas Tree',
        desc: `Used some Vue Js directives to render the same component while creating an HTML and CSS Christmas tree. `,
        href: `https://bo7owers.github.io/2022-christmas-tree-lights-problem/`,
    }
}

</script>
<template>
    <h1>{{ t('portfolioView.portfolioHeading') }}</h1>

    <div class="portfolio-content" v-if="locale === 'en'">
        <section id="courses">
            <h2>Some courses I have worked on with <abbr title="Canada School of Public Service">CSPS</abbr></h2>

            <div class="card-container">
                <Card v-for="(course, index) in courses" :key="index" :cardTitle="course.title" :url="course.href"
                    :urlDesc="course.desc">
                    <template #cardBody>
                        <ul>
                            <li v-for="(item, index) in course.body" :key="index">
                                {{ item }}
                            </li>
                        </ul>
                    </template>
                </Card>
            </div>
        </section>
        <section id="personal_projects">
            <h2>Multimedia projects</h2>
            <section id="vue_advent">
                <h3>Advent of Vue 2022</h3>
                <p>For the 2022 holiday season, I created some projects, here are some that I think worked out the best:
                </p>
                <ActionCard v-for="(project, index) in projects" :key="index" :title="project.title"
                    :desc="project.desc" :href="project.href" />
            </section>

            <section id="j_school">
                <h3>Video</h3>
                <p>Back when I was in school, I experimented with photography, writing and videography.</p>
                <p>
                    One example is a
                    <ExternalLink
                        href="https://glueottawa.com/2019/01/30/aikido-is-a-peaceful-martial-art-that-will-change-the-students-lives-completely/"
                        description="video story" /> about Aikido that was published by Glue Ottawa.
                </p>
                <h3>Demo Reel</h3>
                <p id="show_iframe" tabindex="-1">You can find a quick demo reel showcasing my areas of expertice by
                    selecting the "Show
                    iframe" button
                    that follows. Visit the <router-link to="/privacy#iframe-info">privacy page</router-link> to learn
                    why.
                </p>
                <button @click="showIframe = !showIframe" class="btn btn-primary">Show iframe</button>
                <div aria-live="polite">
                    <div class="portfolio-content" v-if="showIframe">
                        <iframe width="560" height="315"
                            src="https://www.youtube.com/embed/SXbIE0TMe50?si=z-3rQh4SbM4oWNIZ"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
            </section>
        </section>
    </div>
    <div class="portfolio-content" v-else-if="locale === 'fr'">
        <p>fr</p>
    </div>
    <div class="portfolio-content" v-else-if="locale === 'es'">
        <p>es</p>
    </div>
    <div class="portfolio-content" v-else>
        <p>Content not found</p>
    </div>

</template>

<style scoped>
.portfolio-content {
    display: grid;
    grid-auto-columns: 0.25fr 1fr 1fr 0.25fr;

    & section {
        grid-column: 1/5;
    }
}

.card-container {
    display: grid;
    gap: 1.25rem 1.5rem;
    justify-content: center;
    max-width: 35rem;
    margin-inline: auto;


    @media (min-width: 810px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        max-width: 40em;
    }

    @media (min-width: 992px) {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, auto);
        column-gap: 1rem;
        max-width: 70em;
    }

    @media(min-width: 1600px) {
        max-width: 85em;
        margin-inline: auto;
    }
}
</style>