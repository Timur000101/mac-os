<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@/shared/ui'
import { IconButton } from '@/shared/ui/'

const emit = defineEmits<{
	(e: 'onClick'): void
}>()

defineSlots<{
	iconButton: () => any
	title: () => any
	description: () => any
}>()

const toggleColor = ref<boolean>(false)

function handleClick() {
	toggleColor.value = !toggleColor.value
	emit('onClick')
}
</script>

<template>
	<div class="grid grid-cols-[28px_1fr_24px] items-center gap-2 py-1" @click="handleClick">
		<IconButton :class="toggleColor ? 'bg-blue-500 dark:bg-blue-500' : 'bg-black/10 dark:bg-white/10'">
			<slot name="iconButton" />
		</IconButton>
		<div class="flex flex-col">
			<p class="text-[13px] text-black dark:text-white font-semibold leading-4">
				<slot name="title" />
			</p>
			<span class="text-[13px] text-black/50 dark:text-white/55 leading-4">
				<slot name="description" />
			</span>
		</div>
		<div class="">
			<Icon
				icon="chevron-right"
				width="24"
				height="24"
				class="text-black/25 dark:text-white/25"
			/>
		</div>
	</div>
</template>

<style scoped>

</style>
