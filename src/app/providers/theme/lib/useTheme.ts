import { inject } from 'vue'
import type {
	ThemeContextProps,
} from '../types'
import {
	LOCAL_STORAGE_THEME_KEY,
	THEME_PROVIDER,
	Theme,
} from '../types'

export function useTheme() {
	const { theme, setTheme } = inject(THEME_PROVIDER, {} as ThemeContextProps)

	const toggleTheme = () => {
		const newTheme = theme.value === Theme.DARK ? Theme.LIGHT : Theme.DARK

		setTheme(newTheme)
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
	}

	return {
		theme,
		toggleTheme,
	}
}
