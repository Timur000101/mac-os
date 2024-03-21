<script setup lang="ts">
import { addCollection, Icon } from '@iconify/vue'
import macOSIcons from './icons.json'
import { IconName } from './types'

addCollection(macOSIcons)

withDefaults(
	defineProps<{
		icon?: IconName
		width?: string
		height?: string
	}>(),
	{
		width: '32',
		height: '32'
	}
)
</script>

<template>
	<Icon
		:icon="`macos:${icon as string}`"
		:width="width"
		:height="height"
	></Icon>
</template>
