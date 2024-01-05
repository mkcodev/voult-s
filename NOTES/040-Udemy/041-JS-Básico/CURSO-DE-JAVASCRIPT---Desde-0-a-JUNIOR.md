![](https://diavlo.atlassian.net/wiki/images/icons/grey_arrow_down.png)pto

**¿que es un lenguaje de programación?**

es una herramienta que nos permite darle instrucciones a un ordenador a través de código, código que esta estructurado para que los programadores podamos escribirlo siguiendo una lógica, que es la lógica de programación, para que cuando lo completemos, pueda cumplir la función que nosotros queremos

**\-Lenguajes compilados** : son esos en los que al escribimos un código, y antes de poder ejecutarse el programa, tiene que pasar por un programa que se llama compilador, que traduce todo ese código, a un lenguaje que después otro programa interpreta y lo convierte en código binario

**\-Lenguajes interpretados :** no tienen que pasar por un compilador, sino que va directamente a ejecutarse en el ordenador, que los navegadores tienen una herramienta, que se llama interprete, que lo que hace es traducir el código

**\-Lenguaje orientado a objetos**

![](https://diavlo.atlassian.net/wiki/images/icons/grey_arrow_down.png)Para que es JavaScript

Con HTML y CSS se puede crear la estructura de una pagina WEB, pero el usuario no puede interactuar con los elementos; para eso es JavaScript, para darle vida y dinamismo a la pagina Web.

Con JS puedes tener reconocimientos de voz, reconocimientos de imágenes, mandar formularios…

0\. Que es JS

*   Lenguaje de programación
    
*   Interpretado
    
*   Orientado a objetos
    
*   Imperativo (se ejecuta el código línea a línea en orden)
    
*   Case sensitive
    
*   Basado en Prototipos / instancias / classless
    
*   Tipado débil (el valor de los datos puede cambiar entre texto o numero etc..)
    
*   Lenguaje dinámico( la variable no se ajusta al dato, el dato se ajusta a la variable)
    
*   ECMASCRIPT (5.1 y 6, 7, 8, next)
    

2) ¿Para que se usa JS

*   Dinamismo en los sitios web
    
*   Servidor en NodeJS
    
*   Tecnologías Frontend como React, Angular o Vue.JS
    

Usos no comunes:

*   Inteligencia Artificial
    
*   Places electrónicas
    
*   Mobile Apps
    
*   Desktop Apps
    
*   Etc…
    

# \-->`CAPITULO 1`

## _**\--> VARIABLES**_

var - Es una variable regional, solo para una región

let - Es una variable global, por lo que afecta a todos los documentos, es la que mas vamos a usar, ya que es igual a la “var“, pero tiene más extensión, ya que puede afectar a más código

const - lo que diferencia a const es que su valor no puede cambiar, desde que le asignas un valor a una const, esta no puede ser cambiada, y si lo intentas saltara error de consola. Aparte hay que asignarle un valor directamente = const numero1 = 23;

**Tipos de datos:**

**Primitivos:** son los datos que vienen con el lenguaje: String, number, bolean, Undefined, Null, Nan, symbol

**Función prompt** = sirve para almacenar los datos que nos da el usuario en una variable., por lo que el usuario puede almacenar datos en una variable para poder usarlos próximamente. como por ejemplo

```
let nombre = prompt("Decime tu nombre");

alert("hola " + nombre)
```

**OPERADORES:**

**Operadores de Asignación**: asigna un valor al operando de la izquierda basado en el valor del operando de la derecha

```
let numero = 10;
numero += 5; (numero = numero + 5)
document.write(numero)
```

![](https://diavlo.atlassian.net/wiki/download/attachments/360463/operadores%20de%20asignacion.PNG?api=v2)

**\-Operadores Aritméticos (IMG)**: toman valores numéricos (ya sean literales o variables) como sus operandos y retornan un valor numérico único.

```
numero1 = 10;
numero2 = 5;
resultado = numero1 + numero2;
alert(resultado)
```

![](https://diavlo.atlassian.net/wiki/download/attachments/360463/operadores%20aritm%C3%A9ticos.PNG?api=v2)

## _**\--> CONCATENACION:**_

La concatenación no es mas que la suma de unos strings o cadenas de texto

**con el signo +**

```
saludo = "¡Hola pedro!";
pregunta = "¿Cómo estas?";
frase = saludo + pregunta;
document.write(frase)
```

**Forzando string**

Cuando intentamos concatenar dos números al igual que en el código anterior, va a sumar los números, en vez de concatenarlos. Para concatenar números hay que añadir un string a la concatenación.

```
numero1 = 5;
numero2 = 8;
frase = "" + numero1 + numero2
document.write(frase)
```

gracias al tipado dinámico, cuando hay un string en una concatenación con números, los números se vuelven strings automáticamente.

**Concat**

También se puede concatenar con un método llamado concat, que solo se puede usar cuando sumamos un string, aun que sea con un numero. Por lo que no funcionaria si intentas concatenar dos números de esta manera.

```
numero1 = 5;
numero2 = 8;
frase = numero1.concat(numero2)
document.write(frase)
```

**Con backtiks(\`\`) y la variable entre ${\]**

Para usar este método tienes que rodear el string con backtiks, y dentro del string deseado añadir la variable dentro de ${\] para concatenarlas

```
nombre = "mikel salvador";
frase = `soy ${nombre] y estoy caminando`;
document.write(frase);
```

## _**\--> OPERADORES**_

**\-OPERADORES DE COMPARACIÓN:**

comparan dos expresiones y devuelven un valor Boolean que representa la relación de sus valores.

![](https://diavlo.atlassian.net/wiki/download/attachments/360463/operadores%20de%20comparacion.PNG?api=v2)

*   **Equality**
    

```
let numero = 23;
let numero2 = 23;

document.write(numero == numero2); (true)
```

*   **Inequality**
    

```
let numero = 23;
let numero2 = 23;

document.write(numero != numero2); (false)
```

*   **Identility**
    

Es igual que el de iquality, pero fuerza que sea estrictamente iguales. “iquality == no diferencia entre tipos de datos“, pero === necesita que los dos valores sean los mismos, o strings, o números.

```
let numero = "23";
let numero2 = 23;

document.write(numero === numero2); (false)
```

*   **Non-identility**
    

Es lo mismo que pasaba antes, para comprobar si no es estrictamente igual se utiliza !==

*   **greater than**
    
*   **greater than or equal**
    
*   **Less than**
    
*   **Less than or equal**
    

**\-OPERADORES LÓGICOS:**

Nos devuelven un resultado a partir de que se cumpla o no una condición, su resultado es boleano, y sus operandos son valores lógicos o asimilables a ellos.

*   **and** (&&): si las dos condiciones se cumplen, el resultado es true
    

```
let valor = true;
let valor2 = true;

let resultado = valor && valor2;
let resultado2 = valor || valor 2;
let resultado3 = !valor;

document.write()
```

*   **or (||):** si una o otra se cumplen, el resultado es true
    
*   **not (!):** te devuelve lo contrario a lo que dicte el valor
    

```
num1 = 12;
num2 = 24;
num3 = 25;
num4 = 92;
num5 = 91;

op = (num1 < num2 || num2 < num3) && (!(num1 != num2) && num5 !=num3);
op =        (true || true)        &&           (false && true)
op=                     true      &&     false = false
        true            false               true            false
op =(num5 > num2 && num4 < num3) || (!(num1 === num2) || num3 != num3)
 y “menor que” <
```

## **\--> CAMEL CASE:**

la segunda palabra siempre va con mayúscula (holaComoEstas)

document.getElementById()

## _**\--> CONDICIONALES:**_

Es una sentencia que lo que nos permite es validar algo. Es ejecutar un fragmento de código o bloque, solamente si una condición se cumple.

```
El bloque solo se ejecuta si el valor de despues de if es true
if (10 > 9){
  alert("hola")
}

nombre = "lucas dalto";

if (nombre == "lucas"){
  alert("tu nombre es " + nombre");
}

else if (nombre == "dalto"){
  alert("tu nombre es " + nombe);
}

else{
  alert("tu nombre es otro");
}
```

Para empezar los condicionales, primero se pone un **if,** luego los **else if** que quieras, y al final un **else.**

else es para cuando si ninguno de los anteriores “else if“ se cumple

**CAPITULO 1 TERMINADO**

* * *

PROBLEMA

A) 3 chicos de 23 años perfectamente normales entran a una heladería a comprar un helado, pero hay un problema: los precios no está n al lado de cada estante con su respectivo helado.

Ellos quieren comprar el helado más caro que puedan con la plata que tienen, asi que… veamos como podemos ayudarlos.

Roberto tiene $1.5 USD

Pedro tiene $1.7 USD

Cofla tiene $3 USD

Los precios de los helados son los siguientes

Polito de helado de agua: $0.6 USD

Polito de helado de crema: $ 1USD

Bombón helado marca heladix: $1.6 USD

Bombon helado marca heladovich: $1.7 USD

Bombon helado marca helardo: $1.8 USD

Potecito de helado con confites: $2.9 USD

pote de 1/4 KG: $2.9 USD

CREAR SOLUCIONES:

\-pedirles que ingresen el monto que tienen y mostrarles el helado más caro que puedan comprar

\-si hay dos o mas con el mismo precio, mostrar ambos.

\-cofla quiere saber cuato es el vuelto

* * *

**CODIGO DEL PROBLEMA**

```
dineroCofla = prompt(alert("¿cuanto dinero tiene Cofla?"))
dineroRoberto = prompt(alert("¿cuanto dinero tiene Roberto?"))
dineroPedro = prompt(alert("¿cuanto dinero tiene Pedro?"))

dineroCofla = parseInt(dineroCofla);

if (dineroCofla >= 0.6 && dineroCofla < 1) {
    alert("Cofla, comprate el helado de agua");
    alert("y te sobran" + (dineroCofla - 0.6));

}

else if (dineroCofla >= 1 && dineroCofla < 1.6) {
    alert("Cofla, comprate el helado de crema");
    alert("y te sobran" + (dineroCofla - 1));
}

else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
    alert("Cofla, comprate el helado de helaidx");
    alert("y te sobran" + (dineroCofla - 1.6));
}

else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
    alert("Cofla, comprate el helado de heladovich");
    alert("y te sobran" + (dineroCofla - 1.7));
}

else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
    alert("Cofla, comprate el helado de helardo");
    alert("y te sobran" + (dineroCofla - 1.8));
}

else if (dineroCofla >= 2.9) {
    alert("Cofla, comprate el helado de confites o el pote de 1/4Kg")
    alert("y te sobran" + (dineroCofla - 2.9));
} else {
    alert("Cofla, lo siento, pobre de mierda, no te alcanza para ningun helado")
    alert("y te sobran unas ostias");
}



if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
    alert("Roberto, comprate el helado de agua")

}

else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
    alert("Roberto, comprate el helado de crema")
}

