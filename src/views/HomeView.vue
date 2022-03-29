
<script setup>
import { Store } from '@/stores/Store'
import { computed, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import QuestionChain from '@/components/QuestionChain.vue'

const store = Store()
const router = useRouter()

onMounted(() => {
	store.loadQuestionsList(router)
})
const toScore = computed(() => {
	return store.questions.results?.length === store.numberQuestion
})

watch(toScore, () => {
	router.push({ name: 'score' })
})
</script>

<template>
	<main>
		<h3>Question:</h3>
		<br />
		<QuestionChain />
	</main>
</template>

<style>
main {
	width: 50%;
	margin: 0 auto;
}
</style>
