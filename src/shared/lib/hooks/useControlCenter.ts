import { ref } from 'vue'

const isShown = ref(false)

export function useControl() {
	const toggleControl = () => {
		isShown.value = !isShown.value
	}

	return {
		isShown,
		toggleControl,
	}
}
