import type { Ref } from 'vue'

export enum Theme {
	LIGHT = 'light',
	DARK = 'dark',
}

export interface ThemeContextProps {
	theme: Ref<Theme>
	setTheme: (theme: Theme) => void
}

export const THEME_PROVIDER = Symbol('THEME_PROVIDER')
export const LOCAL_STORAGE_THEME_KEY = 'theme'
