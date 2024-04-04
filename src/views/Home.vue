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
            <h2>A quick introduction.</h2>
            <p>I am a web developer with experience on
                <ExternalLink href="https://www.goskills.com/Resources/Adult-learning-theory"
                    description="adult learning" /> and
                <ExternalLink href="https://dictionary.cambridge.org/dictionary/english/e-learning"
                    description="e-learning" />. I have experience in multimedia journalism and content creation as
                well.
            </p>
        </section>
        <section>
            <h2>Web dev experience.</h2>
            <p>During my time as web developer, I have used multiple Javascript framewors like:</p>
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
                    Canada School of public service.
                </li>
            </ul>
        </section>
        <section>
            <h2>Multimedia projects.</h2>
            <p>Back when I was in school, I experimented with photography and videography.</p>
            <p>
                One example is a
                <ExternalLink
                    href="https://glueottawa.com/2019/01/30/aikido-is-a-peaceful-martial-art-that-will-change-the-students-lives-completely/"
                    description="video story" /> about Aikido that was published by Glue Ottawa.
            </p>
            <p>You can find a quick demo reel showcasing my areas of expertice by selecting the "Show iframe" button
                that follows.</p>
            <p>Visit the <router-link :to="{ name: 'Home' }">privacy page</router-link> to learn why.
            </p>
            <button @click="showIframe = !showIframe" class="btn btn-primary">Show iframe</button>

            <div v-if="showIframe">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/SXbIE0TMe50?si=z-3rQh4SbM4oWNIZ"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
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
    }
}
</style>
