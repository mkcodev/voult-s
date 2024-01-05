## __deuda tecnica__
Es la falta de calidad en el código, que genera una deuda que repercutira en costos futuros.

Todos los programadores van a generar deuda técnica por muy buenos que sean.

Puede ser que faltó documentacion, pruevas o una refactorizacion principal

Puede ser que por cuestiones de tiempo hallan dicho "okey vamos a dejar esto asi que ya funciona, luego lo resuelvo", y este es un tipo de deuda, la deuda tecnica.
Es una deuda que tenemos que ser conscientes de que tenemos que tener claro que la vamos a pagar tarde o temprano en ciertos costos.

**Costes de la deuda tecnica**

- Tiempo en realizar mantenimiento
- Tiempo en refactorizar el codigo
- Tiempo en comprender el codigo
- Tiempo adicional en la transferencia del codigo


**Esquema de la deuda tecnica de Martin Fowler**

- *Imprudente* - no hay tiempo. solo copia y pega eso de nuevo

- *Inadvertido* - "¿Que són los patrones de diseño?"
	- Es cuando nos faltan conocimientos para hacer codigo de calidad como patrones de diseño.

- *Prudente y deliverada* - "tenemos que entregar rapido, ya refactorizaremos"
	- Es cuando sabemos que tenemos que hacer algo pero lo aplazamos

- *Prudente e inadvertida* - "Ahora ya sabemos como lo deberiamos haber hecho"
	- Es cuando nos damos cuenta sobre la marcha que habia una mejor forma de hacerlo

El buen programador es consciente de la deuda tecnica y hace lo posible por evitarla y solucionarla.

La deuda tecnica se paga refactorizando nuestro codigo.

**Refactorizacion**
Es un simple proceso que tiene como objetivo mejorar el codigo sin alterar su comportamiento para que sea mas entendible, mas facil de mantener y mas tolerante a cambios.

Para que una refactorizacion fuerte tenga el objetivo esperado, es imprescindible contar con pruebas automaticas. 
Si no hacemos pruebas automaticas, no tendremos la certeza de que la refactorizacion funciono de la manera esperada.

Al no hacer pruebas se produce el mitico: "si funciona no lo toques"


La mala calidad en el software siempre la acaba pagando o asumiendo alguien, ya sea el cliente, el proveedorcon recursos o el propio desarrollador dedicando tiempo a refactorizar o malgastando tiempo programando sobre un sistema fragil.

## __Clean Code__
"Código limpio es aquel que se ha escrito con la intención de que otra persona(o tu mismo en el futuro) lo entienda." - Carlos Blé

"Nuestro código tiene que ser simple y directo, debería leerse con la misma facilidad que un texto bien escrito". - Grady Booch

"Programar es el arte de decirle a otro humano lo que quieres que la computadora haga". - Donald Knuth