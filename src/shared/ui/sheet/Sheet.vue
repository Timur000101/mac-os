<script setup lang="ts">
defineProps<{
	width?: string
	height?: string
}>()
</script>

<template>
	<div
		:style="{ width, height }"
		class="bg-white border-black/10 shadow-md
		dark:bg-black/50 dark:border-white/20 border-[1px]"
		aria-describedby="sheet"
	>
		<slot />
	</div>
</template>

<style scoped>

</style>
