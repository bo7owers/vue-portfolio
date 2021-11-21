<template>
  <header :class="{ 'shrink-nav': scrollPosition }">
    <nav role="navigation">
      <div class="logo">
        <router-link class="link" :to="{ name: 'Home' }">
          <img src="../assets/logo.png" alt="René Torres' logo" />
        </router-link>
      </div>
      <ul v-show="!mobile" class="navigation">
        <!-- Add name for each component when they are done!! -->
        <li>
          <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
        </li>
        <li>
          <router-link class="link" :to="{ name: 'About' }">About</router-link>
        </li>
        <li>
          <router-link class="link" :to="{ name: '' }">Portfolio</router-link>
        </li>
        <li>
          <router-link class="link" :to="{ name: '' }">Contact</router-link>
        </li>
      </ul>
      <div class="hamburger" v-show="mobile">
        <!-- Move v-show="mobile" to the i if problems found -->
        <i
          @click="toggleSmallNav"
          class="fas fa-ellipsis-v"
          :class="{ 'active-icon': mobileNav }"
        ></i>
      </div>
      <transition name="mobile-nav">
        <div v-show="mobileNav" class="mobile-nav">
          <ul class="nav-list">
            <!-- Add name for each component when they are done!! -->
            <li>
              <router-link class="link" :to="{ name: 'Home' }"
                >Home</router-link
              >
            </li>
            <li>
              <router-link class="link" :to="{ name: '' }">About</router-link>
            </li>
            <li>
              <router-link class="link" :to="{ name: '' }"
                >Portfolio</router-link
              >
            </li>
            <li>
              <router-link class="link" :to="{ name: '' }">Contact</router-link>
            </li>
          </ul>
          <div class="close-nav">
            <i class="fas fa-times close" tabindex="0"></i>
          </div>
        </div>
      </transition>
    </nav>
  </header>
</template>

<script>
import "wicg-inert";
export default {
  name: "main-nav",
  data() {
    return {
      scrollPosition: null,
      mobile: false,
      mobileNav: false,
      windowWidth: null,
    };
  },
};
</script>

<style lang="scss" scoped>
$brand-black: #2c2c2c;
$brand-pink: #654691;
$underline-pink: #ed78b1;
$tertiary-color: #003cf0;
$brand-blue: #285b86;

header {
  background: #fff;
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
    @media (min-width: 1140px) {
      max-width: 1140px;
    }

    .logo {
      .link > img,
      .link {
        width: 5rem;
        border-radius: 1rem;
        user-select: none;
        transition: 100ms ease-out all;
        &:focus,
        &:focus-visible {
          outline: #2c2c2c solid 3px;
        }
      }
    }
    // Mobile nav
    & .mobile-nav {
      // text-align: center;
      display: flex;
      flex-flow: row nowrap;
      align-items: flex-start;
      justify-content: center;
      gap: 5rem;
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      left: 0;
      padding: 1.25rem 0rem 0 2rem;
      z-index: 10000;
      background: #fff;
      border-top: 2px solid #2c2c2c;
      border-right: 2px solid #2c2c2c;
      .nav-list {
        flex-flow: column wrap;
        justify-content: start;
        align-items: flex-start;
        gap: 1rem 1rem;
      }
    }
    //  desktop nav
    ul {
      list-style: none;
      display: flex;
      flex-flow: row wrap;
      gap: 0 2rem;

      li {
        padding: 1rem;
        user-select: none;
      }

      & .link {
        font-weight: 500;
        color: $brand-black;
        text-decoration: none;
        border-bottom: 3px solid transparent;
        transition: 210ms ease-in all;
        &:hover,
        &:focus,
        &:focus-visible {
          color: $brand-blue;
          border-color: $underline-pink;
          border-bottom-left-radius: 2px;
          border-bottom-right-radius: 2px;
        }
        &:focus,
        &:focus-visible {
          outline: $brand-blue solid 2px;
          outline-offset: 0.5rem;
          border-radius: 2px;
        }
      }
    }
    .hamburger {
      i:not(.close) {
        cursor: pointer;
        font-size: 1.5rem;
        transition: 500ms ease all;
      }
      .active-icon {
        transform: rotate(180deg);
      }
    }
  }
}
</style>