const svgResources = new Map()

function loadIcons() {
	const modules = import.meta.glob('@/shared/ui/assets/icons/**/*.svg', {
		query: '?raw',
		eager: true
	})

	for (const fileName in modules) {
		const name = fileName.substring(
			fileName.lastIndexOf('/') + 1,
			fileName.length - 4
		)

		svgResources.set(name, modules[fileName])
	}
}

function getSvgIcon(name: any) {
	return svgResources.get(name)
}

export { getSvgIcon, loadIcons, svgResources }
