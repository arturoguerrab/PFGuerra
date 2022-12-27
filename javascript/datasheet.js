const imgCarousel = document.getElementById("datasheet__carousel--img");
const infoProducto = document.getElementById("datasheet__info");
const btnAgregar = document.getElementById("carrito__anadir");
let ProductoElegido = JSON.parse(localStorage.getItem("articulo"));


imgCarousel.innerHTML= `<div class="carousel-item active">
                            <img src=".${ProductoElegido.imagen}" loading="lazy" class="d-block w-100" alt="Foto de ${ProductoElegido.descripcion}">
                        </div>
                        <div class="carousel-item">
                            <img src=".${ProductoElegido.imagen}" loading="lazy" class="d-block w-100" alt="Foto de ${ProductoElegido.descripcion}">
                        </div>
                        <div class="carousel-item">
                            <img src=".${ProductoElegido.imagen}" loading="lazy" class="d-block w-100" alt="Foto de ${ProductoElegido.descripcion}">
                        </div>`;

infoProducto.innerHTML=`<h1>Aromática ${ProductoElegido.nombre}</h1>
                        <p>$${ProductoElegido.precio}</p>`


btnAgregar.onclick = () =>{

    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    
    listaDeProductos.forEach(element => {
        
        if(ProductoElegido.nombre==element.nombre){
                    carrito.push(element);
                    localStorage.setItem("carrito",JSON.stringify (carrito));
                }
            });
        }
