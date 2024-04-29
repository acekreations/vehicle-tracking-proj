<script setup>
	import PanelSearch from "./PanelSearch.vue"
	import PanelItem from "./PanelItem.vue"
</script>

<template>
	<div class="panel">
		<div class="header">
			<h4>Vehicles</h4>
			<img src="./icons/collapse.svg" />
		</div>
		<PanelSearch />
		<div class="items">
			<PanelItem />
			<PanelItem />
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.panel {
		max-width: 276px;
		height: 100%;
		background-color: var(--light-blue);
		border-radius: var(--br-large);
	}

	.header {
		background-color: var(--medium-blue);
		color: var(--white);
		border-top-left-radius: var(--br-large);
		border-top-right-radius: var(--br-large);
		box-shadow: var(--card-shadow);
		padding: 12px;
		display: flex;
		justify-content: space-between;

		img {
			height: 18px;
		}

		p {
			padding: 0;
			margin: 0;
		}
	}

	.items {
		padding: 8px;
	}
</style>