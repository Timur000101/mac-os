<script setup lang="ts">
import { MenubarContent, MenubarItem, MenubarMenu, MenubarPortal, MenubarRoot, MenubarTrigger } from 'radix-vue'
import { toRef } from 'vue'
import { NavbarMenuItems } from '../lib/NavbarMenuItems'
import { Icon } from '@/shared/ui'

const navbarMenuItems = toRef(NavbarMenuItems)
</script>

<template>
	<MenubarRoot class="flex h-6">
		<MenubarMenu v-for="menu in navbarMenuItems" :key="menu.groupName" :value="menu.groupName">
			<MenubarTrigger
				class="px-3 outline-none select-none font-semibold leading-none rounded-[5px]
        text-white text-[13px] flex items-center justify-between gap-[2px]
        data-[highlighted]:bg-white/35 data-[state=open]:bg-white/35"
			>
				{{ menu.groupName }}
			</MenubarTrigger>
			<MenubarPortal>
				<MenubarContent
					class="min-w-[152px] outline-none bg-slate-200 rounded-[5px] px-1 py-2"
					align="start"
					:side-offset="0"
					:align-offset="0"
				>
					<MenubarItem
						v-for="menuItem in menu.items"
						:key="menuItem.label"
						class="group text-[13px] leading-none text-black rounded-[5px] flex
            items-center h-[22px] px-1 relative select-none outline-none
            data-[state-open]:bg-white/35 data-[state-open]:text-black
            data-[highlighted]:bg-blue-600 data-[highlighted]:text-white
            data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8
            data-[disabled]:pointer-events-none"
						:text-value="menuItem.label"
					>
						<div v-if="menuItem.leftIcon" class="mr-2 group-data-[highlighted]:text-white">
							<Icon :icon="menuItem.leftIcon" width="22" height="22" />
						</div>

						{{ menuItem.label }}

						<div v-if="menuItem.hotkey" class="ml-auto pl-5 text-gray-400 group-data-[highlighted]:text-white">
							{{ menuItem.hotkey }}
						</div>
					</MenubarItem>
				</MenubarContent>
			</MenubarPortal>
		</MenubarMenu>
	</MenubarRoot>
</template>

<style scoped>

</style>
