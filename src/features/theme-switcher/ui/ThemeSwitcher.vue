<script setup lang="ts">
import { computed } from 'vue'
import { useTheme } from '@/app/providers/theme/lib/useTheme'
import { Theme } from '@/app/providers/theme/types'
import { Icon, IconButton } from '@/shared/ui'
import type { IconName } from '@/shared/ui/icon/types'

const { theme, toggleTheme } = useTheme()

const rootStyle = computed<IconName>(() => {
	return (theme.value === Theme.LIGHT ? 'moon' : 'brightness') as IconName
})
</script>

<template>
	<IconButton
		aria-label="Switch theme button"
		class="rounded-full bg-indigo-900 dark:bg-indigo-600"
		@click="toggleTheme"
	>
		<Icon :icon="rootStyle" color="white" />
	</IconButton>
</template>

<style scoped></style>
