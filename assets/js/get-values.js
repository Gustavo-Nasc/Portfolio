const informationsComment = [{
    id: 1,
    name: 'Talita Ribeiro',
    photo: '../img/comments1.jpg',
    comment: 'Comentário Teste 1!'
},
{
    id: 2,
    name: 'Giovanna Berato',
    photo: '../img/comments2.jpg',
    comment: 'Comentário Teste 2!'
},
{
    id: 3,
    name: 'Eloísa',
    photo: '../img/comments3.jpg',
    comment: 'Comentário Teste 3!'
},
]

//Pegar os dados do Objeto Informations e substituir no HTML
const DOM = {
    addComment(comment, index) {

        const commentContent = document.createElement('div')
        commentContent.classList.add('comments__content')
        commentContent.classList.add('swiper-slide')

        commentContent.innerHTML = DOM.innerHTMLInformation(comment)
    },

    innerHTMLInformation(comment) {
        const html = `
        <div class="comments__data">
            <div class="comments__header">
                <img src="${informationsComment.photo}" alt="" class="comments__img">

                <div>
                    <h3 class="comments__name">${informationsComment.name}</h3>
                    <span class="comments__client">Aluna</span>
                </div>
            </div>

            <div>
                <i class="uil uil-star comments__icon-star"></i>
                <i class="uil uil-star comments__icon-star"></i>
                <i class="uil uil-star comments__icon-star"></i>
                <i class="uil uil-star comments__icon-star"></i>
                <i class="uil uil-star comments__icon-star"></i>
            </div>
        </div>

        <p class="comments__description">${informationsComment.comment}</p>
        `

        return html
    }
}

DOM.addComment(informationsComment[0])