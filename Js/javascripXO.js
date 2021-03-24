let player1 = 0;
let player2 = 1;

function player(){
    
    
       
   
}
function InsertarP(){
    let contenedor1 = document.getElementById("po");
    let parrafo = document.createElement("p");

    if (player1==1) {
        
        const contenido1 = document.createTextNode("X");
        parrafo.appendChild(contenido1);
        
        
    }if(player2==1){
        const contenido1 = document.createTextNode("O");
        parrafo.appendChild(contenido1);
    
    }

    
    contenedor1.appendChild(parrafo);
}