<script setup lang="ts">
import { useTheme } from '@/app/providers/theme/lib/useTheme'
import { Theme } from '@/app/providers/theme/types'
import { Icon, IconButton } from '@/shared/ui'
import { IconName } from '@/shared/ui/icon/types'
import { computed } from 'vue'

const { theme, toggleTheme } = useTheme()

const rootStyle = computed<IconName>(() => {
	return (theme.value === Theme.LIGHT ? 'moon' : 'brightness') as IconName
})
</script>

<template>
	<IconButton
		aria-label="Switch theme button"
		class="rounded-full"
		@click="toggleTheme"
	>
		<Icon :icon="rootStyle" color="white" />
	</IconButton>
</template>

<style scoped></style>
