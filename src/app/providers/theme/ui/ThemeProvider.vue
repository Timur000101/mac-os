<script setup lang="ts">
import { provide, ref } from 'vue'
import type {
	ThemeContextProps,
} from '../types'
import {
	LOCAL_STORAGE_THEME_KEY,
	THEME_PROVIDER,
	Theme,
} from '../types'

const defaultTheme
	= (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT

const theme = ref<Theme>(defaultTheme)

function toggleTheme() {
	theme.value = theme.value === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
}

provide<ThemeContextProps>(THEME_PROVIDER, {
	theme,
	setTheme: toggleTheme,
})
</script>

<template>
	<slot />
</template>
