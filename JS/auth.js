
                    // DOM-ELEMENTS
const $email = document.querySelector('.email')
const $password = document.querySelector('.password')
const $error = document.querySelector('.error')
const $login = document.querySelector('.login')
                    // DOM-ELEMENTS-END

window.addEventListener('load', () => {
    if(!localStorage.getItem('auth')){
        localStorage.setItem('auth' , false)
    }else{
        if(localStorage.getItem('auth') === 'true'){
            window.open('./index.html' , '_self')
        }
    }
   
})

$login.addEventListener('click', e => {
    e.preventDefault()
    if($email.value === 'admin' && $password.value === '123'){
        localStorage.setItem('auth', true)
        setTimeout(() => {
            $error.innerHTML = 'Совершается переход.'
            $email.style.border = '2px solid green'
            $password.style.border = '2px solid green'
            $error.style.color = 'green'
        },1000)
        setTimeout(() => {
            $error.innerHTML = 'Совершается переход..'
        },1500)
        setTimeout(() => {
            $error.innerHTML = 'Совершается переход...'
        },2000)
        setTimeout(() => {
            $error.innerHTML = 'Вы успешно авторизовались ✔'
        },2500)
        setTimeout(() => {
            window.open('./index.html' , '_self')
        },3800)
      
    }else{
        $email.style.border = '2px solid red'
        $password.style.border = '2px solid red'
        $error.innerHTML = 'Неверный логин или пароль !'
        $error.style.color = 'red'
    }
})