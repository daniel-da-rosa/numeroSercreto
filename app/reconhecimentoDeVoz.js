import {validadoAnalisaNumero} from './analisaNumero.js'
import { numeroSecreto } from './sortearNumero.js';

const elementoPai = document.getElementById('chute')
console.log(numeroSecreto)



const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.lang='pt-br'
  recognition.start()


  recognition.addEventListener('result',onSpeak)


  function onSpeak(e){
    let chute = e.results[0][0].transcript
    exibeChuteNaTela(chute)
  }

  function exibeChuteNaTela(chute){
    let resultado = '';
    if(chute == numeroSecreto){
       document.body.innerHTML = `<div class="acertou" >Parabéns você acertou!!</div>
                                   <button id="jogarNovamente" class="jogar"> Jogar Novamente </button>`
    }else{
        
        switch (validadoAnalisaNumero.analisaNumero(chute)){
            case 'maior': resultado = `<div >O número secreto é Maior que: ${chute} <i class="fa-solid fa-arrow-up"></i></div>` 
                break
            case 'menor' :resultado =`<div >O número secreto é Menor que: ${chute} <i class="fa-solid fa-arrow-down"></i></div>` 
                break
            case 'invalido': resultado = '<div >O número falado é invalido </div>'
            break
        }
    }                               
      elementoPai.innerHTML =`<div>Você disse: </div>
            <span class="box">${chute}</span>
            ${resultado}

      `  
      captura(chute)
    
    
      
  }

  recognition.addEventListener('end',()=>recognition.start())

  document.body.addEventListener('click',e=>{
    if(e.target.id=="jogarNovamente"){
        window.location.reload()
    }
  })