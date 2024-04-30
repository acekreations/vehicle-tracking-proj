<script setup>
	import { ref, computed } from 'vue';
	import { store } from '../store.js';
	
	const props = defineProps(['type']);
	
	const searchType = computed(() => {
		if(props.type === "vehicles"){
			return store.searchVehicle;
		} else {
			return store.searchDriver;
		}
	});
	
	const filterDropdownActive = ref(false);
	const sortDropdownActive = ref(false);
	
	function handleFilterDropdownActive(){
		if(sortDropdownActive.value){
			sortDropdownActive.value = false;
			filterDropdownActive.value = true;
		} else {
			filterDropdownActive.value = !filterDropdownActive.value;
		}
	}
	
	function handleSortDropdownActive(){
		if(filterDropdownActive.value){
			filterDropdownActive.value = false;
			sortDropdownActive.value = true;
		} else {
			sortDropdownActive.value = !sortDropdownActive.value;
		}
	}
	
	function searchTerm(e) {
		const term = e.target.value;
		if(props.type === 'vehicles'){
			store.searchVehicle.results = [];
			store.data.forEach(function(item){
				if(item.vehicle){
					const result = item.vehicle.toLowerCase().match(term.toLowerCase());
					if(result){
						store.searchVehicle.results.push(item);
					}
				}
			});
		} else {
			store.searchDriver.results = [];
			store.data.forEach(function(item){
				if(item.driver){
					const result = item.driver.toLowerCase().match(term.toLowerCase());
					if(result){
						store.searchDriver.results.push(item);
					}
				}
			});
		}
	}
	
	function searchFilter(e) {
		filterDropdownActive.value = false;
		const statusCode =  parseInt(e.target.dataset.statusCode);
		if(props.type === 'vehicles'){
			store.searchVehicle.results = [];
			store.data.forEach(function(item){
				if(item.status === statusCode){
					store.searchVehicle.results.push(item);
				}
			})
		} else {
			store.searchDriver.results = [];
			store.data.forEach(function(item){
				if(item.status === statusCode){
					store.searchDriver.results.push(item);
				}
			})
		}
	}
	
	function searchSortAscending() {
		sortDropdownActive.value = false;
		if(props.type === 'vehicles'){
			store.searchVehicle.results = [];
			store.searchVehicle.results = [...store.data].sort(function(a, b) {
				return a.vehicle.localeCompare(b.vehicle);
			});
		} 
		if(props.type === 'drivers') {
			store.searchDriver.results = [];
			store.searchDriver.results = [...store.data].sort(function(a, b) {
				return a.driver.localeCompare(b.driver);
			});
		}
	}
	
	function searchSortDescending() {
		sortDropdownActive.value = false;
		if(props.type === 'vehicles'){
			store.searchVehicle.results = [];
			store.searchVehicle.results = [...store.data].sort(function(a, b) {
				return b.vehicle.localeCompare(a.vehicle);
			});
		} 
		if(props.type === 'drivers') {
			store.searchDriver.results = [];
			store.searchDriver.results = [...store.data].sort(function(a, b) {
				return b.driver.localeCompare(a.driver);
			});
		}
	}
	
	function clearResults() {
		if(props.type === "vehicles"){
			store.searchVehicle.results = [];
			store.searchVehicle.term = "";
		} else {
			store.searchDriver.results = [];
			store.searchDriver.term = "";
		}
	}
</script>

<template>
	<div class="search">
		<input type="text" @input="searchTerm" v-model.trim="searchType.term"/>
		<div class="icon-container">
			<img @click="handleFilterDropdownActive" src="./icons/filter.svg" alt="filter">
			<Transition name="fade">
				<div v-if="filterDropdownActive" class="dropdown">
					<p @click="searchFilter" data-status-code="3">Active</p>
					<p @click="searchFilter" data-status-code="2">Idle</p>
					<p @click="searchFilter" data-status-code="1">Stopped</p>
					<p @click="searchFilter" data-status-code="0">Disconnected</p>
				</div>
			</Transition>
		</div>
		<div class="icon-container">
			<img @click="handleSortDropdownActive" src="./icons/sort.svg" alt="sort">
			<Transition name="fade">
				<div v-if="sortDropdownActive" class="dropdown">
					<p @click="searchSortAscending">Ascending</p>
					<p @click="searchSortDescending">Descending</p>
				</div>
			</Transition>
		</div>
		<div class="icon-container">
			<div v-if="props.type === 'vehicles'">
				<img v-if="store.searchVehicle.results.length > 0" @click="clearResults" src="./icons/close.svg" alt="clear results">
			</div>
			<div v-if="props.type === 'drivers'">
				<img v-if="store.searchDriver.results.length > 0" @click="clearResults" src="./icons/close.svg" alt="clear results">
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.search {
		display: flex;
		align-items: center;
		padding: 16px;
		border-bottom: 1px solid var(--medium-blue);
		background-color: var(--light-blue);

		input {
			width: 100%;
		}

		img {
			margin: 0 8px;
			width: 20px;
			height: 20px;
			margin: 0 0 0 8px;
		}

		.icon-container {
			position: relative;
			cursor: pointer;
			
			.dropdown {
				background-color: #4a4c58;
				position: absolute;
				top: 100%;
				left: 50%;
				transform: translateX(-50%);
				width: 100px;
				padding: 8px;
				border-radius: var(--br-medium);
				box-shadow: var(--card-shadow);
				z-index: 150;
				
				p {
					margin-bottom: 8px;
					font-weight: 600;
					transition: all 0.2s;
					
					&:hover {
						color: var(--medium-gray);
					}
					
					&:last-child {
						margin-bottom: 0;
					}
				}
			}
		}
	}
</style>