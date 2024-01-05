La idea de los lenguajes de programacion es representar los datos en forma de codigo
/n = salto de linea en JS

##  Propiedades y Métodos de un texto
![[Screenshot_2023-05-16-18-51-03_1920x1080.png]]
**(Los azules son propiedades y los morados metodos)**

Los textos tienen propiedades a las que puedes acceder, y métodos a los que puedes llamr, y a estos se les llama poniendo un . detras del objeto.


```
let texto = "pink floyd"

console.log(texto.length) // propiedad
console.log(texto.toUperCase()) // método
console.log(texto.toLowerCase())
console.log(texto.includes('floyd'))
```
### Propiedades

### Métodos
Los metodos tienen que ser llamados

## Números
let numero = 5
let decimales = 5.5555
let negativos = -10
let infinito = Infinity // -Infinity
let NaN = no es un numero

### Libreria MATH
let decimales = 5.555
console.log(Math.PI); // 3.141592... 
console.logg(Math.round(decimales)); // 5
console.log(Math.random());

## Arrays, arreglos o listas
Guarda  una lista de diferentes elementos de cualquier tipo

Para reconocer una lista hay que observar que una variable tenga corchetes en su valor.

```
let listaVacia = [];
let listaDeNumeros = [1,2,3,4];
let listaDeTextos = ['Lunes', 'Martes', 'Miercoles'];
let listaRandom = [1, 'Lunes', true, [true]];
```

La razon para usar una lista es porque esta mantiene el orden, una lista asegura que cada uno de los elementos este en el orden indicado

Podemos acceder a esos valores individualmente usando indices (index).
En un array, los indices siempre empiezan en 0

`console.log(listaRandom[0]);`
**con este código accedemos al indice "0" del array**

### Métodos y propiedades de arrays
```
let abecedario = ['c', 'b', 'a', 'z', 'y', 'm' ];

console.log(abecedario.length);
console.log(abecedario.[abecedario.length - 2];
console.log(abecedario.sort()); // organiza elementos
console.log(abecedario.includes('q'));
abecedario.push('x'); // añade al final
abecedario.pop(); // remueve del final
abecedario.unshift('x') // añade al principio
abecedario.shift(); // remueve al principio
abecedario.splice(2,4) // elimina "4" elementos a partir del indice "2"
```

## Regex (Expresiones regulares)
da instrucciones sobre como encontrar cierto tipo de texto dentro de otro texto

```
let texto1 = "Me encanta la fruta"
let texto1 = "me encanta la fruta"

let regex = /Me/

console.log(regex.test(texto1)) // true
console.log(regex.test(texto2)) // false
```

si añadimos más caracteres a la expresion regular podemos filtrar de diferentes maneras

`let regex = /Me/i` *ignorar mayusculas*
`let regex = /^Me/` *Buscar al principio de linea*
`let regex = /Me$/` *Buscar al final del texto*


## Tipos de datos primitivos
let texto = 'texto';
let numero = 3.4545;
let boleano = true;
let undefined; // cuando no declaramos una variable
*No utilizados*
let bigInt = BigInt(34526172363843445); // para numeros gigantes
let symbol = Symbol('Symbolo')

## Tipos de datos estructurales
Hay objetos disfrazados de otros tipos como los arrays y los RegExp, que detrás de escena son objetos

una lista o array detrás de escena es un objeto que va guardando los elementos del objeto como indices.

*objetos*
let objeto = { nombre: 'Xavier' }; // objeto[nombre]
let arrayEsUnObjeto = ['Xavier']; // array[0]
let function = function() {};

*otros tipos de datos*
Objet, array, Map, Set, WeakMap, WeakSet, Date, RegExp

*raiz estructural primitivo*
null es un dato primitivo y un dato estructural
```
let nulo = null;
```
---
Otra forma de identificar a los objetos es usando la palabra reservada *new*

new Object()
new Array()
new RegExp()

---
string
number
boolean
undefined
bigint
symbol
objeto = *object*
array = *object*
function = function
null = *object*
Objet, array, Map, Set, WeakMap, WeakSet, Date, RegExp = *object*


## Objetos
los objetos en otros lenguajes se llaman diccionarios
Un objeto es como un diccionario y es representado con llaves {}, donde en un lado tienes el nombre, y en otro la definicion.
O puedees verlo como que en un lado tienes la etiqueta o key, y en el otro el valor.

