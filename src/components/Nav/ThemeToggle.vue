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
        <label for="theme_slector" :title="t('navigation.theme.label')"><span v-if="currentTheme === 'dark'">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                    <g fill="currentColor" fill-opacity="0">
                        <path
                            d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
                            <animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.4s" values="0;1" />
                        </path>
                        <path
                            d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
                            <animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.4s" values="0;1" />
                        </path>
                    </g>
                    <path fill="none" stroke="currentColor" stroke-dasharray="56" stroke-dashoffset="56"
                        stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z">
                        <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0" />
                    </path>
                </svg>
            </span>
            <span v-else>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                    <g stroke="currentColor" stroke-linecap="round" stroke-width="2">
                        <path fill="currentColor" fill-opacity="0" stroke-dasharray="34" stroke-dashoffset="34"
                            d="M12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7">
                            <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="34;0" />
                            <animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.5s" values="0;1" />
                        </path>
                        <g fill="none" stroke-dasharray="2" stroke-dashoffset="2">
                            <path d="M0 0">
                                <animate fill="freeze" attributeName="d" begin="0.5s" dur="0.2s"
                                    values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1" />
                                <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s"
                                    values="2;0" />
                            </path>
                            <path d="M0 0">
                                <animate fill="freeze" attributeName="d" begin="0.7s" dur="0.2s"
                                    values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5" />
                                <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s"
                                    values="2;0" />
                            </path>
                        </g>
                    </g>
                </svg>
            </span>
        </label>
        <select name="selector" id="theme_selector" v-model="currentTheme">
            <option value="dark">{{ t('navigation.theme.dark') }}</option>
            <option value="light">{{ t('navigation.theme.light') }}</option>
        </select>
    </div>
</template>
