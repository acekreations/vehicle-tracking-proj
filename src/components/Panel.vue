<script setup>
	import PanelSearch from './PanelSearch.vue'
	import PanelItem from './PanelItem.vue'
	import { store } from '../store.js'
	
	const props = defineProps(['type']);
</script>

<template>
	<div class="panel">
		<div class="header">
			<div class="header-top">
				<h4>{{ props.type }}</h4>
				<img src="./icons/collapse.svg" />
			</div>
			<PanelSearch />
		</div>
		<div class="items">
			<PanelItem v-for="item in store.data" :key="item.id" :type='props.type' :item='item' />
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.panel {
		max-width: 276px;
		height: 100%;
		background-color: var(--light-blue);
		border-radius: var(--br-large);
		position: relative;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		
		.header {
			background-color: var(--medium-blue);
			color: var(--white);
			border-top-left-radius: var(--br-large);
			border-top-right-radius: var(--br-large);
			box-shadow: var(--card-shadow);
			display: flex;
			flex-direction: column;
			position: sticky;
			top: 0;
			left: 0;
			
			.header-top {
				padding: 12px;
				display: flex;
				justify-content: space-between;
				
				h4 {
					text-transform: capitalize;
				}
				
				img {
					height: 18px;
				}
				
				p {
					padding: 0;
					margin: 0;
				}
			}
		}
		
		.items {
			padding: 8px;
			flex-grow: 1;
			overflow-y: scroll;
			box-sizing: border-box;
		}
	}
</style>