const dadosDiv = document.querySelector('.dadosDiv')
const clientesDiv = document.querySelector('.clientesDiv')

async function dadosApi() {
    try {
        const dados = fetch('http://localhost:3000/profile')
        const clientes = fetch('http://localhost:3000/clientes')

        const dadosJson = await (await dados).json()
        const clientesJson = await (await clientes).json()
        
        console.log(dadosJson);
        console.log(clientesJson);
        
        dadosDiv.innerText = "Aula: " + dadosJson.aula;
        clientesDiv.innerText = "Nome: " + clientesJson.name;

    } catch (erro) {
        console.log(erro)
    }
}
setInterval(dadosApi, 1000);
dadosApi();