import type { IconName } from '@/shared/ui/icon/types'

interface NavbarMenuItemsInterface {
	groupName: string
	items: {
		label: string
		leftIcon?: IconName
		hotkey?: string
	}[]
}

export const NavbarMenuItems: NavbarMenuItemsInterface[] = [
	{
		groupName: 'File',
		items: [
			{
				label: 'Bring All to Front',
				leftIcon: 'arrowshape-right',
				hotkey: '⌘ T',
			},
			{
				label: 'Send All to Back',
				leftIcon: 'arrowshape-left',
			},
		],
	},
	{
		groupName: 'Edit',
		items: [
			{
				label: 'Undo',
				leftIcon: 'trash',
				hotkey: '⌘ N',
			},
			{
				label: 'Redo',
				leftIcon: 'smile',
				hotkey: '⌘ B',
			},
		],
	},
	{
		groupName: 'Help',
		items: [
			{
				label: 'Help',
				leftIcon: 'heart',
				hotkey: '⌘ H',
			},
			{
				label: 'About',
				leftIcon: 'grid',
				hotkey: '⌘ A',
			},
			{
				label: 'Preferences',
				leftIcon: 'gear',
				hotkey: '⌘ P',
			},
		],
	},
] as const
