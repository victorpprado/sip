
window.addEventListener('click', (e) => {
     if (e.target.className == 'visibility-trigger') {
        let temp = window.document.getElementById(e.target.id).parentNode.parentNode.parentNode.childNodes[7]
        let tempLabel = window.document.getElementById(e.target.id).nextSibling.nextSibling.innerText
        if (tempLabel == 'Interno') {
            temp.style.display = 'none'
        } else if (tempLabel == 'Externo') {
            temp.style.display = 'block'
        }
}})