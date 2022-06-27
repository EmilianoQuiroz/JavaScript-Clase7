//--- ABSTRACCION ---//
/*
Mediante la abstraccion resumimos un grupo complejo de instrucciones bajo una palabra clave (función) que sugiere cuál es el problema a resolver por la misma.
Las abstracciones ocultan detalles sobre la operación a resolver y nos permite “hablar” sobre los problemas en un nivel más alto (o mayor grado de abstracción).

En Javascript hay muchos métodos nativos incorporados que, como abstracciones, nos ofrecen soluciones a problemas recurrentes; sumado a la posibilidad de que nosotros podemos declarar las nuestras.
*/

//--- FUNCIONES DE ORDEN SUPERIOR ---//
/*
Es aquella que bien retorna una función, o recibe una función por parámetro. 
Este tipo de funciones nos permiten abstraernos sobre acciones y no sólo valores. En esta clase, nos concentraremos más en la segunda acepción.
*/

//--- RETORNAR FUNCIONES ---//
/*
En el primer caso, podremos tener una función que retorna una función, lo cual nos permitiría crear funciones con un esquema superior
*/
// function mayorQue(n) {
//     return (m) => m > n
// }

// const mayorQueDiez = mayorQue(10)

// console.log( mayorQueDiez(12) )  //  true
// console.log( mayorQueDiez(8) )  //  false
/*
En este caso, mayorQue(n) retorna una función que compara un valor contra n y retorna true o false (porque es el resultado de la comparación). 
*/

// function asignarOperacion(op) {
//     if (op == "sumar") {
//         return (a, b) => a + b
//     } else if (op == "restar") {
//         return (a, b) => a - b
//     }
// }

// let suma = asignarOperacion("sumar")
// let resta = asignarOperacion("restar")

// console.log( suma(4, 6) )  //  10
// console.log( resta(5, 3) )  //  2
/*
En este ejemplo, según el parámetro op se termina asignando un return de función u otro a las variables declaradas.
*/

//--- RECIBIR FUNCIONES POR PARÁMETRO ---//
/*
Esta función recibe un array por primer parámetro y una función por el segundo. Recorre el array y, por cada elemento, hace un llamado a la función mencionada enviando dicho elemento por parámetro.
*/
/*
const numeros= [1, 2, 3, 4]

porCadaUno(numeros, console.log)
// 1
// 2
// 3
// 4
*/

//--- ARROW FUNCTION ---//
/*
Es usual definir la función directamente sobre el parámetro como una función anónima, aprovechando la sintaxis de arrow function. 
Esto permite definir acciones más dinámicas.
*/
// const duplicado = []

// porCadaUno(numeros, (el)=> {
//     duplicado.push(el * 2)
// })

// console.log(duplicado) // [2, 4, 6, 8]

//--- MÉTODOS DE BÚSQUEDA Y TRANSFORMACIÓN ---//

// --- FOR EACH ---//
/*
El método forEach() es similar al ejemplo porCadaUno anterior. 
Itera sobre el array y por cada elemento ejecuta la función que enviemos por parámetro, la cual recibe a su vez el elemento del array que se está recorriendo:

const numeros = [1, 2, 3, 4, 5, 6]

numeros.forEach( (num)=> {
    console.log(num)
} )
*/

//--- FIND ---//
/*
El método find() recibe una función de comparación por parámetro. Captura el elemento que se está recorriendo y retorna true o false según la comparación ejecutada. El método retorna el primer elemento que cumpla con esa condición:

const cursos = [
    {nombre: 'Javascript', precio: 15000},
    {nombre: 'ReactJS', precio: 22000},
]

const resultado = cursos.find((el) => el.nombre === "ReactJS")
const resultado2 = cursos.find((el) => el.nombre === "DW")

console.log(resultado) // {nombre: 'ReactJS', precio: 22000}
console.log(resultado2) // undefined

Nótese que el find() retorna el primer elemento del array que cumpla con la condición enviada, de ahí que podemos almacenarlo en una variable o usarlo de referencia para otro proceso. Si no hay ninguna coincidencia en el array, el método find retorna undefined.
*/

