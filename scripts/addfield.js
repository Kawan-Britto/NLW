//Procurar o conteúdo
document.querySelector("#add-time")
// Condição = Clicar  com o botão esquerdo
.addEventListener('click', cloneField)
// Executar a ação:
function cloneField() {
    //copiar o/os campos:
    const newFieldcontainer = document.querySelector('.schedule-item').cloneNode(true) 

    const fields = newFieldcontainer.querySelectorAll('input')
    
    fields.forEach(function(field) {
        field.value = ""
    })
    document.querySelector('#schedule-items').appendChild(newFieldcontainer)
}