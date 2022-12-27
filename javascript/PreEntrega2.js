// ---------DEFINICION DE LAS FUNCIONES----------
function totalRecargo (total,porcentaje,cuota){
    let porcentajeFinal=porcentaje*cuota;
    let totalCompra = total + (total*porcentajeFinal);
    return totalCompra;
}

function montoCuota(total,cuotas){
    let montoCuota = (total/cuotas).toFixed(2);
    return montoCuota;
}

function validacion(entrada,rangoMin,rangoMax,mensaje){

    if(isNaN(entrada)==false && entrada>rangoMin && entrada<=rangoMax){
        return true;
    }
    else{
        alert(`${mensaje}`);
        return false;
    }
}

class Producto{
    constructor (nombre,precio,stock){
        this.nombre=nombre;
        this.precio=precio;
        this.stockReal=stock;
        this.stockInicial=stock;
    }
    descontarStock (cantidad){
        this.stockReal= this.stockReal-cantidad;
    }
    
}

function precioFinal (cantidad,precio){
    return cantidad*precio;
}

// ---------DEFINICION DE LAS FUNCIONES----------

// ---------DEFINICION DE VARIABLES-----------

// CONSTANTES
const productoUno = new Producto("Anamorphine",790.00,150);
const productoDos = new Producto("Euphoriasme",860.00,102);
const productoTres = new Producto("Anthurium",630.00,95);
const carrito=[];
const interes=0.05;

// CONTADORES
let totalParcial=0;

// SELECCION DEL USUARIO
let seleccion;
let cantidad;
let agrega;
let metodoPago;
let cuotas;
let confirmaPago;

// OPERACIONES FINALES
let totalCompra;
let valorCuota;
let listaCarrito="";

// ---------DEFINICION DE VARIABLES-----------

// ---------ESTRUCTURA PRINCIPAL DEL PROGRAMA---------

// ---------SECCION CARRITO DE COMPRAS-------
do{
    do{
        seleccion = parseInt(prompt(`eSHOP:\nEscribe el número del producto que deseas agregar al carrito:\n1. Aromática ${productoUno.nombre} - $${productoUno.precio} (Stock: ${productoUno.stockReal})\n2. Aromática ${productoDos.nombre} - $${productoDos.precio} (Stock: ${productoDos.stockReal})\n3. Aromática ${productoTres.nombre} - $${productoTres.precio} (Stock: ${productoTres.stockReal})`));
    }
    while(validacion(seleccion,0,3,"Error: Ingresaste una opción inválida, inténtalo nuevamente.")==false);

    if(seleccion==1 && productoUno.stockReal>0){

        do{
            cantidad = parseInt(prompt(`La Aromática ${productoUno.nombre} tiene un valor de $${productoUno.precio}\n¿Qué cantidad deseas agregar al carrito? (Stock:${productoUno.stockReal})`));
        } while(validacion(cantidad,0,productoUno.stockReal,"Error: Ingresaste una opción inválida, inténtalo nuevamente.")==false);

        productoUno.descontarStock(cantidad);

        if (carrito.includes(productoUno)==false){
            carrito.push(productoUno);
        }

        

    } else if(seleccion==2 && productoDos.stockReal>0){

        do{
            cantidad = parseInt(prompt(`La Aromática ${productoDos.nombre} tiene un valor de $${productoDos.precio}\n¿Qué cantidad deseas agregar al carrito? (Stock:${productoDos.stockReal})`));
        } while(validacion(cantidad,0,productoDos.stockReal,"Error: Ingresaste una opción inválida, inténtalo nuevamente.")==false);

        productoDos.descontarStock(cantidad);

        if (carrito.includes(productoDos)==false){
            carrito.push(productoDos);
        }

        
    } else if(seleccion==3 && productoTres.stockReal>0) {

        do{
            cantidad = parseInt(prompt(`La Aromática ${productoTres.nombre} tiene un valor de $${productoTres.precio}\n¿Qué cantidad deseas agregar al carrito? (Stock:${productoTres.stockReal})`));
        } while(validacion(cantidad,0,productoTres.stockReal,"Error: Ingresaste una opción inválida, inténtalo nuevamente.")==false);

        productoTres.descontarStock(cantidad);

        if (carrito.includes(productoTres)==false){
            carrito.push(productoTres);
        }


    }else{
        alert("El producto seleccionado no posee stock disponible.");
    }
        carrito.forEach((Producto)=>(
            listaCarrito= listaCarrito + `${Producto.nombre} - $${precioFinal(Producto.stockInicial-Producto.stockReal,Producto.precio)}\n`))
        do {
                
            agrega = parseInt(prompt(`CARRITO:\n${listaCarrito}\n¿Deseas agregar algo más?\n 1. Sí - 2. No`));
            
            if(agrega==1){
                listaCarrito="";
            }
        } while(validacion(agrega,0,2,"Error: Ingresaste una opción inválida, inténtalo nuevamente.")==false);

}while(agrega==1);

