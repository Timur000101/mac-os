<script setup lang="ts">
import { Icon } from '@/shared/ui'
import { useControl } from '@/shared/lib/hooks/useControl'

const { isShown, toggleControl } = useControl()
</script>

<template>
	<div class="flex items-center justify-center w-[24px] h-[24px] hover:bg-white/35 rounded-[5px]" :class="{ 'bg-white/35': isShown }" @click="toggleControl">
		<Icon icon="control" width="24" height="24" color="white" />
	</div>
</template>

<style scoped>

</style>
