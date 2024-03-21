import antfu from '@antfu/eslint-config'

export default antfu({
	formatters: {
		css: true,
		html: true,
		markdown: 'prettier',
	},
	stylistic: {
		indent: 'tab',
		tabWidth: 2,
		quotes: 'single',
	},
	rules: {
		'style/no-tabs': 'off',
		'no-console': 'warn',
	},
})
