let switchtoggle = document.querySelector('input[type="checkbox"]')
const nav = document.getElementById('nav')
const textbox = document.getElementById('text-box')
const toogleIcon = document.getElementById('toggle-icon')
const image1 = document.getElementById('image1')
const image2 = document.getElementById('image2')
const image3 = document.getElementById('image3')





function lightDark(color){
    image1.src = `img/undraw_proud_coder_${color}.svg`
    image2.src = `img/undraw_feeling_proud_${color}.svg`
    image3.src = `img/undraw_conceptual_idea_${color}.svg`

}



function Darkmode(){
    nav.style.background = 'rgb(0 0 0 / 50%)'
    textbox.style.background = 'rgb(255 255 255 / 50%)'
    toogleIcon.children[0].textContent = 'Dark Mode'
    toogleIcon.children[1].classList.replace('fa-sun','fa-monn')
    lightDark('dark')
    // toogleIcon.children[1].classList.add('fa-moon')
   

    // console.log(toogleIcon.children)
    // console.log(toogleIcon.children[0])
}


function lightMode(){
    nav.style.background = 'rgb(255 255 255 / 50%)'
    textbox.style.background = 'rgb(0 0 0 / 50%)'
    toogleIcon.children[0].textContent = 'Light Mode'
    toogleIcon.children[1].classList.replace('fa-moon','fa-sun')
    lightDark('light')

    // toogleIcon.children[1].classList.remove('fa-moon')

    // toogleIcon.children[1].classList.add('fa-sun')
    // image1.src = 'img/undraw_proud_coder_light.svg'
    // image2.src = 'img/undraw_feeling_proud_light.svg'
    // image3.src = 'img/undraw_conceptual_idea_light.svg'



}


function changeTheme (event){
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme','dark')
        localStorage.setItem('theme','dark')
        Darkmode()
    } else {
        document.documentElement.setAttribute('data-theme','light')
        localStorage.setItem('theme','light')
        lightMode()
    }
    
}

switchtoggle.addEventListener('change',changeTheme)

const currentTheme = localStorage.getItem('theme')

if (currentTheme){
    document.documentElement.setAttribute('data-theme', currentTheme)

    if(currentTheme === 'dark'){
        switchtoggle.checked = true;
        Darkmode()
    }

}