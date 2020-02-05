let btnAddTarefa = document.getElementById("adicionar-tarefa")
let input = document.getElementById("tarefa-digitada")

    let tarefas = document.getElementById("tarefas")
    btnAddTarefa.onclick = function (){
        let valorDigitado=input.value
        let tarefaNova =`  <div class="col-md-4">
        <div class="box row">
            <div class="texto-tarefa col-md-10 text-wrap ">
            ${valorDigitado}
            </div>
            <div class="botao-tarefa col-md-2">
                <img src="Imagens/check.png" alt="botão para finalizar tarefa" title="feito" width="40vw" />
            </div>
        </div>
    </div>`
       tarefas.innerHTML += tarefaNova
    }
