<script setup lang="ts">
import { useTheme } from '@/app/providers/theme/lib/useTheme'
import { Theme } from '@/app/providers/theme/types'
import { Icon } from '@/shared/ui'
import { computed } from 'vue'

const { theme, toggleTheme } = useTheme()

const rootStyle = computed(() => {
	return theme.value === Theme.LIGHT ? 'Moon' : 'Brightness'
})
</script>

<template>
	<button
		class="h-7 w-7 flex items-center justify-center rounded-full bg-indigo-900
			dark:bg-indigo-600"
		type="button"
		aria-label="Switch theme button"
		@click="toggleTheme"
	>
		<Icon :name="rootStyle" size="28" color="white" />
	</button>
</template>

<style scoped></style>
