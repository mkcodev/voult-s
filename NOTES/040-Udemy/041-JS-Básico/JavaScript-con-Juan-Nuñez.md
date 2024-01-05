keys - indice \['0', '1', '2'\]

# **CONCEPTOS**

# **1.- propiedades - valores**

**Las propiedades** las definimos en un objeto basándonos en sus características realistas.

**Los valores** son los datos que se le asignan a la propiedad del objeto.

`let ejemplo = {`

`nombre: 'Amir',`

`apellido: 'Bahar'`

`};`

(nombre) es la propiedad

('Amir') es el valor

* * *

# **2.- objetos - métodos**

Los objetos en JS

Los métodos son funciones dentro de un objeto que dotan de funcionalidad a este.

### Objeto arguments

* * *

# **3.- parámetros - argumentos**

**Los parámetros** son los datos que le asignamos entre los paréntesis a una función.

**Los argumentos** son los datos que le pasamos cuando la declaramos.

`function ejemplo(parametro) = {`

`}`

`ejemplo(argumento);`

### **Parámetros rest**

Los encontraras con los 3 puntos (function checkOut(…prices) {} )

Con los parámetros rest podemos aceptar cualquier numero de parámetros en la función.

Son compatibles con los parámetros normales, pero **deben declararse al final de los parámetros**.

## **3.1- Parámetros normales**

```
function checkOut(pr1, pr2, pr3) {
  const total = pr1 + pr2 + pr3
  console.log(total)
}
checkOut(10, 34, 20) // 64
```

## **3.2- Parámetros Rest**

En los parámetros rest **no tenemos un parámetro por cada argumento**, sino que **todos los argumentos van al mismo parámetro**.

```
function checkOut(...prices) {
  console.log(prices)           // [10, 34, 20]
}
checkOut(10, 34, 20)
```

Esto JavaScript lo almacena en un array:

```
function checkOut(...prices) {
  const total = prices.reduce((acc, curr) => acc + curr)
  console.log(total)         // 64, 80, 71
}
checkOut(10, 34, 20)
checkOut(20, 44, 16)
checkOut(12, 37, 22)
```

A _**.reduce**_ hay que pasarle una función, lo que hace es recorrer el array y lo suma.

“_**acc**_” es el valor recibido y “_**curr**_” el retorno.

* * *

# **4.- Ámbitos de let, var y const**

## **4.1- Ámbito y var** _(ámbito funcional)_

**El ámbito es la parcela de acceso**, el lugar desde donde pueden ser accedidas y hasta donde pueden expandirse y ser visibles.

Hasta ahora hemos creado variables con var. Estas tienen ámbito de función: pueden ser accedidas desde la función que fueron declaradas(y funciones interiores).

Se puede acceder a una variable de **ámbito superior pero no de un ámbito inferior.**

Se puede crear una variable global y una local dentro de una funcion con el mismo nombre, pero **tendrá preferencia la variable local** o la variable del ambito más cercano.

```
var nombre = "juan" // global
function saludar() {
  var nombre = "Andrés" // funcional/ local
  console.log("Hola " + nombre)
}
saludar(); // Hola Andrés
```

Las variables “var“ tienen ámbito de función: pueden ser accedidas dese la función donde fueron declaradas(y funciones interiores).

Las funciones crean nuevos ámbitos si usamos una variable declarada con var.

## **4.2- Ámbito y let** (_ámbito de Bloque_)

Sin embargo, si declaramos variables con let(ES2015), tenemos ámbito de bloque, es decir, **solo pueden ser accedidas desde el bloque que se declararon, o bloques interiores**.

Esto significa que si creamos una variable con let dentro de un ámbito, **no podemos acceder desde al ámbito global.**

```
{
let nombre = "juan"
}
console.log(nombre) // referenceError: nombre is not defined
```

```
{
  let nombre = "Juan"
  {
    console.log(nombre) // Juan
  }
}
```

Declararlas con let te obliga a **ser más cuidadoso con tu código, y no ensuciar el ámbito global.**

