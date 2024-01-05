Comentarios
etiquetas de linea o de bloque
atributos 
Entidades de caracteres
	&copy;
	&nbsp; (es un espacio, pero obliga a HTML a no saltar de linea)


## clase 12:
```
//- Unorder List
<ul>
	<li>HTML</li>
	<li>HTML</li>
	<li>HTML</li>
</ul>


//- Order List
<ol>
	<li>HTML</li>
	<li>HTML</li>
	<li>HTML</li>
</ol>


// Listas de definicion
<dl>
	<dt>HTML</dt>
	<dd>HTML</dd>
	<dd>HTML</dd>
</dl>


```

## clase 13:
```
<p>
	Utiliza este codigo en css:
		<code>{ background: blue}</code>
</p>
```

**Entidades de caracteres:**
&lt; &gt;

```
<p> utiliza este codigo en tu HTML
	<code>&lt;body&gt;</code>
</p>
```

**subindice y superindice**
```
<p>CO<sub>2</sub></p>

<p>n<sup>2</sup></p>

<p>Referencia a un libro.<sup>2</sup></p>
```

##  Clase 14: CITAS
```
<blockquote>
	<p>La mediocridad es para la gente boba</p>
	<cite>Charly garcia</cite>
</blockquote>

<p>Jose Miloko dijo:
	<q>Ser libre es gastar la mayor cantidad de tiempo de nuestra vida en lo que nos gusta hacer</q>
</p>
```

## Clase 15: DATATIME
Esto le dice al navegador la fecha a la que tendra lugar el evento
```
<p>Nos vemos el
	<time datetime="2024-04-20">Sábado</time>
	a las
	<time datetime="16:20:00.5-08:00">4:20</time>
</p>

<p>Nos vemos a las
	<time datetime="2024-04-20 10:00-0800">10</time>
</p>
```
***Lo que sale despues de la hora es la zona horaria, por defecto esta en UTC***

## Clase 16: Vinculos relativos y absolutos
```
<a href="../index.html">Vinculo relativo</a>

<a href="https://www.google.com/index.html">Vinculo absoluto</a>
```

## Clase 17: Navbar
El atributo "role" inidca el rol de la etiqueta "nav"
El atributo "aria-label" indica el nombre de la barra de navegacion
```
<nav role="navigation" aria-label="menu principal">
    <a href="/">Hogar</a>
    <a href="/blog.html">Blog</a>
    <a href="/sections/about.html">Acerca de </a>
</nav>


// el footer es la navegacion del pie de pagina, y siempre tiene que estar alfinal

<footer role="navigation" aria-label="menu principal">
    <a href="/">Hogar</a>
    <a href="/blog.html">Blog</a>
    <a href="/sections/about.html">Acerca de </a>
</footer>
```

## Clase 21: atributo SRCSET
Este atributo para las imagenes nospermite reemplazar una imagen dependiendo de la resolucion de la pantalla del usuario
Para esto tendremos 3 img:
loko-300.jpg
loko-600.jpg
loko-1200.jpg
```
<img src="./loko-300.jpg" alt="loko" srcset="./loko-600.jpg 2x, ./loko-1200.jpg 3x"/>
```

## Clase 22: < figure> tag
Esto nos permite poner un subtitulo(figcaption) a una imagen
Esto ayuda a la semantica de los buscadores

```
<figure>
    <img src="./html.svg" alt="HTML5" width="300">
    <figcaption>Esto es el logo de HTML5</figcaption>
</figure>
```

## Clase 23: < picture> tag
Nos permite indicar diferentes fuentes de donde viene nuestra imagen
El **atributo: media** nos permite indicar en que resolucion del navegador vamos a utilizar la imagen

```
<picture>
    <source media="(min-width:1200px)" srcset="./loko-1200.jpeg">
    <source media="(min-width:1200px)" srcset="./loko-1200.jpeg">
    <img src="./-600.jpg" alt="Esta saldra cuando el ancho sea menos de 600">
</picture>
```
Cuando el navegador tiene el ancho especificado en los atributos, la imagen cambiará
Esto viene bien por que el navegador lee primero el HTML
## Clase 24: < audio> tag
Los atributos que no tienen definidas propiedades vienen con el valor "true" por defecto
```
<audio controls src="audio.mp3" loop autoplay></audio>

<audio controls loop autoplay>
    <source src="audio.mp3" type="audio/mpeg">
    <source src="audio.ogg" type="audio/ogg; codec=opus">
    Lo sentimos. Tu navegador no soporta este formato
</audio>
```
No es recomendable usar el atributo "autoplay", ya que esto puede molestar al usuario

## Clas25: < iframe> tag
```
<iframe width="560" height="315"
	src="https://www.youtube.com/embed/mbW4rPDuKKY" 
	title="YouTube video player"
	frameborder="5"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen >
</iframe>
```

## Clase 27: < div> < span> tags
`<div></div>`
Esta etiqueta sirve para crear bloques, y toda la informacion que pongamos dentro de este div, va a formar un bloque.
Cuando creemos más bloques estos se colocan en otras lineas.
No siempre es la mejor manera de agrupar contenido, ya que hay otras etiquetas que son mejores para el valor semantico de la pagina

`<span></span>`
Esta etiqueta en vez de desplegarse en bloque se despliega en linea

