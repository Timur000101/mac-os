<script setup lang="ts">
import { provide, ref } from 'vue'
import {
	LOCAL_STORAGE_THEME_KEY,
	THEME_PROVIDER,
	Theme,
	ThemeContextProps
} from '../types'

const defaultTheme =
	(localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT

const theme = ref<Theme>(defaultTheme)

const toggleTheme = () => {
	theme.value = theme.value === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
}

provide<ThemeContextProps>(THEME_PROVIDER, {
	theme: theme,
	setTheme: toggleTheme
})
</script>

<template>
	<slot></slot>
</template>
