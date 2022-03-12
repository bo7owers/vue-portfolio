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
	import Navigation from './components/Navigation.vue'
	export default {
		name: 'App',
		components: {
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
