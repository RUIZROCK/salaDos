# SalaDos

Un sitio web de recetas de cocina.
Una aplicación web desarrollada utilizando HTML, CSS, Bootstrap, JavaScript y React.

## Integrantes del Proyecto

- Ruiz Giselle
- Ruiz Sergio

## Tecnologías Utilizadas

- HTML
- CSS
- Bootstrap
- JavaScript
- React

## Paquetes Instalados

Para ejecutar este proyecto, asegúrate de tener Node.js instalado en tu sistema. Luego, puedes instalar las dependencias ejecutando:

- npm install
- npm install bootstrap@5.3.2
- npm install sweetalert2
- npm install react-bootstrap bootstrap
- npm install json-server
- npm install react-router-dom
- npm install bootstrap-icons
- npm install react-hook-form

## Ejecutar el Proyecto

Una vez que hayas instalado todas las dependencias, puedes ejecutar el proyecto usando el siguiente comando:

- npm run dev (Caso prueba/desarrollo)

y en otro cmd dentro del mismo proyecto y ubicado donde este el archivo "db.json"

- npx json-server db.json (para ejecutar json-server)

## Sobre variable de entorno

dentro del proyecto, crear archivo .env con la siguiente linea

- VITE_API_RECETA=http://localhost:3000/recetas

si la ruta esta ocupada por otro, revisar, copiar y pegar la ruta que indica al ejecutarse el json-server