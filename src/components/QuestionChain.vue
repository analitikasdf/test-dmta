
<script setup>
import { computed } from 'vue'
import { Store } from '@/stores/Store'
import AnswerVariants from './AnswerVariants.vue'

const store = Store()
const question = computed(() => {
	return store.questions.results?.[store.numberQuestion]
})
</script>

<template>
	<div v-if="store.questions.results?.length > 0">
		<div class="wrappQuestion">
			<div class="category">
				<span>{{ question?.category }}</span>
			</div>
			<div class="difficulty">
				<span>Difficulty: </span>
				<span>{{ question?.difficulty }}</span>
			</div>
			<div class="question">
				<span>Question: </span>
				<span>{{ question?.question }}</span>
			</div>
			<br />
			<AnswerVariants
				v-if="store.numberQuestion <= store.questions.results?.length - 1"
				:type="question?.type"
				:correct-answer="question?.correct_answer"
				:incorrect-answers="question?.incorrect_answers"
			/>
		</div>
	</div>
	<div v-else>loading ...</div>
</template>

<style>
</style>