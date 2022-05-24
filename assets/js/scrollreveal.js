/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: false
});

/*GLOBAL*/
sr.reveal('.section__title', {});
sr.reveal('.section__subtitle', { delay: 100 });

/*SCROLL HOME*/
sr.reveal('.home__title', {});
sr.reveal('.home__subtitle', { delay: 100 });
sr.reveal('.home__description', { delay: 300 });
sr.reveal('.home__button', { delay: 400 });
sr.reveal('.home__img', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 200 });
sr.reveal('.home__scroll', { delay: 600 });

/*SCROLL ABOUT*/
sr.reveal('.about__img', {});
sr.reveal('.about__description', { delay: 300 });
sr.reveal('.about__info-title', { interval: 200 });
sr.reveal('.about__info-name', { delay: 100, interval: 300 });
sr.reveal('.about__button', { delay: 200 });

/*SCROLL SKILLS*/
sr.reveal('.skills__content', { interval: 200 });

/*SCROLL QUALIFICATION*/
sr.reveal('.qualification__button', { interval: 200 });
sr.reveal('.qualification__sections', { delay: 200 });

/*SCROLL SERVICES*/
sr.reveal('.services__content', { interval: 200 });

/*SCOLL PORTFOLIO*/
sr.reveal('.portfolio__container', {});
sr.reveal('.swiper-button-prev', { delay: 200 });
sr.reveal('.swiper-button-next', { delay: 400 });

/*SCROLL PROJECT IN MIND*/
sr.reveal('.project__title', { delay: 200 });
sr.reveal('.project__description', { delay: 400 });
sr.reveal('.project__button', { delay: 600 });
sr.reveal('.project__img', { delay: 600 });

/*SCROLL COMMENTS*/
sr.reveal('.comments__name', { delay: 200 });
sr.reveal('.comments__icon', { delay: 300 });
sr.reveal('.comments__select', { delay: 500 });
sr.reveal('.comments__description', { delay: 600 });

/*SCROLL LEAVE A COMMENT*/
sr.reveal('.rating__content', { delay: 400, interval: 200 });
sr.reveal('.leave-comment__button', { delay: 600 });

/*SCROOL CONTACT*/
sr.reveal('.contact__information', { interval: 200 });
sr.reveal('.contact__content', { interval: 200 });
sr.reveal('.contact__button', { delay: 200 });

/*SCROLL FOOTER*/
sr.reveal('.footer__title', {});
sr.reveal('.footer__subtitle', { delay: 200 });
sr.reveal('.footer__link', { delay: 400, interval: 200 });
sr.reveal('.footer__social', { interval: 200 });