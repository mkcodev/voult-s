Los nombres tienen que estar imprescindiblemente en ingles y deben ser pronunciables.

 - Tenemos que evitar usar palabras que lleven guiones bajos en nuestras variables con ciertas excepciones.

- Debemos intentar no ahorrarnos caracteres en nombres, estamos buscando que cada uno de esos nombres sean bien expresivos.
```JS
// mal
const n = 53;

const tx = 0.15;

const cat = "T-shirts";

const ddmmyyyy = new Date('Agoust 15, 1965 00:00:00');
```
```JS
//bien
const numberOfUnits = 15;

const tax = 0.15;

const category = 'T-shirts';

const birthDate = new Date('Agoust 15, 1965 00:00:00');
```

## Ausencia de información técnica
Es la implementacion que una clase o interfaz esta realizando.

Debemos intentar que los nombres no contengan información técnica en ellos, es decir, evitar incluir la forma en como esta relacionado dependiendo de la tecnología que estemos utilizando
```TSX
//mal
class AbstractUser { };
 
class UserMixin { };

class UserImplementation { };

interface UserInterface { };
```
```TS
//bien
class User { };
interface User { };
```

## Nombres según el tipo de dato
###  *Arrays*

Los arrays normalmente contienen varias variables juntas, por lo que es preferible poner el nombre en plural

```TS
// mal
const fruit = ['manzana', 'platano', 'fresa'];
```
```TS
// bien
const fruitNames = ['manzana', 'platano', 'fresa'];
```
###  *Booleans*
Los boleanos normalmente funcionan mejor con el verbo delante 
```TS
// mal
const open = true;
const write = true;
const fruit = true;
const active = false;
const noValues = true;
const noEmpty = true;
```
```TS
// bien
const isOpen = true;
const canWrite = true;
const hasFruit = true;
const isActive = false;
const hasValues = true;
const isEmpty = true;
```

###  *Numbers*
Por lo general podemos usar palabras como "min, max, torax"

```TS
// mal
const fruits = 3;
const cars = 10;
```
```TS
// bien
const maxFruits = 5;
const minFruits = 1;
const totalFruits = 3;

const totalOfCars = 5;
```
### *Funciones*
Deben representar acciones, que por lo geenral deben construirse usando el verbo que representa la accion










