<script setup>
	import { ref, defineProps } from 'vue';
		
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
		<img :src="props.icon" class="icon" @click="handleDropdown"/>
		<Transition name="fade">
			<div v-if="dropdownActive" class="dropdown">
				<p>test</p>
			</div>
		</Transition>
	</div>
</template>

<style lang="scss" scoped>

</style>