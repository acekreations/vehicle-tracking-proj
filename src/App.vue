<script setup>
	// import HelloWorld from './components/HelloWorld.vue'
	// import TheWelcome from './components/TheWelcome.vue'
	import Panel from './components/Panel.vue'
</script>

<template>
	<main>
		<Panel />
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
	}
</style>