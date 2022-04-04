
  const $quizContainer = document.querySelector('.content')
  const $question = document.querySelector('.question')
  const $answerRadio = document.querySelectorAll('.answer')
  const $answer_a = document.querySelector('.a-answer')
  const $answer_b = document.querySelector('.b-answer')
  const $answer_c = document.querySelector('.c-answer')
  const $answer_d = document.querySelector('.d-answer')
  const $submitBtn = document.querySelector('.submitBtn')
  const $signOut = document.querySelector('.signOut')
  const $quizContainer2 = document.querySelector('.quizData')
  
  // Действующий вопрос

const quizData = {
	english: [
	{
		id: 1,
		question: 'This is … orange ball.',
		a: 'a',
		b: 'an',
		c: 'the',
		d: '-',
		correct: 'b'
	},
	{
		id: 2,
		question: 'I will be back … 7 o`clock in the evening.',
		a: 'in',
		b: 'on',
		c: 'at',
		d: 'buy',
		correct: 'c'
	},
	{
		id: 3,
		question: '… Pacific ocean is the most dangerous.',
		a: 'a',
		b: 'an',
		c: 'the',
		d: '-',
		correct: 'c'
	},
	],
	math: [
	{
		id: 1,
		question: '2 + 2',
		a: '22',
		b: '4',
		c: '2',
		d: '-',
		correct: 'b'
	},
	{
		id: 2,
		question: 'корень 64',
		a: '8',
		b: '16',
		c: '5',
		d: '20',
		correct: 'a'
	},
	{
		id: 3,
		question: 'sin30deg?',
		a: '1',
		b: '0',
		c: '1/2',
		d: '-1',
		correct: 'c'
	},
	],
	bio: [
	{
		id: 1,
		question: 'How many kingdoms are there in the world?',
		a: '1',
		b: '2',
		c: '3',
		d: '5',
		correct: 'd'
	},
	{
		id: 2,
		question: 'Which blat cell curl up the blood at the wound?',
		a: 'trombocite',
		b: 'leikocite',
		c: 'Eritrocite',
		d: 'Fagocite',
		correct: 'a'
	},
	{
		id: 3,
		question: 'Who is a human',
		a: 'Ruslan',
		b: 'Aziz',
		c: 'Timur',
		d: 'Abdull',
		correct: 'd'
	},
	]
}

window.addEventListener("load" , () => {
  
  const chosenTheme = localStorage.getItem('theme')

  if(chosenTheme){
    const dbFromLocal = localStorage.getItem('quizApp')
    if(dbFromLocal){
      return
    }else{
      localStorage.setItem('quizApp', JSON.stringify(quizData))
      window.location.reload()
    }
  }else{
    window.open('./themes.html', '_self')
  }
})

const theme = JSON.parse(localStorage.getItem('theme'))
const dataBase = JSON.parse(localStorage.getItem('quizApp'))
const dbLocalQuizData = dataBase[theme]





  // Score
  let currentQuiz = 0
  let score = 0
  
function loadQuiz(){
  deselectRadio()
  const currentQuizData = dbLocalQuizData[currentQuiz]

  $question.innerHTML = currentQuizData
  
  $question.innerHTML = currentQuizData.question

  $answer_a.innerHTML = currentQuizData.a
  $answer_b.innerHTML = currentQuizData.b
  $answer_c.innerHTML = currentQuizData.c
  $answer_d.innerHTML = currentQuizData.d
  console.log(currentQuizData)
}
  
loadQuiz()
  
  
function selectedAnswer(){
  let answer = null

  $answerRadio.forEach(item => {
    if(item.checked){
      answer = item.id
    }
	})	
	return answer
}
console.log(selectedAnswer());



function deselectRadio(){
  $answerRadio.forEach(item => item.checked = false)
}

let myAnswer = []

$submitBtn.addEventListener('click', e => {
  e.preventDefault()

  const answer = selectedAnswer()

  if(answer){
		if(answer === dbLocalQuizData[currentQuiz].correct){
			score++
		}
		myAnswer.push(answer)

		currentQuiz++

		if(currentQuiz < dbLocalQuizData.length){
			loadQuiz()
		}else{
			$quizContainer.innerHTML = `
				<div class='show_answ'>
					<h3>Вы ответили на ${score} / ${dbLocalQuizData.length}</h3>
					<button class='btn_answ' onclick='showmeTrueAnswer()'>Показать правильные ответы</button>
				</div>
			`
		}
	}else{  
		alert('Выберите один из вариантов!')
	}
})

function showmeTrueAnswer() {
    const template = dbLocalQuizData.map((item,index) => {
      return finishedTemplate(item,index)
    }).join('')
    $quizContainer2.innerHTML = template
    $quizContainer2.insertAdjacentHTML('afterbegin', '<button class="restart_btn" onclick="reset()"> Начать заново</button>')
    $quizContainer2.insertAdjacentHTML('afterbegin', '<button class="restart_btn" onclick="selectToTheme()"> Выбрать предмет</button>')
}

function finishedTemplate(item,index) {
  return `
    <div class='true_answers'>
      <div class='true_card'>
        <ol type='A'>
          <h3 class='hh'>${item.question}</h3>
          <li>${item.a}</li>
          <li>${item.b}</li>
          <li>${item.c}</li>
          <li>${item.d}</li>
          <h5>Правильный ответ: <span class='true_answ'>${item.correct}</span></h5>
          <h5>Ваш ответ: <span class='wrong_answ'>${myAnswer[index]}</span></h5>
        </ol>
      </div>
    </div>
  `
}


function reset() {
    window.location.reload()
}

function selectToTheme() {
	localStorage.removeItem('theme')
	window.open('./index.html' , '_self')
}

          // AUTH

window.addEventListener('load' , () => {
	const auth = localStorage.getItem('auth')
	if(auth === 'false'){
		window.open('./auth.html', '_self')
	}
})


$signOut.addEventListener('click' , e => {
  e.preventDefault()
  localStorage.setItem('auth' , false)
  setTimeout(() => {
    window.open('./auth.html' , '_self')
  },1000)
})
          // AUTH-END