else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
    alert("Roberto, comprate el helado de helaidx")
}

else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
    alert("Roberto, comprate el helado de heladovich")
}

else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
    alert("Roberto, comprate el helado de helardo")
}

else if (dineroRoberto >= 2.9) {
    alert("Roberto, comprate el helado de confites o el pote de 1/4Kg")
} else {
    alert("Roberto, lo siento, pobre de mierda, no te alcanza para ningun helado")
}



if (dineroPedro >= 0.6 && dineroPedro < 1) {
    alert("Pedro, comprate el helado de agua")

}

else if (dineroPedro >= 1 && dineroPedro < 1.6) {
    alert("Pedro, comprate el helado de crema")
}

else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
    alert("Pedro, comprate el helado de helaidx")
}

else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
    alert("Pedro, comprate el helado de heladovich")
}

else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
    alert("Pedro, comprate el helado de helardo")
}

else if (dineroPedro >= 2.9) {
    alert("Pedro, comprate el helado de confites o el pote de 1/4Kg")
} else {
    alert("Pedro, lo siento, pobre de mierda, no te alcanza para ningun helado")
}
```

* * *

# `CAPITULO 2`

## **\-->** _**ARRAYS (ARREGLOS)**_

Son contenedores de diferentes tipos de elementos, que pueden ser de diferentes tipos de datos.

Los arrays ya no son datos primitivos, los arrays ya vienen siendo objetos.

Al igual que en las bariables podemos guardar un dato, en los arrays podemos guardar muchos datos.

*   **Formas de crear un array:**
    

```
arrays = ["lucas", 24, "buenos dias"];
frutas = ["banana", "manzana", "pera"];
```

![](https://diavlo.atlassian.net/wiki/download/attachments/360463/arrays.png?api=v2)

*   **Como mostrar los elementos de un array:**
    

Para acceder al elemento de un array, primero hay que colocar el nombre del array, y luego poner entre corchetes \[\] el numero de la posicion que ocupa el elemento que quieres mostrar.

Las posiciones en los arrays empiezan desde 0, por lo que la primera posicion se representa con el numero 0.

```
document.write(frutas[0]);
```

Cuando arrancamos el array todas las posiciones estan declaradas

*   **Arrays asociativos:**
    

es un array que tiene un valor asociado, por lo que para llamar a un elemento de un array hay que concretar el valor asociado, no el numero de la posicion.

```
let pc = {
    nombre: "DaltoPC",ç
    procesador: "Intel Core I7",
    ram: "16GB",
    espacio: "1TB"
}

let nombre = pc1["nombre"]
let procesador = pc1["procesador"]
let ram = pc1["ram"]
let espacio = pc1["espacio"]

frase = `el nombre de mi pc es: ${nombre} <br>
         el procesador es: ${procesador} <br>
         la memoria ram es: ${ram} <br>
         el espacio en disco es de: ${espacio}`;
        
document.write(frase);
```

## _**\--> BUCLES**_

**Definición y usos**

Los tienen alguna característica en común con las condicionales, pero la diferencia entre “if“ y “while“ o cualquier otro bucle, es que estos se repiten constantemente

Las condicionales cuando se ejecuta el código, el programa sigue su flujo, pero en el bucle, aparte de seguir el programa, se repite el bucle en cuestión.

*   **Sentencia While**
    

El if pregunta una sola vez y ejecuta, el while repite la pregunta hasta que la condición cambie, y hasta que la condición sea falsa, no se va a ejecutar el resto del programa

```
CONDICIONAL
--
let numero = 0;

if (numero < 10) {

    numero++:
    numero++;
    document.write(numero)
}
---------
BUCLE
--
let numero = 0;

while (numero < 10) {
    numero++;
    document.write(numero + <br>)
} 
```

En el ejemplo anterior, el bucle se va a repetir hasta que la condición (numero < 10) sea falsa.

Dentro del bucle hay un operador (numero++), que se va a repetir hasta que “numero” alcanze 10.

*   **Sentencia Do While**
    

También hay otra opción para el bucle while, que es poner otra condición (do)antes del bucle.

```
do{
  numero++;
  document.write(numero + "<br>")
}

while(numero <= 6)
```

*   **Sentencia break:**
    

Se utiliza para terminar el bucle while

```
let numero= 0;

while(numero < 1000){
  numero++;
  document.write(numero);
  if (numero == 10) {
    break;
  }
}
document.write("fin")
```

*   **Sentencia for**
    

Es como el bucle while, pero con la diferencia de que nosotros le decimos cuantas veces se tiene que ejecutar o repetir el código. Pasa por 3 fases un bucle for:

**declaración e inicialización-** Definimos la variable, y esta es independiente del resto del programa por que se encuentra dentro de un bloque

**condición-** Le añadimos la condicion que queremos que se cumpla separado por ; de la declaracion.

**aumento o decremento-** Aumentamos de decrementamos el valor para que el bucle pueda tener fin

Es un bucle que consta de estas 3 partes para funcionar.

```
    decl----cond-----aument
for (let i = 0; i < 6; i++) {
  if (i == 12) {
    break;
  }
}
```

*   **Sentencia for in**
    

es exactamente igual que el bucle while, pero en este hay que determinar cuantas cueltas tiene que dar el bucle

el nucle while y el du while son indetertminados, el for es determinado

las sentencias for estan determinadas por el numero de veces que nosotros le digamos por eso sigue el programa

el bucle for tiene tres partes,

*   cuando las declaramos
    
*   cuando las inicializamos
    
*   cuando las iteramos(iterar es hacer lo mismo varias veces)
    

*   **Sentencia for of**
    

**– – – – – – – –**

*   **Sentencia break**
    
*   **Sentencia label**
    
*   **Sentencia continue**
    

La sentencia continue se utiliza en la misma posición que el break, pero esta en vez de finalizar el programa y pasar al siguiente blocke, lo que hace es saltarse un pedazo de codigo

```
for (let i = 0; i < 6; i++) {
  if (i == 12) {
    continue;
  }
}
```

## _**\--> FUNCIONES**_

**Definicion y usos**

\-Una función es una porción de código reutilizable, que se guarda con un nombre, y mas adelante en vez de escribir todo el código simplemente la llamas con el nombre

**Formas de crear funciones(y llamarlas)**

```
function saludar(){

respuesta = prompt ("¡hola Lucas! como fue tu dia");
if (respuesta == "bien") {
  alert("me alegro")
} else {
  alert("una pena")
}
}
saludar()
```

```
saludar = function(){

respuesta = prompt ("¡hola Lucas! como fue tu dia");
if (respuesta == "bien") {
  alert("me alegro")
} else {
  alert("una pena")
}
}
saludar()
```

Las funciones tienen dos partes,

**\-Donde las creamos:**

function saludar() {

}

**\-Donde las llamamos**

saludar()

**Return**

Se usa para que nos devuelva o nos retorne un valor

```
function saludar(){
  alert("hola");
  return 3;
}

let saludo = saludar();

document.write(saludo)
```

**parametros**

los parametros son variables que se declaran y crean dentro de una funcion

```
let num1 = 32;
let num2 = 12;

function suma(){
  let res = num1 + num2;
  document.write(res);  
}

suma()
```

para realizar la suma en este segundo ejemplo, lo que hacemos es declarar la funcion “suma“ con sus valores variables num1 y num2.

dentro de la funcion creamos una variable llamada res“, que contendra la suma de dos numeros.

llamamos document.write(res) para que se escriba en la web

ahora cada vez que llamemos a la funcion podremos sumar dos numeros

suma(22+22) = 44

```
function suma(num1,num2){
  let res = num1 + num2;
  document.write(res);
  document.write("<br>") 
}

suma(12,32)

suma(22,55)
```

```
function suma(num1,num2){
  let res = num1 + num2;
  return res
}


let resultado = suma (20,25);

document.write(resultado)  
```

```
function saludar(nombre){
  
  let frase = `hola ${nombre} ¿como estas?`
  document.write(frase)
  
}
saludar("mikel")


