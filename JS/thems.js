const $container = document.querySelector('.container')
const $addTheme = document.querySelector('.add_btn')
const $addQuestions = document.querySelector('.add_question_btn')
const themes = ['math', 'bio', 'english']


window.addEventListener('load' , () => {
    const allThemes = JSON.parse(localStorage.getItem('themes'))
    if(allThemes) {
        themeTemplate(allThemes)
    }else{
        localStorage.setItem('themes', JSON.stringify(themes))
    }
})


function themeTemplate(dataBase) {
    const themes = dataBase.map(item => {
        return `
            <div class="card math" id="${item}" onclick="chooseTheme('${item}')">
                <h2>${item}</h2>
            </div>
        `
    }).join('')
    $container.innerHTML = themes
}


function chooseTheme(item) {
    localStorage.setItem('theme', JSON.stringify(item))
    window.open('./index.html' , '_self')
}




$addTheme.addEventListener('click' , e => {
    e.preventDefault()
    const allThemes = JSON.parse(localStorage.getItem('themes'))

    const newTheme = prompt('Название предмета?')
        
    const themes = [...allThemes, newTheme]

    localStorage.setItem('themes', JSON.stringify(themes))
    window.location.reload()
})

$addQuestions.addEventListener('click', e => {
    e.preventDefault()
    window.open('./admin.html' , '_self')
})

/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////

// const $container = document.querySelector('.container')


// const themes = ['math' , 'bio', 'english']


// window.addEventListener('load', () => {
//     const allThemes = JSON.parse(localStorage.getItem('themes'))
//     console.log(allThemes);
//     if(allThemes){
//         themeTemplate(allThemes)
//     }else{
//         localStorage.setItem('themes', JSON.stringify(themes))
//     }
// })

// function themeTemplate(database) {
//     const themes = database.map(item => {
//         return `
//         <div class="card math id="${item}" onclick='chooseTheme('${item}')'">
//             <h2>${item}</h2>
//         </div>
//         `
//     }).join('')

//     $container.innerHTML = themes
// }


// function chooseTheme (item) {
//     localStorage.setItem('theme', JSON.stringify(item))
//     window.open('./index.html' , '_self')
// }



/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
/////////////////////////////////









// const $math = document.querySelector('.math')
// const $bio = document.querySelector('.bio')
// const $english = document.querySelector('.english')
// const $addTheme = document.querySelector('.add_btn')


// function chooseTheme (theme) {
//     localStorage.setItem('theme', theme)
//     window.open('./index.html' , '_self')
// }

// $math.addEventListener('click' , e => {
//     e.preventDefault()
//     chooseTheme('math')
// })
// $bio.addEventListener('click' , e => {
//     e.preventDefault()
//     chooseTheme('bio')
// })
// $english.addEventListener('click' , e => {
//     e.preventDefault()
//     chooseTheme('english')
// })