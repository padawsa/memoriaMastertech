const carta = document.querySelectorAll('[card]');
setTimeout(virarCartas, 2500);

function virarCartas(){
    for (let cor of carta){ 
        cor.classList.toggle('cartaVirada');
    }
}
function removerCor(item){
    for (let cor of carta){ 
        item.classList.remove('cartaVirada');
        console.log(cor);
    }
}
