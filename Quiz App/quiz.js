const questions = [
    {
        question:'Which is the largest animal in the world?',
            a:'Shark',
            b:'Blue whale',
            c:'Elephant',
            d:'Giraffe',
            correct:'Blue whale'

    },
    {
        question:'Which is smallest country in the world?',
            a:'Vatican City',
            b:'Bhutan',
            c:'Nepal',
            d:'Sri Lanka',
            correct:'Vatican City'

    },
    {
        question:'Which is largest desert in the world?',
            a:'Kalahari',
            b:'Gobi',
            c:'Sahara',
            d:'Antarctica',
            correct:'Sahara'

    },
    {
        question:'Which is smallest continent in the world?',
            a:'Asia',
            b:'Australia',
            c:'Arctic',
            d:'Africa',
            correct:'Australia'
    }
]
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')

const submit = document.getElementById('submit')

let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz(){
    deselectAnswers()
    const currentQuizData = questions[currentQuiz]

    questionEl.innerHTML = currentQuizData.question
    a_text.innerHTML = currentQuizData.a
    b_text.innerHTML = currentQuizData.b
    c_text.innerHTML = currentQuizData.c
    d_text.innerHTML = currentQuizData.d
}

function deselectAnswers(){
    answerEls.forEach(answerEl => {
        answerEl.checked = false
    })
}
function getSelected(){
    let answer;
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
}
submit.addEventListener('click',() => {
    const answer = getSelected()
    console.log(answer)

    if(answer){
        if(answer === questions[currentQuiz].correct){
            score++
        }

        currentQuiz++
        if(currentQuiz < questions.length){
            loadQuiz()
        }else{
            quiz.innerHTML = `
            <h2>You answered correctly at ${score} / ${questions.length} questions</h2>
            <button onclick='location.reload()'>Reload</button>
            `
        }
    }
})