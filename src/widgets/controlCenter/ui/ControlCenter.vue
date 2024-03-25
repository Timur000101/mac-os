<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue'
import { useControl } from '@/shared/lib/hooks/useControl'
import { TeleportPrimitive } from '@/shared/ui/teleport'

const { isShown, toggleControl } = useControl()
const currentRef = ref(null)

onClickOutside(currentRef, () => toggleControl())
</script>

<template>
	<TeleportPrimitive to="body">
		<!-- TODO: CARD Shared component -->
		<div
			v-if="isShown"
			ref="currentRef"
			class="w-40 h-40 fixed top-[28px] right-1 rounded-2xl p-3 bg-white/75 border-white
		dark:bg-black/30 dark:border-white/20 border-[1px]"
		>
			Hello
		</div>
	</TeleportPrimitive>
</template>

<style scoped>

</style>
