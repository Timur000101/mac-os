<script setup lang="ts">
import { onMounted, provide, ref } from 'vue'
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
	document.querySelector('html')?.setAttribute('class', theme.value)
}

provide<ThemeContextProps>(THEME_PROVIDER, {
	theme,
	setTheme: toggleTheme,
})

onMounted(() => {
	document.querySelector('html')?.setAttribute('class', theme.value)
})
</script>

<template>
	<slot />
</template>
