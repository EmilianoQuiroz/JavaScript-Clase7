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

//--- 