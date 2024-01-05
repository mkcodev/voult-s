## Desestructuracion de un objeto

```JS
const deadpool = {
	nombre: 'Wade',
	apellido: 'Winston',
	poder: 'Regeneracion',
	getNombre()  {
		return `${ this.nombre } ${ this.apellido }`
	}
}

const { nombre, apellido, poder, edad = 35} = deadpool;

console.log( nombre, apellido, poder, edad ); // Wade Winston Regeneracion 35
```

### Desestructuracion de un objeto en una funcion
```JS
const deadpool = {
	nombre: 'Wade',
	apellido: 'Winston',
	poder: 'Regeneracion',
	getNombre()  {
		return `${ this.nombre } ${ this.apellido }`
	}
}

function imprimeHeroe({ nombre, apellido, poder, edad = 35 }) {
	console.log( nombre, apellido, poder, edad );
}

imprimirHeroe( deadpool ); // Wade Winston Regeneracion 35
```

### Desestructuracion de un array

```JS
const heroes = ['Deadpool', 'Superman', 'Batman', 'Spiderman'];

const [ , , h3, h4 ] = heroes;

console.log( h3, h4 ) // Batman Spiderman
```