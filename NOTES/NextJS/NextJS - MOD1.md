[[Snippets]] ^f1b6d6

1. [[#React Server components]] 
2. [[#Meta-data / Meta-tags]]
3. [[#RootLayout]]
4. [[#Layout anidado]]
5. [[#Barra de navegación]]
6. [[#Next/ Link]]
7. [[#Más sobre server components]]
8. [[#usePathname - ActiveLink]]

## React Server components

Esto quiere decir que el cliente no va a recibir JS al no ser que sea totalmente necesario.

El contenido va a ser generado del lado del servidor y se lo mandamos al cliente. 

Por lo que si generamos una expresión de JS en nuestro código, y el cliente tiene desactivado JS, le aparecerá igual el resultado la mayor parte de las veces por que se genera del lado del servidor.

**Todos los componentes de nuestro proyecto de Next que estén dentro de la carpeta "app", por defecto son server components.**

Si quieres que algo en concreto se genere del lado del cliente, hay que especificarlo añadiendo 'use client' al principio del archivo.
**Por defecto todo es 'use server' y pueden ser asincronos.**

---

## Meta-data / Meta-tags Text Extractor es una manera cómoda de copiar texto desde cualquier lugar de la pantalla    

[list-meta-tags-google](https://developers.google.com/search/docs/crawling-indexing/special-tags)

Para añadir metadatos a una pagina en concreto, basta con añadir esto en el código del archivo:
```TSX
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'SEO Title',
  description: 'SEO Description',
  keywords: ['SEO Keyword', 'SEO Keyword2', 'SEO Keyword3'],
};
```

^889e0c

---

## RootLayout

En NextJS hay un layout principal llamado **Root Layout**

De este cuelgan todos los "Children" o "hijos" ya que este es el **high order component**, algo así como el mayor componente padre.

A los componentes hijos se les llama **ReactNode**.

```TSX
export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
```

Este layout principal es delicado y a la vez es muy poderoso, ya que todo lo que pongamos aquí aparecerá en todas las páginas de nuestra aplicación.

Esto es porque el layout se ejecuta antes que cualquier otra página, ya que este envuelve todas las páginas y componentes.

---

### Layout anidado

La idea es crearse otro layout que nos permita darle ciertos estilos en las páginas que nosotros queramos, sin afectar a la home ni al layout principal.

Para crear otro componente se puede utilizar el snippet "lrc" en un archivo llamado **layout.tsx**.

Este tiene que tener el elemento {children} dentro del arbol html para que renderize todas las paginas hijas al layout, incluyendo la que este en la misma ruta que el layout.

Si queremos crear un layout para varias paginas, hay que ponerle un nombre especifico a la carpeta del layout(Escribir el nombre entre parentesis"(layout)") para que este no afecte a la ruta de nuestra url.

---

## Barra de navegación

Si lo que queremos es crear algún tipo de funcionalidad compartida entre todas las páginas lo normal es crearse una carpeta que se llame components en la raíz del proyecto.

Para crear el NavBar, lo mejor es crearlo en la carpeta components, y dentro de esta crear una carpeta llamada "navbar" con el archivo "Navbar.tsx".

Para exportar los componentes, lo mejor es crear un archivo que se llame "index.ts" dentro de la carpeta components, desde el que exportemos todos los componentes para reutilizarlos.

```TS (index.ts)
export * from './navbar/Navbar';
```

---

## Next/ Link

Las etiquetas <Link/> en Next hacen que la barra de navegación sea fluida al igual que con react.

```TSX
import Link from "next/link"
import { HomeIcon } from "@primer/octicons-react"

const navItems = [
  { path: "/about", text: "About" },
  { path: "/pricing", text: "Pricing" },
  { path: "/contact", text: "Contact" }
]

export const Navbar = () => {

  return (
    <nav className="flex bg-blue-600 bg-opacity-10 p-2 m-2 rounded">
        <Link href={"/"} className="flex items-center">
          <HomeIcon className="mr-2"/>
          <span>Home</span>        
        </Link>
  
        <div className="flex flex-1"></div>
        {
          navItems.map(navItem => (
            <Link 
	            key={ navItem.path } 
	            className="mr-2" 
	            href={ navItem.path }
	        >{ navItem.text }
	        </Link>
          ))
        }
    </nav>
  )
}
```

---

## Más sobre server components

La idea de los server components es que sea el servidor quien genere y renderize esos componentes, y por defecto next lo va a mantener en caché.

Todo lo que vamos a hacer es contenido que se genera del lado del servidor y se lo mande al cliente, con el objetivo de que los usuarios consuman la aplicacion con la menor cantidad de JS posible, y ejecutar solo lo que nosotros queremos que se ejecute.


**Renderizado estático**
El renderizado estático es la opción por defecto en Next, esto mejora el performance y reduce enormemente la cantidad de contenido enviada al cliente.

**Fetch caché**
Llamadas a Fetch, realizarán un caché de forma forzada por defecto a menos que se especifique lo contrario.
Fetch en Next, tiene propiedades para revalidar, mantener en caché y para nunca mantenerlo en caché.

**Evitar efectos**
useEffect entre otros hooks que disparan acciones del lado del cliente, no se pueden usar en server components.
Si es necesario, especificar "use client" en el inicio del archivo del componente.


Hay ciertos componentes que vamos a necesitar que sean generados del lado del cliente para añadir cierta interactividad.

Todo lo que pueda ser generado del lado del servidor, tiene que ser obligatoriamente server components, salvo componentes que requieran algún hook como el use effect para que sean interactivos.

---

## usePathname - ActiveLink








[[#^f1b6d6|home]]