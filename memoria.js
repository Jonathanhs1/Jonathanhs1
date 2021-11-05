//CRIANDO UM VETOR DE OBJETOS IMAGENS 
var div = document.getElementById("imagensgame");
var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
var primeiroClick = null;
var arrayImg = [];

window.onload = function() {
    for(i=0; i <4; i ++){
        for(j=1; j<=6; j++){
          var indice = (i* 6 + j);
          var img = document.getElementById("i" + indice)
          arrayImg[indice]=img;
        }
    }
    newGame();
    console.log(arr);
};
//Verifica se os elementos estão corretos
function clicou(e){
    var form = new FormData(e.target);
    var indice = Math.floor((arr[form.get("index")-1]-1)/2);
    var auxiliar = form.get("index");
    console.log(indice);
    arrayImg[auxiliar].setAttribute("src","./"+arr[indice]+".jpg");
    console.log(auxiliar);
    console.log(arr[indice]);
  if(primeiroClick == null){  
      primeiroClick = indice;
    }
    else{
        if(indice == primeiroClick){
            console.log("Acertou");
        }
        else{
            console.log("Errou")
        }
        primeiroClick = null;
    }
}
//Fisher yates shuffle ( algoritmo para gerar uma permutação aleatoria de uma sequencia finita)
function shuffle(begin,end,arr){
    for(i=end;i>begin;i--){
        var indexSwap = Math.floor(Math.random()*i);
        if(indexSwap!=i){
            arr.__sw__ap__(i,indexSwap);
        } 
    }
    return arr;
}
// trocar as posições do array por referencia
Array.prototype.__sw__ap__ = function(i,j){
    let temp = this[i];
    this[i] = this[j];
    this[j] = temp;
}

function newGame(){
    arr = shuffle(0,23,arr);
    frenteCarta();
}
function frenteCarta(){
    for(i=0; i <4; i ++){
        for(j=1; j<=6; j++){
          var indice = (i* 6 + j);
          arrayImg[indice].setAttribute("src","./frente.jpg");
        }   
    }   
}