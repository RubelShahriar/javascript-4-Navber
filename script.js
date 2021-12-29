const button = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')

button.addEventListener('click', function(){
    links.classList.toggle('show-links')
})