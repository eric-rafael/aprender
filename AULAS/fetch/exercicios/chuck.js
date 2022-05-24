// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

const paragrafoPiada = document.querySelector('.paragrafoPiada')
const btnProxima = document.querySelector('.btnProxima')

btnProxima.addEventListener('click', handleClick);

function handleClick(event) {
    event.preventDefault();
    puxarPiada();
}

function puxarPiada(){
    fetch('https://api.chucknorris.io/jokes/random')
    .then(r => r.json())
    .then(piada => {
        console.log(piada.value)
        paragrafoPiada.innerText = piada.value
    })
}

puxarPiada();