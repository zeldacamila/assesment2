# assesment2

2.	npm init -y
3.	npm i express, cors
4.	npm i nodemon -D
5.  npm i dotenv -D para guardar nuestras variables de entorno
6.  npm i morgan -D
5.	Configuramos el package.json (“main”: “src/server.js” y creamos el script “dev”: “nodemon src/server.js”
6.	Creamos carpeta src y dentro server.js
7.	Configuramos el archivo server.js, requerimos express y lo instanciamos
a.	(const express = require (“express”))
b.	const app = express();
8.	Creamos el puerto
a.	const port = 8080;
9.	Ponemos a escuchar el puerto
app.listen(port, () => {
console.log(`Successfully running at http://localhost:${port}`)
})
10.	 npm run dev
11.	Vamos a empezar a configurar la base de datos. Dentro de src creamos un archivo db.js
require("dotenv").config()
12.	Instalamos mongoose (mongoose es una capa que nos ayuda para podernos comunicar con la base de datos desde nuestro servidor. (npm i mongoose)
13.	En el archivo db.js requerimos mongoose (const mongoose = require(“mongoose”)
14.	Creamos una function para conectarnos a la base de datos:
a.	function connect() {
i.	const mongoUri = (colocando a donde voy a conectarme, en este caso vamos a mongoatlas)
b.	}
15.	En Mongo Atlas creamos un nuevo proyecto
16.	Después creamos una base de datos 
20.	Luego configuramos lo del Security Quickstart, asignamos un username y una password (root y root en este caso) y creamos el usuario.
21.	Nos vamos a network Access en el panel izquierdo e añadimos IP (Add IP Address).
22.	Click en ADD current IP address para configurar la IP de nuestro computador y también le configuramos para que pueda acceder desde cualquier IP.
23.	Click en Database , vemos Cluster0 y le damos click en Connect, nos conectamos desde la aplicación (click en connect your application), y copiamos el URI.
24.	Ingresamos lo copiado en el código, en la función conect. Cambiamos el password y ponemos la que le asignamos al crear el usuario, y antes del “?” colocamos el nombre de nuestra base de datos

Yvr23pzWytFiX9jD