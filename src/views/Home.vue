<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import ExternalLink from '../components/ExternalLink.vue'
import { ref } from 'vue'

const { t, locale } = useI18n()

const showIframe = ref<boolean>(false)
</script>

<template>
    <h1>{{ t('homeHeading') }}</h1>

    <div v-if="locale === 'en'">
        <section>
            <h2>A quick introduction</h2>
            <p>I am a web developer with experience on
                <ExternalLink href="https://www.goskills.com/Resources/Adult-learning-theory"
                    description="adult learning" /> and
                <ExternalLink href="https://dictionary.cambridge.org/dictionary/english/e-learning"
                    description="e-learning" /> environments. I have experience in multimedia journalism and content
                creation as
                well.
            </p>
        </section>
        <section>
            <h2>Web dev experience</h2>
            <p>During my time as web developer, I have used multiple Javascript framewors to develop accessible and
                interactive activities like:</p>
            <ul class="frameworks">
                <li class="vue">
                    <ExternalLink href="https://vuejs.org/" description="Vue JS" />
                </li>
                <li class="react">
                    <ExternalLink href="https://react.dev/" description="React" />
                </li>
                <li class="svelte">
                    <ExternalLink href="https://svelte.dev/" description="Svelte" />
                </li>
                <li class="snap">
                    <ExternalLink href="https://github.com/snap-framework/snap" description="Snap!" /> Project led by
                    the
                    Canada School of Public Service (CSPS).
                </li>
                <li class="power-apps">
                    <ExternalLink href="https://www.microsoft.com/en-us/power-platform/products/power-apps"
                        description="Microsoft PowerApps" />
                </li>
            </ul>
        </section>
        <section id="courses">
            <h2>Some courses I have worked on with <abbr title="Canada School of Public Service">CSPS</abbr></h2>
            <ul>
                <li>
                    <ExternalLink href="https://catalogue.csps-efpc.gc.ca/product?catalog=INC118&cm_locale=en"
                        description="Fostering an Inclusive Workplace" />. <ul>
                        <li>Use a custom, gulp-based workflow to create interactive activities.</li>
                        <li>Use React Email to design engaging emails that are being sent to learners using the
                            Brightspace Intelligent Agent System.</li>
                        <li>Use release conditions to tailor the learer experience for students.</li>
                        <li>Test pages for accessibility errors and fix them.</li>
                    </ul>
                </li>
                <li>
                    <ExternalLink href="https://catalogue.csps-efpc.gc.ca/product?catalog=INC101&cm_locale=en"
                        description="Introduction to Gender-based Analysis Plus (GBA Plus)" />.
                    <ul>
                        <li>Collaborate with Instructional Designer (ID) to prototype a branching activity using Figma.
                        </li>
                        <li>Program activity with Brightspace's What you see is what you get (WYSIWYG) HTML editor so
                            that <abbr title="Instructional Designers">IDs</abbr> can edit the activity without the need
                            of a multimedia technician.</li>
                        <li>Test pages for accessibility errors and fix them.</li>
                    </ul>
                </li>
                <li>
                    <ExternalLink href="https://catalogue.csps-efpc.gc.ca/product?catalog=WMT203&cm_locale=en"
                        description="Mental Health and the Workplace: Raising Awareness" />
                    <ul>
                        <li>Assist fellow multimedia technician with building an Interactive Toolkit using Vue Js.</li>
                        <li>Build a bilingual glossary.</li>
                        <li>Test pages for accessibility errors and fix them.</li>
                    </ul>
                </li>
            </ul>
        </section>
        <section>
            <h2>Multimedia projects</h2>
            <section id="vue_advent">
                <h3>Advent of Vue 2022</h3>
                <p>For the 2022 holiday season, I created some projects, here are some that I think worked out the best:
                </p>
                <ul>
                    <li>
                        <ExternalLink href="https://bo7owers.github.io/aov-gift-label/"
                            description="Interactive Gift Label" />. It's a fun, little web app that allows you to
                        customise holiday labels for those times when you are wrapping presents and forget to buy
                        labels. Just remember to allow background colors when printing!
                    </li>
                    <li>
                        <ExternalLink href="https://bo7owers.github.io/2022-christmas-tree-lights-problem/"
                            description="Vue Christmas Tree" />. Used some Vue Js directives to render the same
                        component while creating an HTML and CSS Christmas tree.
                    </li>
                </ul>
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
            </section>

            <section id="demo_reel">
                <h3>Demo Reel</h3>
                <p id="show_iframe" tabindex="-1">You can find a quick demo reel showcasing my areas of expertice by
                    selecting the "Show
                    iframe" button
                    that follows. Visit the <router-link to="/privacy#iframe-info">privacy page</router-link> to learn
                    why.
                </p>
                <button @click="showIframe = !showIframe" class="btn btn-primary">Show iframe</button>
                <div aria-live="polite">
                    <div v-if="showIframe">
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
    <div v-else-if="locale === 'fr'">
        <p>fr</p>
    </div>
    <div v-else-if="locale === 'es'">
        <p>es</p>
    </div>
    <div v-else>
        <p>Content not found</p>
    </div>


</template>

<style>
ul.frameworks {
    li {
        --framework-img: url(../assets/logo.png);
        list-style-image: var(--framework-img);

        &::marker {
            font-size: 10px;
        }

        &.vue {
            --framework-img: url(../assets/img/frameworks/vuejs.org.png);
        }

        &.react {
            --framework-img: url(../assets/img/frameworks/react.dev.ico);
        }

        &.svelte {
            --framework-img: url(../assets/img/frameworks/svelte.dev.png);
        }

        &.snap {
            --framework-img: url(../assets/img/frameworks/snap.png);
        }

        &.power-apps {
            --framework-img: url(../assets/img/frameworks/make.powerapps.com.ico);
        }

    }
}
</style>
