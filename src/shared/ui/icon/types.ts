import macOSIcons from './icons.json'

export type IconName = ElementType<typeof iconsArray>
type ElementType<T extends ReadonlyArray<unknown>> =
	T extends ReadonlyArray<infer E> ? E : never

const iconsArray = Object.keys(
	macOSIcons.icons,
) as (keyof typeof macOSIcons.icons)[]
