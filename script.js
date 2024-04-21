let notas = document.querySelectorAll(".notas button")
notas.forEach(button => {
    notas.addEventListner("click", guardarNota)
})

function guardarNota(evento){
let nota = evento.target.innerText
localStorage.setItem("nota" , nota)
}