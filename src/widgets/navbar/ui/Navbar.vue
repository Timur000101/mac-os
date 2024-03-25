<script setup lang="ts">
import { Icon } from '@/shared/ui'
import { ControlCenterMenu, NavbarMenu } from '@/widgets'

const isAppName = true
</script>

<template>
	<header class="navbar fixed top-0 left-0 right-0 w-full z-10 bg-black/10 px-3">
		<div class="flex items-center justify-between">
			<div
				class="grid grid-rows-1 gap-3 items-center"
				:class="isAppName ? 'grid-cols-[24px_min-content_1fr]' : 'grid-cols-[24px_1fr]'"
			>
				<Icon icon="apple" width="24" height="24" color="white" />
				<div v-if="isAppName" class="text-white text-[14px] font-semibold leading-none">
					Safari
				</div>
				<NavbarMenu />
			</div>
			<div>
				<ControlCenterMenu />
			</div>
		</div>
	</header>
</template>

<style scoped>
</style>
