<template>
  <div class="app">
    <Navigation />
    <router-view />
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
$brand-black: #2c2c2c;
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
* {
  background: #fff;
}
body {
  font-family: "Montserrat", sans-serif;
}
#app {
  text-align: center;
  color: #2c3e50;
}
</style>
