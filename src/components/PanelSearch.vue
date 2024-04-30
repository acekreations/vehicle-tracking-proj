<script setup>
	import {
		ref
	} from 'vue';
	import Dropdown from "./Dropdown.vue";
</script>

<template>
	<div class="search">
		<input type="text" value="search"/>
		<div class="icon-container">
			<Dropdown icon="./icons/filter.svg" />
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
		}
	}
</style>