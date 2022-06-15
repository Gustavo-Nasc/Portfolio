/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills() {
    let itemClass = this.parentNode.className

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close'
    }
    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active')
        })

        target.classList.add('qualification__active')

        tabs.forEach(tab => {
            tab.classList.remove('qualification__active')
        })

        tab.classList.add('qualification__active')
    })
})

/*==================== SERVICES MODAL  ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function (modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})

/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper('.portfolio__container', {
    cssMode: true,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})

/*==================== COMMENTS SWIPER ====================*/
let swiper = new Swiper('.comments__container', {
    grabCursor: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    }
})

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        const sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80)
        nav.classList.add('scroll-header')
    else
        nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL TOP ====================*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 560)
        scrollUp.classList.add('show-scroll')
    else
        scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

/*GLOBAL*/
sr.reveal('.section__title', {})
sr.reveal('.section__subtitle', { delay: 100 })

/*SCROLL HOME*/
sr.reveal('.home__title', {})
sr.reveal('.home__subtitle', { delay: 100 })
sr.reveal('.home__description', { delay: 300 })
sr.reveal('.home__button', { delay: 400 })
sr.reveal('.home__img', { delay: 400 })
sr.reveal('.home__social-icon', { interval: 200 })
sr.reveal('.home__scroll', { delay: 600 })

/*SCROLL ABOUT*/
sr.reveal('.about__img', {})
sr.reveal('.about__description', { delay: 300 })
sr.reveal('.about__info-title', { interval: 200 })
sr.reveal('.about__info-name', { delay: 100, interval: 300 })
sr.reveal('.about__button', { delay: 200 })

/*SCROLL SKILLS*/
sr.reveal('.skills__content', { interval: 200 })

/*SCROLL QUALIFICATION*/
sr.reveal('.qualification__button', { interval: 200 })
sr.reveal('.qualification__sections', { delay: 200 })

/*SCROLL SERVICES*/
sr.reveal('.services__content', { interval: 200 })

/*SCOLL PORTFOLIO*/
sr.reveal('.portfolio__container', {})
sr.reveal('.swiper-button-prev', { delay: 200 })
sr.reveal('.swiper-button-next', { delay: 400 })

/*SCROLL PROJECT IN MIND*/
sr.reveal('.project__title', { delay: 200 })
sr.reveal('.project__description', { delay: 400 })
sr.reveal('.project__button', { delay: 600 })
sr.reveal('.project__img', { delay: 600 })

/*SCROLL COMMENTS*/
sr.reveal('.comments__name', { delay: 200 })
sr.reveal('.comments__icon', { delay: 300 })
sr.reveal('.comments__select', { delay: 500 })
sr.reveal('.comments__description', { delay: 600 })

/*SCROLL LEAVE A COMMENT*/
sr.reveal('.rating__content', { delay: 400, interval: 200 })
sr.reveal('.leave-comment__button', { delay: 600 })

/*SCROOL CONTACT*/
sr.reveal('.contact__information', { interval: 200 })
sr.reveal('.contact__content', { interval: 200 })
sr.reveal('.contact__button', { delay: 200 })

/*SCROLL FOOTER*/
sr.reveal('.footer__title', {})
sr.reveal('.footer__subtitle', { delay: 200 })
sr.reveal('.footer__link', { delay: 400, interval: 200 })
sr.reveal('.footer__social', { interval: 200 })

const Storage = {
    get() {
        return JSON.parse(localStorage.getItem('portfolio:comments')) || []
    },

    set(informations) {
        localStorage.setItem("portfolio:comments", JSON.stringify(informations))
    }
}

const Information = {
    all: Storage.get(),

    add(information) {
        Information.all.push(information)

        App.reload()
    },

    remove(index) {
        Information.all.splice(index, 1)

        App.reload()
    }
}


/*==================== COMMENTS JS ====================*/

//Substituir os dados do HTML com os dados do JS
const DOM = {
    commentContainer: document.querySelector('#swiper__comments'),

    addComment(information, index) {
        const commentDiv = document.createElement('div')
        commentDiv.classList.add('comments__content')
        commentDiv.classList.add('swiper-slide')

        commentDiv.innerHTML = DOM.innerHTMLComment(information, index)

        commentDiv.dataset.index = index

        DOM.commentContainer.appendChild(commentDiv)
    },

    innerHTMLComment(information, index) {
        const html = `
        <div class="comments__data">
            <div class="comments__header">
                <div>
                    <h3 class="comments__name">${information.name}</h3>
                </div>
            </div>
            <i class="uil uil-minus-circle comments__icon" onclick="Information.remove(${index})">
            <p class="comments__text">Remover comentário</p>
        </i>
            

        </div>
        <p class="comments__select">${information.rating}</p>
        <p class="comments__description">
            ${information.comment}
        </p>
        `

        return html
    },

    clearInformations() {
        DOM.commentContainer.innerHTML = ""
    }
}

//Capturarar os Dados do Formulário HTML para o Array de Informações
const Form = {
    name: document.querySelector('input#name'),
    rating: document.querySelector('select#rating'),
    comment: document.querySelector('textarea#comment'),

    getValues() {
        return {
            name: Form.name.value,
            rating: Form.rating.value,
            comment: Form.comment.value
        }
    },

    validateFields() {
        const { name, rating, comment } = Form.getValues()

        if (name.trim() == "" ||
            rating.trim() == "select" ||
            comment.trim() == "") {
            throw new Error("Por favor, preencha todos os campos")
        }
    },

    clearFields() {
        Form.name.value = ""
        Form.rating.value = "select"
        Form.comment.value = ""
    },

    submit(event) {
        event.preventDefault()

        try {
            //Verificação se as informações foram preenchidas
            Form.validateFields()

            const information = Form.getValues()

            //Salvar
            Information.add(information)

            //Apagar os dados do Formulário
            Form.clearFields()
        } catch (error) {
            alert(error.message)
        }
    }
}

const App = {
    init() {
        Information.all.forEach(DOM.addComment)

        Storage.set(Information.all)
    },

    reload() {
        DOM.clearInformations()

        App.init()
    }
}

App.init()