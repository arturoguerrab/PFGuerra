const productoElegido = JSON.parse(localStorage.getItem("articulo"))

const datasheet = document.querySelector('#datasheet')

datasheet.innerHTML = ` <div class="carousel slide pt-5 pb-2 col-9 col-lg-6 pb-lg-5" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src=".${productoElegido.imagen}" loading="lazy" class="d-block w-100" alt="${productoElegido.descripcion}">
                                </div>
                                <div class="carousel-item">
                                    <img src=".${productoElegido.imagen}" loading="lazy" class="d-block w-100" alt="${productoElegido.descripcion}">
                                </div>
                                <div class="carousel-item">
                                    <img src=".${productoElegido.imagen}" loading="lazy" class="d-block w-100" alt="${productoElegido.descripcion}">
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
                            <div>
                                <h1>${productoElegido.nombre}</h1>
                                <p>$${productoElegido.precio}</p>
                            </div>
                            <p>Nuestra vela aromática ${productoElegido.nombre} en cualquiera de sus presentaciones es ideal para darte una ducha o ver una película. Para utilizarla sólo basta con encender el producto. No te procupes por la llama ya que el frasco está diseñado para ser lo más seguro posible</p>
                            <select name="select" id="cantidadProducto">
                                <option value="1" selected>1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <a class="btn__tarjeta" id="anadirCarrito" href="./carrito.html">AÑADIR AL CARRITO</a>
                        </div>`;

const agregarCarrito = document.querySelector('#anadirCarrito');

const carritoCompra =JSON.parse(localStorage.getItem("carrito")) || [];

agregarCarrito.onclick = ()=>{
    
    const cantidad = document.querySelector('#cantidadProducto')
    for (let index = 0; index<cantidad.value ; index++) {
        carritoCompra.push(productoElegido);
        localStorage.setItem('carrito',JSON.stringify(carritoCompra));
    }

}