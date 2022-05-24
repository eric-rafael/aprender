const inputCep = document.getElementById('cep');
const btnCep = document.getElementById('btnCep');
const resultadoCep = document.querySelector('.resultadoCep')

btnCep.addEventListener('click', handleClick);

function handleClick(event) {
    event.preventDefault();
    const cep = inputCep.value;
    buscaCep(cep);
}

console.log(cep)

function buscaCep(cep){
    fetch('https://viacep.com.br/ws/${cep}/json/')
    .then(response => response.text())
    .then(body => {
        resultadoCep.innerText = body;
    })
}

buscaCep(03523-010);



// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar
