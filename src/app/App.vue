<script setup lang="ts">
import ThemeProvider from '@/app/providers/theme/ui'
</script>

<template>
	<ThemeProvider>
		<router-view />
	</ThemeProvider>
</template>

<style scoped></style>
