<script setup lang="ts">
import { computed } from 'vue'
import { Navbar } from '@/widgets'
import { useTheme } from '@/app/providers/theme/lib/useTheme'
import { Theme } from '@/app/providers/theme/types'

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
		:style="{ 'background-image': rootStyle }"
	>
		<Navbar />
		<div class="h-6" />
		<router-view />
	</div>
</template>
