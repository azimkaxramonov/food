
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
    
        let totl  = (slides.length).toString()
        
        total.innerHTML = totl.padStart(2,0)
    
        current.innerHTML = curr.padStart(2,0)
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


