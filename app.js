//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];

function adicionarAmigo() {
    inputAmigo = document.getElementById('amigo');
    nomeAmigo = inputAmigo.value.trim();
    
    // verifica se o nome do amigo está vazio
    if (nomeAmigo === '') {
        alert('Por favor, digite um nome!');
        return;
    }
    
    listaAmigos.push(nomeAmigo);
    
    atualizarListaAmigos();
    inputAmigo.value = '';
    inputAmigo.focus();
}

// atualiza a lista de amigos na tela
function atualizarListaAmigos() {
    const listaElemento = document.getElementById('listaAmigos');
    
   listaElemento.innerHTML = '';
    
    // adiciona amigos na lista
    listaAmigos.forEach(amigo => {
        itemLista = document.createElement('li');
        itemLista.textContent = amigo;
        listaElemento.appendChild(itemLista);
    });
}

// função para sortear um amigo randomicamente
function sortearAmigo() {  // verifica se há amigos na lista
    if (listaAmigos.length === 0) {
        alert('Adicione pelo menos um amigo antes de sortear!');
        return;
    }
    
    indiceAleatorio = Math.floor(Math.random() * listaAmigos.length); // gera um índice aleatório
    
    // sorteia o amigo sorteado
    amigoSorteado = listaAmigos[indiceAleatorio];
    
    // Exibir o resultado do sorteio
    resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = '';
    
    itemResultado = document.createElement('li');
    itemResultado.textContent = `Amigo Secreto: ${amigoSorteado}`;
    itemResultado.style.fontWeight = 'bold';
    itemResultado.style.color = '#007bff';
    
    resultadoElemento.appendChild(itemResultado);
}

document.getElementById('amigo').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        adicionarAmigo();
    }
});