Esto tiene sus ventajas al usarlo con estructuras de control y de flujo.

Además al usar let tenemos un **comportamiento mucho mas estricto en el alzado (hoisting)**, algo que para muchos es otra ventaja.

### **Ámbito global**

Los var, let y const que pongas aquí **pueden ser accedidos desde cualquier lugar**. Ya que el ámbito global es el más alto en la jerarquía.

## **4.3- Variable const (constante)**

Var y let permiten declarar variables dinámicas: puedes re-asociarlas a otro valor.

Al utilizar const **nos aseguramos que no ocurrirá ninguna re-asociación a otro valor** en esa variable.

Eso sí, usar constantes no significa que sean inmutables. **Podemos mutar las propiedades** del valor asociado a la constante en objetos y arrays.

```
const persona = { nombre: "Mikel"}
persona = "Andres"
console.log(persona.nombre) // error: no se puede modificar el valor de const
```

Pero si **podemos mutar la propiedad de una constante.**

```
const persona = { nombre: "Mikel"}
persona.nombre = "Andres"
console.log(persona.nombre) // Andres
```

Al hacer esto **no estamos reasignando** el valor del objeto(es el mismo valor), pero **estamos mutando la propiedades**

no hay que confundir la mutacion con la reasignacion

En cuanto su acceso, disponemos de **ambito de bloque**

* * *

* * *

# **5.- Funciones**

### **Declaración de funciones**

Para declarar una función, **hay que asignarle un identificador**(si no es anónima), **y añadirle paréntesis después del** _**identificador**_ , para luego invocar las funciones.

Dentro del paréntesis **podemos añadir parámetros o no**, si los añadimos, al referenciarlas o llamarlas hay que **pasarle dichos parámetros.**

Se pueden enviar, recibir y copiar.

En javascript hay **3 formas de crear funciones:**

## **5.1- Funciones declaradas**

Estas requieren un identificador y son alzables

```
function saludar (){
  console.log("Hola Julapa")
}
saludar()
```

## **5.2- Expresión funcional**

Consiste en **asociar una función a una variable o constante.**

Puede tener nombre o ser anónima.

**Lo que se alza es la declaración**, no la asignación

```
const saludar = function() {
  console.log("Hola Julapa")
}
```

**Pueden ser anónimas**, pero es mejor asignarle un nombre para luego rastrearlas mejor.

Las expresiones funcionales, al **no ser alzadas, te obliga a ser más consciente de donde y como escribes tu código**

## **5.3- Funciones flecha**

Podemos crear una **versión mas acortada de una función anónima** a través de las funciones flecha.

No disponen de contexto propio de this(aveces se necesita this y aveces no).

Disponen de retorno implícito, delimitadores opcionales y **no se alzan.**

```
const saludar = (nombre) => {
  consol.log("mi perro se llama " + nombre)
}
saludar("tous")
```

**Cuando solo tenemos un parámetro no hace falta el paréntesis**, simplificando aun mas la función.

Si solamente hay una sentencia, no es necesario usar las llaves

```
const mayuscula = nombre => nombre.toupercase()
let nombre = mayuscula("Andres")
console.log(nombre) // andrés
```

### **¿Cuando usar cada una?**

Ante la duda, usa **funciones declaradas por que se alzan y eso es una ventaja al principio.**

Si hay más de dos o 3 sentencias o lineas, usar función declarada siempre.

Si es un callback de una linea no importa usar la expresion funcional, incluso anónima.

Si quieres que sea más breve porque tienes el retorno implícito, o es una función de una linea y no te hace falta usar las llaves, o solo tienes un parámetro, puedes usar la función flecha.

* * *

## **6.- RETORNAR VALORES (repasar)**

Al no ser que seamos explícitos, **las funciones JavaScript retornan undefined (**_**implicit return**_**).**

**Si especificamos algo que retornar, la funcion finalizara su ejecución y devolverá ese valor.**