//--- FILTER ---//
/*
El método filter() recibe, al igual que find(), una función comparadora por parámetro, y retorna un nuevo array con todos los elementos que cumplan esa condición. 
Si no hay coincidencias, retornará un array vacío.

const cursos = [
    {nombre: 'Javascript', precio: 15000},
    {nombre: 'ReactJS', precio: 22000},
    {nombre: 'AngularJS', precio: 22000},
    {nombre: 'Desarrollo Web', precio: 16000},
]

const resultado = cursos.filter((el) => el.nombre.includes('JS'))
const resultado2 = cursos.filter((el) => el.precio < 14000)

console.log(resultado)
 [
    {nombre: 'ReactJS', precio: 22000},
    {nombre: 'Angular', precio: 22000}
] 

console.log(resultado2) // []
*/

//--- SOME ---//
/*
console.log( cursos.some((el) => el.nombre == "Desarrollo Web")) 
// true
console.log( cursos.some((el) => el.nombre == "VueJS")) 
// false

El método some() funciona igual que el find() recibiendo una función de búsqueda. En vez de retornar el elemento encontrado, some() retorna true o false según el resultado de la iteración de búsqueda.
*/

//--- MAP ---//
/*
El método map() crea un nuevo array con todos los elementos del original transformados según las operaciones de la función enviada por parámetro. Tiene la misma cantidad de elementos pero los almacenados son el return de la función:

const cursos = [
    {nombre: 'Javascript', precio: 15000},
    {nombre: 'ReactJS', precio: 22000},
    {nombre: 'AngularJS', precio: 22000},
    {nombre: 'Desarrollo Web', precio: 16000},
]

const nombres = cursos.map((el) => el.nombre)
console.log(nombres)
// [ 'Javascript', 'ReactJS', 'AngularJS', 'Desarrollo Web' ]

En el ejemplo, la función retorna la propiedad nombre de cada elemento y eso es lo que se almacena en el nuevo array nombres. Map() se utiliza mucho para transformación de arrays.
Si quisiera aumentar el precio de todos los cursos en este ejemplo, puedo mapear y retornar una copia de los elementos con el precio modificado:

const actualizado = cursos.map((el) => {
    return {
        nombre: el.nombre,
        precio: el.precio * 1.25
    }
})

console.log(actualizado)
 [
     { nombre: 'Javascript', precio: 18750 },
     { nombre: 'ReactJS', precio: 27500 },
     { nombre: 'AngularJS', precio: 27500 },
     { nombre: 'Desarrollo Web', precio: 20000 }
] 

*/

//--- REDUCE ---//
/*
El método reduce() nos permite obtener un único valor tras iterar sobre el array. Funciona como un método que resume el array a un único valor de retorno. 

const numeros = [1, 2, 3, 4, 5, 6]
const total = numeros.reduce((acumulador, elemento) => acumulador + elemento, 0)

console.log(total) // 21

En este ejemplo, en el acumulador sumamos cada elemento del array y al terminar la iteración nos devuelve ese resultado. El segundo parámetro del reduce, que aquí se ve como 0, es el valor inicial del acumulador.
*/

//--- SORT ---//
/*
El método sort() nos permite reordenar un array según un criterio que definamos. Recibe una función de comparación por parámetro que, a la vez, recibe dos elementos del array. La función retorna un valor numérico (1, -1, 0) que indica qué elemento se posiciona antes o después.

Para ordenar números, basta con restar uno al otro, y el orden indica si será ordenado de forma ascendente o descendente:

const numeros = [ 40, 1, 5, 200 ];
numeros.sort((a, b) => a - b);  // [ 1, 5, 40, 200 ]
numeros.sort((a, b) => b - a);  // [ 200, 40, 5, 1 ]

Para ordenar un array por algún string, debemos definir una función comparadora que retorne un valor numérico de referencia, según queramos el orden ascendente o descendente:

const items = [
    { name: 'Pikachu', price: 21 },
    { name: 'Charmander', price: 37 },
    { name: 'Pidgey', price: 45 },
    { name: 'Squirtle', price: 60 }
  ]
items.sort((a, b) => {
    if (a.name > b.name) {
        return 1;
    }
    if (a.name < b.name) {
        return -1;
    }
    // a es igual a b
    return 0;
})
*/

//011400
