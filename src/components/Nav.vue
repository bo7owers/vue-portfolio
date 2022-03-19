<template>
	<header>
		<Menubar :model="items">
			<template #start>
				<div class="logo">
					<router-link class="link" :to="{ name: 'Home' }">
						<img
							src="../assets/logo.png"
							class="main-logo"
							alt="René Torres' logo"
						/>
					</router-link>
				</div>
			</template>
			<template #item="{ item }">
				<router-link class="link" :to="item.path">{{
					item.label
				}}</router-link>
			</template>
		</Menubar>
	</header>
</template>
<script>
	import { ref } from 'vue'

	export default {
		setup() {
			const items = ref([
				{
					label: 'Home',
					path: '/',
				},
				{
					label: 'About',
					path: 'about',
				},
				{
					label: 'Portfolio',
					path: 'portfolio',
				},
				{
					label: 'Contact',
					path: 'contact',
				},
			])
			return { items }
		},
	}
</script>
