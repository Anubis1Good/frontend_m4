const question_field = document.querySelector('.question')
const answer_buttons = document.querySelectorAll('.answer')


class Question {
    constructor(question,answer_1,answer_2,correct,answer_4,answer_5) {
        this.question = question
        this.correct = correct
        this.answers = [
            answer_1,
            answer_2,
            this.correct,
            answer_4,
            answer_5,
        ]
    }


    display () {
        question_field.innerHTML = this.question
        for (let i = 0; i < this.answers.length; i += 1) {
            answer_buttons[i].innerHTML = this.answers[i]
        }
    }
}


current_questions = [
new Question("2+2", "6", "2", "4","10","3"),
new Question("2+3", "6", "4", "5","10","3"),
new Question("3+5", "6", "4", "8","10","3"),
new Question("10-5",'3','11','5','0','9')
]


let total_answers_given = 0


let current_question = current_questions[total_answers_given]
current_question.display()


for (let i = 0; i < answer_buttons.length; i += 1) {
    answer_buttons[i].addEventListener('click', function() {
        if (answer_buttons[i].innerHTML == current_question.correct) {
            console.log("Правильно")
        } else {
            console.log("Неправильно")
        }
        total_answers_given += 1
        current_question = current_questions[total_answers_given]
        current_question.display()
 
    })
}
