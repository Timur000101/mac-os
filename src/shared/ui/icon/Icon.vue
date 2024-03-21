<script setup lang="ts">
import { getSvgIcon } from '@/shared/lib'
import { computed } from 'vue'

const props = withDefaults(
	defineProps<{
		name: string
		size: string
		color?: string
		width?: string
		height?: string
		fill?: string
	}>(),
	{
		size: '24',
		color: 'currentColor',
		width: '24',
		height: 'auto',
		fill: 'currentColor'
	}
)

const width = computed(() => {
	return props.size ? `${props.size}px` : `${props.width}px`
})

const height = computed(() => {
	return props.size ? `${props.size}px` : `${props.height}px`
})
</script>

<template>
	<div
		class="base-icon"
		:data-name="name"
		:fill="fill ?? 'currentColor'"
		stroke="currentColor"
		:style="{
			width,
			height,
			color
		}"
		v-html="getSvgIcon(name).default"
	></div>
</template>

<style lang="scss" scoped>
:deep(svg) {
	width: 100%;
	height: 100%;

	path {
		stroke: currentColor;
		fill: v-bind(fill);
	}
}
</style>