**valor semántico**
Esto le dice a google que lo que esta dentro de "span" esta en inglés
`<div>Me gusta la canción <span lang="en">Elevation</span></div>`

## Clase 28: ATRIBUTOS GLOBALES
Estos atributos se pueden colocar en cualquier etiqueta
```
id="" - identificador unico, solo para una etiqueta
class="" - identificador de grupo, para varias etiquetas

contenteditable="true" - esto permite editar el contenido de la etiqueta

lang="es" - esto indica el idioma del contenido

dir="ltr/rtl" - indica la direccion del texto, (left to right/ right to left)
```

## Clase 29: ACCESIBILIDAD
Los roles aria mejoran la accesibilidad
Esto ayuda a que personas con discapacidad puedan ver tu página web
```
<div aria-label="H2O">
    <div aria-hidden="true">
        <span>H</span>
        <span>2</span>
        <span>O</span>
    </div>
</div>
```
Para la gente que utiliza herramientas de accesibilidad por que tienen discapacidades, viene bien añadir los "aria-label".
Sobre todo en textos partidos, poniendo el atributo aria label, indicaremos lo que pone dentro del contenido de manera más legible por estas personas.

## Clase 31: Estructura HTML

```
<!doctype html>// inidica el formato del documento
<html lang="es-ES" dir="ltr" charset="UTF-8">
	<head></head>
	 <body></body>
</html>
```
**charset** es el formato de codificacion de caracteres, el más moderno es **UTF-8** que tiene +130.000 caracteres.
Hace años se usaba el formato ASCII, que solo tenia 128 caracteres

## Clase 32: < head> tag

```
<!doctype html>
<html>
	<head>
		<meta charset="UTF-8">
	</head>
</html>
```

La etiqueta < meta> te permite colocar metainformacion sobre la página

```
<head>
    <meta charset="UTF-8">
    <title>Mi página web</title>
    <link rel="stylesheet" href="css/style.css">
    <script src="js/script.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <meta name="description" content="Página de ejemplo">
    <meta name="application-name" content="Aplicacion de HTML">
    <meta name="msapplication-TitleImage" content="/img/mstile-144x144.png"> <!-- Icono windows-->
    <meta name="theme-color" content="#000000"> <!-- integrar color general de la web-->

    <link rel="manifest" href="/manifest.json"> <!-- Más info: version, author...-->
    <link rel="icon" href="/favicon.ico">
    <link rel="preload" href="/font.woff2" as="font" type="font/woff2" crossorigin="anonymous">
</head>
```

## Clase 33: < body> tag

```
<body>
    <!-- Navegador -->
    <nav></nav>

    <!-- Encabezado -->
    <header>
        <h1></h1>
    </header>

    <!-- Contenido principal -->
    <main>
        <!-- Artículo: Unidad de informació -->
	    <article></article>
        <!-- Secciones de contenido -->
        <section></section>
        <!-- Contenido de lado o lateral -->
        <aside></aside>
    </main>

    <!-- Pie de página -->
    <footer></footer>
</body>
```

## Clase 34: < table> tag

```
<table>
    <tr>
        <th>Tecnología web</th>
        <th>Función</th>
        <th>Logo</th>
    </tr>
    <tr>
        <td>HTML</td>
        <td>Estructura</td>
        <td><img src="http://www.xaviro.com/assets/img/skills/html.svg" alt=""></td>
    </tr>
    <tr>
        <td>CSS</td>
        <td>estilo</td>
        <td><img src="http://www.xaviro.com/assets/img/skills/html.svg" alt=""></td>
    </tr>
    <tr>
        <td>JavaScript</td>
        <td>Interactividad</td>
        <td><img src="http://www.xaviro.com/assets/img/skills/html.svg" alt=""></td>
    </tr>
</table>
```

tr= Table Row (fila de la tabla)
	th= Table Header (titulo de la tabla)
	td= Table Data (Datos de la tabla)

## Clase 35: < input> tag
```
<input type="password" placeholder="password">
<input type="search" placeholder="buscar">
<input type="phone" placeholder="+34 744-334-344">
<input type="date">
<input type="color">
<input type="file" accept="image/*" multiple>
<input type="checkbox" value="El checkbox esta marcado" checked>
```

## Clase 37: < textarea> tag

`<textarea cols="20" rows="10"></textarea>`

## Clase 38: < fieldset> tag 
Esto nos permitira agruoar diferentes inputs dentro de < fieldset>
< legend>= es el nombre de la agrupacion
```
<fieldset>
    <legend>Checkboxes</legend>
    <input type="radio" value="Uno" name="list">
    <label for="uno">Uno</label>

    <input type="radio" value="Dos" name="list">
    <label for="dos">Dos</label>

    <input type="radio" value="Tres" name="list">
    <label for="tres">Tres</label>
</fieldset>
```
El **atributo name** relaciona a los inputs, de esta manera solo podras marcar un checkbox

## Clase 39: < form> tag
```
<form action="/action.php" method="post">

    <label for="name">Nombre:</label>
    <input id="name" name="name" value="Mkcode">
    <br>
    <label>
        Email
        <input name="email" type="email" required placeholder="miemail@ejemplo.com">
    </label>
    <br>
    <button>Enviar</button>
</form>
```

