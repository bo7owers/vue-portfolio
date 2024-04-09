<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { locale, t } = useI18n()
</script>
<template>
    <h1>{{ t('privacyView.heading') }}</h1>
    <div v-if="locale === 'en'">
        <section id="statement">
            <h2>Privacy statement</h2>
            <p>I respect the privacy of you, the visitor. That is why I do not track you in any way. There may be some
                links
                to other websites that may track you but I explicitly will not.</p>
        </section>
        <section id="iframe-info" tabindex="-1">
            <h2>Iframe button?</h2>
            <p>In the home page, there is a 'Show iframe' button. That is because my video is hosted on YouTube and
                youtube
                adds trackers to the website. Therefore, I leave it up to you, if you want to load all the
                YouTube-dependent
                scripts that will load when the iframe is shown.</p>
            <p>Go to the <router-link to="/portfolio">portfolio</router-link> page.</p>
        </section>
    </div>
    <div v-else-if="locale === 'fr'">
        <section id="statement">
            <h2>Déclaration de confidentialité</h2>
            <p>
                Je respecte votre vie privée en tant que visiteur. C'est pourquoi je ne vous traque en aucune façon. Il
                peut y avoir des liens vers d'autres sites web qui peuvent vous suivre, mais je m'y refuse
                explicitement.</p>
        </section>
        <section id="iframe-info" tabindex="-1">
            <h2>Bouton Iframe ?</h2>
            <p>Sur la page d'accueil, il y a un bouton "Show iframe". C'est parce que ma vidéo est hébergée sur YouTube
                et que YouTube ajoute des traceurs au site web. Je vous laisse donc le soin de charger tous les scripts
                qui dépendent de YouTube et qui se chargeront lorsque l'iframe sera affichée.</p>
            <p>Allez sur la page du <router-link to="/portfolio">portfolio</router-link>.</p>
        </section>
    </div>
    <div v-else-if="locale === 'es'">
        <p>contenido en español</p>
    </div>
    <div v-else>
        <h2>Content not found</h2>
    </div>
</template>