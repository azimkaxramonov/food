
let slides = document.querySelectorAll('.offer__slide')
let next = document.querySelector('.offer__slider-next')
let prev = document.querySelector('.offer__slider-prev')
let slideIndex = 0








console.log(current);


function showSlides(n) {



    if (slideIndex > slides.length - 1) {
        slideIndex = 0
    }

    if (slideIndex < 0) {
        slideIndex = slides.length - 1
    }

    slides.forEach(slide => slide.classList.add('hide'))

    slides[slideIndex].classList.remove('hide')
    slides[slideIndex].classList.add('fade')


    let current = document.getElementById('current')
    let total = document.getElementById('total')

    let curr = (slideIndex + 1).toString()

    let totl = (slides.length).toString()

    total.innerHTML = totl.padStart(2, 0)

    current.innerHTML = curr.padStart(2, 0)
}


next.onclick = () => {
    slideIndex += 1

    showSlides()
}
prev.onclick = () => {
    slideIndex -= 1

    showSlides()
}

showSlides()




let modal = document.querySelector('.modal')
let openBtns = document.querySelectorAll('[data-modal]')
let closeBtns = document.querySelectorAll('[data-close]')


openBtns.forEach((btn) => {
    btn.onclick = () => {
        modal.classList.add('show', 'fade')
    }
})

closeBtns.forEach((btn) => {
    btn.onclick = () => {
        modal.classList.remove('show', 'fade')
    }
})



let btns = document.querySelectorAll('.tabheader__item')

let tabcontainer = document.querySelectorAll('.tabcontainer')

let tabcontent = document.querySelectorAll('.tabcontent')

let contentindex = 0
function showcontainer(b) {

    if (contentindex > tabcontent.length - 1) {
        contentindex = 0
    }

    if (contentindex < 0) {
        contentindex = tabcontent.length - 1
    }

    tabcontent.forEach(descr => descr.classList.add('hide'))

    tabcontent[contentindex].classList.remove('hide')
    tabcontent[contentindex].classList.add('fade')

}
showcontainer()
let active = document.querySelector('.tabheader__item_active')
for (let btn of btns) {
    btn.onclick = () => {
        let change = btn.getAttribute('data-bomb')
        contentindex = change
        console.log(change);

        btns.forEach(text => text.classList.remove('tabheader__item_active'))

        btn.classList.add('tabheader__item_active')

        showcontainer()
    }

}
let genBtns = document.querySelectorAll('#gender .calculating__choose-item')
let inputs = document.querySelectorAll('.calculating__choose_medium input')
let actBtns = document.querySelectorAll('.calculating__choose_big .calculating__choose-item')
let resultView = document.querySelector('#result')

let userData = {
    gender: "woman"
}

genBtns.forEach(btn => {
    btn.onclick = () => {
        genBtns.forEach(el => el.classList.remove('calculating__choose-item_active'))

        btn.classList.add('calculating__choose-item_active')

        let gen = btn.getAttribute('data-gen')
        userData.gender = gen
    }
})

inputs.forEach(inp => {
    inp.onkeyup = () => {
        userData[inp.name] = inp.value
    }
})

actBtns.forEach((btn => {
    btn.onclick = () => {
        actBtns.forEach(el => el.classList.remove('calculating__choose-item_active'))

        btn.classList.add('calculating__choose-item_active')

        let act = +btn.getAttribute('data-act')


        if (userData.gender === 'woman') {
            let BMR = 447.6 + (9.2 * userData.weight) + (3.1 * userData.height) - (4.3 * userData.age)

            resultView.innerHTML = Math.round(BMR * act)
        } else {
            let BMR = 88.36 + (13.4 * userData.weight) + (4.8 * userData.height) - (5.7 * userData.age)

            resultView.innerHTML = Math.round(BMR * act)
        }
    }
}))

let days = document.querySelector('#days')
let hours = document.querySelector('#hours')
let minutes = document.querySelector('#minutes')
let seconds = document.querySelector('#seconds')
let second = 50
let minute = 59
let hour = 23
let day = 12
console.log(seconds);


function bob(c) {
    if (second === 60) {

        second = 0
        minute +=1
        console.log(seconds);
    }
    seconds.innerHTML = second
   
    if (minute === 60) {
        minute = 0
        hour += 1
    }
    minutes.innerHTML =  minute
    if (hour === 24) {
        hour = 0
        day +=1
    }
    days.innerHTML = day
    hours.innerHTML = hour
    
     
    
}
setInterval(() => {
    second += 1

    bob()

}, 2)


          
                     