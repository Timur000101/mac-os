<script setup lang="ts">
import ThemeProvider from '@/app/providers/theme/ui'
</script>

<template>
	<theme-provider>
		<router-view></router-view>
	</theme-provider>
</template>

<style scoped></style>
