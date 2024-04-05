<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()
</script>
<template>
    <h1>{{ t('programmingHeading') }}</h1>

    <div v-if="locale === 'en'">en</div>
    <div v-if="locale === 'fr'">fr</div>
    <div v-if="locale === 'en'">es</div>
    <div v-else>
        Content not found
    </div>

</template>
