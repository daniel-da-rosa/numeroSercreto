import { numeroSecreto, 
         menorValor,
         maiorValor } from "./sortearNumero.js"

function analisaNumero(valor){ 
    if(validaNumero(valor)&& valor <= maiorValor && valor >=menorValor ){
       
        return numeroSecreto > valor? 'maior':'menor'  
    }else{
        return 'invalido'
    }  

}

function validaNumero(valorRecebido) {
    
    return !isNaN(parseInt(valorRecebido))
}

export const validadoAnalisaNumero ={
    analisaNumero,
    validaNumero
}