```

scope

funciones flecha

```
const saludar = function(nombre){
}

const saludar = (nombre)=>{
}
```

se sustituye function por la flechita

las funciones flecha pueden permitirse saltarse algunas normas strictas, como que si sono le asignas un valor a la funcion, puedes ponerla sin parentesis, y si solo va a ser una linea de codigo dentro de la funcion, se puede poner al lado.

```
const saludar = nombre => document.write(frase)

saludar("pedro")
```

ç

PROBLEMA 1

```
crear soluciones 2-0

A) un joven muy afortunado logro ganar el primer premio de la loteria...>

-Dejar pasar solo a los mayores de edad
-La primera persona que entre despues de las 2 AM, no paga

```

```

let free = false:

const validarCliente = (time)=>{ 
        let edad = prompt("¿cual es tu edad?");
        if (edad > 18) { 
                if (time >= 2 && time < 7 && free == false){
                    alert("podes pasar fratis porque sos la primer persona despues de las 2AM");
                    free = true;
                 else {
                        alert(`son las ${time}:00Hs y podes pasar, pero tenes que pagar la entra>
                }
} 

        } else { 
           alert("mira papu, sos menos de edad, por ende, no puedes entr>
        }
}

validarCliente(23);
validarCliente(24);
validarCliente(0.2);
validarCliente(0.6);
validarCliente(1);
validarCliente(2);
validarCliente(2.4);
```

Ejercicio 2

B) Cofla vuelve de la comisaria exausto y por lo cansado que estaba se fue a dormir…

Al otro dia comienzan las clases del ciclo basico de la universidad(por que cofla quiere ser origramador y se inscribio en la facultad de ingenieria para estudiar desarollo de foftware).

En su curso en total son 19 alumnos, pero surgio un problema que complico un poco a la facultad:

se rompió en sistema de registro de asistencias y durante los proximos 30 dias no se podrán hacer registros de datos de ningun tipo, por ende las clases no podrán comenzar hasta que esto este solucionado.

\-crear mini-sistema que nos permita registrar los alumnos que estan presentes (P) y ausentes (A) en clase.

\-Pasados los 30 días mostrar la situacion final de todos los alumnos (Nro total de presentes y ausentes)

\-Se puede tener un máximo de 10% de ausencias por semestre, si se tienen mas aclarar que esta reprobado

```
let cantidad = prompt("¿cuantos alumnos son?")
let alumnosTotales = [];

for (i = 0; i < cantidad; i++){
  alumnosTotales[i] = [prompt("nombre del alumno" +(i + 1)),0]
}

const tomarAsistencia = (nombre, p)=>{
  let presencia = prompt(nombre)
  if (presencia == "p" || presencia == "P") {
    alumnosTotales[i][1]++:
  }
}

for (i = 0; i < 30; i++){
  for (alumno in alumnosTotales) {
  tomarAsistencia(alumnosTotales[alumno])
  }
}

for (alumno in alumnosTotales) {
  let resultado = `${alumnosTotales[alumno][0]}:<br>
  _______Presentes: ${alumnosTotales[alumno][1]}<br>
  _______Ausencias: ${30 - alumnosTotales[alumno[1]]}
  `;
  if (30 - alumnosTotales[alumno][1] > 18) {
  resultado+= "<b style='color:red'>REPROBADO POR INASISTENCIA </b>"
  } else {
  resultado+= ""}
}

```

calculadora rapida

```
const sumar = (num1,num2)=>{
  return parseInt(num1) + parseInt(num2)
}
const resutar = (num1,num2)=>{
  return parseInt(num1) - parseInt(num2)
}
const multiplicar = (num1,num2)=>{
  return parseInt(num1) * parseInt(num2)
}
const dividir = (num1,num2)=>{
  return parseInt(num1) / parseInt(num2)
}

alert("¿Qué operacion deseas realizar"?);
let operación = prompt("1: suma, 2: resta, 3: multiplicar, 4: dividir");


if(operacion ==1) {
  let numero1 = prompt("primer numero para sumar");
  let numero2 = prompt("segundo numero para sumar");
  resultado = sumar(numero1,numero2)
  alert(`tu resultado es $(resultado)`);
}
else if(operacion ==2) {
  let numero1 = prompt("primer numero para sumar");
  let numero2 = prompt("segundo numero para sumar");
  resultado = restar(numero1,numero2)
  alert(`tu resultado es $(resultado)`);
}
else if(operacion ==3) {
  let numero1 = prompt("primer numero para sumar");
  let numero2 = prompt("segundo numero para sumar");
  resultado = multiplicar(numero1,numero2)
  alert(`tu resultado es $(resultado)`);
}
else if(operacion ==4) {
  let numero1 = prompt("primer numero para sumar");
  let numero2 = prompt("segundo numero para sumar");
  resultado = dividir(numero1,numero2)
  alert(`tu resultado es $(resultado)`);
}
else (operacion ==1) {
  alert("no se ah encontrado la operacion")
}
```

# **CAPITULO 3**

## PROGRAMACIÓN ORIENTADA A OBJETOS

En la programacion funcional inscribimos instruccion tras instruccion

pero en la programacion orientada a objetos trabajamos con una ideologia, es decir, tenemos el mismo paradigma como referencia, todo son objetos

Los objetos tienen dos conceptos que los definen

1.- las cualidades del objeto o sus caracteristicas(altura, color, bg, marca, velocidad min o max…)

2.- Las funcionalidades de un objeto(que arranque, que gire, que pite..) todo aquello que haga funcional a nuestro objeto

## **15) POO (Programación Orientada a Objetos)**

*   \-Definicion y usos
    
    *   Es un paradigma de la programacion
        
    *   nos sirve para programar objetos como lo ariamos en la vida real
        

## **16) Conceptos basicos de POO**

No se puede tener un objeto con el mismo nombre que la clase

1.  **Clase:** es como una plantilla que creamos, para que con esa plantilla podamos crear objetos, como una fabrica de objetos, y le definimos las cualidades
    
2.  **Objeto:** son creados y por lo tanto el resultado de las clases
    
3.  **Atributo**: son las propiedades, cualidades o características de un objeto
    
4.  **Método**: son las cosas o funcionalidades que puede realzar nuestro objeto, una funcion que esta dentro de una clase, se le llama metodo
    
5.  **Constructor**: es una particularidad que tienen las clases, que es una función obligatoria. Cuando creamos una clase, tenemos que crear un constructor, que va a construir las propiedades del objeto
    
6.  **Instanciacion**: cuando finalizamos todo, se puede decir que la clase esta instanciada, y emos instanciado un objeto
    

```
En el constructor tienes que definir que cosas tiene el objeto
deseado
This selecciona el objeto, y el nombre despues del . es el nombre de
la propiedad


class animal{
  constructor(especie,edad,color){
    this.especie = especie;
    this.edad = edad;
    this.color = color
    this.info = `Soy ${this.especie}, tengo ${this.edad} años,
    y soy de color ${this.color} fosforito`
  }
}

let perro = new animal("perro", 5,"marron");
let jirafa = new animal("jirafa", 14,"amarillo");
let cobaya = new animal("cobaya", 22,"gris");

document.write(perro.info + "<br>")
document.write(jirafa.info + "<br>")
document.write(cobaya.info)
```

```
class animal{
  constructor(especie,edad,color){
    this.especie = especie;
    this.edad = edad;
    this.color = color
    this.info = `Soy ${this.especie}, tengo ${this.edad} años,
    y soy de color ${this.color} fosforito`
  }
  verInfo(){
    document.write(this.info + "<br>")
  }
}

let perro = new animal("perro", 5,"marron");
let jirafa = new animal("jirafa", 14,"amarillo");
let cobaya = new animal("cobaya", 22,"gris");

perro.verInfo();
jirafa.verInfo();
cobaya.verInfo();
```

## **17) CARACTERÍSTICAS DE LA POO**

**Abstraccion** = Es intentar reducir lo más que podamos un objeto a las minimas caracteristicas

**Modularidad** \= es la capacidad de resolver un problema grande separandolo por partes

**Encapsulamiento** = consiste en hacer que toda la data, todos los datos, esten privados, concentrar los datos en un punto privado, para que no se pueda acceder desde cualquier lugar

**Polimorfismo** = Consiste en ver como un objeto se comporta diferente ante el mismo metodo

ej. si yo tengo un animal y le digo “caminar“, un perro anda distinto a un gato o un pato

## **18) Otros conceptos de la POO**

## **\-Herencia** - (extends)

es una clase que va a tomar todo lo que pueda hacer otra clase(heredar), y las propiedades de esa clase, y además agregarle cositas nuevas.

```
class Animal{
  constructor(especie,edad,color){
    this.especie = especie;
    this.edad = edad;
    this.color = color
    this.info = `Soy ${this.especie}, tengo ${this.edad} años,
    y soy de color ${this.color} fosforito`
  }
  verInfo(){
    document.write(this.info + "<br>")
  }
}

class Perro extends Animal{
  constructor(especie,edad,color,raza){
    super(especie,edad,color);
    this.raza = raza;
  }
}

let perro = new perro("perro", 5,"marron", "doberman");
let jirafa = new animal("jirafa", 14,"amarillo");
let cobaya = new animal("cobaya", 22,"gris");

perro.verInfo();
jirafa.ladrar();
cobaya.ladrar();
```

## **\-Metodos estáticos** - (static)

Es un metodo al que no le hace falta que la clase se defina para poder ser creado.

Se pone static delante del atributo y asi fuerza a que este se ejecute aun que no le pasemos los parametros.

```
class Perro extends Animal{
  constructor(especie,edad,color,raza){
    super(especie,edad,color);
    this.raza = raza;
  }
  static ladrar(){
    alert("¡WAW!");
  }
}
```

## **\-Metodos accesores -** (Getters, Setters)

El la mayoría de lenguajes de programación, los guetters y setters se utilizan para acceder a propiedades privadas o en caso de Javascript, a datos encapsulados

**\-Los Getters** son para obtener un valor

```
class Perro extends Animal{
  constructor(especie,edad,color,raza){
    super(especie,edad,color);
    this.raza = null;
  }
  set setRaza(newName){
    this.raza = newName;
  }
  
  get getRaza(){
    return this.raza;
  }
}
const perro = new Perro("perro", 5, "marron", "doberman")

perro.setRaza = "Pedro";

document.write(perro.getRaza)
```

**\-Los Setters** son para modificarlo o definirlo

```
class Perro extends Animal{
  constructor(especie,edad,color,raza){
    super(especie,edad,color);
    this.raza = null;
  }
  set setRaza(newName){
    this.raza = newName;
  }
}
const perro = new Perro("perro", 5, "marron", "doberman")

perro.setRaza = "Pedro";

document.write(perro.raza)
```

```
class animal{
  constructor(especie,edad,color){
    this.especie = especie;
    this.edad = edad;
    this.color = color
    this.info = `Soy ${this.especie}, tengo ${this.edad} años,
    y soy de color ${this.color} fosforito`
  }
  verInfo(){
    document.write(this.info + "<br>")
  }
  ladrar(){
    if (this.especie == "perro"){
      document.write("WAW <br>")
    } else {
      document.write("no puede ladrar, ya que es un " + this.especie + "<br>")
    }
  }
}

let perro = new animal("perro", 5,"marron");
let jirafa = new animal("jirafa", 14,"amarillo");
let cobaya = new animal("cobaya", 22,"gris");

perro.ladrar();
jirafa.ladrar();
cobaya.ladrar();
```

# _**PROBLEMAS DE COFLA 3**_

*   Mostrarle las características de los 3 moviles
    
*   Cada uno de ellos debe tener color, peso, resolución de pantalla, cámara y memoria ram
    
*   deben poder encender, reiniciar, tomar fotos, grabar.
    

PROBLEMA B

implementar todas estas cualidades en los modelos de alta gamma

Problema C

*   crear un sistema para decidir que app descargar
    
*   Debe contener la cantidad de descargas, puntuación y peso
    
*   se deben poder instalar, abrir, cerrar y desinstalar
    

A) Cofla entro a una tienda que vende celulares porque le parecio bastante bueno com,prarse un nievo celular. de todos los modelos que hay disponibles en la tienda, a cofla le llamron la atencion 3 telefonos especificamente.

El problema es que ningun vendedor sabe nada al respecto entonces no pueden recomendarle nada… pero claro, el antes de comprar esos celulares quiere ver las características de cada uno para comprarlos, aquí entramos nosotros

CREAR SOLUCIONES

*   Crear un sistema para mostrarle a cofla las características de los 3 celulares
    
*   Cada celular debe tener color, peso, resolución, cámara, ram
    
*   Cada celular debe encender, apagar, tomar fotos y grabar
    

Cofla 1

```
class movil{
    constructor(modelo, color, peso, tamaño, rdc, ram){
        this.modelo = modelo;
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño;
        this.resolucionDeCamara = rdc;
        this.memoriaRam = ram;
        this.encendido = false;
        this.info = `Este modelo es el ${this.modelo}, entre sus características destacan su cámara de ${this.resolucionDeCamara},
        su asombrosa memoria ram de ${this.memoriaRam}, la resolución es de ${this.tamaño}, el peso de ${this.peso} 
        y solamente tenemos el color ${color} en stock.`
    }
    verInfo(){
        document.write(this.info + "<br>");
    }
    prender(){
        if (this.encendido == false){
            alert("celular prendido");
            this.encendido = true;
        } else {
            alert("el celular esta apagado")
            this.encendido =false;
        }
    }

    reiniciar(){
        if (this.encendido == true){
            alert("reiniciandp celular")
        } else {
            alert("el celular está apagado")
        }
    }

    tomarFoto(){
        alert(`foto tomada en una resolucion de: ${this.resolucionDeCamara}`)
    }

    tomarVideo(){
        alert(`Grabando video en ${this.resolucionDeCamara}`)
    }
    movilInfo(){
        return `
        modelo: <b>${this.modelo}</b><br>
        Color: <b>${this.color}</b><br>
        Peso: <b>${this.peso}</b><br>
        Tamaño: <b>${this.tamaño}</b><br>
        Resolución de Cámara: <b>${this.resolucionDeCamara}</b><br>
        Memoria Ram: <b>${this.memoriaRam}</b><br><br>
        Info: ${this.info} <br><br><br>
        `;
    }

}

const samsung = new movil("samsung", "rojo", "400g", "1900x1080", "48Mpx", "8GB");
const iphone = new movil("iphone","azul", "520g", "1900x1080", "64Mpx", "6GB");
const motorola = new movil("motorola","rosa", "630g", "1200x980", "16Mpx", "2GB");



/* samsung.prender();
samsung.tomarFoto();
samsung.tomarVideo();
samsung.reiniciar(); */

document.write(`
    ${samsung.movilInfo()} <br>
    ${iphone.movilInfo()} <br>
    ${motorola.movilInfo()} <br>
`);
```

* * *

Cofla 2

```
class movil{
    constructor(modelo, color, peso, tamaño, rdc, ram){
        this.modelo = modelo;
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño;
        this.resolucionDeCamara = rdc;
        this.memoriaRam = ram;
        this.encendido = false;
        this.info = `Este modelo es el ${this.modelo}, entre sus características destacan su cámara de ${this.resolucionDeCamara},
        su asombrosa memoria ram de ${this.memoriaRam}, la resolución es de ${this.tamaño}, el peso de ${this.peso} 
        y solamente tenemos el color ${color} en stock.`
    }
    verInfo(){
        document.write(this.info + "<br>");
    }
    prender(){
        if (this.encendido == false){
            alert("celular prendido");
            this.encendido = true;
        } else {
            alert("el celular esta apagado")
            this.encendido =false;
        }
    }

    reiniciar(){
        if (this.encendido == true){
            alert("reiniciandp celular")
        } else {
            alert("el celular está apagado")
        }
    }

    tomarFoto(){
        alert(`foto tomada en una resolucion de: ${this.resolucionDeCamara}`)
    }

    tomarVideo(){
        alert(`Grabando video en ${this.resolucionDeCamara}`)
    }
    movilInfo(){
        return `
        modelo: <b>${this.modelo}</b><br>
        Color: <b>${this.color}</b><br>
        Peso: <b>${this.peso}</b><br>
        Tamaño: <b>${this.tamaño}</b><br>
        Memoria Ram: <b>${this.memoriaRam}</b><br><br>
        Resolución de Cámara: <b>${this.resolucionDeCamara}</b><br>
        Info: ${this.info} <br><br><br>
        `;
    }

}

class CelularAltaGama extends movil{
    constructor(color,peso,tamaño,rdc,ram,rdce){
        super(color,peso,tamaño,rdc,ram);
        this.resolucionDeCamaraExtra = rdce;
    }
    grabarVideoLento(){
        alert("estas grabando video lento");
    }
    reconocimientoFacial(){
        alert("Iniciando el reconocimiento facial");
    }
    infoAltaGama(){
        return this.movilInfo() + `Resolución de Cámara trasera: ${this.resolucionDeCamaraExtra}`;
    }
}

/* const samsung = new movil("samsung", "rojo", "400g", "1900x1080", "48Mpx", "8GB");
const iphone = new movil("iphone","azul", "520g", "1900x1080", "64Mpx", "6GB");
const motorola = new movil("motorola","rosa", "630g", "1200x980", "16Mpx", "2GB");
 */

/* samsung.prender();
samsung.tomarFoto();
samsung.tomarVideo();
samsung.reiniciar(); */


cel1 = new CelularAltaGama("rojo", "130g", "5,2", "4K", "12GB", "full-HD");
cel2 = new CelularAltaGama("negro", "143g", "6", "8K", "16GB", "full-HD");


document.write(`
    ${cel1.infoAltaGama()} <br>
    ${cel2.infoAltaGama()} <br>
`);
```

* * *

Cofla 3

```
class App {
    constructor(nombre,descargas,puntuacion,peso){
        this.nombre = nombre;
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }
    abrir(){
        if(this.iniciada == false && this.instalada == true) {
            this.iniciada = true;
            alert("app encendida");
        }
    }
    cerar() {
        if (this.iniciada == true && this.instalada == true) {
            this.iniciada = false;
            alert("app cerrada");
        }
    }
    instalar() {
        if (this.instalada == false) {
            this.instalada = true;
            alert("aplicacion instalada con exito");
        }
    }
    desinstalar() {
        if (this.instalada == true) {
            this.instalada = false;
            if (prompt("¿Desea eliminar esta app?") == "si"){
                alert("app desinstalada con exito");
            } else {
                alert("app no desinstalada");
            }
        }
    }
    appInfo() {
        return `
        Nombre: <b>${this.nombre}</b><br>
        Descargas: <b>${this.descargas}</b><br>
        Puntuación: <b>${this.puntuacion}</b><br>
        Peso: <b>${this.peso}</b><br>
        `;
    }
}

Facebook = new App ("Facebook","1.999", "4.8", "100MB");
vscode = new App ("vscode","300", "5", "34MB");
twiter = new App ("twiter","2.300", "3", "50MB");
instagram = new App ("instagram","10.000", "4.9", "230MB");


document.write(`
    ${Facebook.appInfo()} <br>
    ${vscode.appInfo()} <br>
    ${twiter.appInfo()} <br>
    ${instagram.appInfo()} <br>
`);

Facebook.instalar();
Facebook.abrir();
Facebook.cerar();
Facebook.desinstalar();
```

# **CAPITULO 4**

**20) METODOS DE CADENAS**

**\-.concat()** - junta dos o mas cadenas y retorna una nueva.

```
let cadena = "cadena de prueba";
let cadena2 = " cadena 2"

resultado = cadena.concat(cadna2);

document.write(resultado); // "cadena de prueba cadena 2"
```

* * *

**\-.startsWith()** - verifica si una cadena comienza con los caracteres de la otra cadena, si la cadena comienza con los mismos caracteres devuelve true, sino devuelve false.

```
let cadena = "cadena de prueba";
let cadena2 = "cadena";
resultado = cadena.startWith(cadena2);

document.write(resultado); // true
```

* * *

**\-.endsWith()** - verifica si una cadena termina con los caracteres de la otra cadena, si la cadena termina con los mismos caracteres devuelve true, sino devuelve false.

```
let cadena = "cadena de prueba";
let cadena2 = "prueba"

resultado = cadena.endWith(cadena2);

document.write(resultado); // true
```

* * *

**\-.includes()** - verifica si una cadena se encuentra dentro de otra cadena, si se encuentra dentro devuelve true, sino devuelve false.

```
let cadena = "sigo a mk-code en instagram";
let cadena2 = "mk-code"

resultado = cadena.includes(cadena2);
resultado = cadena.includes("mk-code"); // alternativa

document.write(resultado); // true
```

* * *

\-**.indexOf()** \- devuelve la posición en la que se encuentra la primera letra de la cadena solicita, si no existe, devuelve -1.

```
let cadena = "sigo a mk-code en instagram";

resultado = cadena.indexOf("en instagram");

document.write(resultado); // 16 (la "e" de "en instagram", esta en esta posicion)
```

* * *

**\-.lastIndexOf()** - devuelve la posición en la que se encuentra la primera letra de la cadena solicita, pero en caso de que halla varias palabras iguales, se va a la primera letra de la ultima palabra.Si no existe, devuelve -1.

```
let cadena = "instagram instagram instagram";

resultado = cadena.lastIndexOf("instagram");

document.write(resultado); // 21 (la "i" del ultimo "instagram", esta en esta posicion)

document.write(cadena[21] + cadena[22] + cadena[23] + cadena[24] + cadena[25]); //insta
```

* * *

* * *

**\-.padStart() \[propuesta de Estandar\]** - Rellenar cadena al principio con los caracteres deseados, estos se repiten hasta alcanzar el numero de cáracteres indicados.(primero se asigna el numero de caracteres y luego el caracter con el que rellenaremos).

```
let cadena = "abc";
let cadena2 = "":

resultado = cadena.padStart(10, "1");

coument.write(resultado); // 1111111abc
```

* * *

**\-.padEnd() \[propuesta de ECMA\]** - Rellenar cadena al final con los caracteres deseados, estos se repiten hasta alcanzar el numero de cáracteres indicados.(primero se asigna el numero de caracteres y luego el caracter con el que rellenaremos).

```
let cadena = "abc";
let cadena2 = "":

resultado = cadena.padEnd(10, "12");

coument.write(resultado); // abc1212121
```

* * *

**\-.repeat()** - devuelve la misma cadena pero repetida la cantidad que le indiquemos

```
let cadena = "abc";

resultado = cadena.repeat(3);

coument.write(resultado); // abc abc abc
```

* * *

* * *

**\-.split() -** Divide la cadena por los lugares que le indiquemos con un cáracter, formando un array de varios strings.

```
let cadena = "Hola-como-estas ";

resultado = cadena.split("como");


docoument.write(resultado); // Hola,estas
docoument.write(resultado[1]); // Hola
docoument.write(resultado[2]); // estas
```

* * *

**\-.substring() -** Nos retorna un pedazo de la cadena que seleccionamos, marcando la primera y ultima posicion de los caracteres que deseemos. crea un nuevo string en base al anterior

```
let cadena = "ABCDEFG";

resultado = cadena.substring(0,2);

document.write(resultado); // AB
```

* * *

**\-.toLowerCase()** - convierte una cadena a minúscula.

```
let cadena = "ABCDEFG";

resultado = cadena.toLowerCase();

document.write(resultado); // abcdefg
```

* * *

**\-.toUpperCase() -** Convierte una cadena a mayuscula.

```
let cadena = "a maría se le escapo un pedo";

resultado = cadena.toUpperCase();

document.write(resultado); // A MARÍA SE LE ESCAPÓ UN PEDO
```

* * *

**\-.toString() -** devuelve el parámetro que le pasemos como un string.

```
let cadena = 55;
let cadena2 = true;

resultado = cadena.toString();
resultado2 = cadena2.toString();

document.write(resultado); // "55"
document.write(resultado2); // "true"
```

* * *

**\-.trim()** - elimina los espacios en blanco al principio y al final de una cadena

```
let cadena = "   pedro   "; // 

let resultado = cadena;

document.write(resultado.length); // 11 con espacios
----
let cadena = "   pedro   ";

let resultado = cadena.trim();

document.write(resultado.length); // 5 sin espacios
```

* * *

**\-.trimEnd()** - elimina los espacios en blanco al final de una cadena.

**\-.trimStart()** - elimina los espacios en blanco al principio de una cadena.

* * *

* * *

## **21) METODOS DE ARRAYS**

\_\_\_\_\_\_\_\_\_ Transformadores \_\_\_\_\_\_\_\_\_\_

**\-.pop()** - elimina el ultimo elemento del aray y lo devuelve.

```
let nombres = ["pedro", "maría", "jorge"];

let resultado = nombres.pop();

document.write(resultado + "<br>"); // jorge
document.write(nombres) // pedro, maría
```

* * *

**\-.shift()** - elimina el primer elemento de un array y lo devuelve.

```
let nombres = ["pedro", "maría", "jorge"];

let resultado = nombres.shift();

document.write(resultado + "<br>"); // pedro
document.write(nombres) // maría, jorge
```

* * *

**\-.push** \- agrega un elemento al array al final de la lista.

```
let nombres = ["pedro", "maria", "jorge"];

document.write(nombres + "<br>");

let resultado = nombres.push("juancito");

document.write(nombres);
```

* * *

**\-.reverse** - invierte el orden de los elementos de un array

```
let numeros = [1,2,3,4,5];

document.write(numeros + "<br>"); //1,2,3,4,5

let resultado = numeros.reverse();

document.write(resultado); // 5,4,3,2,1
```

* * *

**\-unshift** \- agrega uno o más elementos al principio de un array. en el parametro primero le decimos a partir de que posicion voy a modificar los elementos

```
let numeros = [3,4,5];

document.write(numeros + "<br>");

numeros.unshift(0,1,2);

document.write(numeros); // 0,1,2,3,4,5
```

* * *

**\-.sort** - ordena los elementos de un arreglo(array) localmente, y devuelve el array ordenado alfabeticamente.

```
let numeros = [1,3,9.4,2,5,8,6,7]

document.write(numeros + "<br>");

numeros.sort();

document.write(numeros); // 1,2,3,4,5,6,7,8,9
```

* * *

**\-.splice** - cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.

el primer parametro a marcar en el metodo es el (start), donde comenzamos, primero le marcamos en los parametros del método la primera posicion desde la cual empieza, y despues de la coma cuántos elementos del array queremos borrar (ola.splice(1.3)), Esto borrara 3 posiciones a partir de la 2ª.

Luego de seguido tienes que agregar lo que quieras añadir.

Al eliminar y añadir algo nuevo, lo añadido reemplaza la posición de los datos borrados.

```
let palabras = ["abecedario", "manzana", "pedro", "dedo","bobo"]

palabras.splice(1,3, "alberto");

document.write(palabras); // abecedario,alberto,bobo
```

* * *

* * *

\_\_\_\_\_\_\_\_\_ Accesores \_\_\_\_\_\_\_\_\_\_

**\-.join()** - une todos los elementos de una matriz (u objeto similar) en una cadena de texto “strings“ y la devuelve. Es como el metodo (.toString()), pero aqui, en el párametro le marcamos por qué caracteres queremos que estén separados los strings del array.

```
let numeros = [1,2,3,4,5]

let resultado = numeros.join(" - ")

document.write(resultado); // 1 - 2 - 3 - 4 - 5
```

```
let numeros = ["1,2,3"];
let resultado = numeros.join("<br>numero: ");

document.write("numero: " + resultado);
numero: 1
numero: 2
numero: 3
```

**\-. slice()** - devuelve una parte del array, empezando por el elemento que le marquemos, hasta el segundo que le marquemos (ultimo no incluido). para seleccionar todos solo hay que dejar el segundo parámetro vacío.

```
let numeros = ["ola", "adios", "perales", batrofio"]

let resultado = numeros.slice(0,2);

document.write(resultado); // ola, adios
```

\-.Métodos ya vistos en cadenas: **toString(), indexOf(), lastIndexOf(), includes().**

\_\_\_\_\_\_\_\_\_ De repetición \_\_\_\_\_\_\_\_\_\_

**\-.filter()** - crea un nuevo array con todos los elementos que cumplan la condición.

```
let numeros = ["ola", "adios", "perales", batrofio"]

numeros.filter(numero => document.write(numero + "<br>""))

o

numeros.filter(function(numero){
  document.write(numero + "<br>")
});

// ola
  adios
  perales
  batracio
  ----
```

Este metodo con funcion de acontinuacion, solo muestra las palabras de más de 4 caracteres

```
let numeros = ["ola", "adios", "perales", batrofio"]

resultado = numeros.filter(numero => numero.length > 4);

document.write(resultado)
```

**\-.forEach()** - ejecuta la función indicada una vez por cada elemento del array. Es prácticamente igual que el metodo .filter(), pero con menos funcionalidades

* * *

* * *

## **22) OBJETO MATH - BÁSICO**

\_\_\_\_\_\_\_\_\_ **METODOS**\_\_\_\_\_\_\_\_\_\_

*   **sqrt() -** Devuelve la raíz cuadrada positiva de un numero
    
*   **cbrt() -** Devuelve la raíz cubica de un numero
    
*   **max() -** Devuelve el numero más grande
    
*   **min() -** Devuelve el número más pequeño
    
*   **random() -** Devuelve un numero decimal pseudo-aleatorio entre 0 y 1.
    
*   ```
    numero = Math.random()*100;
    numero = numero.toString();
    num = numero[0] + numero[1]; //para obtener los 2 primeros dígitos
    if(numero[1] == ".") {
      num = numero[0]; // para que no salgan un . en el resultado(1.)
    }
    
    document.write(num);
    ```
    
*   **round() -** Devuelve el valor de un número redondeado al numero entero más cercano, sin decimales
    
*   ```
    let numero = Math.random()*100;
    numero = Math.round(numero);
    
    document.write(numero);
    ```
    
*   **fround() -** Devuelve el numero redondeado hacia abajo, aun que sea .9
    
*   ```
    for (var i = 0; i < 100000; i++) {
    
      let numero = Math.random()*99;
      numero = Math.floor(numero+1);
      
      document.write(numero + "<br>");
    }
    // esto ejecuta 100000 numeros randoms redondeados
    ```
    
*   **floor() -** Devuelve el mayor entrero menor que o igual a un número.
    
*   **trunc() -** Elimina los decimales
    

**\_\_\_\_\_\_\_\_\_ PROPIEDADES \_\_\_\_\_\_\_\_\_\_**

*   **PI**
    
*   **SQRT1\_2**
    
*   **SQRT2**
    

*   **E**
    
*   **LN2**
    
*   **LN10**
    
*   **LOG2E**
    
*   **LOG10E**
    

* * *

# _**PROBLEMAS DE COFLA 4**_

**PROBLEMA A**

Implementar nevas funciones matemáticas a la calculadora : raiz cuadrada, raíz cúbica y potencias

**PROBLEMA B**

*   Que la funcion 1 nos devuelva:
    

\- Profesor asignado

\- Nombre de los alumnos

*   Que la función 2 nos indique en cuantas clases esta cofla
    
*   Nombre de esas clases y sus profesores
    

**PROBLEMA C**

*   Preguntarle en qué materias se quiere inscribir
    
*   Si ya hay 20 inscritos, negarle la inscripción
    
*   Si hay menos de 20 inscritos, inscribirlo y añadirlo a la lista de alumnos
    

* * *

* * *

**PROBLEMA A)**

Cofla ya esta terminando el primer semestre del primer ciclo, la tarea que debe realizar es mucho más avanzada que la que tenía antes, ahora también necesita calcular potencias, raízes cuadradas y cúbicas.

Crear soluciones:

\- Perfeccionar calculadora para poder implementar las funciones.

* * *

```
class Calculadora {
    constructor(){

    }
  sumar(num1,num2){
    return parseInt(num1) + parseInt(num2)
  }
  restar(num1,num2){
    return parseInt(num1) - parseInt(num2)
  }
  multiplicar(num1,num2){
    return parseInt(num1) * parseInt(num2)
  }
  dividir(num1,num2){
    return parseInt(num1) / parseInt(num2)
  }
  potenciar(num,exp){
    return num**exp
  
  }
  rcuadr(num){
    return Math.sqrt(num)
  }
  rcubic(num){
    return Math.cbrt(num)
  }
}

const calculadora = new Calculadora(); 

  alert("¿Qué operacion deseas realizar");
  let operación = prompt("1: suma, 2: resta, 3: multiplicar, 4: dividir, 5: potenciar, 6: rcuadrada, 7: rcubica");
  
  
  if(operación ==1) {
    let numero1 = prompt("primer numero para sumar");
    let numero2 = prompt("segundo numero para sumar");
    resultado = calculadora.sumar(numero1,numero2)
    alert(`tu resultado es ${resultado}`);
  }
  else if(operación == 2) {
    let numero1 = prompt("primer numero para restar");
    let numero2 = prompt("segundo numero para restar");
    resultado = calculadora.restar(numero1,numero2)
    alert(`tu resultado es ${resultado}`);
  }
  else if(operación == 3) {
    let numero1 = prompt("primer numero para multiplicar");
    let numero2 = prompt("segundo numero para multiplicar");
    resultado = calculadora.multiplicar(numero1,numero2)
    alert(`tu resultado es ${resultado}`);
  }
  else if(operación == 4) {
    let numero1 = prompt("primer numero para dividir");
    let numero2 = prompt("segundo numero para dividir");
    resultado = calculadora.dividir(numero1,numero2)
    alert(`tu resultado es ${resultado}`);
  } 
  else if(operación == 5) {
    let numero1 = prompt("numero a potenciar");
    let numero2 = prompt("exponente");
    resultado = calculadora.potenciar(numero1,numero2)
    alert(`tu resultado es ${resultado}`);
  }
  else if(operación == 6) {
    let numero1 = prompt("primer numero para enraizar");
    resultado = calculadora.rcuadr(numero1)
    alert(`tu resultado es ${resultado}`);
  }
  else if(operación == 7) {
    let numero1 = prompt("primer numero para enraizar cubicamente");
    resultado = calculadora.rcubic(numero1)
    alert(`tu resultado es ${resultado}`);
  }
  
  else { 
    alert("no se ah encontrado la operacion");
  }
```

* * *

* * *

Problema B) La facultad de cofla esta por comenzar y ya las 12 materias de la carrera tienen asignado un profesor y todos los alumnos que se anotaron dichas clases, pero necesitamos ver esto mas ordenadamente.

