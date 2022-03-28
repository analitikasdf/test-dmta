
<script setup>
import { computed, ref } from 'vue'
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
const picked = ref()
const pickedStatus = computed(() => {
	return picked.value == props.correctAnswer
})
const sendAnswer = value => {
	store.postAnswerToQuestion(value, picked.value)
}
</script>

<template>
	<label v-for="(item, id) in allAnswers" :key="id" :for="item"><input type="radio" :id="item" :value="item" v-model="picked" /> {{ item }}</label>
	<button @click="sendAnswer(pickedStatus, picked)">answer</button>
</template>

<style>
label {
	display: block;
}
</style>