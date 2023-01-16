const dbSincronica=[
    {nombre:"Anthurium",precio:899,articulo:"a",imagen:"./assets/img/tarjeta_a.jpg",descripcion:"Vela aromatica con olor a vainilla"},

    {nombre:"Nympholia",precio:750,articulo:"b",imagen:"./assets/img/tarjeta_b.jpg",descripcion:"Vela aromatica con olor a canela"},

    {nombre:"Euphoriasme",precio:640,articulo:"c",imagen:"./assets/img/tarjeta_c.jpg",descripcion:"Vela aromatica con olor a frutos del bosque"},

    {nombre:"Anamorphine",precio:958,articulo:"d",imagen:"./assets/img/tarjeta_d.jpg",descripcion:"Vela aromatica con olor a chocolate"},

    {nombre:"Nudesse",precio:860,articulo:"e",imagen:"./assets/img/tarjeta_e.jpg",descripcion:"Vela aromatica con olor a vainilla y canela"},

    {nombre:"Anamorphine",precio:940,articulo:"f",imagen:"./assets/img/tarjeta_f.jpg",descripcion:"Vela aromatica con olor a rosas"}
]




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
                div.setAttribute('id','velaBtn')
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
                div.setAttribute('id','velaBtn')
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


