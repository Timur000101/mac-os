<script setup lang="ts">
import { useBattery } from '@vueuse/core'
import { Icon } from '@/shared/ui'

const { charging, chargingTime, dischargingTime, level } = useBattery()

// TODO: Test with a laptop
console.log(level.value, charging.value, chargingTime.value, dischargingTime.value)
</script>

<template>
	<div class="flex items-center justify-center w-[24px] h-[24px] hover:bg-white/35 rounded-[5px]">
		<Icon icon="battery" width="24" height="24" color="white" />
	</div>
</template>

<style scoped>

</style>
