<script setup lang="ts">
import { useTheme } from '@/app/providers/theme/lib/useTheme'
import { Theme } from '@/app/providers/theme/types'
import { computed } from 'vue'

const { theme } = useTheme()

const rootStyle = computed(() => {
	return theme.value === Theme.LIGHT
		? `url(${new URL('@/shared/ui/assets/images/Light-mode.png', import.meta.url).href}`
		: `url(${new URL('@/shared/ui/assets/images/Dark-mode.png', import.meta.url).href})`
})
</script>

<template>
	<div
		class="h-dvh w-dvw"
		:class="theme"
		:style="{ 'background-image': rootStyle }"
	>
		<router-view></router-view>
	</div>
</template>
