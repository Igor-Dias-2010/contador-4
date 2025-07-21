let number = parseInt(localStorage.getItem('contador')) || 0;

function menos() {
    number -= 1
    salvar()
    render()
}
function zero() {
    number = 0
    salvar()
    render()
}
function mais() {
    number += 1
    salvar()
    render()
}
function salvar() {
    localStorage.setItem('contador', number)
}
function render() {
    document.querySelector('#result').innerHTML = number
}
render()