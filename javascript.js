
window.addEventListener('click', (e) => {
     if (e.target.className == 'form-check-input visibility-trigger') {
        let temp = window.document.getElementById(e.target.id).parentNode.parentNode.parentNode.childNodes[7]
        let tempLabel = window.document.getElementById(e.target.id).nextSibling.nextSibling.innerText
        if (tempLabel == 'Interno') {
            temp.style.display = 'none'
        } else if (tempLabel == 'Externo') {
            temp.style.display = 'block'
            temp.childNodes[1].childNodes[1].focus()
        }
}})

window.addEventListener('click', (e) => {
    if(e.target.id == 'presencial') {
        window.document.querySelector('.hidden-room').style.display = 'block'
        window.document.querySelector('#sala').style.display = 'block'
        window.document.querySelector('.hidden-link').style.display = 'none'
        window.document.querySelector('#link').style.display = 'none'
    } else if (e.target.id == 'híbrida') {
        window.document.querySelector('.hidden-room').style.display = 'block'
        window.document.querySelector('#sala').style.display = 'block'
        window.document.querySelector('.hidden-link').style.display = 'block'
        window.document.querySelector('#link').style.display = 'block'
    } else if (e.target.id == 'remota') {
        window.document.querySelector('.hidden-room').style.display = 'none'
        window.document.querySelector('#sala').style.display = 'none'
        window.document.querySelector('.hidden-link').style.display = 'block'
        window.document.querySelector('#link').style.display = 'block'
    }
})