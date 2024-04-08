<script setup lang="ts">
import ConectionItem from './ConectionItem.vue'
import { Icon, Sheet } from '@/shared/ui'
</script>

<template>
	<Sheet class="rounded-[10px]">
		<div class="w-full h-full px-3 py-4">
			<ConectionItem>
				<template #iconButton>
					<Icon icon="wi-fi" color="white" />
				</template>
				<template #title>
					Wi-Fi
				</template>
				<template #description>
					My Iphone
				</template>
			</ConectionItem>
			<ConectionItem>
				<template #iconButton>
					<Icon icon="radio-waves" color="white" />
				</template>
				<template #title>
					Bluetooth
				</template>
				<template #description>
					Off
				</template>
			</ConectionItem>
			<ConectionItem>
				<template #iconButton>
					<Icon icon="airdrop" color="white" />
				</template>
				<template #title>
					Airdrop
				</template>
				<template #description>
					Off
				</template>
			</ConectionItem>
		</div>
	</Sheet>
</template>

<style scoped>

</style>
