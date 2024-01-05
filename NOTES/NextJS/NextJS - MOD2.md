1. [[#Preparar proyecto para producción|Deploy]]

## Generar build de producción
El build de producción esta optimizado para que sea lo más rapido posible, y esto hace que pese poco tamaño en la primera carga.

Cuando entramos en la página, las otras páginas enlazadas que sean server components, ya estarán cargadas, para que al tocarle, de la sensación de estar en una Single Page Aplication.

Al navegar por las diferentes páginas, las que esten enlazadas cargaran mediante preFetch.
