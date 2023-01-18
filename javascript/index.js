const contenedorIndex= document.querySelector('#productosIndex');

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
                                    <div class="bg-light">
                                    <h3 class="tarjeta__title">${element.nombre}</h3>
                                    <p class="fw-bold">$${element.precio}</p>
                                    <p class="fw-bold">${element.descripcion}</p>
                                    </div>
                `;
                nodo.appendChild(div);
            }
            if(i==4){
                const div = document.createElement('div');
                div.classList.add('d-none','d-lg-none','d-md-flex','d-flex','flex-column','justify-content-center','gap-1','tarjeta')
                div.innerHTML += `  <img class="tarjeta__img" src="${element.imagen}" loading="lazy" alt="Foto de ${element.descripcion}">
                                    <div class="bg-light">
                                    <h3 class="tarjeta__title">${element.nombre}</h3>
                                    <p class="fw-bold">$${element.precio}</p>
                                    <p class="fw-bold">${element.descripcion}</p>
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

