        const searchParams = new URLSearchParams(window.location.search);
            const usuario = searchParams.get('usuario');
            const contrasena = searchParams.get('contraseña');
            const mensaje = searchParams.get('mensaje');
            const sexo = searchParams.get('sexo');
            const tipo = searchParams.get('tipo');

            const resultElement = document.getElementById('msj');
            resultElement.innerHTML += `
            <div class="contenedor-listas">
            <div class="caja2">
            <h4>Informacion Usuario</h4>
            <ul id="lista">
            <li>Usuario : <b>${usuario}</b></li>
            <li>Contraseña : <b>${contrasena}</b></li>
            <li>Mensaje : <b>${mensaje}</b></li>
            <li>Sexo : <b>${sexo}</b></li>
            <li>Tipo : <b>${tipo}</b></li>
            </ul>
            </div>
            </div>`;