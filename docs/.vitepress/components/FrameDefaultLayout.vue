<script setup>
import { ref, onMounted } from 'vue'
import { createApp } from 'whyframe:app'

const app = ref()

onMounted(() => {
	createApp(app.value)
})
</script>

<template>
	<div id="example" class="overflow-hidden relative min-h-screen rounded-lg bg-gray-20 dark:bg-gray-800/25">
		<div
			style="background-position:10px 10px"
			class="
				absolute inset-0
				bg-grid-gray-50 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))]
				dark:bg-grid-gray-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]
			"
		></div>
		<div class="flex overflow-hidden relative flex-col flex-nowrap justify-center items-center p-8 min-h-screen rounded-lg">
			<div ref="app" class="flex flex-row flex-nowrap justify-center items-center"></div>
		</div>
		<div class="absolute inset-0 rounded-lg border pointer-events-none border-black/5 dark:border-white/5"></div>
	</div>
</template>