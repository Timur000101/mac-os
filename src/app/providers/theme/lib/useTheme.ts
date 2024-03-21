import { inject } from 'vue'
import {
	LOCAL_STORAGE_THEME_KEY,
	THEME_PROVIDER,
	Theme,
	ThemeContextProps
} from '../types'

export const useTheme = () => {
	const { theme, setTheme } = inject(THEME_PROVIDER, {} as ThemeContextProps)

	const toggleTheme = () => {
		const newTheme = theme.value === Theme.DARK ? Theme.LIGHT : Theme.DARK

		setTheme(newTheme)
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
	}

	return {
		theme,
		toggleTheme
	}
}
