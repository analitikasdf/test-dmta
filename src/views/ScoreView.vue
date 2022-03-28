<script setup>
import { Store } from '@/stores/Store'

const store = Store()
</script>
<template>
	<div class="about">
		<h1>Result</h1>
		<h2>correct answers - {{ store.correct_answers }}</h2>
		<h2>incorrect answers - {{ store.incorrect_answers }}</h2>
	</div>
</template>

<style>
.about {
	width: 50%;
	margin: 0 auto;
}
</style>
