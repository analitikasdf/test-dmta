<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
	<div class="about">
		<RouterLink @click="resetStore" to="/">To home</RouterLink>
		<br />
		<br />
		<br />
		<h1>Page not found! Error 404!</h1>
	</div>
</template>