CREAR SOLUCIONES:

\-CREAR FUNCION QUE AL PASARLE COMO PARAMETRO LA MATERIA NOS DEVELVA:

*   profesor asignado
    
*   el nombre de todos los alumnos
    

\-CREAR FUNCION QUE NOS DIGA EN CUANTAS CLASES ESTÁ COFLA

\-NOMBRAR LAS CLASES EN LAS QUE ESTÁ Y LOS PROFESORES DE CADA UNA

* * *

```
const obtenerInformacion = (materia)=>{
    materias = {
        fisica: ["Perez", "pedro", "juan", "pepito", "cofla", "maria"],
        programacion: ["Dalto", "pedro", "juan", "pepito", "cofla","maria"],
        logica: ["Rodriguez", "pedro", "juan", "pepito", "cofla", "maria"],
        quimica: ["Hernandez", "pedro", "juan", "pepito", "cofla",]
    }
    if (materias[materia] !== undefined) {
        return [materias[materia], materia, materias];
    } else {
        return materias;
    }
}


const mostrarInformacion = (materia)=>{
    let informacion = obtenerInformacion(materia);

if (informacion !== false) {
    let profesor = informacion[0][0];
    alumnos = informacion[0];
    alumnos.shift();
    document.write(`el profesor de <b>${informacion[1]}</b> es: <b style="color:red">${profesor}</b> <br>
        Los alumnos son: <b style="color:blue">${alumnos}</b>  <br><br>
        `);
}
}

const cantidadDeClases = (alumno)=>{
    let informacion = obtenerInformacion();
    let clasesPresentes = [];
    let cantidadTotal = 0;
    for (info in informacion) {
        if (informacion[info].includes(alumno)) {
            cantidadTotal++;
            clasesPresentes.push(" " + info);
        }
    }
    return `<b style="color:blue">${alumno}</b> está en <b>${cantidadTotal} clases:</b> <b style="color:green">${clasesPresentes}</b><br><br>
    `;
}



mostrarInformacion("fisica");
mostrarInformacion("quimica");
mostrarInformacion("programacion");
mostrarInformacion("logica");

document.write(cantidadDeClases("cofla"))
document.write(cantidadDeClases("maria"))
```

