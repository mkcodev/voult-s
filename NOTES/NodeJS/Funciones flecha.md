aparte de tener diferente sintaxis, cuando una funcion de flecha tiene una sola linea, se puede omitir poner el return y las llaves que abren y cierran el cuerpo.

```JS
const sumar = ( a, b ) => {
	return a + b;
}

const sumar( a, b ) => a + b;
``` 