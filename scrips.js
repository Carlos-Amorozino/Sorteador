const button = document.querySelector(`button`)

function generateNumber() {
    const min = Math.ceil(document.querySelector(`.min-input`).value)
    const max = Math.floor(document.querySelector(`.max-input`).value)
    const result = Math.floor(Math.random() * (max - min) + min)
    alert(result)
}

button.addEventListener(`click`, generateNumber)