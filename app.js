//let titulo = document.querySelector ('h1');
//titulo.innerHTML = 'jogo das apostas';

//let paragrafo = paragrafo.querySelector ('p');
//titulo.innerHTML = 'faça sua aposta de 1 a 10';
let listaNumeroSorteados = [];
let numeroMaximo = 10;
let apostaDaMaquina = gerarNumeroAleatorio();
let tentativas = 1;

function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() *numeroMaximo +1);
   let quantidadeDeElementosNaLista = listaNumeroSorteados.length;

    if(quantidadeDeElementosNaLista == numeroMaximo){
        listaNumeroSorteados = [];
    }

   if(listaNumeroSorteados.includes(numeroEscolhido)){  
    return  gerarNumeroAleatorio();
   }else{
    listaNumeroSorteados.push(numeroEscolhido);
    console.log(listaNumeroSorteados);
    return numeroEscolhido;
   }
}

function mudarTexto (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML =  texto;
}

function exibirMensagemInicial() {
mudarTexto ('h1', 'Jogo do número.');
mudarTexto ('p' , `Escolha um número de 1 a ${numeroMaximo}.`);
}
exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector ('input').value; 
   
    if (chute == apostaDaMaquina){
    mudarTexto ('h1' , 'Certo.');
    let palavraTentativa = tentativas > 1 ? 'Tentativas' : 'Tentativa';
    let mensagemTentavivas = `Parabéns, voce acertou com ${tentativas} ${palavraTentativa}.`;
    mudarTexto ('p' , mensagemTentavivas);

    document.getElementById('reiniciar').removeAttribute('disabled');
    
    } else {
        if (chute > apostaDaMaquina) {
            mudarTexto ('h1' , 'tente novmente');
            mudarTexto ('p' , `O número é menor que ${chute}`);
        } else  {
            mudarTexto ('h1' , 'tente novamente')
            mudarTexto ('p' , `O número é maior que ${chute}`);
        }
        tentativas ++;
        limparCampo();
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';   
}

function reiniciarJogo(){
    apostaDaMaquina = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
}