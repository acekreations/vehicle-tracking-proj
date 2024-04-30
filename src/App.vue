<script setup>
	import Panel from './components/Panel.vue'
	import { store } from './store.js'
	import MapModal from './components/MapModal.vue'
</script>

<template>
	<MapModal v-if="store.mapModal.active" />
	<main>
		<Panel type="vehicles" />
		<div class="logo">
			<h1>Vehicle Tracker</h1>
		</div>
		<Panel type="drivers" />
	</main>
</template>

<style lang="scss" scoped>
	main {
		width: 100vw;
		height: 100vh;
		max-width: 100vw;
		max-height: 100vh;
		background-image: url('./assets/map.jpg');
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		padding: 8px;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		
		.logo {
			background-color: var(--medium-blue);
			padding: 8px 16px;
			box-shadow: var(--card-shadow);
			border-radius: 50px;
			height: auto;
			margin-bottom: auto;
			
			h1 {
				font-size: 20px;
				font-family: "Audiowide", sans-serif;	
			}
		}
	}
</style>