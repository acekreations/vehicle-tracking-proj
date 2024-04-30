<script setup>
	import { onMounted } from 'vue'
	import { store } from '../store.js'
	
	onMounted(() => {
		window.addEventListener('click', function(e){
			if(!e.target.closest('.map-modal') && !e.target.closest('.item')){
				store.mapModal.active = false;
			};
		});
	});
</script>

<template>
	<Teleport to="body">
		<div class="map-modal">
			<h3>{{ store.mapModal.content.vehicle }}</h3>
			<hr>
			<div class="input-grid">
				<div>
					<div class="input-container">
						<label for="#vehicle-name" class="font-bold">Vehicle Name:</label>
						<input id="vehicle-name" type="text" placeholder="Vehicle Name" :value="store.mapModal.content.vehicle"/>
					</div>
				</div>
				<div>
					<div class="input-container">
						<label for="#driver-selector" class="font-bold">Select Driver</label>
						<select id="driver-selector">
							<option value="unassign">Unassign</option>
							<option v-for="driver in store.data" value="driver.id">{{ driver.firstName}} {{ driver.lastName }}</option>
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
		
		.input-grid {
			display: grid;
			gap: 16px;
			grid-template-columns: 1fr 1fr;
			
			.input-container {
				display: flex;
				flex-direction: column;
				
				label {
					margin-bottom: 8px;
					margin-left: 2px;
				}
			}	
		}
	}
</style>