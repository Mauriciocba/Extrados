let arrayFormulario = [];
let form = document.getElementById("form")
let lista = document.getElementById("lista")
let div = document.getElementById("msj")
let btnBorrar = document.getElementById("btnBorrar");



class formulario{
    constructor(usuario, contrasena, mensaje, sexo, tipo){
        this.usuario = usuario
        this.contrasena = contrasena
        this.mensaje = mensaje
        this.sexo = sexo
        this.tipo = tipo
    }
       
}

function alerta() {
    Toastify({
      text: "Usuario Generado",
      
      duration: 3000,

      style: {
        background: "linear-gradient(to right, #f6d365, #fda085)",
        color:"black",
      }
      
    }).showToast();  
  }

    form.addEventListener('submit', (e) => { 
        e.preventDefault();
    
        const usuario = document.getElementById('usuario').value;
        const contrasena = document.getElementById('contrasena').value;
        const mensaje = document.getElementById('mensaje').value;
        const sexo = document.querySelector('input[name=genero]:checked').value;
        const tipo = document.getElementById("tipo_usuarios").value;

        /*window.location.href = `contacto.html?usuario=${usuario}&contraseña=${contrasena}&mensaje=${mensaje}
        &sexo=${sexo}&tipo=${tipo}`;*/
        
        const formulario1 = new formulario(usuario,contrasena ,mensaje,sexo,tipo);
        
        arrayFormulario.push(formulario1);
        console.log(arrayFormulario)
        form.reset();
    
        div.innerHTML = "";
    
        arrayFormulario.forEach((formulario, index) => { 
    
            div.innerHTML += `
            <div id="contenedorLista"class="contenedor-listas" >
            <div class="caja2">
            <h4>Informacion Usuario</h4>
            <ul id="lista" ${index+1}>
            <li>Usuario : <b>${formulario.usuario}</b></li>
            <li>Contraseña : <b>${formulario.contrasena}</b></li>
            <li>Mensaje : <b>${formulario.mensaje}</b></li>
            <li>Sexo : <b>${formulario.sexo}</b></li>
            <li>Tipo : <b>${formulario.tipo}</b></li>
            </ul>
            </div>
            <button onclick="borrar(${index})" id="btnBorrar">Borrar</button>
            </div>
            `; });

        alerta()
    });

    function borrar(index){
      let validar = confirm("seguro que quiere eliminar?") 
      if (validar){
        
        arrayFormulario.splice(index,1); //elimina del array
        let lista = document.getElementById("msj") //elimina el nodopadre div
        lista.removeChild(lista.children[index]);
        console.log(arrayFormulario)

      }
    } 

    

