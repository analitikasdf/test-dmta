<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
	<header>
		<div class="wrapper">
			<nav>
				<RouterLink to="/">Home</RouterLink>
				<!-- <RouterLink to="/score">Score</RouterLink> -->
			</nav>
		</div>
	</header>

	<RouterView />
</template>

<style>
@import '@/assets/base.css';
header {
	padding: 20px 0;
	width: 50%;
	margin: 0 auto;
}
a {
	padding-right: 30px;
}
</style>
