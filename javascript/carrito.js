const contenedorCarrito = document.querySelector('#carritoContenedor');
const contenedorPagoTotal = document.querySelector("#totalCarrito");

const filtrarCarrito = (array)=>{
    const carritoFiltrado=[];
    array.forEach(element => {
        carritoFiltrado.filter(x=>x.articulo==element.articulo)==false && carritoFiltrado.push(element);
        });
    return carritoFiltrado;
}

const calcularCantidad=(objeto,array)=>{
    let contador=0;
    array.forEach(element => {
        element.nombre==objeto.nombre && contador++;
    });
    return contador;
}

const eliminarDelCarrito = (articulo,array)=>{
    const resultado = array.filter(element => element != articulo)
    localStorage.setItem('carrito',JSON.stringify(resultado));
    refrescarCarrito()
}

const refrescarCarrito = ()=>{

    if(JSON.parse(localStorage.getItem('carrito')).length==0){
        localStorage.removeItem('carrito');
        window.location.reload()
    }
    
    const carritoCompra=JSON.parse(localStorage.getItem("carrito"));
    const carritoSinDuplicados=filtrarCarrito(carritoCompra);
    contenedorCarrito.innerHTML=''
    let contador=0;
    carritoSinDuplicados.forEach(element => {
        const div = document.createElement('div');
        div.classList.add('d-flex', 'carrito__tarjeta', 'gap-1','gap-md-5', 'justify-content-center')
        div.innerHTML+= `<img src=".${element.imagen}" alt="${element.descripcion}">
                        <div class="d-flex flex-column text-start">
                            <h3 class="display-6">${element.nombre}</h3>
                            <p>Cantidad: ${calcularCantidad(element,carritoCompra)}</p>
                            <p>c/u $${element.precio} | <strong class="strong">Total: $${calcularCantidad(element,carritoCompra)*element.precio}</strong></p>
                            <button id="btnBorrar${element.articulo}" class="btn btn-danger bi bi-trash3 w-25"></button>
                        </div>`
        contenedorCarrito.appendChild(div);

        let boton=document.querySelector(`#btnBorrar${element.articulo}`)
        boton.onclick=()=>{
            eliminarDelCarrito(element,carritoCompra)
        }

        contador+=calcularCantidad(element,carritoCompra)*element.precio;
        contenedorPagoTotal.innerHTML=`<h2>Resumen de compra</h2>
                                        <p><strong class="strong display-6">Total: $${contador}</strong></p>
                                        <a href="#"><button id="pagar" class="btn-success btn w-50 mb-2">Pagar</button></a>
                                        <a href="../pages/products.html"><button class="btn btn-secondary w-50">Seguir Comprando</button></a>
                                        `
        let btnPagar = document.querySelector('#pagar');
        btnPagar.onclick=()=>{
            Swal.fire({
                title: '¿Finalizar compra?',
                text: `Total: $${contador}`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Pagar'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Pago realizado',
                        '¡Compra exitosa!',
                        'success'
                    )
                    setTimeout(()=>{
                        localStorage.removeItem('carrito');
                        window.location.reload()
                    }, 3000);
                }
            });
        }
    });
}
JSON.parse(localStorage.getItem('carrito'))!=null && refrescarCarrito();