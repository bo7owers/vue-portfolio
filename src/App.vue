<template>
  <a href="#main" class="skip-to-main" v-show="!mobile">
    Skip to main content
  </a>
  <div class="app">
    <Navigation />

    <main id="main" role="main">
      <div class="dynamic-content" aria-busy="false" tabindex="-1">
        <router-view />
      </div>
    </main>
  </div>
</template>
<script>
import Navigation from "./components/Navigation.vue";
export default {
  name: "App",
  components: {
    Navigation,
  },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

$brand-black: #2c2c2c;
$visited: #9700a8;
$brand-pink: $visited;
$underline-pink: #ed78b1;
$tertiary-color: #003cf0;
$brand-blue: #285b86;
* {
  background: #fff;
}
.skip-to-main {
  background: $underline-pink;
  color: #000;
  height: 30px;
  top: 0;
  left: 0;
  padding: 8px;
  position: absolute;
  transform: translateY(-90%);
  transition: transform 0.3s;

  &:visited {
    color: #000;
  }

  &:focus {
    top: 0;
    transform: translateY(0%);
  }
}
body {
  font-family: "Montserrat", sans-serif;
  color: #2c3e50;
  text-align: center;
  a,
  .close {
    &:visited:not(.link):not(.skip-to-main) {
      color: $visited;
    }
    &:hover:not(.link):not(.skip-to-main),
    &:focus:not(.link):not(.skip-to-main),
    &:focus-visible:not(.link):not(.skip-to-main) {
      outline-color: $brand-blue;
      color: $brand-blue;
      outline-style: solid;
      outline-offset: 0.1rem;
      outline-width: 4px;
      border-radius: 2px;
    }
  }
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: $brand-blue;
}
// #app {
// }
</style>
