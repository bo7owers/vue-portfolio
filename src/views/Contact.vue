<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()
import ExternalLink from '../components/ExternalLink.vue';
</script>
<template>
    <h1>{{ t('ContactHeading') }}</h1>
    <div v-if="locale === 'en'">
        <p>You can see what personal projects I am tackling on my
            <ExternalLink href="https://github.com/bo7owers" description="GitHub profile" />.
        </p>
        <p>You can also reach out to me on
            <ExternalLink description="LinkedIn" href="https://ca.linkedin.com/in/7orresrene" />
        </p>
    </div>
    <div v-else-if="locale === 'fr'">
        <p>Vous pouvez consulter mes projets personnels sur mon
            <ExternalLink href="https://github.com/bo7owers" description="profil GitHub." />.
        </p>
        <p>Vous pouvez également me contacter sur
            <ExternalLink description="LinkedIn" href="https://ca.linkedin.com/in/7orresrene" />
        </p>
    </div>
    <div v-else-if="locale === 'es'">
        <p>Contenido en español</p>
    </div>
    <div v-else>
        <p>No content found</p>
    </div>
</template>
