<script setup>
	import {
		ref
	} from 'vue'

	let sortActive = ref(false);

	function handleSortDropdown() {
		console.log('click');
		sortActive.value = !sortActive.value;
	}
</script>

<template>
	<div class="search">
		<input type="text" />
		<img src="./icons/filter.svg" />
		<div class="icon-container">
			<img @click="handleSortDropdown" src="./icons/sort.svg" />
			<Transition name="fade">
				<div v-if="sortActive" class="dropdown">
					<p>a-z</p>
					<p>z-a</p>
				</div>
			</Transition>
		</div>
		<img src="./icons/close.svg" />
	</div>
</template>

<style lang="scss" scoped>
	.search {
		display: flex;
		align-items: center;
		padding: 16px;
		border-bottom: 1px solid var(--medium-blue);

		input {
			width: 100%;
			border-radius: var(--br-medium);
			border: none;
			background: #60626F;
			padding: 8px;
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
				background-color: var(--dark-blue);
				position: absolute;
				top: 100%;
				left: 10px;
				width: 100px;
				padding: 8px;
				border-radius: var(--br-medium);
				border-top-left-radius: 0;
				box-shadow: var(--card-shadow);
			}
		}
	}
</style>