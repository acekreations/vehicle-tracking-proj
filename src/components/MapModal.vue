<script setup>
	import { onMounted } from 'vue'
	import { store } from '../store.js'
	
	onMounted(() => {
		window.addEventListener('click', function(e){
			if(!e.target.closest('.map-modal') && !e.target.closest('.item') && !e.target.closest('.footer')){
				store.mapModal.active = false;
				if(store.mapModal.activeItem){
					store.mapModal.activeItem.classList.remove('active');
				}
			};
		});
	});
</script>

<template>
	<Teleport to="body">
		<div class="map-modal">
			<div class="header">
				<h3>{{ store.mapModal.type === 'vehicles' ? store.mapModal.content.vehicle : store.mapModal.content.driver}}</h3>
				<img @click="store.mapModal.active = false" src="./icons/close.svg"/>
			</div>
			<hr>
			<div v-if="store.mapModal.type === 'vehicles'" class="input-grid">
				<div>
					<div class="input-container">
						<label for="#vehicle-name" class="font-bold">Vehicle Name:</label>
						<input id="vehicle-name" type="text" placeholder="Vehicle Name" v-model="store.mapModal.content.vehicle"/>
					</div>
				</div>
				<div>
					<div class="input-container">
						<label for="#driver-selector" class="font-bold">Select Driver:</label>
						<select id="driver-selector" v-model="store.mapModal.content.driver">
							<option value="unassigned">Unassigned</option>
							<option v-for="driver in store.data" :value="driver.driver" :selected="driver.id === store.mapModal.content.id ? true : false">{{ driver.driver }}</option>
						</select>
					</div>
				</div>
			</div>
			
			<div v-if="store.mapModal.type === 'drivers'" class="input-grid">
				<div>
					<div class="input-container">
						<label for="#driver-name" class="font-bold">Driver Name:</label>
						<input id="driver-name" type="text" placeholder="Vehicle Name" v-model="store.mapModal.content.driver"/>
					</div>
					<div class="input-container">
						<label for="#phone" class="font-bold">Phone:</label>
						<input id="phone" type="text" placeholder="Phone" v-model="store.mapModal.content.phone"/>
					</div>
					<div class="input-container">
						<label for="#email" class="font-bold">Email:</label>
						<input id="email" type="email" placeholder="Email" v-model="store.mapModal.content.email"/>
					</div>
				</div>
				<div>
					<div class="input-container">
						<label for="#vehicle-selector" class="font-bold">Select Vehicle:</label>
						<select id="vehicle-selector" v-model="store.mapModal.content.vehicle">
							<option value="unassign">Unassign</option>
							<option v-for="vehicle in store.data" :value="vehicle.vehicle" :selected="vehicle.id === store.mapModal.content.id ? true : false">{{ vehicle.vehicle }}</option>
						</select>
					</div>
				</div>
			</div>
		</div>
	</Teleport>
</template>

<style lang="scss" scoped>
	.map-modal {
		background-color: var(--medium-blue);
		width: 500px;
		height: 400px;
		z-index: 1000;
		position: absolute;
		top: 35%;
		left: 50%;
		transform: translate(-50%, -50%);
		box-shadow: var(--card-shadow);
		border-radius: var(--br-large);
		padding: 16px;
		
		.header {
			display: flex;
			justify-content: space-between;
			align-items: center;
			
			img {
				width: 32px;
				cursor: pointer;
			}
		}
		
		.input-grid {
			display: grid;
			gap: 16px;
			grid-template-columns: 1fr 1fr;
			
			.input-container {
				display: flex;
				flex-direction: column;
				margin-bottom: 16px;
				
				label {
					margin-bottom: 8px;
					margin-left: 2px;
				}
			}	
		}
	}
</style>