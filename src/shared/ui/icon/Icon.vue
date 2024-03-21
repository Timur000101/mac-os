<script setup lang="ts">
import { Icon, addCollection } from '@iconify/vue'
import macOSIcons from './icons.json'
import type { IconName } from './types'

withDefaults(
	defineProps<{
		icon?: IconName
		width?: string
		height?: string
	}>(),
	{
		width: '32',
		height: '32',
	},
)

addCollection(macOSIcons)
</script>

<template>
	<Icon
		:icon="`macos:${icon as string}`"
		:width="width"
		:height="height"
	/>
</template>
