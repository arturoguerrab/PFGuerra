const contenedorProductos = document.querySelector('#Productos');
const select = document.querySelector('#select');

const pintarProductos = (array)=>{
        array.forEach(element => {
            const div = document.createElement('div');
            div.classList.add('d-flex','flex-column','justify-content-center','gap-2','tarjeta')
            div.innerHTML += `  <a href="./datasheet.html"><img class="tarjeta__img" src=".${element.imagen}" loading="lazy" alt="Foto de ${element.descripcion}"></a>
                                <h2 class="tarjeta__title">${element.nombre}</h2>
                                <a class="btn__tarjeta align-self-center" href="./datasheet.html">VER DETALLE<br>$${element.precio}</a>`;
            contenedorProductos.appendChild(div);
        });
}

const productosRelevantes = ()=>{
    pintarProductos(dbSincronica);
}

const productosAlfabeticos = ()=>{
    let alfabeticos= [...dbSincronica].sort((x, y) => x.nombre.localeCompare(y.nombre));
    pintarProductos(alfabeticos);
}

const productosBaratos = ()=>{
    let masBaratos= [...dbSincronica].sort((x, y) => x.precio - y.precio);
    pintarProductos(masBaratos);
}

const productosCaros = ()=>{
    let masCaros= [...dbSincronica].sort((x, y) => y.precio - x.precio);
    pintarProductos(masCaros)
}

productosRelevantes();

select.onchange = () => {
    contenedorProductos.innerHTML='';
    select.value=='relevantes' && productosRelevantes();
    select.value=='caros' && productosCaros();
    select.value=='baratos' && productosBaratos();
    select.value=='alfabetico' && productosAlfabeticos();

}
