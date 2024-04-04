<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import ExternalLink from '../components/ExternalLink.vue'

const { t, locale } = useI18n()
</script>

<template>
    <h1>{{ t('homeHeading') }}</h1>

    <div v-if="locale === 'en'">
        <p>I am a web developer with experience on
            <ExternalLink href="https://www.goskills.com/Resources/Adult-learning-theory"
                description="adult learning" /> and
            <ExternalLink href="https://dictionary.cambridge.org/dictionary/english/e-learning"
                description="e-learning" />.
        </p>

        <p>During my carreer I have used multiple Javascript framewors like:</p>
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
                <ExternalLink href="https://github.com/snap-framework/snap"
                    description="Snap! (led by the Canada School of Public Service)" />
            </li>
        </ul>
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
