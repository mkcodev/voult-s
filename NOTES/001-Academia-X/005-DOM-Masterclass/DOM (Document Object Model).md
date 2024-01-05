El dom es una representacion del HTML y el CSS de tu página web en el navegador, para que puedas acceder a los elementos desde javaScript

Todo en JS son objetos, y el DOM es otro objeto con sus propiedades y métodos.

---
Cada uno de los elementos HTML van a heredar de los elementos padres para obtener propiedades y métodos

Por ejemplo si seleccionamos una imagen del documento, esta heredaria las propiedaes y métodos de los siguientes elementos padres:
*HTMLImageElement
HTMLElement
Element
Node
EventTarget
Object*
Desde el elemento que nos encontremos podemos utilizar las propiedades y métodos de cualquiera de los elementos padres, por que este las hereda

document.body.bgColor = 'black'

## Create element
```
let titulo = document.querySelector('h1');

let span = document.createElement('span')

span.textContent = '?' // < span>?</ span>
```
**Con esto creamos un elemento, pero no lo estamos añadiendo al HTML**
Para añadirlo hay que usar metodos como appendChild, que significa añadir hijo

`titulo.appendChild(span)`
Esto nos colocara el "span" recientemente creado con JS justo alfinal del elemento padre seleccionado

Si queremos controlar el lugar donde se renderiza el span hay que utilizar el metodo *insertAdjacentHTML()*
Este método recibe 2 argumentos:
1 = indica donde vamos a insertar el elemento
2 = es el elemento que vamos a insertar

```
let titulo = document.querySelector('h1');
let span = document.createElement('span')

span.textContent = '?' // < span>?</ span>

titulo.appendChild(span)

titulo.insertAdjacentHTML('beforebegin',span) // renderiza "span" antes que "H1"
titulo.insertAdjacentHTML('afterbegin',span) // renderiza "span" al principio de "H1"
titulo.insertAdjacentHTML('beforeend',span) // renderoza "span" al final de "H1"
titulo.insertAdjacentHTML('afterend',span) // renderiza "span" despues de "H1"
```

## Navegar através de los elementos
Pasra acceder al padare de un elemento, se puede utilizar el método *parentElement*

```
document.querySelectorAll(''img)[1].parentElement //<div><img></img></div>
```
**este método se puede utilizar varias veces seguidas para ir más arriba en el arbol, hasta llegar al elemento document**

Con el método *children[0]* podemos acceder a los hijos
.firstElementChild
.lastElementCilf

## Modificar textos o HTML del documento
`document.querySelector('h1').textContent = 'Parques Nacionales'`

`document.querySelector('h1').textContent = '< b>Parques Nacionales</ b>'`

*Este segundo código no funcionaria, por que estamos utilizando un método que solo añade texto y no HTML*

Para añadir HTML se usa: 
`document.querySelector('h1').innerHTML = '< b>Parques Nacionales</ b>'`

## Remove
Para remove r un elemento hay que seleccionarlo con cualquiera de los selectores disponibles, y añadir el método '.remove'

`$0.remove()`

Si no sabes el identificador del elemento, puedes usar a sus padres o hijos para localizarlo:

`$0.removeChild($0.children[0])`