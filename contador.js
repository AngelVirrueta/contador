// Asignar variables para trabajar con elementos del Front (HTML);

var botonAumentar = document.querySelector("#aumentar");
var botonDisminuir = document.querySelector("#disminuir");
var botonResetear = document.querySelector("#resetear");
var botonAlgoPadre = document.querySelector("#algoPadre");
var contador = document.querySelector("#contador");
var contenedor = document.querySelector("#contieneAlgoPadre");

var valorContador = 0; // mi contador empieza en 0.
var premium = false; // para saber que no eres premium
var reseteo = 1; // para limitar a un solo reseteo.


/* Funcion para aumentar
Explicacion de la funcion suma: tomo el valor del contador que es 
cero,y cada que se ejecuta esta funcion aumentare de 1 en 1, 
ese valor lo quiero ver reflejado en un  espacio del HTML que sellama contador. 
Ese contador, ira tomando el valor respectivo de la variable 
(variable que se modifica cada que doy clic). */


function aumentar(){
    if(premium == false){ // primera condicion para saber si eres premium
        if (valorContador < 10){ // por no ser premium te restringira a 10
            valorContador++; // el valor del contador aumenta de 1 en 1.
            contador.innerHTML = valorContador;
        }else{ // alcanzado el limite, ya no te deja agregar
        alert("Alcanzaste el límite. Compra la version Premium.");
        }
    }else{ // en caso de si ser premium, ejecuta sin segunda condicion limitadora
    valorContador++; // el valor del contador aumenta de 1 en 1.
    contador.innerHTML = valorContador;
    }
}


// Funcion para disminuir
function disminuir(){
    if(premium == false){
        if (valorContador > -10){
            valorContador--; // el valor del contador disminuye de 1 en 1.
            contador.innerHTML = valorContador;
        }else{
            alert("Alcanzaste el límite. Compra la version Premium.");
        }
    }else{
        valorContador--; // el valor del contador disminuye de 1 en 1.
        contador.innerHTML = valorContador;
    }
}

// Funcion para resetear
function resetear(){
    if(premium == false){
        if (reseteo != 0){ //para limitar los reseteos en caso que premium sea false
            valorContador=0; // el valor del contador se resetea a 0.
            contador.innerHTML = valorContador;
            reseteo--;
        }else{
            alert("Ya utilizaste tu reseteo gratis. Compra la version Premium.");
    }
    }else{
        valorContador=0; // el valor del contador se resetea a 0.
        contador.innerHTML = valorContador;
    }   
}

// Funcion para poner imagen
function algoPadre(){
    const img = document.createElement("img");
    const nuevoHeader = document.createElement("h3");
    const textoNuevoHeader = document.createTextNode("¡Ya eres premium!");
    nuevoHeader.appendChild(textoNuevoHeader);
    contenedor.appendChild(nuevoHeader);
    img.width = 500;
    img.src = "https://noticieros.televisa.com/wp-content/uploads/2021/03/cheems-1.jpg";
    img.alt = "Imagen random del día";
    contenedor.appendChild(img);
    let miContadorPremium = document.querySelector("#miContador");
    miContadorPremium.innerHTML = "Mi contador - Premium";
    compra = true;
    premium = true;
    botonAlgoPadre.hidden = true;
    return premium, compra;
}

botonAumentar.addEventListener("click", aumentar);
botonDisminuir.addEventListener("click", disminuir);
botonResetear.addEventListener("click", resetear);
botonAlgoPadre.addEventListener("click", algoPadre);
