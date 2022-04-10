<template>
	<a href="#main_content" class="skip-to-main"> Skip to main content </a>
	<div class="app">
		<Navigation />
		<div class="container">
			<div class="side-left">Side left</div>
			<main id="main_content" class="content-area" role="main">
				<router-view />
			</main>
		</div>
	</div>
</template>
<script>
	// import Navigation from './components/Navigation.vue'
	import Navigation from './components/Navigation.vue'
	export default {
		name: 'App',
		components: {
			// Navigation,
			Navigation,
		},
	}
</script>
<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

	* {
		background: #fff;
	}
	.skip-to-main {
		// background: $underline-pink;
		background: #ed78b1;
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

	// #app {
	// }
</style>
