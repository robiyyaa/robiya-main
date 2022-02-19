// alert button
document.querySelector('#alertButton').addEventListener('click', () => {
    alert("The Alert button has been clicked!")
})
// document.querySelector('#mouseoverButton').style.color= 'purple'
document.querySelector('#mouseoverButton').addEventListener('click', () => {
    document.querySelector('#counter').innerHTML = parseInt(document.querySelector('#counter').innerHTML) - 1;
})

// mouseover counter
document.querySelector('#mouseoverButton').addEventListener('mouseover', () => {
    document.querySelector('#counter').innerHTML = parseInt(document.querySelector('#counter').innerHTML) + 1;
})

// keypress
document.querySelector('#controls').addEventListener('keypress', () => {
   
})

// anonimous arrow function
// () => {

// };

const zSound = new Audio('sounds/crash.mp3')
const xSound = new Audio('sounds/kick-bass.mp3')
const cSound = new Audio('sounds/snare.mp3')
const vSound = new Audio('sounds/tom-1.mp3')
const bSound = new Audio('sounds/tom-2.mp3')
const nSound = new Audio('sounds/tom-3.mp3')
const mSound = new Audio('sounds/tom-4.mp3')
const sounds = [zSound,xSound,cSound,vSound,bSound,nSound,mSound]

for (let i = 0; i < document.querySelectorAll('.drum').length; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', () =>{
        // alert(document.querySelectorAll('.drum')[i].innerHTML)
        sounds[i].play();
    })

    document.addEventListener("keypress", (buttonPress) => {
        if (buttonPress.key === document.querySelectorAll('.drum')[i].innerHTML) {
         document.querySelectorAll('.drum')[i].click();
       }
     });
}

const controls = document.querySelector('#controls');

document.addEventListener('keypress', (movement) => {
    switch (movement.key) {
        case 'w':
            controls.innerHTML = 'moving forward'
            break;
        case 'a':
            controls.innerHTML = 'moving to the left'
            break;
        case 's':
            controls.innerHTML = 'moving backwards'
            break;
        case 'd':
            controls.innerHTML = 'moving to the right'
            break;
    
        default:
            break;
    }
})

document.addEventListener('keyup', () => {
    controls.innerHTML = 'standing'
})



