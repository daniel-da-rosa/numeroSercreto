export const maiorValor = 1000;
export const menorValor = 1;
export const numeroSecreto = getNumeroSecreto();



const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor

function getNumeroSecreto(){
    return parseInt(Math.random() * maiorValor +1 );
    
}

