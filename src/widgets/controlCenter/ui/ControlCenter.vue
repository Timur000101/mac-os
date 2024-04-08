<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue'
import Conections from './Conections/Conections.vue'
import { useControl } from '@/shared/lib/hooks/useControlCenter'
import { TeleportPrimitive } from '@/shared/ui/teleport'
import { Sheet } from '@/shared/ui'

const { isShown, toggleControl } = useControl()
const currentRef = ref(null)

onClickOutside(currentRef, () => toggleControl())
</script>

<template>
	<TeleportPrimitive to="body">
		<Sheet
			v-if="isShown"
			class="fixed top-[28px] right-1 rounded-2xl p-3"
		>
			<Conections />
		</Sheet>
	</TeleportPrimitive>
</template>

<style scoped>

</style>
