let animais = []

function criaranimal(){
    const nomeAnimal = prompt("Qual é o nome do seu pet?")
      const racaAnimal = prompt("Qual é a raça dele?")
      const generoAnimal = prompt("Qual é o género do seu pet?")
    const idadeAnimal = prompt("Qual a idade do seu pet?")


      const novoAnimal = {
        id: animais.length + 1,
        nome: nomeAnimal,
        raca: racaAnimal,
        genero: generoAnimal,
        idade: idadeAnimal

      }
      animais.push(novoAnimal) // Adiciona o novo animal na lista
}
    function listartodos(){
    let lista = ""

    for(let i = 0; i < animais.length; i++){
        lista += `Id: ${animais[i].id}, Nome: ${animais[i].nome} \n`
    }

    alert("lista de animais:  \n\n" + lista)
}


    function buscarraca(){
     const nomebusca = prompt("Digite a raça do animal:")
     const animalEncontrado = animais.find(a => a.raca.toLowerCase() == nomebusca.toLowerCase())

     if(animalEncontrado){
        alert("Animal encontrado \n raca: " + animalEncontrado.raca)
     } else{
        alert("Nenhum animal encontrado")
     }
    }

 function deletaranimal(){
    const idDoAnimal  = prompt("Digite o id do animal que você quer remover:")
    const index = animais.findIndex(a => a.id == idDoAnimal)
        if(index === -1){
            alert("Animal não encontrado")
        } else{
            animais.splice(index , 1)
            alert("Animal deletado com sucesso!")
        }
    }
 
 
function removertodos(){
    animais = [];
    alert("Todos os animais foram removido")

}
function removerultimo(){
    if(animais.length > 0){
        animais.pop();
        alert("O último animal foi removido")
    }else{
        alert("Alista está vazia!")

    
    }}
    function exibirtotalcadastros(){
        alert("Quantidade de cadastros: " + animais.length)
    }