* * *

PROBLEMA C) Cofla ya vió las 12 materias en las cual se va a inscribir asi que en tres dias lo hara, el problema es que se rompió el sistema de inscripciones.

CREAR SOLUCIONES:

\-Crear una funcion para preguntarle a cofla en que materia se quiere inscribir.

– Si ya hay 20 alumnos anotados en la materia negarle la inscripcion.

– Si hay menos de 20 alumnos inscribir a cofla y añadirlo a la lista de alumnos.

```
let materias = {
        fisica: ["Perez", "pedro", "juan", "pepito", "cofla", "maria"],
        programacion: ["Dalto", "pedro", "juan", "pepito", "cofla","maria"],
        logica: ["Rodriguez", "pedro", "juan", "pepito", "cofla", "maria"],
        quimica: ["Hernandez", "pedro", "juan", "pepito", "cofla",]
    }
const inscribir = (alumno,materia)=>{
    personas = materias[materia];
    if (personas.length >= 21) {
        document.write(`lo siento <b>${alumno}</b>, las clases de <b>${materia}</b> ya estan llenas <br><br>`);
    } else {
        personas.push(alumno);
        if (materia == "fisica") {
            materias = {
                fisica: personas,
                programacion: materias["programacion"],
                logica: materias["logica"],
                quimica: materias["quimica"]
            }
        }
        else if (materia == "programacion") {
            materias = {
                fisica: materias["fisica"],
                programacion: personas,
                logica: materias["logica"],
                quimica: materias["quimica"]
            }
        }
        else if (materia == "logica") {
            materias = {
                fisica: materias["fisica"],
                programacion: materias["programacion"],
                logica: personas,
                quimica: materias["quimica"]
            }
        }
        else if (materia == "quimica") {
            materias = {
                fisica: materias["fisica"],
                programacion: materias["programacion"],
                logica: materias["logica"],
                quimica: personas
            }
        }
        document.write(`felicidades ${alumno}, te has oinscrito a ${materia} correctamente`);
    }

}

document.write(materias["fisica"] + "<br>")
inscribir("peleon", "fisica");
inscribir("locote", "fisica");
inscribir("gambichu", "fisica");
inscribir("peleon", "fisica");
inscribir("locote", "fisica");
inscribir("gambichu", "fisica");
inscribir("peleon", "fisica");
inscribir("locote", "fisica");
inscribir("gambichu", "fisica");
inscribir("peleon", "fisica");
inscribir("locote", "fisica");
inscribir("gambichu", "fisica");
inscribir("peleon", "fisica");
inscribir("locote", "fisica");
inscribir("gambichu", "fisica");
inscribir("peleon", "fisica");
inscribir("locote", "fisica");
inscribir("gambichu", "fisica");
inscribir("peleon", "fisica");

document.write("<br>" + materias["fisica"])

```

