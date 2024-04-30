<script setup>
	import { ref, onMounted, defineProps, computed } from "vue";
	import { store } from '../store.js'
	
	const props = defineProps(['item', 'type']);

	const statusClass = computed(() => {
		switch (props.item.status) {
			case 0:
				return 'bg-medium-gray';
			case 1:
				return 'bg-red';
			case 2:
				return 'bg-yellow';
			case 3:
				return 'bg-green';
			default:
				return 'bg-medium-gray';
		}
	})
</script>

<template>
	<div class="item" ref="item" @click="store.mapModal.open(props.item)">
		<div class="left-col">
			<h4>{{ props.type === 'vehicles' ? props.item.vehicle : props.item.firstName + ' ' + props.item.lastName }}</h4>
			<p class="text-medium-gray">{{ props.type === 'vehicles' ? props.item.firstName + ' ' + props.item.lastName :props.item.vehicle }}</p>
			<p class="small text-medium-gray">Near: {{ props.item.location }}</p>
		</div>
		<div class="right-col">
			<svg class="menu" width="19" height="5" viewBox="0 0 19 5" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M2.78492 4.23C2.22399 4.23 1.68603 4.00717 1.28939 3.61053C0.892752 3.21389 0.669922 2.67593 0.669922 2.115C0.669922 1.55407 0.892752 1.01611 1.28939 0.619469C1.68603 0.222829 2.22399 0 2.78492 0C3.34585 0 3.88381 0.222829 4.28045 0.619469C4.67709 1.01611 4.89992 1.55407 4.89992 2.115C4.89992 2.67593 4.67709 3.21389 4.28045 3.61053C3.88381 4.00717 3.34585 4.23 2.78492 4.23ZM9.83492 4.23C9.27399 4.23 8.73603 4.00717 8.33939 3.61053C7.94275 3.21389 7.71992 2.67593 7.71992 2.115C7.71992 1.55407 7.94275 1.01611 8.33939 0.619469C8.73603 0.222829 9.27399 0 9.83492 0C10.3959 0 10.9338 0.222829 11.3305 0.619469C11.7271 1.01611 11.9499 1.55407 11.9499 2.115C11.9499 2.67593 11.7271 3.21389 11.3305 3.61053C10.9338 4.00717 10.3959 4.23 9.83492 4.23ZM16.8849 4.23C16.324 4.23 15.786 4.00717 15.3894 3.61053C14.9928 3.21389 14.7699 2.67593 14.7699 2.115C14.7699 1.55407 14.9928 1.01611 15.3894 0.619469C15.786 0.222829 16.324 0 16.8849 0C17.4459 0 17.9838 0.222829 18.3805 0.619469C18.7771 1.01611 18.9999 1.55407 18.9999 2.115C18.9999 2.67593 18.7771 3.21389 18.3805 3.61053C17.9838 4.00717 17.4459 4.23 16.8849 4.23Z" fill="#A9AEB6" />
			</svg>
			<div class="speed" :class="statusClass">
				<p>{{ props.item.status === 3 ? props.item.speed : '0' }}</p>
				<p class="mph">mph</p>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.item {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		border-radius: var(--br-medium);
		background-color: var(--dark-blue);
		padding: 12px;
		box-shadow: var(--card-shadow);
		margin-bottom: 8px;
		transition: all 0.2s;
		cursor: pointer;

		.left-col {
			margin-right: 12px;

			* {
				margin-bottom: 8px;

				&:last-child {
					margin-bottom: 0;
				}
			}
		}

		.right-col {
			display: flex;
			flex-direction: column;
			align-items: flex-end;
			justify-content: space-between;

			img {
				width: 18px;
			}

			.menu {
				padding: 4px 0 3px 4px;

				path {
					transition: all 0.2s;
				}

				&:hover {
					path {
						fill: var(--white);
					}
				}
			}

			.speed {
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				border-radius: var(--br-small);
				width: 40px;
				height: 46px;
				margin: 10px 0;

				p {
					font-weight: 700;
					font-size: 18px;
					color: var(--black);
				}

				.mph {
					font-weight: 400;
					font-size: 10px;
				}
			}

			.signal {
				padding: 4px 0 4px 4px;
			}
		}
	}
</style>