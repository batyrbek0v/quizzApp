











 // // DOM-ELEMENTS
 const $allOptions = document.querySelectorAll('.option')
 const $question = document.querySelector('.question')
 const $addBtn = document.querySelector('.add_btn')
 const $themes = document.querySelector('#themes')
 const $rightAnswer = document.querySelector('#right_answer')
 
// // DOM-ELEMENTS-END

window.addEventListener('load', () => {
    const themes = JSON.parse(localStorage.getItem('themes'))
    const allThemes = themes.map(item => {
        return `
            <option value=${item}>${item}</option>
        `
    })
    $themes.innerHTML = allThemes
})

let choosenTheme = 'math'
let rightAnswer = 'a'

$themes.addEventListener('change' , e => {
    const val = e.target.value

    choosenTheme = val
    console.log(choosenTheme);
})

$rightAnswer.addEventListener('change' , e => {
    const val = e.target.value

    rightAnswer = val
    console.log(rightAnswer);
})



$addBtn.addEventListener('click' , e => {
    e.preventDefault()

    const dataBase = JSON.parse(localStorage.getItem('quizApp'))

    const question = newQuestion()

    if(question){
        dataBase[choosenTheme].push(question)
        console.log(dataBase);
        localStorage.setItem('quizApp', JSON.stringify(dataBase))
    }else{
        alert('Fill The Area')
    }
})

function newQuestion() {
    let obj = {}

    let areIsAllInputsFilledUp = true

    $allOptions.forEach(({id, value}) => {
        if(value){
            obj[id] = value
        }else{
            areIsAllInputsFilledUp = false
        }
    })
    if(areIsAllInputsFilledUp && $question.value){
        obj.question =$question.value
        obj.correct = $rightAnswer.value
        return obj
    }else{
        console.error('ERROR')
    }

    console.log(obj);
}

// $add.addEventListener('click' , e => {
//     e.preventDefault()
//     if(
//         $question.value.length === 0 ||
//         $answer_a.value.length === 0 ||
//         $answer_b.value.length === 0 ||
//         $answer_c.value.length === 0 ||
//         $answer_d.value.length === 0 ||
//         $correct.value.length === 0 
//     ){
//         if($question.value.length === 0){
//             $question.style.borderColor = 'red'
//         }
//         if($answer_a.value.length === 0){
//             $answer_a.style.borderColor = 'red'
//         }
//         if($answer_b.value.length === 0){
//             $answer_b.style.borderColor = 'red'
//         }
//         if($answer_c.value.length === 0){
//             $answer_c.style.borderColor = 'red'
//         }
//         if($answer_d.value.length === 0){
//             $answer_d.style.borderColor = 'red'
//         }
//         if($correct.value.length === 0){
//             $correct.style.borderColor = 'red'
//         }
//     }else{
//         const base = JSON.parse(localStorage.getItem('quizApp'))
//         localStorage.setItem('quizApp' , JSON.stringify(
//             [...base, 
//                 {
//                     id:0,
//                     question: $question.value,
//                     a:$answer_a.value,
//                     b:$answer_b.value,
//                     c:$answer_c.value,
//                     d:$answer_d.value,
//                     correct:$correct.value,
//                 }
//             ]
//         ))
//         window.open('./index.html', '_self')
//     }
// })
