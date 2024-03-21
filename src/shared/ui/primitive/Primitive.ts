import { Component, PropType, defineComponent, h } from 'vue'
import { Slot } from './Slot'

export type AsTag =
	| 'a'
	| 'button'
	| 'div'
	| 'form'
	| 'h2'
	| 'h3'
	| 'img'
	| 'input'
	| 'label'
	| 'li'
	| 'nav'
	| 'ol'
	| 'p'
	| 'span'
	| 'svg'
	| 'ul'
	| 'template'
	| ({} & string)

export type PrimitiveProps = {
	asChild: boolean
	as?: AsTag | Component
}

export const Primitive = defineComponent({
	name: 'Primitive',
	inheritAttrs: false,
	props: {
		asChild: {
			type: Boolean,
			default: false
		},
		as: {
			type: [String, Object] as PropType<AsTag | Component>,
			default: 'div'
		}
	},
	setup(props, { slots, attrs }) {
		const asTag = props.asChild ? 'template' : props.as

		if (asTag === 'template')
			return () => h(props.as, attrs, { default: slots.default })

		return () => h(Slot, attrs, { default: slots.default })
	}
})
