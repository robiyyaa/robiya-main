// мы можем использовать один файл для всех сайтов

const waltz = new Audio('/sounds/waltz.mp3')
waltz.volume = 0.1;

const choice1 = new Audio('/sounds/choice1.mp3')
const choice2 = new Audio('/sounds/choice2.mp3')
const choice3 = new Audio('/sounds/choice3.mp3')
const choice4 = new Audio('/sounds/choice4.mp3')
const choiceSoudns = [choice1, choice2, choice3, choice4]
document.addEventListener('keypress', (m) => {
    if(m.key === 'm'){
        waltzToggler();
    }
})

document.querySelector('#waltzToggler').addEventListener('click', waltzToggler());

document.querySelector('#waltzToggler').addEventListener('mouseover', () => {
    
})



function waltzToggler() {
    if (waltz.paused == true) {
        waltz.play();
    } else {
        waltz.pause();
    }
}

const hooray2 = new Audio('/sounds/hooray2.mp3')
const hooray3 = new Audio('/sounds/hooray3.mp3')

for (let i = 0; i < document.querySelectorAll('.custom-button').length; i++) {
    document.querySelectorAll('.custom-button')[i].addEventListener('click',() =>{
        hooray2.volume = 0.1;
        hooray3.volume = 0.1;
        hooray2.play();
        hooray3.play();
    })
    
}
// $('.custom-button').