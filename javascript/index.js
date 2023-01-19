const contenedorIndex= document.querySelector('#productosIndex');

// Funcion asincronica que recibe un nodo y pinta en el los productos traidos con la promesa.
// Los productos se pintan de manera aleatoria, asi el usuario siempre vera info distinta al ingresar.

const obtenerProductos = async (nodo)=>{
    try {
        let response = await fetch("./dbProductos.json");
        let result = await response.json();
        result.sort(()=> Math.random()-0.5)
        let i=0;
        result.forEach(element => {
            if(i<3){
                const div = document.createElement('div');
                div.classList.add('d-flex','flex-column','justify-content-center','gap-1','tarjeta')
                div.innerHTML += `  <img class="tarjeta__img" src="${element.imagen}" loading="lazy" alt="Foto de ${element.descripcion}">
                                    <div class="bg-light tarjeta__index d-flex flex-column align-items-center justify-contend-center">
                                        <h3 class="tarjeta__title">${element.nombre}</h3>
                                        <p class="descripcion">${element.descripcion}</p>
                                        <p class="precioIndex">$ ${element.precio},00</p>
                                    </div>
                `;
                nodo.appendChild(div);
            }
            if(i==4){
                const div = document.createElement('div');
                div.classList.add('d-none','d-lg-none','d-md-flex','d-flex','flex-column','justify-content-center','gap-1','tarjeta')
                div.innerHTML += `  <img class="tarjeta__img" src="${element.imagen}" loading="lazy" alt="Foto de ${element.descripcion}">
                                    <div class="bg-light tarjeta__index d-flex flex-column align-items-center justify-contend-center">
                                        <h3 class="tarjeta__title">${element.nombre}</h3>
                                        <p class="descripcion">${element.descripcion}</p>
                                        <p class="precioIndex">$ ${element.precio},00</p>
                                    </div>
                `;
                nodo.appendChild(div);
            }
            i++;
        });
    } catch (error) {
        console.log(error);
    }
}

obtenerProductos(contenedorIndex);

