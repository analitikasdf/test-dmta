
<script setup>
import { computed, ref, watch } from 'vue'
import { Store } from '@/stores/Store'

const props = defineProps({
	type: String,
	correctAnswer: String,
	incorrectAnswers: Array
})
const store = Store()

const allAnswers = computed(() => {
	return [...props.incorrectAnswers, props.correctAnswer]
})
const picked = ref(allAnswers.value[0])
const pickedStatus = computed(() => {
	return picked.value == props.correctAnswer
})
watch(allAnswers, () => {
	picked.value = allAnswers.value[0]
})
const sendAnswer = value => {
	store.postAnswerToQuestion(value, picked.value)
}
</script>

<template>
	<label v-for="(item, id) in allAnswers" :key="id" :for="item"><input type="radio" :id="item" :value="item" v-model="picked" /> {{ item }}</label>
	<br />
	<button @click="sendAnswer(pickedStatus, picked), resetPicked()">Answer</button>
</template>

<style>
label {
	display: block;
}
</style>