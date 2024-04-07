import { defineStore } from "pinia";
import { ref } from "vue";

let html = document.querySelector('html')
let localStorageTheme = localStorage.getItem('theme')

export const useThemeStore = defineStore('themeStore', () => {
    const currentTheme = ref<string>('')

    localStorageTheme ? currentTheme.value = localStorageTheme : currentTheme.value = 'dark'
    // methods
    function setTheme() {
        html?.setAttribute('style', `color-scheme: ${currentTheme.value}`)
        currentTheme.value === 'dark'
            ? html?.classList.remove('light-theme')
            : html?.classList.remove('dark-theme')
        html?.classList.add(`${currentTheme.value}-theme`)
        localStorage.setItem('theme', currentTheme.value)
    }


    return {
        currentTheme,
        setTheme
    }
})