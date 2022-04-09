const Information = {
    all: [
        {
            name: 'Talita Ribeiro',
            photo: './assets/img/comments1.jpg',
            comment: 'Site muito show!'
        },
        {
            name: 'Giovanna Berato',
            photo: './assets/img/comments2.jpg',
            comment: 'Incrível!'
        },
        {
            name: 'Fernanda Sena',
            photo: './assets/img/comments3.jpg',
            comment: 'Não falei que você conseguia, amigo!'
        },
        {
            name: 'Eloísa',
            photo: './assets/img/comments1.jpg',
            comment: 'Irra!'
        }
    ],

    add(information) {
        Information.all.push(information)

        App.reload()
    },

    remove(index) {
        Information.all.splice(index, 1)

        App.reload()
    }
}

//Substituir os dados do HTML com os dados do JS
const DOM = {
    commentContainer: document.querySelector('#swiper-comments'),

    addComment(information, index) {
        const commentDiv = document.createElement('div')
        commentDiv.classList.add('comments__content')
        commentDiv.classList.add('swiper-slide')

        commentDiv.innerHTML = DOM.innerHTMLComment(information)

        DOM.commentContainer.appendChild(commentDiv)
    },

    innerHTMLComment(information) {
        const html = `
        <div class="comments__data">
            <div class="comments__header">
                <img src="${information.photo}" alt="Imagem do Usuário" class="comments__img">

                <div>
                    <h3 class="comments__name">${information.name}</h3>
                </div>
            </div>

            <div>
                <i class="uil uil-minus-circle comments__icon" onclick="Information.remove()"></i>
            </div>
        </div>

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
    photo: document.querySelector('input#photo'),
    comment: document.querySelector('textarea#comment'),

    getValues() {
        return {
            name: Form.name.value,
            photo: Form.photo.value,
            comment: Form.comment.value
        }
    },

    validateFields() {
        const { name, photo, comment } = Form.getValues()

        if (name.trim() == "" ||
            photo.trim() == "" ||
            comment.trim() == "") {
            throw new Error("Por favor, preencha todos os campos")
        }
    },

    clearFields() {
        Form.name.value = ""
        Form.photo.value = ""
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
    },

    reload() {
        DOM.clearInformations()

        App.init()
    }
}

App.init()