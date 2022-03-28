import { defineStore } from 'pinia'
import axios from 'axios'

export const Store = defineStore('Store', {
	state: () => ({
		numberQuestion: 0,
		questions: [],
		error: null,
		correct_answers: 0,
		incorrect_answers: 0,
		pickedStatus: null
	}),
	getters: {
		getQuestions: state => state.questions
	},
	actions: {
		async loadQuestionsList(router) {
			try {
				const data = await axios.get('https://opentdb.com/api.php?amount=10')
				this.questions = await data.data
			} catch (error) {
				this.error = error
				return router.push({ name: 'error' })
			}
		},
		async postAnswerToQuestion(pickedStatus, picked) {
			console.log(picked, 'picked')
			this.pickedStatus = pickedStatus
			this.pickedStatus === true ? (this.correct_answers = this.correct_answers + 1) : (this.incorrect_answers = this.incorrect_answers + 1)
			try {
				axios.post(`https://opentdb.com/api.php?${picked}`)
			} catch (error) {
				console.error(error)
			}
			this.numberQuestion++
		}
	}
})
