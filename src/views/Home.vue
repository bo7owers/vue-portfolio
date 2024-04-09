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
            <p>I am a web developer with experience on adult learning and
                e-learning environments. I have experience in multimedia journalism and content
                creation as
                well.
            </p>
        </section>
        <section>
            <h2>Web dev experience</h2>
            <p>During my time as web developer, I have used multiple Javascript frameworks to develop accessible and
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
        <section id="lms">
            <h2>Learning Management System (LMS) experience</h2>
            <p>My expertise working with <abbr title="Learning Management Systems">LMSs</abbr> varies from:</p>
            <ul>
                <li>Brightspace</li>
                <li>Moodle</li>
                <li>Blackboard</li>
            </ul>
            <p>My focus is on creating engaging and accessible learning experiences on the web.</p>
        </section>

    </div>
    <div v-else-if="locale === 'fr'">
        <section>
            <h2>Une petite introduction</h2>
            <p>Je suis développeur web et j'ai de l'expérience dans le domaine de la formation des adultes et des
                environnements d'apprentissage en ligne. J'ai également de l'expérience dans le journalisme multimédia
                et la création de contenu.
            </p>
        </section>
        <section>
            <h2>Expérience en développement web</h2>
            <p>En tant que développeur web, j'ai utilisé de nombreux frameworks Javascript pour développer des activités
                accessibles et interactives telles que :</p>
            <ul class="frameworks">
                <li class="vue">
                    Vue JS
                </li>
                <li class="react">
                    React
                </li>
                <li class="svelte">
                    Svelte
                </li>
                <li class="snap">
                    Snap! Project led by
                    the
                    Canada School of Public Service (CSPS).
                </li>
                <li class="power-apps">
                    Microsoft PowerApps
                </li>
            </ul>
        </section>
        <section id="lms">
            <h2>Expérience en matière de système de gestion de l'apprentissage</h2>
            <p>J'ai de l'expérience avec les systèmes de gestion de l'apprentissage suivants :</p>
            <ul>
                <li>Brightspace</li>
                <li>Moodle</li>
                <li>Blackboard</li>
            </ul>
            <p>Mon objectif est de créer des expériences d'apprentissage attrayantes et accessibles sur le web.</p>
        </section>
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
