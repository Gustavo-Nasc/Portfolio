const inputFile = document.getElementById('image')
let imageName = document.getElementById('imageName')

inputFile.addEventListener('change', () => {
    let inputImage = document.querySelector('input[type=file]').files[0]
    const labelImage = document.querySelector('label.input-file')

    imageName.innerHTML = inputImage.name
    labelImage.style.padding = "0"
})