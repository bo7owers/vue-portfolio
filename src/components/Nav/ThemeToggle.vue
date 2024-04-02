<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

let html = document.querySelector('html')
const currentTheme = ref('')

// localization

const { t } = useI18n()

onMounted(() => {
    currentTheme.value = 'dark'
    setTheme()
})

watch(currentTheme, () => {
    console.log(currentTheme.value)
    setTheme()
})

function setTheme() {
    html?.setAttribute('style', `color-scheme: ${currentTheme.value}`)
    currentTheme.value === 'dark'
        ? html?.classList.remove('light-theme')
        : html?.classList.remove('dark-theme')
    html?.classList.add(`${currentTheme.value}-theme`)
}
</script>
<template>
    <div class="theme-select">
        <label for="theme_slector">{{ t('navigation.theme.label') }}</label>
        <select name="selector" id="theme_selector" v-model="currentTheme">
            <option value="dark">{{ t('navigation.theme.dark') }}</option>
            <option value="light">{{ t('navigation.theme.light') }}</option>
        </select>
    </div>
</template>
