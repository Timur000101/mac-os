<script setup lang="ts"></script>

<template>
	<button
		class="h-7 w-7 flex items-center justify-center rounded-full"
		type="button"
		v-bind="$attrs"
	>
		<slot />
	</button>
</template>
