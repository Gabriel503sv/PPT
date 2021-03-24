
let guardarvalor = "";
let guardarvalor1 = "";

function funcionboton(){
   
    let btn1 = prompt("ingrese el nombre del player 1") ;
   

    if(btn1==""){
        guardarvalor = false;
    }else{
        guardarvalor = true;
    }
  

    return guardarvalor;
}

function funcionboton1(){
    
    let btn2 = prompt("ingrese el nombre del player 2") ;
   
    if(btn2==""){
        guardarvalor1 = false;
    }else{
        guardarvalor1 = true;
    }
  
    return guardarvalor1;
}

function Funcionbotonplay(){
    

    if((guardarvalor==false) && (guardarvalor1==false)){
        alert("tiene que ingresar los dos nombres de los jugadores para empezar");

    }
    if((guardarvalor==false) && (guardarvalor1==true)){
        alert("tiene que ingresar el nombre del jugador 1");
    }

    if((guardarvalor==true) && (guardarvalor1==false)){
        alert("tiene que ingresar el nombre del jugador 2");
    }
    
    if((guardarvalor==true) && (guardarvalor1==true)){
        alert("listos? empieza el juego ");
        location.href="XO.html";
    }

    

    
}

