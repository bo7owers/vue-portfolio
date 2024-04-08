<script setup lang="ts">
import Navigation from './components/Nav/Navigation.vue'
import Footer from './components/Footer.vue'
import { useNavStore } from './stores/NavStore'
import { storeToRefs } from 'pinia'
import { useI18n } from 'vue-i18n'
import { useThemeStore } from './stores/ThemeToggle'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Avatar from './components/Avatar.vue'

const navStore = useNavStore()
const { dropdownMenuActive } = storeToRefs(navStore)

// Close dropdown menu if is open and you click outside of it
document.addEventListener('click', (e: any) => {
    if (
        dropdownMenuActive.value === true &&
        !e.target.closest('li[aria-expanded="true"]')
    ) {
        dropdownMenuActive.value = false
    }
})

// localization
const { t } = useI18n()

// theming 
const themeStore = useThemeStore()
const { currentTheme } = storeToRefs(themeStore)

const { setTheme } = themeStore

const route = useRoute()

let localStorageTheme = localStorage.getItem('theme')

onMounted(() => {
    // set dark theme on page mounted
    localStorageTheme ? currentTheme.value = localStorageTheme : currentTheme.value = 'dark'
    setTheme()
})

</script>
<template>
    <a href="#main_content" class="skip-to-main"> {{ t('skipLink') }}</a>
    <div class="container all-info" :class="route.name === 'Portfolio' && 'portfolio-layout'">
        <Navigation class="row-full" />
        <div class="row-center">
            <main id="main_content" class="content-area row-center row-flex row-flex-center" role="main" tabindex="-1">
                <router-view />
            </main>
        </div>
        <aside>
            <Avatar v-if="route.name === 'Home'" />
        </aside>
        <Footer />
    </div>
</template>

<style>
.btn {
    /* regular state */
    --btn-color: var(--so-white);
    --btn-bg-color: var(--brand-black);
    --btn-border-color: var(--brand-black);
    /* hover state */
    --btn-hover-bg-color: color-mix(in srgb,
            var(--brand-black) 88%,
            var(--so-white) 10%);
    --btn-hover-color: var(--btn-color);
    --btn-hover-border-color: var(--btn-hover-bg-color);
    /* active state */
    --btn-active-color: var(--btn-color);
    --btn-active-bg-color: var(--btn-bg-color);
    --btn-active-border-color: color-mix(in srgb,
            var(--brand-black) 70%,
            var(--brand-black) 20%);
    min-width: 4rem;
    padding-inline: 1rem;
    min-height: 2rem;
    cursor: pointer;
    color: var(--btn-color);
    background-color: var(--btn-bg-color);
    border: 2px solid var(--btn-border-color);
    border-radius: 0.25rem;

    transition: background-color 150ms ease-in, color 100ms ease-in-out;

    &:hover {
        color: var(--btn-hover-color);
        background-color: var(--btn-hover-bg-color);
        border-color: var(--btn-hover-border-color);
    }

    &:active {
        color: var(--btn-color);
        background-color: var(--btn-bg-color);
        border-color: var(--btn-active-border-color);
    }

    &.btn-primary {
        /* regular state */
        --btn-color: var(--so-white);
        --btn-bg-color: #5c6ec2;
        --btn-border-color: var(--highlight-bg);
        /* hover state */
        --btn-hover-bg-color: color-mix(in srgb,
                var(--highlight-bg) 88%,
                var(--brand-black) 10%);
        --btn-hover-color: var(-solid-black);
        --btn-hover-border-color: var(--btn-hover-bg-color);
        /* active state */
        --btn-active-color: var(--btn-color);
        --btn-active-bg-color: var(--btn-bg-color);
        --btn-active-border-color: color-mix(in srgb,
                var(--btn-bg-color) 70%,
                var(--so-white) 20%);
    }

    &.btn-secondary {
        /* regular state */
        --btn-bg-color: var(--so-white);
        --btn-color: var(--brand-blue);
        --btn-border-color: var(--brand-blue);
        /* hover state */
        --btn-hover-bg-color: color-mix(in srgb,
                var(--brand-blue) 88%,
                var(--so-white) 10%);
        --btn-hover-color: var(--btn-bg-color);
        --btn-hover-border-color: var(--btn-hover-bg-color);
        /* active state */
        --btn-active-color: var(--btn-color);
        --btn-active-bg-color: var(--btn-bg-color);
        --btn-active-border-color: color-mix(in srgb,
                var(--brand-blue) 70%,
                var(--brand-black) 20%);
    }
}

a.btn.btn-primary {
    text-decoration: none;
    color: var(--btn-color);
    background-color: var(--btn-bg-color);

    &:hover {
        color: var(--btn-hover-color);
        background-color: var(--btn-hover-bg-color);
    }

    &:visited {
        color: var(--btn-color);
        background-color: var(--btn-bg-color);
    }
}

html.dark-theme {
    .btn {
        &.btn-primary {
            /* --btn-bg-color: #292d44; */
            --btn-color: var(--solid-black);
            --btn-hover-color: var(--btn-color);
        }
    }
}
</style>
