<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useNavStore } from '../../stores/NavStore'

defineProps<{
    title: string
}>()

const { t, d, locale, availableLocales } = useI18n()

const navStore = useNavStore()
const { closeIsNavOPen } = navStore
const { dropdownMenuActive, isNavOpen } = storeToRefs(navStore)

let mainCont = document.querySelector<HTMLInputElement>('#main_content')
const changeLang = (lang: string) => {
    locale.value = lang
    closeIsNavOPen()
    mainCont?.focus()
}

const langDropDown = ref()
onMounted(() => {
    // grab ref to lang-dropdown
    langDropDown.value = document.querySelector('.lang-dropdown')
})

const closeDropdown = (e: any) => {
    if (e.target.classList.contains('lang-dropdown')) {
        e.target.focus()
    } else {
        langDropDown.value?.focus()
    }
    closeIsNavOPen()
}
</script>

<template>
    <a
        href="#"
        class="link lang-dropdown"
        @click.prevent="navStore.toggleIsNavOpen"
        @keyup.esc="closeDropdown($event)"
        :class="dropdownMenuActive && 'router-link-active'"
        v-tippy="title"
        aria-haspopup="menu"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                fill="currentColor"
                d="M12.65 15.67c.14-.36.05-.77-.23-1.05l-2.09-2.06l.03-.03A17.52 17.52 0 0 0 14.07 6h1.94c.54 0 .99-.45.99-.99v-.02c0-.54-.45-.99-.99-.99H10V3c0-.55-.45-1-1-1s-1 .45-1 1v1H1.99c-.54 0-.99.45-.99.99c0 .55.45.99.99.99h10.18A15.66 15.66 0 0 1 9 11.35c-.81-.89-1.49-1.86-2.06-2.88A.885.885 0 0 0 6.16 8c-.69 0-1.13.75-.79 1.35c.63 1.13 1.4 2.21 2.3 3.21L3.3 16.87a.99.99 0 0 0 0 1.42c.39.39 1.02.39 1.42 0L9 14l2.02 2.02c.51.51 1.38.32 1.63-.35zM17.5 10c-.6 0-1.14.37-1.35.94l-3.67 9.8c-.24.61.22 1.26.87 1.26c.39 0 .74-.24.88-.61l.89-2.39h4.75l.9 2.39c.14.36.49.61.88.61c.65 0 1.11-.65.88-1.26l-3.67-9.8c-.22-.57-.76-.94-1.36-.94zm-1.62 7l1.62-4.33L19.12 17h-3.24z"
            />
        </svg>
    </a>
    <ul
        class="dropdown-menu"
        v-show="dropdownMenuActive === true"
        :class="isNavOpen && 'opened'"
    >
        <li v-for="lang in availableLocales" :key="lang">
            <a
                class="link"
                :class="lang"
                @click.prevent="changeLang(lang)"
                href="#"
                @keyup.esc="closeDropdown($event)"
            >
                {{ lang }}
            </a>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
@use '../../assets/sass/vars/colors' as c;
@use '../../assets/sass/base/extends';
@use '../../assets/sass/mixins/breakpoints' as b;
%btn-width {
    width: calc(var(--ddm-width) - 2rem);
}

.lang-dropdown {
    margin-block-start: 0.25rem;
    background-color: c.$so-white;
    cursor: pointer;
}

.dropdown-menu {
    --ddm-width: 5em;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    outline: 1px solid #000;
    position: absolute;
    right: 35px;
    width: var(--ddm-width);
    background-color: c.$so-white;
    @include b.breakpoint(small) {
        top: 50px;
        right: 0;
    }
    li {
        @extend %btn-width;
    }
    .link {
        display: flex;
        justify-content: center;
        @extend %btn-width;
        height: 1.75rem;
        background-color: c.$so-white;
        cursor: pointer;
        @extend %link-styles;

        &:hover,
        &:focus,
        &:focus-visible {
            @extend %link-styles-hover;
        }
    }
}
</style>
