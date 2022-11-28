function calculoCuotas (total,cantidad,porcentaje){

    let totalCompra = total + (total*porcentaje);
    let montoCuota = (totalCompra/cantidad).toFixed(2);

    return alert(`El total de la compra es $${totalCompra}, a abonarse en ${cantidad} cuotas de $${montoCuota}`);
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
// validacion(seleccion,0,4,"Error: ingresaste una opcion invalida, intentalo nuevamente.")==false
const productoUno=790.00;
const productoDos=860.00;
const productoTres=630.00;
let seleccion;
let cantidad;
let totalParcial=0;
let agrega;
let metodoPago;

do{
    do{

        seleccion = parseInt(prompt(`Escribe el numero del producto que deseas para agregarlo al carrito:\n 1. Aromatica Anamorphine - $${productoUno}\n 2. Aromatica Euphoriasme - $${productoDos}\n 3. Aromatica Anthurium - $${productoTres}`));

    }
    while(validacion(seleccion,0,4,"Error: ingresaste una opcion invalida, intentalo nuevamente.")==false);

    if(seleccion==1){

        do{
            cantidad = parseInt(prompt(`La Aromatica Anamorphine tiene un valor de $${productoUno}, que cantidad deseas agregar al carrito? (Maximo 10 unidades)`));
        
        } while(validacion(cantidad,0,10,"Error: intenta nuevamente")==false);

        totalParcial= totalParcial+sumarCantidad(productoUno,cantidad);
        
    } else if(seleccion==2){

        do{
            cantidad = parseInt(prompt(`La Aromatica Anamorphine tiene un valor de $${productoDos}, que cantidad deseas agregar al carrito? (Maximo 10 unidades)`));
        
        } while(validacion(cantidad,0,10,"Error: intenta nuevamente")==false);

        totalParcial= totalParcial+sumarCantidad(productoDos,cantidad);
        
    } else{

        do{
            cantidad = parseInt(prompt(`La Aromatica Anamorphine tiene un valor de $${productoTres}, que cantidad deseas agregar al carrito? (Maximo 10 unidades)`));
        
        } while(validacion(cantidad,0,10,"Error: intenta nuevamente")==false);

        totalParcial= totalParcial+sumarCantidad(productoTres,cantidad);
    }
        do {
            agrega = parseInt(prompt(`El total seria de $${totalParcial}, deseas agregar algo mas? 1:SI - 2:NO`))
        } while(validacion(agrega,0,3,"Error: el valor ingresado no esta en las opciones, intentalo de nuevo.")==false);

}while(agrega==1);

do {
metodoPago = parseInt(prompt(`El total es de $${totalParcial}, con que metodo de pago deseas pagar? \n 1. Debito\n 2. Credito`));
} while(validacion(metodoPago,0,3,"Error, la opcion elegida no es valida, intenta nuevamente")==false);

if(metodoPago==2){
    alert("credito");
}else{
    alert(`Pagaste $${totalParcial} con debito, Gracias por tu compra!`);
}