```
function checkOut(name, ...prices) {
  const total = prices.reduce((acc, curr) => {
    return acc + curr
  })
  return total
}
const result = checkOut("Juan", 76, 88, 99, 1023)
console.log(result) // 1286
```

Si no retornamos el valor con “return“, cuando llamemos a la funcion no nos devolverá los datos que le pidamos.

El return retorna el valor allá donde se ah llamado, a la izquierda del operador de asignación.

**El return explicito** es cuando especificamos lo que queremos retornar.

* * *

# **7.- Closures**

un closure es retornar una función desde otra función, con acceso al entorno de variables de un ámbito exterior:

```
function soyClosure() {
  const variableLocal = "Juan"
  return function() {
    return variableLocal.toupperCase()
  }
}
const closure = soyClosure()
closure() // JuAN
```

**Entender como funcionan los closures es imprescindible** para entender como funciona JS en su totalidad.

uno de los usos más comunes es la **creación de factorías de funciones: exponen parte de su ámbito para crear otras funciones:**

```
function pedirPizza(uid, pizza) {
  const pedido=`${uid}_${pizza}`
  return pedido
}

console.log(pedirPizza(311232, "carbonara"))
console.log(pedirPizza(311232, "vegetal"))
```

```
function pedirPizza(uid) {
  let cantidadPizzas = 0;
  const pedido=`pedido_${uid}`
  return function(pizza) {
    cantidadPizzas++;
    return `${pedido}_${pizza}_${cantidadPizzas}`
  }
}

const pedidoID = pedirPizza(343222)

console.log(pedidoID("barbacoa"))
console.log(pedidoID("vegetal"))
```

**Cada closure retornado es independiente al anterior, es decir, forman un nuevo ámbito.**

Eso si, un closure puede modificar el estado atrapado en su interior

## **8.- IIFE’s (Expresión funcional inmediatamente invocada)**

*   Son las siglas de “_**Inmediately Invoked Function Expression**_“
    
*   La parte más importante es _inmediatamente._
    

sign up

Para crear un IIFe debemos **envolver una función con el operador de agrupación.**

De esta forma, indicamos que es una **expresión que debe de ser evaluada.**

Como la expresión es evaluada como una función, podemos añadir unos paréntesis al final para auto ejecutarla inmediatamente:

```
(function () {
  console.log("HI")
}) ();
```

**Sin el paréntesis, esta función anónima nos daría error**, porque javascript en vez de encontrarse con una función sin identificador(que sería error), se encuentra con un operador de agrupación(paréntesis), por lo que debe evaluar el contenido, y este sería sintácticamente correcto.

Esa función puede ser ejecutada solo desde la misma función(al final), por que al ser anónima no tiene identificador:

```
(function (name) {
  console.log("HI i'm " + name)
}) ("Mikel");
```

(Se podría hacer con funciones flecha)

**La principal utilidad de un IIFE es la auto-creación de un ámbito funcional** nuevo e independiente.

El ejemplo más típico es su uso en bucles for:

```
for(var i = 0; i < 10; i++) {
  console.log(i);
  setTimeOut(function() {
    console.log('El numero es ' + i);
  },1000);
}
```

La función se ejecuta una vez termina el bucle.

Seguir en minuto 22 o así : [https://www.youtube.com/watch?v=xOljrHcYWGM&list=PLM-Y\_YQmMEqB4FVmgxZqG-f7R3ESkcIPA&index=13&ab\_channel=WmediaporJuanAndr%C3%A9sN%C3%BA%C3%B1ez](https://www.youtube.com/watch?v=xOljrHcYWGM&list=PLM-Y_YQmMEqB4FVmgxZqG-f7R3ESkcIPA&index=13&ab_channel=WmediaporJuanAndr%C3%A9sN%C3%BA%C3%B1ez)

## **referencias**

## **identificador**

* * *

**Promesas**

**Eventos**

* * *

* * *

operacion arigmetica

interpolacion

funcion anonima

funcion de callback