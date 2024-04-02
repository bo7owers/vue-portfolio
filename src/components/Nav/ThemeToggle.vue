<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
let html = document.querySelector('html')
const currentTheme = ref('')

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
        <label for="theme_slector">Select a theme</label>
        <select name="selector" id="theme_selector" v-model="currentTheme">
            <option value="dark">Dark</option>
            <option value="light">Light</option>
        </select>
    </div>
</template>
