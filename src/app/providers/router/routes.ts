export const routes = [
	{
		path: '/',
		name: 'MainLayout',
		component: () => import('@/shared/ui/layouts/main-layout'),
		children: [
			{
				path: '',
				name: 'Home',
				component: () => import('@/pages/home')
			}
		]
	}
]
