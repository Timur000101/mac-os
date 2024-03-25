<script setup lang="ts">
import { useDateFormat } from '@vueuse/core'
import { onUnmounted, ref } from 'vue'
import ControlCenter from './ControlCenter.vue'
import { BatteryInfo, ChangeVolume, ControlButton, UserData } from '@/features'

const localTime = ref(useDateFormat(new Date(), 'HH:mm A').value)

const timerInit = setInterval(() => {
	localTime.value = useDateFormat(new Date(), 'HH:mm A').value
}, 1000)

onUnmounted(() => {
	clearInterval(timerInit)
})
</script>

<template>
	<div class="flex justify-center items-center gap-[10px]">
		<ChangeVolume />

		<UserData />

		<BatteryInfo />

		<ControlButton />

		<div class="font-medium text-white text-[13px]">
			{{ localTime }}
		</div>
	</div>

	<ControlCenter />
</template>

<style scoped>

</style>
