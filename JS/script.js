let btnAddTarefa = document.getElementById("adicionar-tarefa")
let input = document.getElementById("tarefa-digitada")
let btnDelet = document.querySelectorAll(".botao-tarefa")
let tarefas = document.getElementById("tarefas")
let listaTarefas = localStorage.getItem("listaTarefas") ? JSON.parse(localStorage.getItem("listaTarefas")) : []



const salvarLocalStorage = tarefas => {
    let myJSON = JSON.stringify(tarefas)
    localStorage.setItem("listaTarefas", myJSON)
    console.log("lista de tarefas salva co sucesso")
}

const mostrarNaTela = (tarefasSalvas) => {
    tarefasSalvas.forEach(tarefaTexto => {

        let tarefaNova = ` <div class="col-md-4">
        <div class="box row">
            <div class="texto-tarefa col-md-10 text-wrap ">
            ${tarefaTexto}
            </div>
            <div class="botao-tarefa col-md-2">
                <img src="Imagens/check.png" alt="botão para finalizar tarefa" title="feito" width="40vw" />
            </div>
        </div>
    </div>`
        tarefas.insertAdjacentHTML("beforeend", tarefaNova)
        let objetoTarefaNova = tarefas.lastElementChild
        let btnCheck = objetoTarefaNova.lastElementChild.lastElementChild
        btnCheck.onclick = (event) => {
            event.target.parentNode.parentNode.parentNode.remove()
            listaTarefas =listaTarefas.filter(valor=>valor!=tarefaTexto) 
            salvarLocalStorage(listaTarefas)
        }
    })

}


mostrarNaTela(listaTarefas)


const criarTarefaComEnter = (event) => {
    if (event.keyCode == 13 || event.type == "click") {
        let valorDigitado = input.value
        if (valorDigitado == "") {
            alert("você precisa digitar uma tarefa primeiro");
            return
        }
        listaTarefas.push(valorDigitado);
        salvarLocalStorage(listaTarefas);
        input.value = ""
        let tarefaNova = `  <div class="col-md-4">
        <div class="box row">
            <div class="texto-tarefa col-md-10 text-wrap ">
            ${valorDigitado}
            </div>
            <div class="botao-tarefa col-md-2">
                <img src="Imagens/check.png" alt="botão para finalizar tarefa" title="feito" width="40vw" />
            </div>
        </div>
    </div>`
        tarefas.insertAdjacentHTML("beforeend", tarefaNova)
        let objetoTarefaNova = tarefas.lastElementChild
        let btnCheck = objetoTarefaNova.lastElementChild.lastElementChild
        btnCheck.onclick = (event) => {
            event.target.parentNode.parentNode.parentNode.remove()
            listaTarefas =listaTarefas.filter(valor=>valor!=valorDigitado) 
            salvarLocalStorage(listaTarefas)
        }
    }
}


input.addEventListener("keypress", criarTarefaComEnter)
btnAddTarefa.addEventListener("click", criarTarefaComEnter)
