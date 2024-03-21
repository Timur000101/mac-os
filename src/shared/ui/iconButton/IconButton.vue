<script setup lang="ts"></script>

<template>
	<button
		class="h-7 w-7 flex items-center justify-center rounded-full bg-indigo-900
			dark:bg-indigo-600"
		type="button"
		v-bind="$attrs"
	>
		<slot />
	</button>
</template>