* * *

* * *

CAPITULO 4

26) Console

\--------------------- funciones de registro

*   **\-assert()** - aparece un mensaje de error en la consola si la afirmacion es falsa. Si la afirmacion es verdadera, no paparecerá nada. (NO ESTANDAR).
    
*   **clear()** - limpiar consola
    
*   **error()** - muestra un mensaje de error en la consola web
    
*   **info()** - emite un mensaje informativo en la consola web. En firefox y en chrome se muestra un pequeño icono “i“ junto a estos elementos en el registro de consola web.
    
*   **log()** - muestra un mensaje en la consola web (o del interprete de JS).
    
*   **table()** - esta funcion toma un argumento obligatorio: data, que debe ser un array o un objeto, y un parametro adicional: columns, y nos muestra una tabla en la consola
    
*   **warn()** - imprime un mensaje de advertencia en la consola web.
    
*   **dir() -** despliega una lista interactiva de las propiedades del objeto JavaScript especificado. \[NO ESTANDAR\]
    

\--------------------- funciones de conteo

* * *

INCOMPLETO

* * *

* * *

**DOM (Document Objet Model)**

**Definición:**

Es como una interfaz que contiene todos los objetos estandares que nos permiten representar un documento HTML, XML, XHTML.

A su vez tiene otra interfaz que nos permite decir que cosa combina con cada cosa, y otra que nos permite trabajarla con un lenguaje como JavaScript.

