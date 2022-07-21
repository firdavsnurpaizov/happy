const lightIcon = document.getElementById('lightIcon')
const darkIcon = document.getElementById('darkIcon')
const text = document.getElementById('text')
const title = document.getElementById('title')

lightIcon.onclick = function () {
    document.body.classList.add('light-mode')
    text.textContent ='light'
    title.textContent ='light'
}

darkIcon.onclick = function () {
    document.body.classList.remove('light-mode')
    text.textContent ='dark'
    title.textContent ='dark'

}




