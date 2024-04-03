import { defineStore } from "pinia";
import { ref } from "vue";

let html = document.querySelector('html')

export const useThemeStore = defineStore('themeStore', () => {
    const currentTheme = ref<string>('dark')

    // methods
    function setTheme() {
        html?.setAttribute('style', `color-scheme: ${currentTheme.value}`)
        currentTheme.value === 'dark'
            ? html?.classList.remove('light-theme')
            : html?.classList.remove('dark-theme')
        html?.classList.add(`${currentTheme.value}-theme`)
    }


    return {
        currentTheme,
        setTheme
    }
})