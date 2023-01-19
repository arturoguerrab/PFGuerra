// Variable que recibe del localStorage el articulo que el usuario selecciono previamente.
const productoElegido = JSON.parse(localStorage.getItem("articulo"))

const datasheet = document.querySelector('#datasheet')

datasheet.innerHTML = ` <div id="carouselProducts" class="carousel slide pt-5 pb-2 col-9 col-lg-6 pb-lg-5" data-bs-ride="carousel">
                            <div class="carousel-inner" id="datasheet__carousel--img">
                                <div class="carousel-item active">
                                    <img src=".${productoElegido.imagenDos}" loading="lazy" class="d-block w-100" alt="Foto de vela aromatica con olor a rosas">
                                </div>
                                <div class="carousel-item">
                                    <img src=".${productoElegido.imagenTres}" loading="lazy" class="d-block w-100" alt="Foto de vela aromatica con olor a frutos del bosque">
                                </div>
                                <div class="carousel-item">
                                    <img src=".${productoElegido.imagen}" loading="lazy" class="d-block w-100" alt="Foto de vela aromatica con olor a Canela">
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselProducts" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselProducts" data-bs-slide="next">
                                <span class="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div class="pt-1 pb-5 pt-lg-0 col-9 col-lg-6 align-self-lg-center">
                            <span class="fw-bold italic">${productoElegido.descripcion}</span>
                            <h1 class='poppins fw-bold display-4'>${productoElegido.nombre}</h1>
                            <div class='d-flex align-items-baseline gap-4'>
                                <p class="poppins precio">$ ${productoElegido.precio},00</p>
                                <select name="select" id="cantidadProducto" class="select__data">
                                    <option value="1" selected>1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                            <p class='poppins'>${productoElegido.about}</p>
                            <a class="btn__tarjeta" id="anadirCarrito" href="./carrito.html">AÑADIR AL CARRITO</a>
                        </div>`;

// variable que crea un array vacio o recibe el array 'carrito' si este ya se encuentra en el localStorage
const carritoCompra =JSON.parse(localStorage.getItem("carrito")) || [];


// Evento que agrega al carrito en el localStorage la cantidad deseada del producto elegido.
const agregarCarrito = document.querySelector('#anadirCarrito');

agregarCarrito.onclick = ()=>{
    
    const cantidad = document.querySelector('#cantidadProducto')
    for (let index = 0; index<cantidad.value ; index++) {
        carritoCompra.push(productoElegido);
        localStorage.setItem('carrito',JSON.stringify(carritoCompra));
    }

}