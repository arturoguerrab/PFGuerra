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

function sumarCantidad (precio,cantidad){
    let totalPrecio=precio*cantidad;
    return totalPrecio;
}

function validacion(entrada,rangoMin,rangoMax,mensaje){

    if(isNaN(entrada)==false && entrada>rangoMin && entrada<rangoMax){
        return true;
    }
    else{
        alert(`${mensaje}`);
        return false;
    }
}
// ---------DEFINICION DE LAS FUNCIONES----------

// ---------DEFINICION DE VARIABLES-----------

// CONSTANTES
const productoUno=790.00;
const productoDos=860.00;
const productoTres=630.00;
const interes=0.05;

// CONTADORES
let cantidadUno=0;
let cantidadDos=0;
let cantidadTres=0;
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

// ---------DEFINICION DE VARIABLES-----------

// ---------ESTRUCTURA PRINCIPAL DEL PROGRAMA---------

// ---------SECCION CARRITO DE COMPRAS-------
do{
    do{
        seleccion = parseInt(prompt(`eSHOP:\nEscribe el número del producto que deseas agregar al carrito:\n1. Aromática Anamorphine - $${productoUno}\n2. Aromática Euphoriasme - $${productoDos}\n3. Aromática Anthurium - $${productoTres}`));
    }
    while(validacion(seleccion,0,4,"Error: Ingresaste una opción inválida, inténtalo nuevamente.")==false);

    if(seleccion==1){

        do{
            cantidad = parseInt(prompt(`La Aromática Anamorphine tiene un valor de $${productoUno}\n¿Qué cantidad deseas agregar al carrito? (Máximo 10 unidades)`));
        } while(validacion(cantidad,0,11,"Error: Ingresaste una opción inválida, inténtalo nuevamente.")==false);

        totalParcial= totalParcial+sumarCantidad(productoUno,cantidad);
        cantidadUno=cantidadUno + cantidad;

    } else if(seleccion==2){

        do{
            cantidad = parseInt(prompt(`La Aromática Euphoriasme tiene un valor de $${productoDos}\n¿Qué cantidad deseas agregar al carrito? (Máximo 10 unidades)`));
        } while(validacion(cantidad,0,11,"Error: Ingresaste una opción inválida, inténtalo nuevamente.")==false);

        totalParcial= totalParcial+sumarCantidad(productoDos,cantidad);
        cantidadDos=cantidadDos + cantidad;
        
    } else{

        do{
            cantidad = parseInt(prompt(`La Aromática Anthurium tiene un valor de $${productoTres}\n¿Qué cantidad deseas agregar al carrito? (Máximo 10 unidades)`));
        } while(validacion(cantidad,0,11,"Error: Ingresaste una opción inválida, inténtalo nuevamente.")==false);

        totalParcial= totalParcial+sumarCantidad(productoTres,cantidad);
        cantidadTres=cantidadTres + cantidad;

    }
        do {
            agrega = parseInt(prompt(`CARRITO:\nAromática Anamorphine - ${cantidadUno}\nAromática Euphoriasme - ${cantidadDos}\nAromática Anthurium - ${cantidadTres}\nEl total de tu compra es de: $${totalParcial}\n¿Deseas agregar algo más?\n 1. Sí - 2. No`));
        } while(validacion(agrega,0,3,"Error: Ingresaste una opción inválida, inténtalo nuevamente.")==false);

}while(agrega==1);

// ---------SECCION CARRITO DE COMPRAS-------

//----------SECCION METODO DE PAGO---------
do {

    metodoPago = parseInt(prompt(`MÉTODOS DE PAGO:\nEl total de la compra es de $${totalParcial}\n¿Qué metodo de pago deseas utilizar?\n 1. Tarjeta de Débito\n 2. Tarjeta de Crédito`));

} while(validacion(metodoPago,0,3,"Error: Ingresaste una opción inválida, inténtalo nuevamente.")==false);

if(metodoPago==2){
    do{
        do{
            cuotas=parseInt(prompt("TARJETA DE CRÉDITO:\n¿En cuántas cuotas deseas abonar? Puedes elegir 1 pago sin interés ó hasta 12 cuotas con recargo (5% de interés por cuota)\nIngresa la cantidad de cuotas a realizar:"));
        }while(validacion(cuotas,0,13,"Error: Ingresaste una opción inválida, inténtalo nuevamente.")==false);

        if(cuotas==1){

            do{
                confirmaPago=parseInt(prompt(`CONFIRMACIÓN DE COMPRA:\nEl total de la compra es de $${totalCompra=totalParcial} a abonarse en 1 pago sin interés\n¿Deseas continuar?\n 1. Confirmar pago\n 2. Elegir otra cantidad de cuota/s`));
            }while(validacion(confirmaPago,0,3,"Error: Ingresaste una opción inválida, inténtalo nuevamente.")==false);
            valorCuota=totalCompra;

        }else{

            do{
                confirmaPago=parseInt(prompt(`CONFIRMACIÓN DE COMPRA:\nEl total de la compra es de $${totalCompra=totalRecargo(totalParcial,interes,cuotas)} a abonarse en ${cuotas} cuotas de $${valorCuota=montoCuota(totalRecargo(totalParcial,interes,cuotas),cuotas)}\n¿Deseas continuar?\n 1. Confirmar pago\n 2. Elegir otra cantidad de cuota/s`));
            }while(validacion(confirmaPago,0,13,"Error: Ingresaste una opción inválida, inténtalo nuevamente.")==false);

        }
    }while(confirmaPago==2);

    alert(`COMPRA FINALIZADA:\nPagaste $${totalCompra} con Tarjeta de Credito en ${cuotas} cuota/s de $${valorCuota}\n¡Gracias por tu compra! ;)`);

}else{
    alert(`COMPRA FINALIZADA:\nPagaste $${totalParcial} con Tarjeta de Débito\n¡Gracias por tu compra! ;)`);
}
//----------SECCION METODO DE PAGO---------

// ---------ESTRUCTURA PRINCIPAL DEL PROGRAMA---------
