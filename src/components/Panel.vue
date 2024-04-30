<script setup>
	import { ref } from 'vue';
	import PanelSearch from './PanelSearch.vue'
	import PanelItem from './PanelItem.vue'
	import { store } from '../store.js'
	
	const props = defineProps(['type']);
	const panelToggle = ref(true);
</script>

<template>
	<div class="panel" :class="{panelToggle: !panelToggle}">
		<div class="header">
			<div class="header-top">
				<h4>{{ props.type }}</h4>
				<img v-if="panelToggle" @click="panelToggle = !panelToggle" src="./icons/collapse.svg" />
				<img v-if=!panelToggle @click="panelToggle = !panelToggle" src="./icons/expand.svg" />
			</div>
			<Transition name="slidedown">
				<PanelSearch v-if="panelToggle" :type="props.type" />
			</Transition>
		</div>
		<Transition name="slidedown">
			<div v-if="panelToggle" class="items">
				<div v-if="props.type === 'vehicles'">
					<div v-if="store.searchVehicle.results.length > 0">					
						<PanelItem v-for="item in store.searchVehicle.results" :key="item.id" :type='props.type' :item='item' />	
					</div>
					<div v-else>
						<PanelItem v-for="item in store.data" :key="item.id" :type='props.type' :item='item' />	
					</div>
				</div>
				<div v-if="props.type === 'drivers'">
					<div v-if="store.searchDriver.results.length > 0">
						<PanelItem v-for="item in store.searchDriver.results" :key="item.id" :type='props.type' :item='item' />
					</div>
					<div v-else>
						<PanelItem v-for="item in store.data" :key="item.id" :type='props.type' :item='item' />
					</div>
				</div>
			</div>
		</Transition>
	</div>
</template>

<style lang="scss" scoped>
	.panel {
		width: 276px;
		max-height: 100%;
		background-color: var(--light-blue);
		border-radius: var(--br-large);
		position: relative;
		display: flex;
		flex-direction: column;
		height: auto;
		margin-bottom: auto;
		
		&.panelToggle {
			height: auto;
			margin-bottom: auto;
			
			.header {
				border-radius: var(--br-large);
			}
		}
		
		.header {
			background-color: var(--medium-blue);
			color: var(--white);
			border-top-left-radius: var(--br-large);
			border-top-right-radius: var(--br-large);
			display: flex;
			flex-direction: column;
			position: sticky;
			top: 0;
			left: 0;
			z-index: 125;
			
			.header-top {
				padding: 12px;
				display: flex;
				justify-content: space-between;
				
				h4 {
					text-transform: capitalize;
				}
				
				img {
					height: 18px;
					cursor: pointer;
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
			border-bottom-left-radius: var(--br-large);
			border-bottom-right-radius: var(--br-large);
		}
	}
</style>