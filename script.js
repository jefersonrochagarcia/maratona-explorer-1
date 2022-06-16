const  respostaElement = document.querySelector("#resposta")
const respostas = ["sim", "não", "talvez","quem sabe", "Minhas fontes dizem que sim",]
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPerguntar = document.querySelector('#buttonPerguntar')


//cnsole.log(numeroAleatorio)

// clicar em fazer pergunta 

function fazerPergunta() {
  
  if (inputPergunta.value ==""){
  	alert("digite sua pergunta")
    return
}

buttonPerguntar.setAttribute("disabled",true)

const pergunta = "<div>" + inputPergunta.value + "</div>"



	const totalRespostas = respostas.length
	const numeroAleatorio = Math.floor(Math.random() * totalRespostas)
	console.log(respostas[numeroAleatorio])

	respostaElement.innerHTML = pergunta + respostas[numeroAleatorio]


respostaElement.style.opacity = 1;
// sumir a resposta depois de 3 segundos

setTimeout(function() {
	 respostaElement.style.opacity = 0;
	 buttonPerguntar.removeAttribute('disabled')
},3000)

}