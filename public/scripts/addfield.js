//procurar o botao
document.querySelector("#add-time") //querySelector() é a função usada para selecionar determinado elemento no html pelo seletor css ou id, dependendo do sinal (# para id e . para css)
//quando clicar no botao

.addEventListener('click', cloneField) //.addEventListener é o comando usado para ler os eventos no JavaScript. É necessário passar dois parâmetros para a função: o tipo do evento (nesse caso,  o click e a ação (nesse caso, cloneField, uma função que temos que criar).
//Executar uma acao
function cloneField() {
    //duplicar os campos, que campo?
    const newfieldContainer = document.querySelector('.schedule-item').cloneNode(true) //cloneNode é a função usada para criar um clone do elemento. Se o parâmetro for "true", o cloneNode vai pegar todos os elementos dentro da div. Caso contrário, não irá.

    //limpar os campos: que campos?
    const fields = newfieldContainer.querySelectorAll('input')
     //querySelectorAll é uma propriedade que selecionará todos os elementos com o parâmetro dado, nesse caso, a tag input

    //const fields criará um vetor com a posição de todos os inputs. é preciso percorrer ele todo e atribuir um valor vazio para cada posição

    fields.forEach(function (field){
        //pegar o field do momento e limpa
        field.value = ""
    })//aqui estamos esvaziando o elemento atribuindo um valor vazio usando a função forEach (for abreviado) como parâmetro da função forEach, temos que passar o que será executado. Nesse caso, passamos outra função com o parâmetro "field", que coletará o índicie de cada variável no vetor.

    //colocar na página: onde?

    document.querySelector('#schedule-itens').appendChild(newfieldContainer)
};