// ---------SECCION CARRITO DE COMPRAS-------

//----------SECCION METODO DE PAGO---------

totalParcial = precioFinal(productoUno.stockInicial-productoUno.stockReal,productoUno.precio) + precioFinal(productoDos.stockInicial-productoDos.stockReal,productoDos.precio) + precioFinal(productoTres.stockInicial-productoTres.stockReal,productoTres.precio);

do {
    
    metodoPago = parseInt(prompt(`MÉTODOS DE PAGO:\nEl total de la compra es de $${totalParcial}\n¿Qué metodo de pago deseas utilizar?\n 1. Tarjeta de Débito\n 2. Tarjeta de Crédito`));

} while(validacion(metodoPago,0,2,"Error: Ingresaste una opción inválida, inténtalo nuevamente.")==false);

if(metodoPago==2){
    do{
        do{
            cuotas=parseInt(prompt("TARJETA DE CRÉDITO:\n¿En cuántas cuotas deseas abonar? Puedes elegir 1 pago sin interés ó hasta 12 cuotas con recargo (5% de interés por cuota)\nIngresa la cantidad de cuotas a realizar:"));
        }while(validacion(cuotas,0,12,"Error: Ingresaste una opción inválida, inténtalo nuevamente.")==false);

        if(cuotas==1){

            do{
                confirmaPago=parseInt(prompt(`CONFIRMACIÓN DE COMPRA:\nEl total de la compra es de $${totalCompra=totalParcial} a abonarse en 1 pago sin interés\n¿Deseas continuar?\n 1. Confirmar pago\n 2. Elegir otra cantidad de cuota/s`));
            }while(validacion(confirmaPago,0,2,"Error: Ingresaste una opción inválida, inténtalo nuevamente.")==false);
            valorCuota=totalCompra;

        }else{

            do{
                confirmaPago=parseInt(prompt(`CONFIRMACIÓN DE COMPRA:\nEl total de la compra es de $${totalCompra=totalRecargo(totalParcial,interes,cuotas)} a abonarse en ${cuotas} cuotas de $${valorCuota=montoCuota(totalRecargo(totalParcial,interes,cuotas),cuotas)}\n¿Deseas continuar?\n 1. Confirmar pago\n 2. Elegir otra cantidad de cuota/s`));
            }while(validacion(confirmaPago,0,2,"Error: Ingresaste una opción inválida, inténtalo nuevamente.")==false);

        }
    }while(confirmaPago==2);

    alert(`COMPRA FINALIZADA:\nPagaste $${totalCompra} con Tarjeta de Credito en ${cuotas} cuota/s de $${valorCuota}\n¡Gracias por tu compra! ;)`);

}else{
    alert(`COMPRA FINALIZADA:\nPagaste $${totalParcial} con Tarjeta de Débito\n¡Gracias por tu compra! ;)`);
}
//----------SECCION METODO DE PAGO---------

// ---------ESTRUCTURA PRINCIPAL DEL PROGRAMA---------
