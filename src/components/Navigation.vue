<template>
  <header :class="{ 'shrink-nav': scrollPosition }">
    <nav>
      <div class="logo">
        <img src="../assets/logo.png" alt="René Torres' logo" />
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
        <ul v-show="mobileNav" class="mobile-nav">
          <!-- Add name for each component when they are done!! -->
          <li>
            <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
          </li>
          <li>
            <router-link class="link" :to="{ name: '' }">About</router-link>
          </li>
          <li>
            <router-link class="link" :to="{ name: '' }">Portfolio</router-link>
          </li>
          <li>
            <router-link class="link" :to="{ name: '' }">Contact</router-link>
          </li>
        </ul>
      </transition>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$brand-black: #2c2c2c;

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
      img {
        width: 5rem;
      }
    }
    ul {
      list-style: none;
      display: flex;
      flex-flow: row wrap;
      gap: 0 2rem;
      li {
        padding: 1rem;
      }
      & .link {
        font-weight: 500;
        color: $brand-black;
        text-decoration: none;
      }
    }
  }
}
</style>