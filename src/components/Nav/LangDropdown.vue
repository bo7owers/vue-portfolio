<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref, onMounted, watch } from 'vue'
import { useNavStore } from '../../stores/NavStore'
import { storeToRefs } from 'pinia'

defineProps<{
    title: string
}>()

const { t, d, locale, availableLocales } = useI18n()

const navStore = useNavStore()
const { dropdownMenuActive, isNavOpen } = storeToRefs(navStore)

const closeDropdown = () => {
    return setTimeout(() => {
        dropdownMenuActive && (dropdownMenuActive.value = false)
    }, 500)
}

const openDropdown = () => {
    return (dropdownMenuActive.value = true && (isNavOpen.value = true))
}
</script>

<template>
    <a
        href="#"
        class="link lang-dropdown"
        @click="
            dropdownMenuActive === true
                ? (dropdownMenuActive = false)
                : (dropdownMenuActive = true)
        "
        @mouseleave="
            dropdownMenuActive === true &&
                !isNavOpen &&
                (dropdownMenuActive = false)
        "
        :class="dropdownMenuActive && 'active'"
        >{{ title }}</a
    >
    <ul
        class="dropdown-menu"
        v-if="dropdownMenuActive === true"
        @mouseenter="isNavOpen = true"
        @mouseleave="closeDropdown"
        :class="isNavOpen && 'opened'"
    >
        <li v-for="lang in availableLocales" :key="lang">
            <a
                href="#"
                class="link"
                :class="lang"
                :data-focusout="availableLocales[2] === lang ? true : false"
            >
                {{ lang }}
            </a>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
.lang-dropdown {
    // color: #369 !important;
    outline: 1px solid #000;
    margin-block-end: 0;
    &::after {
        content: '';
        background-image: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="1em" height="1em" viewBox="0 0 24 24"%3E%3Cpath fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 8l6 6m-7 0l6-6l2-3M2 5h12M7 2h1m14 20l-5-10l-5 10m2-4h6"%2F%3E%3C%2Fsvg%3E');
        display: block;
        width: 1rem;
        height: 1rem;
        background-repeat: no-repeat;
        position: relative;
        top: -1.5rem;
        right: -12rem;

        &:focus-visible,
        &:hover {
            outline: none !important;
        }
    }
}

.dropdown-menu {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    outline: 1px solid #000;
    position: absolute;
    top: 50px;
    right: 0;
    width: 10em;

    a.link {
        width: 100%;
    }
}
</style>
