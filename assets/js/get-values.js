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