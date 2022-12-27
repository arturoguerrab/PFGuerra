class Producto{
    constructor (nombre,precio,articulo,imagen,descripcion){
        this.nombre=nombre;
        this.precio=precio;
        this.articulo=articulo;
        this.imagen=imagen;
        this.descripcion=descripcion;
    }
}

const productoA = new Producto("Anthurium",799.99,"a","./assets/img/tarjeta_a.jpg","vela aromatica con olor a uvas y flores de primavera");
const productoF = new Producto("Lili Anamorphine",899.99,"f","./assets/img/tarjeta_f.jpg","vela aromatica con olor a vainilla");
const productoC = new Producto("Euphoriasme",949.99,"c","./assets/img/tarjeta_c.jpg","vela aromatica con olor a canela");
const productoD = new Producto("Anamorphine",999.99,"d","./assets/img/tarjeta_d.jpg","vela aromatica con olor a rocio de invierno");


const listaDeProductos=[productoA,productoF,productoC,productoD];




