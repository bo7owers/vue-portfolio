<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import ExternalLink from '../components/ExternalLink.vue';
</script>
<template>
    <h1>{{ t('ContactHeading') }}</h1>
    <p>You can see what personal projects I am tackling on my
        <ExternalLink href="https://github.com/bo7owers" description="GitHub profile" />.
    </p>
    <p>You can also reach out to me on
        <ExternalLink description="LinkedIn" href="https://ca.linkedin.com/in/7orresrene" />
    </p>
</template>
