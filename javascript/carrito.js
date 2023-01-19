// Variables del DOM
const contenedorCarrito = document.querySelector('#carritoContenedor');
const contenedorPagoTotal = document.querySelector("#totalCarrito");

// Funciones del carrito de compra

// Filtra el carrito traido del localStorage para que no se muestren los elementos repetidos
const filtrarCarrito = (array)=>{
    const carritoFiltrado=[];
    array.forEach(element => {
        carritoFiltrado.filter(x=>x.articulo==element.articulo)==false && carritoFiltrado.push(element);
        });
    return carritoFiltrado;
}

// Calcula la cantidad de cada producto en el carrito de compra del localStorage
const calcularCantidad=(objeto,array)=>{
    let contador=0;
    array.forEach(element => {
        element.nombre==objeto.nombre && contador++;
    });
    return contador;
}

// Elimina la cantidad de productos del carrito segun el usuario desee
const eliminarDelCarrito = (articulo,array)=>{
    const resultado = array.filter(element => element != articulo)
    localStorage.setItem('carrito',JSON.stringify(resultado));
    refrescarCarrito()
}

// Funcion principal que pinta el carrito de compra actualizado con todos sus eventos (eliminar producto) y
// Crea los botones: 
// Pagar: que emite un alert hecho con la libreria SweetAlert2 y si es positiva la respuesta limpia el carrito finalizando la compra
// Seguir comprando: para ir a los productos por si deseea agregar algo mas

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
        div.classList.add('row','flex-column','carrito__tarjeta')
        div.innerHTML+= `<img class='align-self-end' src=".${element.imagen}" alt="${element.descripcion}">
                        <div class="d-flex flex-column carrito__info align-self-start justify-content-center">
                            <h3>${element.nombre}</h3>
                            <p>Cantidad: ${calcularCantidad(element,carritoCompra)}</p>
                            <p>$ ${element.precio},00 <br> <strong class="strong">Total: $ ${calcularCantidad(element,carritoCompra)*element.precio},00</strong></p>
                            <button id="btnBorrar${element.articulo}" class="btn btn-danger bi bi-trash3 w-50"></button>
                        </div>`
        contenedorCarrito.appendChild(div);

        let boton=document.querySelector(`#btnBorrar${element.articulo}`)
        boton.onclick=()=>{
            eliminarDelCarrito(element,carritoCompra)
        }

        contador+=calcularCantidad(element,carritoCompra)*element.precio;
        contenedorPagoTotal.innerHTML=`<h2 class='text-center'>Resumen de compra:</h2>
                                        <p><strong class="strong">Total: $ ${contador},00</strong></p>
                                        <button id="pagar" class="btn-success btn w-50 mb-2">Pagar</button>
                                        <a href="../pages/products.html" class='w-50'><button class="btn btn-secondary w-100">Seguir Comprando</button></a>
                                        `
        contenedorPagoTotal.classList.add('bg-light');

        let btnPagar = document.querySelector('#pagar');
        btnPagar.onclick=()=>{
            Swal.fire({
                title: '¿Finalizar compra?',
                text: `Total: $ ${contador},00`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#11B82B',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Pagar'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Pago realizado',
                        '¡Compra exitosa! :)',
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

// Condicional que evita que se ejecucte refrescarCarrito si no se ha anadido ningun producto.
JSON.parse(localStorage.getItem('carrito'))!=null && refrescarCarrito();