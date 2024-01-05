# **Operadores aritmeticos (Operan)**

![](https://diavlo.atlassian.net/wiki/download/attachments/14155777/www.udemy.com_course_javascript-intensivo-camino-hacia-react_learn_lecture_34086618%20(1).png?api=v2)

### **Objeto Math**

Potencia Math= Math.pow(num1, num2)

### **Operaciones combinadas**

```
var num1 =2
var num2 =3
var respuesta = Math.pow(num1, 4)-(num1/(num2+45))
```

# **Operadores realacionales (comparan)**

Sirven para comparar valores y siempre devuelven “true” o “false”

![](https://diavlo.atlassian.net/wiki/download/attachments/14155777/www.udemy.com_course_javascript-intensivo-camino-hacia-react_learn_lecture_34086622.png?api=v2)

Los operadores “**Estrictamente mayor que**“ y “**Estrictamente menor que**“ sirven para verificar si es el mismo tipo de dato.

`"3" == 3 // true`

`"3" === 3 // false`

Al tener un valor igual a otro, pero uno es un numero y otro un string, realmente es igual, pero no strictamente, ya que este operador toma en cuenta el tipo de dato

# **Operadores Lógicos**

Sirven para comparar entre dos o más operaciones relacionales

![](https://diavlo.atlassian.net/wiki/download/attachments/14155777/www.udemy.com_course_javascript-intensivo-camino-hacia-react_learn_lecture_34086682.png?api=v2)

```
var num1 = 5
var num2 = 5
var respuesta = (num1>=num2) && num1>6 // false
```

Al no cumplirse las dos operaciones, es false, por que el operador “**And(&&)**”, requiere que las dos operaciones sean afirmativas

```
var num1 = 5
var num2 = 5
var respuesta = (num1>=num2) || num1>6 // true
```

Como se cumple una de las dos operaciones es true, por el comparador “**OR**“

# **Operadores de asignacion (asignan)**

+=

\-=

\*=

/=

\*\*=

`var a = 2`

`a = a+5` // a+=5

`console.log(a) // 7`

# **Condicionales**

sirven para elejir que fragmento de codigo queremos que se ejecute.

Para introducir la **primera eleccion se usa if()**, y usando **un operador relacional**, decidimos si se ejecuta el primer ambito.

En el caso de que sea negativo, no se ejecutara el primer bloque, y pasaremos al segundo bloque, **iniciado con else().**

```
var numero = 8

if(numero==7)
{
  console.log("si es 7")
}

else if(numero==8)
{
  console.log("es igual a 8")
}

else
{
  console.log("no lo es")
}
```

Se pueden añadir tantos “if“ como queramos, pero solo un else.

## **Bucle for**

## **Bucle while**

## **DOM, Conectar JS con html**

El dom significa document objet model(Modelo de objeto del documento).

Representa la estructura de html y puede ser modificado por un lenguaje de programación.

```
const txtn1 = document.getElementById("n1")
const txtn2 = document.getElementById("n2")
const respuesta = document.getElementById("respuesta")
const btnCalc = document.getElementById("calcular")

btnCalcular.addEventListener('click', clalcular)

function calcular(){
  const op1 = parseFloat( txtn1.value)
  const op2 = parseFloat( txtn2.value)
  let resp=op1+op2
  respuesta.innerText=resp
  respuesta.style="color:red"
}
```

## **Arrays**

```
const respuesta = document.getElementById("resp")
const btnejecutar = document.getElementById("ejecuta")
btnejecutar.addEventListener("click", iniciar);

let frutas = ["manzana", "mango", "fresa", "pera"];
function iniciar() {
  frutas.forEach(function (item, index, array){
    respuesta.innerText = array;
  })
}
```

## **JSON**

![](https://diavlo.atlassian.net/wiki/download/attachments/14155777/www.udemy.com_course_javascript-intensivo-camino-hacia-react_learn_lecture_34138666%20(1).png?api=v2)![](https://diavlo.atlassian.net/wiki/download/attachments/14155777/www.udemy.com_course_javascript-intensivo-camino-hacia-react_learn_lecture_34138666%20(2).png?api=v2)

fetch