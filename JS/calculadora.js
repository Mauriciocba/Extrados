let contenedorResultado = document.getElementById("contenedor-resultado");

let suma = document.getElementById("btn-sumar");
let resta = document.getElementById("btn-restar");
let multi = document.getElementById("btn-multiplicar");
let dividir = document.getElementById("btn-dividir");
let btnBorrar = document.getElementById("btn-borrar");

function f_sumar(){
    let n1 = parseFloat(document.getElementById("input-uno").value);
    let n2 = parseFloat(document.getElementById("input-dos").value);
    
    if(isNaN(n1&& n2)){
        contenedorResultado.innerHTML = `<div class="alert alert-danger mt-3" role="alert">
        <p>COMPLETE LOS CAMPOS CON DOS NUMEROS</p>
        </div>`  
    }
    else 
    {
         let resultados = (n1 + n2);
        contenedorResultado.innerHTML = `<div class="alert alert-success mt-3" role="alert">
        <p> El resultado es: ${resultados}</p>
        </div>`  
    }

}

function f_restar(){
    let n1 = parseFloat(document.getElementById("input-uno").value);
    let n2 = parseFloat(document.getElementById("input-dos").value);
    

    if(isNaN(n1&& n2)){
        contenedorResultado.innerHTML = `<div class="alert alert-danger mt-3" role="alert">
        <p>COMPLETE LOS CAMPOS CON DOS NUMEROS</p>
        </div>`  
    }
    else {

        let resultados = n1 - n2;
        contenedorResultado.innerHTML = `<div class="alert alert-success mt-3" role="alert">
        <p> El resultado es: ${resultados}</p>
        </div>`
    }
}


function f_multiplicar(){
    let n1 = parseFloat(document.getElementById("input-uno").value);
    let n2 = parseFloat(document.getElementById("input-dos").value);
    

    if(isNaN(n1&& n2)){
        contenedorResultado.innerHTML = `<div class="alert alert-danger mt-3" role="alert">
        <p>COMPLETE LOS CAMPOS CON DOS NUMEROS</p>
        </div>`  
    }
    else {

        let resultados = (n1 * n2);
        contenedorResultado.innerHTML = `<div class="alert alert-success mt-3" role="alert">
        <p> El resultado es: ${resultados}</p>
        </div>`
    }

}

function f_dividir(){

    let n1 = parseFloat(document.getElementById("input-uno").value);
    let n2 = parseFloat(document.getElementById("input-dos").value);
    
    let resultados;

    if(isNaN(n1 && n2)){
        contenedorResultado.innerHTML = `<div class="alert alert-danger mt-3" role="alert">
        <p>COMPLETE LOS CAMPOS CON DOS NUMEROS</p>
        </div>`
    }
    else if(n2 == 0){
        contenedorResultado.innerHTML = `<div class="alert alert-danger mt-3" role="alert">
    <p> NO SE PUEDE DIVIDIR ENTRE 0</p>
    </div>`
    }
    else{
        resultados = (n1 / n2);
        contenedorResultado.innerHTML = `<div class="alert alert-success mt-3" role="alert">
        <p> El resultado es: ${resultados}</p>
        </div>`
    }

}

function f_borrar() {

    let n1 = document.getElementById("input-uno").value="";
    let n2 = document.getElementById("input-dos").value="";

    contenedorResultado.removeChild(contenedorResultado.firstElementChild);

}




 