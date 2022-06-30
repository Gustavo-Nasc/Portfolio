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
const navLink = document.querySelectorAll('.nav-link')

function linkAction() {
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills-content'),
    skillsHeader = document.querySelectorAll('.skills-header')

function toggleSkills() {
    let itemClass = this.parentNode.className

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills-content skills-close'
    }
    if (itemClass === 'skills-content skills-close') {
        this.parentNode.className = 'skills-content skills-open'
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
            tabContent.classList.remove('qualification-active')
        })

        target.classList.add('qualification-active')

        tabs.forEach(tab => {
            tab.classList.remove('qualification-active')
        })

        tab.classList.add('qualification-active')
    })
})

/*==================== SERVICES MODAL  ====================*/
const modalViews = document.querySelectorAll('.services-modal'),
    modalBtns = document.querySelectorAll('.services-button'),
    modalCloses = document.querySelectorAll('.services-modal-close')

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
let swiperPortfolio = new Swiper('.portfolio-container', {
    cssMode: true,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})

/*==================== COMMENTS SWIPER ====================*/
let swiperComments = new Swiper('.comments-container', {
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination-comments',
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
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 570)
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
sr.reveal('.section-title', {})
sr.reveal('.section-subtitle', { delay: 100 })

/*SCROLL HOME*/
sr.reveal('.home-title', {})
sr.reveal('.home-subtitle', { delay: 100 })
sr.reveal('.home-description', { delay: 300 })
sr.reveal('.home-button', { delay: 400 })
sr.reveal('.home-img', { delay: 400 })
sr.reveal('.home-social-icon', { interval: 200 })
sr.reveal('.home-scroll', { delay: 600 })

/*SCROLL ABOUT*/
sr.reveal('.about-img', {})
sr.reveal('.about-description', { delay: 300 })
sr.reveal('.about-info-title', { interval: 200 })
sr.reveal('.about-info-name', { delay: 100, interval: 300 })
sr.reveal('.about-button', { delay: 200 })

/*SCROLL SKILLS*/
sr.reveal('.skills-content', { interval: 200 })

/*SCROLL QUALIFICATION*/
sr.reveal('.qualification-button', { interval: 200 })
sr.reveal('.qualification-sections', { delay: 200 })

/*SCROLL SERVICES*/
sr.reveal('.services-content', { interval: 200 })

/*SCOLL PORTFOLIO*/
sr.reveal('.portfolio-container', {})
sr.reveal('.swiper-button-prev', { delay: 200 })
sr.reveal('.swiper-button-next', { delay: 400 })

/*SCROLL PROJECT IN MIND*/
sr.reveal('.project-title', { delay: 200 })
sr.reveal('.project-description', { delay: 400 })
sr.reveal('.project-button', { delay: 600 })
sr.reveal('.project-img', { delay: 600 })

/*SCROLL COMMENTS*/
sr.reveal('.comments-container', { delay: 400 })

/*SCROLL LEAVE A COMMENT*/
sr.reveal('.rating-content', { delay: 400, interval: 200 })
sr.reveal('.leave-comment-button', { delay: 600 })

/*SCROOL CONTACT*/
sr.reveal('.contact-information', { interval: 200 })
sr.reveal('.contact-content', { interval: 200 })
sr.reveal('.contact-button', { delay: 200 })

/*SCROLL FOOTER*/
sr.reveal('.footer-title', {})
sr.reveal('.footer-subtitle', { delay: 200 })
sr.reveal('.footer-link', { delay: 400, interval: 200 })
sr.reveal('.footer-social', { interval: 200 })