<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const year = ref(new Date().getFullYear())

const { t, locale } = useI18n()

onMounted(() => {
    console.log('icons from https://iconify.design/')
})
</script>
<template>
    <footer class="container">
        <div class="call-to row-center">
            <h3>{{ t('footer.getInTouch') }}</h3>
        </div>
        <div class="icons row-center">
            <a href="https://indieweb.social/@bo7owers" target="_blank" rel="noopener noreferrer"
                class="icon icon-mastodon" v-tippy="t('footer.mastoLink')" :aria-label="t('footer.mastoLink')">
                <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 448 512"
                    aria-hidden="true">
                    <path fill="currentColor"
                        d="M433 179.11c0-97.2-63.71-125.7-63.71-125.7c-62.52-28.7-228.56-28.4-290.48 0c0 0-63.72 28.5-63.72 125.7c0 115.7-6.6 259.4 105.63 289.1c40.51 10.7 75.32 13 103.33 11.4c50.81-2.8 79.32-18.1 79.32-18.1l-1.7-36.9s-36.31 11.4-77.12 10.1c-40.41-1.4-83-4.4-89.63-54a102.54 102.54 0 0 1-.9-13.9c85.63 20.9 158.65 9.1 178.75 6.7c56.12-6.7 105-41.3 111.23-72.9c9.8-49.8 9-121.5 9-121.5zm-75.12 125.2h-46.63v-114.2c0-49.7-64-51.6-64 6.9v62.5h-46.33V197c0-58.5-64-56.6-64-6.9v114.2H90.19c0-122.1-5.2-147.9 18.41-175c25.9-28.9 79.82-30.8 103.83 6.1l11.6 19.5l11.6-19.5c24.11-37.1 78.12-34.8 103.83-6.1c23.71 27.3 18.4 53 18.4 175z" />
                </svg>
            </a>
            <a href="https://github.com/bo7owers" target="_blank" rel="noopener noreferrer" class="icon icon-github"
                :aria-label="t('footer.ghLink')" v-tippy="t('footer.ghLink')">
                <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 448 512"
                    aria-hidden="true">
                    <path fill="currentColor"
                        d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8c0-5.4.2-33 .2-55.3c0-15.6-5.2-25.5-11.3-30.7c37-4.1 76-9.2 76-73.1c0-18.2-6.5-27.3-17.1-39c1.7-4.3 7.4-22-1.7-45c-13.9-4.3-45.7 17.9-45.7 17.9c-13.2-3.7-27.5-5.6-41.6-5.6c-14.1 0-28.4 1.9-41.6 5.6c0 0-31.8-22.2-45.7-17.9c-9.1 22.9-3.5 40.6-1.7 45c-10.6 11.7-15.6 20.8-15.6 39c0 63.6 37.3 69 74.3 73.1c-4.8 4.3-9.1 11.7-10.6 22.3c-9.5 4.3-33.8 11.7-48.3-13.9c-9.1-15.8-25.5-17.1-25.5-17.1c-16.2-.2-1.1 10.2-1.1 10.2c10.8 5 18.4 24.2 18.4 24.2c9.7 29.7 56.1 19.7 56.1 19.7c0 13.9.2 36.5.2 40.6c0 4.3-3 9.5-11.5 8c-66-22.1-112.2-84.9-112.2-158.3c0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7c-.2-1.5 1.1-2.8 3-3.2c1.9-.2 3.7.6 3.9 1.9c.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4c-2.2.2-3.7-.9-3.7-2.4c0-1.3 1.5-2.4 3.5-2.4c1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3c-1.9-.4-3.2-1.9-2.8-3.2c.4-1.3 2.4-1.9 4.1-1.5c2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6c-1.5-1.3-1.9-3.2-.9-4.1c.9-1.1 2.8-.9 4.3.6c1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3c1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6c-1.1-1.3-1.3-2.8-.4-3.5c.9-.9 2.4-.4 3.5.6c1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4c-1.3-.6-1.9-1.7-1.5-2.6c.4-.6 1.5-.9 2.8-.4c1.3.7 1.9 1.8 1.5 2.6z" />
                </svg>
            </a>
            <a href="https://ca.linkedin.com/in/7orresrene" target="_blank" rel="noopener noreferrer"
                class="icon icon-linkedin" v-tippy="t('footer.linkedLink')" :aria-label="t('footer.linkedLink')">
                <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 448 512"
                    aria-hidden="true">
                    <path fill="currentColor"
                        d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5c0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7c-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5c67.2 0 79.7 44.3 79.7 101.9V416z" />
                </svg>
            </a>
        </div>
        <div class="year-of-creation row-center">
            <p>{{ t('footer.madeIn') }} {{ year }} {{ t('footer.by') }} René Torres</p>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@use '../assets/sass/vars/colors' as c;
@use '../assets/sass/mixins/breakpoints' as b;

footer {
    margin-top: auto;
    background-color: c.$brand-grey;
    grid-column: 1/4;
    padding-bottom: 0.5rem;
    border-top: 1px solid var(--dropdown-shadow2);

    .call-to {
        >h3 {
            color: c.$brand-black;
            text-align: inherit;
            padding: 0.5rem 0 0.5rem 0.75rem;

            @include b.breakpoint(small) {
                padding: 0.75rem 2rem 0 1rem;
            }

            @include b.breakpoint(large) {
                padding: 0.75rem 2rem 0 5rem;
            }
        }
    }

    .year-of-creation {
        display: flex;

        >p {
            margin-inline: auto;
        }
    }
}

.icons {
    display: flex;
    gap: 2rem;
    justify-content: center;
    align-items: center;

    .icon {
        margin-block: auto;
        color: c.$brand-black;
        transition: all 200ms ease-in;

        &:hover,
        &:focus-visible {
            color: c.$brand-blue;
            outline: none;
        }

        &>svg {
            height: 2.5em;
        }
    }
}

html.dark-theme {

    .icons .icon:hover,
    .icons .icon:focus-visible {
        color: c.$brand-pink;
    }
}
</style>
