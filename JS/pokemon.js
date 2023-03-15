let api = document.getElementById("contenedorApi");
 
 // Hacer la llamada a la API para obtener los nombres de los primeros 50 Pokemon
 fetch('https://pokeapi.co/api/v2/pokemon?limit=50')
 .then(response => response.json())
 .then(data => {
   data.results.forEach(pokemon => {
     const name = pokemon.name;
 
     // Hacer la llamada a la API para obtener la imagen del Pokemon
     fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
       .then(response => response.json())
       .then(data => {
         const image = data.sprites.front_default;
        
         // Hacer la llamada a la API para obtener el tipo de Pokemon
         fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
         .then(response => response.json())
         .then(data => {
           const tipos = data.types.map(tipo => tipo.type.name);
                  
           api.innerHTML += `<div class="card">
          <div class="card-info">
          <div class="card-avatar">
          <img src="${image}">
          </div>
          <div class="card-title">${name}</div>
          <div class="card-subtitle">${tipos}</div>
          </div>
          </div>`
         })
 
       });
   });
 });
 
