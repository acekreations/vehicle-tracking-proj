<script setup>
	import { ref, defineProps } from 'vue';
	import vClickOutside from 'v-click-outside'
	
	const props = defineProps({
		icon: String
	});

	let dropdownActive = ref(false);

	function handleDropdown() {
		dropdownActive.value = !dropdownActive.value;
	};
	
	function handleClickOutside() {
		console.log('close?');
		dropdownActive.value = false;
	};
</script>

<template>
	<div>
		<img :src="props.icon" class="icon" @click="handleDropdown" v-click-outside="handleClickOutside"/>
		<Transition name="fade">
			<div v-if="dropdownActive" class="dropdown">
				<p>test</p>
			</div>
		</Transition>
	</div>
</template>

<style lang="scss" scoped>
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
</style>