```
let objeto = { uno: 1} // uno = key o tag
						// 1 = valor

console.log(objeto);
```

```
let objeto = {
	numero: 1,
	texto: 'texto',
	'lista': [],
	boolean: true,
	objeto: {
		objeto2: 'Hola',
		objeto3: {
			objeto4: 2342
		}
	}
};

delete objeto['objeto'];
console.log(objeto);
```

los objetos ocupan un lugar en la memoria del programa, y si modificas estos valores estas modificando el objeto, no como con las variables.

## Template Strings (plantillas literales)
permite reutilizar el texto o el contenido de una variable como si fuera una plantilla.
Para usarlos hay qe utilizar backtiks  \`\`  y llamar a la variable con ${} dentro de los backtiks
```
let plantillas = '(plantillas litrales)'
let texto = `texto entre acentos graves ${plantillas}`;
console.log(texto3);
```

cuando escribes un texto de datos primitivos, vas a tener acceso a todos los metodos del objeto String.
Los primitivos normalmene no tienen metodos, pero en los strings los valores de datos primitivos incluyen los mismos metodos y propiedades que el objeto "String"; por lo que al crear un texto, tienes acceso a todos.

Este proceso de convertir los primitivos en objetos se llama coversion

## Comparativos
Comparar por valor vs por referencia
En JavaScript, los tipos de datos primitivos (number o número, string o texto, boolean o buleano, symbol o símbolo, null o nulo, undefined o indefinido) son por valor. Esto significa que cuando se asigna un valor a una variable, se crea una copia del valor y la variable apunta a esa copia en la memoria.

```
Por ejemplo:

let x = 10;

let y = x;

x = 20;

console.log(y); // 10 (el valor de y no cambió porque es una copia de x)

 

Por otro lado, los objetos (incluyendo arrays o listas, functions o funciones y objects u objetos) son por referencia. Esto significa que cuando se asigna un objeto a una variable, la variable no apunta al objeto en sí, sino a su ubicación en la memoria.

Por ejemplo:

let a = {valor: 10};

let b = a;

a.valor = 20;

console.log(b.valor); // 20 (el valor de b.valor si cambió porque a y b son el mismo objeto en la memoria)

 

¿Cómo afecta esto a los operadores comparativos?
En JavaScript, comparar por valor significa comparar el contenido de las variables, mientras que comparar por referencia significa comparar si las variables apuntan al mismo objeto en memoria.

Por ejemplo:

// Comparación por valor

let x = 10;

let y = 10;

console.log(x == y); // true

 

// Comparación por referencia (con objetos de igual contenido)

let a = {valor: 10};

let b = {valor: 10};

console.log(a == b); // false

console.log(a === b); // false

 

// Comparación por referencia (con el mismo objeto)

let c = {valor: 10};

let d = c;

console.log(c == d); // true

console.log(c === d); // true
```

## Bucles
Los bucles *for in* son mejores para objetos ya que los objetos normalmente no estan ordenados.
Los bucles *for* y *for of*  son mejores para listas por que las listas tienen un orden

## Métodos personalizados
let perro = {
	nombre : 'Firulais',
	ladrea: function() {
		console.log('Woof¡'):
	}
};
perro.ladra();

## CallBacks
son funciones que son al mismo tiempo argumentos y que son llamados por una funcion.

```
function llamar(callback) {
	callback();
}

llamar(function(){ console.log(3) })
```

```
function llamar(callback, a) {
	callback(33 + a);
}

llamar(console.log, 200) // 33
```

```
function llamar(enExito, enError) {
	let exito = true;
	if (exito) {
		enExito();
	} else {
		enError();
	}
}

llamar(
	function() { console.log('Exito'); },
	fumctopm() { console.log('Error'); }
);
```

## this
```
let auto = {
	modelo: 'Modelo 3',
	año: 2021,
	marca: 'Tesla',
	info: function () {
		return 'Este es un auto ' + this.marca + ', ' + this.modelo + ' del año ' + this.año;
	}
}

console.log(auto.marca);
console.log(auto.info());

```

## Promesas
Las promesas trabajan de manera asincrona, por lo que pueden correr en segundo plano.
Permiten correr cierto codigo que tarda X tiempo, y no corrtar el flujo de nuestro codigo para que el usuario no espere.