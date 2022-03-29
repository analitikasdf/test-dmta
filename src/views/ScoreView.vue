<script setup>
import { onBeforeUnmount } from 'vue'
import { RouterLink } from 'vue-router'
import { Store } from '@/stores/Store'
const store = Store()

onBeforeUnmount(() => {
	store.$reset()
})
</script>
<template>
	<div class="about">
		<nav>
			<RouterLink to="/">To home</RouterLink>
		</nav>
		<br />
		<h1>Result</h1>
		<br />
		<h2>Correct answers - {{ store.correct_answers }}</h2>
		<h2>Incorrect answers - {{ store.incorrect_answers }}</h2>
	</div>
</template>

<style>
</style>
