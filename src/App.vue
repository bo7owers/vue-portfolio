<template>
  <div class="app">
    <Navigation />

    <main role="main">
      <router-view />
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
$brand-pink: #e53d8d;
$tertiary-color: #003cf0;
$brand-blue: #005999;
* {
  background: #fff;
}
body {
  font-family: "Montserrat", sans-serif;
  a {
    &:visited:not(.link) {
      color: $tertiary-color;
    }
    &:hover:not(.link),
    &:focus:not(.link),
    &:focus-visible:not(.link) {
      outline-color: $brand-blue;
      color: $brand-blue;
      outline-style: solid;
      outline-offset: 0.1rem;
      outline-width: 4px;
      border-radius: 2px;
    }
  }
}
#app {
  text-align: center;
  color: #2c3e50;
}
</style>
