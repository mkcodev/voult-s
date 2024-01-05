cuando ponemos un "$" al final de un elemento, esto significa que se va a cargar de forma perezosa, esto creara una separacion y un corte en mi codigo.
El elemento solo se cargará al activar el evento indicado para que funcione el componente.

Hay 2 formas principales de trabajar con estados en qwik:
1. Con **señales o signals.**
2. Con **Store.**

Estas nos sirver para mantener cierto estado en nuestra aplicación.
*El  estado es el valor de una variable, de un objeto, de un arreglo...*

## Hooks
-  **useSignal**: se usa para datos primitivos. 
	- Permite editar un valor donde quiera que esté.
	- Las señales son como un emboltorio para un valor
	- Al modificar el valor de la señal, esta va a notificar a todos los que esten escuchando esa señal.
	- **Señales conmutadas:**
		- Son señales que escuchan otras señales
-  **useStore**: para trabajar con arreglos, objetos y elementos complejos.


## Comunicacion entre componentes

