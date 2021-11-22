function calcula_imc(){
    altura = document.imcform.altura.value
    peso = document.imcform.peso.value
    imc = (peso/(altura*altura))
    if(imc<18.5){
        alert("Você está abaixo do peso, índice: " + imc)
    }
    else if(imc>=18.5 && imc<=24.9){
        alert("Você está no peso ideal, índice: " + imc)
    }
    else if(imc>=25 && imc<=29.9){
        alert("Você está no Sobrepeso, índice: " + imc)
    }
    else if(imc>=30 && imc<=39.9){
        alert("Você está com Obesidade, índice: " + imc)
    }
    else if(imc>=40){
        alert("Você está com Obesidade Mótbida, índice: " + imc)
    }
}