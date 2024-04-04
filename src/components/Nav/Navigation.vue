<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useI18n } from 'vue-i18n'
import { useNavStore } from '../../stores/NavStore'
import LangDropdown from './LangDropdown.vue'
import { ref } from 'vue'
import ThemeToggle from './ThemeToggle.vue'

// Translations
const { t, d, locale, availableLocales } = useI18n()

const navStore = useNavStore()
const { dropdownMenuActive, isNavOpen } = storeToRefs(navStore)

const mobile = ref<boolean>(false)
const mobileNav = ref<boolean>(false)
const windowWidth = ref<number>()

// check window size
window.addEventListener('resize', checkScreenSize)

function toggleSmallNav() {
    mobileNav.value = !mobileNav.value
}

function checkScreenSize() {
    windowWidth.value = window.innerWidth

    if (windowWidth.value <= 768) {
        mobile.value = true
        return
    }
    mobile.value = false
    mobileNav.value = false
    return
}
</script>

<template>
    <header>
        <nav role="navigation" :aria-label="t('navigation.ariaLabels.topNav')">
            <div class="logo">
                <router-link class="link" :to="{ name: 'Home' }">
                    <img src="../../assets/logo.png" alt="René Torres' logo" />
                </router-link>
            </div>
            <ul v-if="!mobile" class="navigation">
                <li>
                    <router-link class="link" to="/">
                        {{ t('navigation.home') }}
                    </router-link>
                </li>
                <li>
                    <router-link class="link" to="/about">
                        {{ t('navigation.about') }}
                    </router-link>
                </li>
                <li>
                    <router-link class="link" to="/programming">
                        {{ t('navigation.programming') }}
                    </router-link>
                </li>
                <li>
                    <router-link class="link" to="/contact">
                        {{ t('navigation.contact') }}
                    </router-link>
                </li>
                <li :aria-expanded="isNavOpen ? true : false" style="position: relative">
                    <LangDropdown :title="t('chLang')" />
                </li>
                <li>
                    <ThemeToggle />
                </li>
            </ul>
            <div class="hamburger" v-if="mobile">
                <!-- Move v-show="mobile" to the i if problems found -->
                <button @click="toggleSmallNav" @keypress.enter="toggleSmallNav" class="menu-ellipsis"
                    :class="{ 'active-icon': mobileNav }" :aria-label="t('navigation.ariaLabels.openMobile')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 32 32">
                        <circle cx="16" cy="8" r="2" fill="currentColor" />
                        <circle cx="16" cy="16" r="2" fill="currentColor" />
                        <circle cx="16" cy="24" r="2" fill="currentColor" />
                    </svg>
                </button>
            </div>
            <transition name="mobile-nav">
                <div v-if="mobileNav" class="mobile-nav">
                    <ul class="nav-list">
                        <li>
                            <router-link class="link" @keypress="toggleSmallNav" @click="toggleSmallNav" to="/">
                                {{ t('navigation.home') }}
                            </router-link>
                        </li>
                        <li>
                            <router-link class="link" @keypress="toggleSmallNav" @click="toggleSmallNav" to="/about">
                                {{ t('navigation.about') }}
                            </router-link>
                        </li>
                        <li>
                            <router-link class="link" @keypress="toggleSmallNav" @click="toggleSmallNav"
                                to="/programming">
                                {{ t('navigation.programming') }}
                            </router-link>
                        </li>
                        <li>
                            <router-link class="link" @keypress="toggleSmallNav" @click="toggleSmallNav" to="/contact">
                                {{ t('navigation.contact') }}
                            </router-link>
                        </li>
                        <li :aria-expanded="isNavOpen ? true : false">
                            <LangDropdown :title="t('chLang')" />
                        </li>
                        <li>
                            <ThemeToggle />
                        </li>
                    </ul>
                    <div class="close-nav">
                        <button @keypress="toggleSmallNav" @keypress.space="toggleSmallNav" @click="toggleSmallNav"
                            class="btn-close" :class="mobileNav && 'active-icon'"
                            :aria-label="t('navigation.ariaLabels.closeMenu')">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <g fill="none">
                                    <path
                                        d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
                                    <path fill="currentColor"
                                        d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2ZM9.879 8.464a1 1 0 0 0-1.498 1.32l.084.095l2.12 2.12l-2.12 2.122a1 1 0 0 0 1.32 1.498l.094-.083L12 13.414l2.121 2.122a1 1 0 0 0 1.498-1.32l-.083-.095L13.414 12l2.122-2.121a1 1 0 0 0-1.32-1.498l-.095.083L12 10.586L9.879 8.464Z" />
                                </g>
                            </svg>
                        </button>
                    </div>
                </div>
            </transition>
        </nav>
    </header>
</template>

<style lang="scss">
@use '../../assets/sass/vars/colors' as c;
@use '../../assets/sass/mixins/var-backups' as v;
@use '../../assets/sass/mixins/breakpoints' as b;
@use '../../assets/sass/base/extends';

// my nav
header {
    background-color: c.$bg-color;
    z-index: 1000;
    width: 100%;
    transition: 0.5s ease-in all;

    nav {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 0;
        transition: 0.5s ease-out all;
        width: 90%;
        margin: 0 auto;

        @include b.breakpoint(small) {
            width: 95%;
        }

        @include b.breakpoint(xlarge) {
            max-width: 1800px;
        }

        .logo {

            .link>img,
            .link {
                display: inline-block;
                height: var(--logo-height);
                width: var(--logo-width);
                border-radius: 1rem;
                user-select: none;
                transition: 100ms ease-out all;

                @include b.breakpoint(small) {
                    --logo-height: 2.5rem;
                    --logo-width: 2.5rem;
                }

                @include b.breakpoint(bt-medium) {
                    --logo-height: 3rem;
                    --logo-width: 3rem;
                }

                @include b.breakpoint(medium) {
                    --logo-height: 5rem;
                    --logo-width: 5rem;
                }

                &:focus,
                &:focus-visible {
                    outline: #2c2c2c solid 3px;
                    outline-color: c.$brand-black;
                }
            }
        }

        // Mobile nav
        & .mobile-nav {
            display: flex;
            flex-flow: row nowrap;
            align-items: flex-start;
            justify-content: center;
            gap: 5rem 3.75rem;
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0;
            left: 0;
            padding: 1.25rem 0;
            z-index: 10000;
            background-color: c.$bg-color;

            .nav-list {
                flex-flow: column wrap;
                justify-content: start;
                align-items: center;
                gap: 1rem;
            }
        }

        //  desktop nav
        ul {
            list-style: none;
            display: flex;
            flex-flow: row wrap;
            position: relative;

            li {
                padding: 1rem;
                user-select: none;
            }

            & .link {
                @extend %link-styles;

                &:hover,
                &:focus,
                &:focus-visible {
                    @extend %link-styles-hover;
                }

                &:focus:not(.lang-dropdown),
                &:focus-visible {
                    outline: solid 2px;

                    outline-color: c.$brand-blue;
                    outline-offset: 0.5rem;
                    border-radius: 2px;
                }

                &.router-link-active {
                    @extend %link-styles-hover;
                }
            }
        }
    }
}

.menu-ellipsis,
.btn-close {
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    transition: 350ms ease all;
    color: c.$brand-black;

    &.active-icon {
        transform: rotate(180deg);
    }
}

.active-icon {
    transform: rotate(180deg);
}
</style>
