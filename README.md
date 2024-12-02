<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://www.sevillaemprendedora.org/wp-content/uploads/2024/03/The-Bridge.png" alt="Project logo"></a>
</p>

<h3 align="center">PROYECTO INDIVIDUAL FULL-STACK. APLICACIÓN MADRID VENUES</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="justify"> El objetivo de este proyecto ha sido el diseño y desarrollo de una web PERN Fullstack, comprendiendo un front end con react, backend con express.js y Node.js, así como un modelo y base de datos PostgreSQL.
    <br> 
     
</p>
USO:<br> 
<p>
- Conectar a BBDD según env.example, puede ser en local<br> 
- npm i para instalar las dependencias necesarias<br> 
- npm run dev para arrancar el server (localhost:3000)<br>
- splittear la terminal y ejecutar por terminal: cd client. Una vez dentro npm i para instalar react y demás dependencias del front-end.
- npm run dev y visualizar en navegador: (localhost:5173)
</p>


## 📝 ÍNDICE

- [Acerca de](#about)
- [Herramientas utilizadas](#built_using)
- [Detalles del procedimiento y ejemplos](#detalles)
- [Implementaciones futuras](#implementacionesf)

- [Autoría](#authors)


##  Acerca de <a name = "about"></a>
#### El proyecto se ha desarrollado por fases, siendo importante separarlo por front y back end:
<p align="justify">

- (Fase I): Desarrollo del modelo de datos usando el diagrama E/R, con su consecuente modelo físico de tablas SQL (elegido para el modelado de datos por su mayor rigidez y por la tipología del proyecto, el cual relaciona dos tablas many-to-many (N:M) mediante la tabla intermedia favoritos, descartando así MongoDB para esta interacción para mayor limpieza del código), así como la organización del proyecto en VScode, utilizando una estructura server-client en la misma carpeta, e instalando vite-react en la dependencia client del mismo.

- (Fase II): Back-End. API REST con Express.js.<br/>
En este caso se ha dimensionado un servidor con Express y Node.js , siguiendo MVC (modelo-vista-controlador) para ser la API que comunicará el front-end (vista) con la BBDD (desplegada en Render), garantizando la correcta enrutación y posterior acceso a la misma desde los componentes funcionales de React, que realizarán las necesarias peticiones HTTP.

- (Fase III): Front-End con React. <br/>
Para el front-end de la aplicación "Madrid Venues" se ha seguido la organización de árbol de componentes funcionales de react, contando con 19 componentes, en los cuales se utilizan manejo de estados (con hooks useState y useEffect), contexto provider-consumer (useContext) y enrutación de componentes con useNavigate, lo cual garantiza una correcta experiencia de usuario y completa el ciclo de full-stack de la aplicación.




- (Fase IV): DEV-OPS, documentación, testing y mejora de UX/UI. <br/>
En esta fase del proyecto se comprenden las operaciones devops como el despliegue completo de la aplicación utilizando contenedores de imagenes mediante Docker, documentación de la web-app con swagger y testing E2E con cypress y testing unitarios.
</p>



## ⛏️ Herramientas utilizadas <a name = "built_using"></a>

- API REST (Express.js y Node.js)
- Leaflet React
- ES6
- Asincronía
- Gestión del proyecto en Github desde el principio. Uso de ramas. Despliegue en GitHub Pages
- Diseño responsive, mobile first, semántica HTML5 y CSS3
- PostgreSQL
- React (Hooks, estados, contexto)
- JWT, bcrypt
- MUI Material Design
- Swagger
- Cors
- MVC
- axios
- Peticiones HTTP
- Postman
- Trello
- PGAdmin4
- Docker
- Render
- Morgan
- Sass (SCSS)

## Detalles del procedimiento <a name = "detalles"></a>
#### Paso previo: Diseño del modelo de datos:
Como se menciona anteriormente, se presenta el siguiente modelo de tablas físico SQL:

<a href="https://ibb.co/b3RNjTq"><img src="https://i.ibb.co/26Yc0xm/Captura-de-pantalla-2024-12-03-a-las-0-15-47.png" alt="Captura-de-pantalla-2024-12-03-a-las-0-15-47" border="0"></a>

#### Paso 1: Organización del proyecto y dimensionamiento del back end
Incluyendo también una estimación del árbol de componentes del front con React. Rutas de prueba con postman, presentes en la carpeta utils-postman con formato .json


#### Paso 2: Server con Express:
El siguiente paso ha sido crear el server con Express, implementando la lógica necesaria para las peticiones http y su manejo dentro del código.

#### Paso 3: Front con React y Sass:
Se han utilizado componentes funcionales comunicados por props, context y levantamiento de estado, así como peticiones asíncronas a la propia API del proyecto mediante axios. Se ha maquetado la aplicación buscando un diseño adaptado a móvil (Mobile First) y teniendo en cuenta otros tamaños de pantalla, usando mediaqueries y maquetación por componentes con Sass.




## Mejoras futuras: <a name = "implementacionesf"></a>

Admin dashboard (Auth by role para utilizar al 100% el CRUD de markers desde el front)

Events con WebScraping y guardado en MongoDB por las características del tipo de datos, en este momento solo mock

Deployment en Docker

Sistema de ratings de salas y reviews

Edit user profile desde el front (Solo disponible en Back-end)

Sequelize y testing (E2E y unitarios)






## ✍️ Autoría <a name = "authors"></a>

- Víctor Garritano Pérez (FullStack Dev student en The Bridge), 2024