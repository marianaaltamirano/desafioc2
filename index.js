// OBJETOS= reservas de clientes

class Reserva{
    constructor(nombre, cantidad, telefono) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.telefono = telefono;
        this.disponibilidad = true;
    }
}
// const Reserva1 = new Reserva("mariana", 5, 3544411637);
// // console.log(Reserva1);

// const Reserva2 = new Reserva("pedro", 3, 3514253869);
// // console.log(Reserva2);

// const Reserva3 = new Reserva("carolina", 4, 3519685742);
// console.log(Reserva3);


// ARREGLO

// let ocupacion = [Reserva1, Reserva2, Reserva3];
// console.log(ocupacion);

// muestra posición 1
// console.log(ocupacion[1]);


// listado del día
// for (const lista of ocupacion) {
//     console.log(lista.nombre);
//     console.log(lista.cantidad);

// }

// ARREGLO Y OBJETOS

let ocupacion = [];
ocupacion.push(new Reserva("mariana", 5, 3544411637));
ocupacion.push(new Reserva("pedro", 3, 3514253869));
ocupacion.push(new Reserva("carolina", 4, 3519685742));
console.log(ocupacion);

for (const lista of ocupacion) {
    console.log(lista.nombre);
    console.log(lista.cantidad);

}

// agrega una reserva más

// ocupacion.push(new Reserva("matias", 2, 3514174852));
// console.log(ocupacion);

// for (const lista of ocupacion) {
//     console.log(lista.nombre);
//     console.log(lista.cantidad);
// }

// cancelar reserva= pedro

// ocupacion.splice(1, 1);
// console.log(ocupacion);

// for (const lista of ocupacion) {
//     console.log(lista.nombre);
//     console.log(lista.cantidad);
// }











