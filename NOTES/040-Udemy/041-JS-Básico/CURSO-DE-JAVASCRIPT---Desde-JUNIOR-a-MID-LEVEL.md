En esta segunda parte del curso partiremos desde la sigiente unidad a la anterior que era la 6

**CAPITULO 7**

**41) Introduccion a window**

Window hereda las propiedades de EventTarget (que veremos más adelante).

**– open ()** \- Abre una ventana nueva. Carga un recurso en el contexto de un nuevo navegador o uno que ya existe.

```
let youtubeLink = "https://youtube.com";
let ventana = window.open(youtubeLink)
```

**– close()** - cierra la ventana actual, o la ventana en la que se llamó.

```
let youtubeLink = "https://youtube.com";
let ventana = window.open(youtubeLink)

ventana.close()
```

**– closed** - verifica si la ventana referenciada esta cerrada o no.

```
ventana.closed; // true = cerrada // false = abierta
```

**– name** - obtiene / establece el nombre del contexto de exploracion de la ventana

**– stop()** - detiene la carga de una pagina web

```
window.stop()
```

**– alert()** - mestra un cuadro de alerta con el contenido especificado y un boton aceptar

**– print()** - Abre el cuadro de dialogo imprimir para imprimir el documento actual

**– prompt()** - abre un cuadro de dialogo con un mensaje que solicita al usuario un dato(string)

**– confirm()** - abre un cuadro de dialogo con un mensaje y dos botones: aceptar y cancelar.

```
window.confirm("¿estás seguro de que deseas salir del sitio web?")
```

* * *

**– screen** - devuelve una referencia al objeto de la pantalla asociado con la ventana. Por lo que en document.write mostrara un objeto, y en console.log mostrara las propiedades del objeto, qe en este caso es la pantalla

```
const screen = window.screen;

coonsole.log(screen);
```

**– screenLeft** - devuelve la distancia horizontal entre el borde izquierdo de la ventana del navegador, y el borde de la pantalla

```
const screenLeft = window.screenLeft;

document.write(`left : <b>${screenLeft}<b>`)
```

**– screenTop** - devuelve la distancia vertical entre el borde superior de la ventana del navegador, y el borde de la pantalla

```
const screenTop = window.screenTop;

document.write(`top : <b>${screenLeft}<b>`)
```

**– scrollX** - devuelve el numero de pixeles que el documento se ah desplazdoa actualmente Horizontalmente

**– scrollY** - devuelve el numero de pixeles que el documento se ah desplazado actualmente Verticalmente

**– scroll()** - desplaza el scroll a n sitio en concreto del docmento, básandose en la bicacion de scrollX y scrollY.

```
window.scroll(0, 100); // en este orden (scrollX, scrollY)
```

– ALTERNATIVAS para desplazamiento relativo

window.scrollBy, window.scrollByLines y window.scrollByPages

* * *

**– minimize()** - minimiza la ventana (sin soporte por navegadores)

**– resizeBy()** - cambia el tamaño de la ventana actual en una cantidad específica

```
window.resizeBy(100, 200)
```

**– resizeTo()** - redimensiona dinámicamente la ventana

```
window.resizeTo(100, 200)
```

**– moveBy()** \- mueve la ventana a una ubicacion relativa

```
window.moveBy(100, 200)
```

**– moveTo()** \- mueve la ventana a una ubicacion absoluta

```
window.moveTo(100, 200)
window.locationbar.visible; // true si esta visible, false si no
```

*   **Objetos barprop** \- nos dice si son visibles los sigientes objetos, todos son iguales al primer ejemplo
    
    *   **locationbar** \- `window.locationbar.visible; //true si esta visible, false si no`
        
    *   **menubar**
        
    *   **personalbar**
        
    *   **scrollbars**
        
    *   **statusbar**
        
    *   **toolbar**
        

**42) LOCATION**

Es la información que nos devuelve la ubicacion en la que nos encontramos de la url de un sitio

href = url completa

https:// = protocol

hostname = solo el nombre del dominio o host

pathname = la ruta posterior al dominio o host

**– window.location.href** \- devuelve el href (URL) de la página actual

```
const href = window.location.href;

docUment.write(href) // https://www.google.com/search%s
```

**– window.location.hostname** \- devuelve el nombre del dominio del servidor web

```
const hostname = window.location.hostname;

docUment.write(hostname) // www.google.com
```

**– window.location.pathname** \- devuelve la ruta y el nombre del archivo de la página actual sin inclir el dominio, lo que serian los subdominios

```
const pathname = window.location.pathname;

docUment.write(pathname) // /search/chanel-holasoygerman
```

**– window.location.protocol** - develve el protocolo web utilizado (http: o https: )

**– window.location.assign()** \- carga un nuevo documento, o nos lleva a la página web o RL que le asignemos

## **RESOLVIENDO PROBLEMAS 7.0**

**PROBLEMA A)** Despues de aprobar, cofla se compra una mejor computadora para poder programar mejor y hacer todo de una forma más óptima pero necesita una resolución elegante para poder trabajar

– PC por lo menos full HD

– Preguntar si esta seguro al momento de comprar

**PROBLEMA B)**

– Crear un sistema para mostrar suficientes datos para conocer el sitio web

* * *

SOLUCION PROBLEMA A)

```
let alto = window.screen.availHeight;
let ancho = window.screen.availWidth;
comprar = confirm(`El alto es: ${alto} y el ancho es: ${ancho}`)

if (comprar) {
    window.alert("la compra ha sido n exito")
} else {
    window.alert("alfinal la compra no a salido bien")
}
```

SOLUCION AL PROBLEMA B

```
let href = window.location.href;
let pathname = window.location.pathname;
let hostname = window.location.hostname;
let protocol = window.location.protocol;

let html = `<b>Protocolo: </b> ${protocol} <br>
            <b>Host: </b> ${hostname} <br>
            <b>Ruta: </b> ${pathname} <br>`;
  
html += `<b>Dirección: </b> ${href}` ;           
document.write(html);
```

* * *

## **CAPITULO 8 - GOOGLE DEVELOPPER TOOLS**

44) Pestaña elements

– Filtros y buscar por palabras clave

– Modificar, crear y eliminar etiquetas

– Modificar propiedades de CSS

– Event Listeners

– Propierties

– Opciones para copiar

– Segir explorando

45) Pestaña Resources

– Ver y guardar archivos

– Información ofrecida

– Cambios en tiempo real

– Snnipets (Ejecutar codigo por fragmentos)

46) Pestaña Networks

– Interfaz

– Sort By Filtros de Busqueda

– Limpiar Cookies y Caché

– Importar y exportar

47) Pestaña TimeLine

– Uso y grabación

– Screenshots de la grabación

– Controls

– Overview (FPS CPU y NET)