![](https://diavlo.atlassian.net/wiki/download/attachments/360463/Document.jpg?api=v2)

**TIPOS DE NODOS:**

*   Nodos - **un nodo** en el DOM **es cualquier etiqueta del body**, como un parrafo, el mismo body o incluso las etiquetas de una lista.
    
    *   Document: **el nodo document es el nodo raíz**, a partir del cual derivan el resto de nodos.
        
    *   Element: nodos definidos por etiquetas HTML.
        
    *   Text: el texto dentro de un nodo element se considera un nuevo nodo hijo de tipo text.
        
    *   Attribute: los atributos de las etiquetas definen nodos, (en JavaScript no los veremos como nodos, sino como informaciono asociada al nodo del tipo element)
        
    *   Comentarios y otros: los comentarios y otros elementos como las declaraciones doctype en cabecera de los documentos HTML generan nodos
        
        ![](https://diavlo.atlassian.net/wiki/download/attachments/360463/12+Node+Types+important+NodeType+Named+Constant+1+ELEMENT_NODE+2.jpg?api=v2)
        

**28) document. - Métodos de Selección de elementos**

document. es una interfaz del DOM

– getElementById() - selecciona un elemento por ID

```
parrafo = document.getElementById("parrafo")

document.write(parrafo);
```

– getElementsByTagName() - Selecciona todos los elementos que coincidan con el nombre de la etiqueta especificada.

```
parrafo = document.getElementsByTagsName("p")

document.write(parrafo[1]);
```

– querySelector() - Devuelve el primer elemento que coincida con el grupo especificado de selectores.

```
parrafo = document.querrySelector(".parrafo")  //.class

document.write(parrafo);
---
parrafo = document.querrySelector("#parrafo") //#id

document.write(parrafo);
```

cuando querySelector selecciona varios nodos o elementos, aparece una NodeList, que es una lista con todos los elementos seleccionados, es similar a un array pero nos trae más problemas

– querySelectorAll() - Devuelve todos los elementos que coinciden con el grupo especificado de selectores.

```
parrafo = document.querrySelectorAll(".parrafo") 

document.write(parrafo[3]);
```

29) METODOS PARA DEFINIR, OBTENER Y ELIMINAR ATRIBUTOS.

– setAttribute() - Modifica el valor de un atributo

```
<input type="range" class=".rangoEtario"></input>
-------
const rangoEtario = document.querySelector(".rangoEtario");

rangoEtario.setAttribute("type, text")
```

El primer valor es el que queremos modificar, el segundo el que implementaremos.

– getAttribute() - Obtiene el valor de un atributo

```
const rangoEtario = document.querySelector(".rangoEtario");

document.write(rangoEtario.getAttribute("type, text"))
---
const rangoEtario = document.querySelector(".rangoEtario");

valorDelAtributo = rangoEtario.getAttribute("type")

document.write(valorDelAtributo)
```

– removeAttribute() - Remueve el valor de un atributo

```
<input type="range" class=".rangoEtario"></input>
-------
const rangoEtario = document.querySelector(".rangoEtario");

rangoEtario.removeAttribute("type)
```

* * *

* * *

30) ATRIBUTOS GLOBALES

Todos los elementos HTML tienen estos atributos.

– class - lista de clases del elemento separadas por espacios

– contentEditable - indica si el elemento puede ser modificable por el usuario(bool)

```
const titulo = document.querySelector(".titulo");

titulo.setAttribute("contentEditable", "true")
```

con ese codigo puedes editar el titulo o otras etiquetas desde el lado del usuario

* * *

– dir - indica la direccion del texto

```
const titulo = document.querySelector(".titulo");

titulo.setAttribute("dir", "ltr") // left to right
titulo.setAttribute("dir", "rtl") // right to left
```

– hidden - oculta el elemento del html solo con poner hidden de atributo.

```
const titulo = document.querySelector(".titulo");

titulo.setAttribute("hidden")
```

– id - define un identificador único.

– style - contiene declaraciones de estilo CSS para ser aplicados al elemento

– tabindex - permite seleccionar con la tecla TAB elementos, y el orden en el que quieres que se desplazen los usuarios

```
const titulo = document.querySelector(".titulo");

titulo.setAttribute("tabIndex", "3")
titulo.setAttribute("tabIndex", "3")
titulo.setAttribute("tabIndex", "3")
```

– title - contiene un texto con informacion relacionada al elemento al que pertenece cuando pasamos el mouse por encima del elemento.

```
const titulo = document.querySelector(".titulo");

titulo.setAttribute("title", "jajaja xd")
```

**31) ATRIBUTOS DE INPUTS**

– className - afecta al valor dentro de “class”

```
<input type="text" class="input-normal"><br><br>

const input = document.querySelector(".input-normal")

document.write(input.className)
```

– value - te muestra el texto o valor dentro del input

```
<input type="text" class="input-normal"><br><br>

const input = document.querySelector(".input-normal")

document.write(input.value)
```

– type - cambia el tipo de atributo del imput

```
<input type="text" class="input-normal"><br><br>

const input = document.querySelector(".input-normal")

input.type = "range"
```

– accept - sirve para especificar el tipo de extensión que tiene que tener el archivo a subir(.mp4, .jpg…)

```
<input type="file" class="input-normal"><br><br>

const input = document.querySelector(".input-normal")

input.accept = "image/png"
```

– form - nos permite redirigir un input hacia un formulario mediante la ID

```
<form id="formulario">
  <input type="text" name="">
  <input type="submit" name="">
</form>
  <input type="submit" form"formulario">
```

– minlength - Es la minima cantidad de caracteres que tiene que tener un input, tipo como el aviso que sale en las contraseñas

