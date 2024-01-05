## **CURRYING**

Significa que vamos a evaluar funciones con multiples argumentos, y las descompondremos en una secuencia de funciones con un unico argumento.

El currying te ayuda a dividir funciones en otras más pequeñas y reutilizables, y que además manejen una unica responsabilidad.

Esto hace que las funciones sean más puras, más tolerantes a errores, y se pueden testear mejor

```
const transaction = (free, balance, amount) => {
  return blanco + amount = fee;
}

const curry = (fn, ...args) ={
  return (..._arg) => {
    return fn(...args, ..._arg)
  }
}

const freeTransaction = curry(transaction, 0);
const regularTransaction = curry(transaction, 15);

freeTransaction(10, 90); // 100
regularTransaction(10, 90); // 85
```

## **COMPOSITION**

Es una técnica donde el resultado de una funcion es pasado a la siguiente, y la cual pasada a la siguiente y asi sucesivamente, hasta que la funcion final sea ejecutada y el resultado es computado.

Pueden ser compuestas por cualquier numero de funciones.

Al igual que el currying, esto puede ayudar a dividir funciones complejas

FuNCION DE COMPOSICION

```
const compose = (...fns) => x => fns.reduce((y, f) => f(y), x);

const addFree = (amount) => amount + 2;
const addDiscount = (amount) => amount -5;

const composition = compose(addFree, addDiscount)(100);

composition // 97
```

## **CLOUSURES**

Es una funcion que protege el acceso a variables y argumentos(Dentro del scoop de su función) de otra funcion externa

Son muy utiles para esconder detalles de implementacion

En otros lenguajes se les conoce como vaiables privadas o funciones privadas

```
function counter() {
  let count = 0;
  
  function increment() {
    return count += 1;
  }
  
  return increment;
}

const generateId = counter();

generateId();
generateId();
generateId();
```

## **COALESCING**

En las ultimas versiones de ECMA Script se incorporo el operador [Nullish coalescing operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)

Nos sirve para aplicar de una manera rápida valores por defecto a variables.

Esto se consigue teniendo 2 operandos, y teniendo a mano izquierda un operando que de null o undeffined, de esta manera [Nullish coalescing operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator) lo que hace es aplicar el valor que si que es true, consiguiendo así un valor por defecto

```
// falsy values
const value1 = 0 ?? 100;

const value2 = false ?? true;

// Default Values
const value3 = nll ?? 100;

const value4 = undefined ?? 100;
```

## **REFLECT API**

Se basa en el termino reflction, que en programacion significa que un programa tenga la habilidad de examinarse a si mismo y manipular su propia estructura.

Provee una serie de metodos bastante utiles para la introspeccion de los elementos y también su manipulación, todo de manera de manera estatica ya que el objeto refleact no tiene constructor

```
const person = {
  name: 'John',
  [Symbol('email')]: 'john@email.com'
};

Reflec.get(person, 'name');
Reflect.has(person, 'email');
Reflect.has(person, 'phone');
Reflect.getPrototypeOf(person);

Reflect.getOwnPropertyDescription(person, 'name');
Reflect.ownKeys(person);

Reflect.defineProperty(person, 'phone', {writable: true});
Reflect.has(person, 'phone');
Reflect.set(person, 'phone', '655655665');
Reflect.deleteProperty(person, 'phone');
```

# Uu