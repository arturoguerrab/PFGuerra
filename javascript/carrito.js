const carritoLS = JSON.parse(localStorage.getItem("carrito"));
const carritoFisico = document.getElementById("carrito");
const total=document.getElementById("totalCarrito");
const botonPagar=document.getElementById("pagar");

carritoLS.forEach(element => {
    carritoFisico.innerHTML +=`<img src=".${element.imagen}" alt="${element.descripcion}" class="col-4">
                                <div class="col-6">
                                    <h2>${element.nombre}</h2>
                                    <p>Precio $${element.precio}</p>
                                </div>
    `
});



botonPagar.onclick = () =>{
    localStorage.clear();
    alert("Pagaste! Gracias por tu compra!")
}