```
<form>
  <input type="text" class="input-normal"><br><br>
  <input type="submit">
<form>

const input = document.querySelector(".input-normal")

input.minLength = "4"
----
input.SetAttribute("minlength", "4")
```

– placeholder - es el texto de prueba que rellena un input antes de que escribamos algo

```
<input type="text" class="input-normal">

const input = document.querySelector(".input-normal")

input.placeholder = "que pasa mami"
```

– required - Es para decidir si un campo de un formulario ees obligatorio o no

```
<input type="text" class="input-normal">

const input = document.querySelector(".input-normal")

input.required = " ";
```

Puedes hackear una página web con una seguridad débil si en el codigo fuente de la página, te encuentras con un `input.required = " ";` y un espacio vacio

**32) ATRIBUTO STYLE**

Es otro atributo global que nos permite modificar algo de css del atributo

Al modificar el css de un elemento, tienes que escribir en camelCase en vez de con “-“ (background-color – backgroundColor)

```
<input type="text" class="titulo">

const titulo = document.querySelector(".titulo")

titulo.style.color = "blue";
titulo.style.backgroundColor = "black";
```

Diferencias entre .element y .document

33) Clases, classList y Metodos de classList

.classList es una particularidad que tienen las clases de los elementos y tiene diferentes metodos

– add() - añade una clase

```
<input class="titulo" type="text">

const titulo = document.querySelector(".titulo");

titulo.classList.add("grande")
```

– remove() - remueve una clase

```
<input class="titulo" type="text">

const titulo = document.querySelector(".titulo");

titulo.classList.remove("grande")
```

– item() - devuelve la clase del indice especificado (no afecta a la clase, solo nos devuelve la posicion de la clase que le pedimos)

```
<input class="titulo grande rojo perro" type="text">

const titulo = document.querySelector(".titulo");

let valor = titulo.classList.item(1)

document.write(valor)
```

– contains() - verifica si ese elemento tiene o no tiene la clase que le digamos, responde true o false

```
<input class="titulo grande rojo perro" type="text">

const titulo = document.querySelector(".titulo");

let valor = titulo.classList.contains("grande")

document.write(valor) // true
```

– replace() - reemplaza una clase por otra

```
<input class="titulo grande rojo perro" type="text">

const titulo = document.querySelector(".titulo");

let valor = titulo.classList.contains("grande", "chico")

document.write(valor) //cambia la clase grande por chico
```

– toggle() - si no tiene la clase especificada, la agrega, si ya la tiene, la elimina.

```
<input class="titulo grande rojo perro" type="text">

const titulo = document.querySelector(".titulo");

let valor = titulo.classList.toggle("grande")

document.write(valor) // la elimina por que ya la tiene
```

**34) OBTENCION Y MODIFICACION DE ELEMENTOS**

– textContent - devuelve el todo el contenido que tenga el elemento especificado, pero no devuelve el html

```
<p class="titulo">Texto a modificar</p>

const titulo = document.querySelector(".titulo")

let resultado = titulo.textContent;
document.write(resultado);
```

– innerText - devuelve el texto visible de un node element.(tampoco se usa)

```
<p class="titulo">Texto a modificar</p>

const titulo = document.querySelector(".titulo")

let resultado = titulo.innerText;
document.write(resultado);
```

– outerText - devuelve el texto que se encuentra en las etiquetas html

(NO se usa)

– innerHTML - devuelve el texto y etiquetas de dentro del elemento que le especifiquemos, tambien muestra html con las etiquetas <> y simbolos

```
<p class="titulo">Texto a modificar</p>

const titulo = document.querySelector(".titulo")

let resultado = titulo.innerHTML;
document.write(resultado);
```

– outerHTML - devuelve el codigo HTML completo de un elemento incluyendo la etiqueta principal del elemento, con las clases y atributos de este elemento

```
<p class="titulo">Texto a modificar</p>

const titulo = document.querySelector(".titulo")

let resultado = titulo.innerHTML;
document.write(resultado);
```

**35) CREACION DE ELEMENTOS**

hay muchas formas de crear elementos en JavaScript pero estas son las principales

– createElement()

```
<div class="contenedor"></div>

const contenedor = document.querySelector(".contenedor")

const item = document.createElement("LI")
```

– createTextNode() - crea texto dentro de un elemento

```
<div class="contenedor"></div>

const contenedor = document.querySelector(".contenedor")

const item = document.createElement("LI")

const textDelItem = document.createTextNode("Este es un item de la lista")

console.log(textDelItem);
```

– appendChild() -

```
<div class="contenedor"></div>

const contenedor = document.querySelector(".contenedor")

const item = document.createElement("LI")

const textDelItem = document.createTextNode("Este es un item de la lista")

item.appendChild(textDelItem)

contenedor.appendChild(item)

console.log(textDelItem);
```

– createDocumentFragment() - Nos permite evitar el consumo excesivo de recursos al crear varios elementos a la vez

```
const contenedor = document.querySelecor(".contenedor")

const fragmento = document.createDocumentFragment();

for (i = 0; i < 20; i++){
  const item = document.createElement("LI");
  item.innerHTML = "Este es un item de la lista";
  fragmento.appendChild(item);
}
contenedor.appendChild(fragmento);

console.log(contenedor);
```

REPASARR

REPASAR

REPASAR

* * *

**36) OBTENCION Y MODIFICACION DE CHILDS (hijos)**

Esto que viene son propiedades para los child

– firstChild - obtiene el primer hijo, (si hay un espacio detecta el espacio como hijo)

```
<div class="contenedor">
  <h2>Un titulo común</h2>
  <h4>Un h4 elegante</h4>  // hijos de .contenedor
  <p>un simple parrafo</p>
</div> 
---
const contenedor = document.querySelector(".contenedor");

const primerHijo = contenedor.firstChild;

console.log(primerHijo)
```

– lastChild - obtiene el ultimo hijo

– firstElementChild - obtiene el primer elemento hijo, e ignora los espacios

– lastElementChild - obtiene el ultimo elemento hijo, e ignora los espacios

– childNodes - nos devuelve todos los nodos hijos en una nodeList (incluyendo espacios)

– children - nos devuelve todos los elementos children, las etiquetas HTML

**37) METODOS DE CHILDS**

– replaceChild - reemplaza un elemento hijo por uno que nosotros queramos, en el primer parametro va el nuevo valor, y en el segundo el antiguo “`contenedor.replaceChild(h2_nuevo, h2_antiguo)`“

```
<div class="contenedor">
  <p>soy un parrafo</p>
  <h2>Un titulo común</h2>
</div> 
---
const contenedor = document.querySelector(".contenedor");

const parrafo = document.createElement("p").innerHTML = "parrafo";
const h2_nuevo = document.createElement("h2");
h2_nuevo.innerHTML = "titulo"

H2_antiguo = document.querySelector(".h2");

contenedor.replaceChild(h2_nuevo, h2_antiguo)
```

– removeChild() - remueve el elemento hijo que nosotros le indiquemos

```
contenedor.removeChild(h2_antiguo)
```

– hasChildNodes() - verifica si tiene un elemento hijo o no

```
h2_nuevo.hasChildNodes
```

**38) PROPIEDADES DE PARENTS**

– parentElement - Siempre busca una etiqueta HTML padre, mientras que parentNode busca un nodo pero puede ser de cualquier tipo

```
console.log(h2_antiguo.parentElement) // .container
```

– parentNode

**39) Propiedade de siblings (hermanos)**

Trabaja con los elementos que se encuentran en la misma linea, y todos son hijos de un mismo padre

– nextSibling - muestra el siguiente hermano del elemento seleccionado(incluye espacios)

```
console.log(h2_antiguo.nextSibling)
```

– previousSibling - muestra el anterior hermano del elemento seleccionado(incluye espacios)

```
console.log(h2_antiguo.previousSibling)
```

– nextElementSibling - muestra el siguiente hermano HTML del elemento seleccionado

```
console.log(h2_antiguo.nextElementSibling)
```

– previousElementSibling - muestra el anterior hermano HTML del elemento seleccionado

```
console.log(h2_antiguo.previousElementSibling)
```

40) Nodos - Extras

– closest() - selecciona el elemento ascendente más cercano que coincida con nuestro selector

```
console.log(div.closest(".div"))
```

* * *

**CREAR SOLUCIONES 6.0**

**PROBLEMA A)**

*   Indicarle las 20 llaves posibles con sus 4 imagenes y cofla debe seleccionar cual llave usar
    
*   Una vez seleccionada, enviar los datos al servidor y que otro programador se encargue
    

cofla se quedo encerrado en su casa porque se le rompio la llave, pero necesita ir urgente a la facultad porque no puede faltar ni una sola clase si quiere aprovar las materias que le faltan, ya que está al limite de asistencias, entonces tiene que llamar a un cerrajero y pedirle que traiga la llave indicada.

No hay tiempo suficiente como para qie el cerrajero vea cual es la llave indicada, solo puede traer una y probar.

Entonces cofla se da cuenta que es una llave antigua, por ende no hace falta afilarla, solamente necesita decirle el modelo de llave para que el cerrajero venga, pero cofla tiene tan mala suerte que nisiquiera tiene internet para poder buscar, lo que si tiene es a un programador que le hará un sistema para mostrarle las llaves posibles y determinar cual es la indicad, hay solo 10 modelos posibles, permitir que cofla seleccione el indicado

**PROBLEMA B)**