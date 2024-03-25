<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@/shared/ui'

const volumeState = ref<'off' | 'on'>('on')

function toggleVolume() {
	volumeState.value = volumeState.value === 'on' ? 'off' : 'on'
}
</script>

<template>
	<div class="flex items-center justify-center w-[24px] h-[24px] hover:bg-white/35 rounded-[5px]" @click="toggleVolume">
		<Icon icon="sound-off" width="24" height="24" :style="`color: white; opacity: ${volumeState === 'on' ? 1 : 0.5};`" />
	</div>
</template>

<style scoped>

</style>
