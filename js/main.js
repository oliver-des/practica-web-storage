//VARIABLES
const formulario = document.querySelector('#form');
const nombreProducto = document.querySelector('#nombreProducto')
// const aniadirUnProducto = document.querySelector("#aniadirUnProducto");
const tabla=document.querySelector("#tabla")

//creo variable para almacenar un los elementos de localstorage o un array vacio si no hay elementos.
const listaDeProductos = JSON.parse(localStorage.getItem("productos")) || [];



//EVENTOS
//creo evento para el 'submit' del formulario.
formulario.addEventListener('submit', (ev) => {
    ev.preventDefault() //para que no se recargue la pagina automaticamente.

    const producto = nombreProducto.value //creo variable que almacena el value del input tipo texto (lo que pondrá el usuario)

    agregarProductos(producto) // añado lo que pondrá el usuario a la función agregarProductos.


})








//FUNCIONES

//creamos funcion que devolverá los productos de localStorage y los convierte en array.
const leerLocal = () => {

    const data = JSON.parse(localStorage.getItem("productos")) || [];
    return data

};



//creo funcion para pintar los productos de localStorage en la tabla, llamamos a la funcion leerLocal que ya devuelve el array de productos.
const pintarTablaProductos = () => {

    leerLocal().forEach((producto, indice) => {
        const filas = document.createElement('TR') //creamos tantas filas como productos haya

        const celdaId = document.createElement('TD') // creamos tantas celdas como productos haya
        const celdaProducto = document.createElement('TD') // creamos tantas celdas como productos haya
        const celdaCantidad = document.createElement('TD') // creamos tantas celdas como productos haya
        const celdaEliminar = document.createElement('TD') // creamos tantas celdas como productos haya

        const botonEliminar = document.createElement('BUTTON') // creamos tantos botones de eliminar como productos haya.

        // asiganmos el texto de cada celda.
        celdaId.textContent = indice +1 // posicion de elemento + 1
        celdaProducto.textContent = producto //nombre del producto
        // celdaCantidad.textContent = 




    });
}




//creo funcion para recibir el nuevo producto y añadirlo al localStorage.
const guardarLocal = () => {
    //localStorage solo recibe strings, cogemos el array de productos que hay en localStorage y lo convertimos en string.
    localStorage.setItem("productos", JSON.stringify(listaDeProductos)); 

}




//Agregar producto recibe el producto que escribe el usuario 
const agregarProductos = (producto) => {

    listaDeProductos.push(producto) // añado ese producto al array de de productos que hay en localStorage.

    guardarLocal(); //ejecuto funcion guardarLocal que añadira este nuevo producto a localStorage.

}


//llamamos a la funcion para que se ejecute al cargar la pagina.
pintarTablaProductos() 






