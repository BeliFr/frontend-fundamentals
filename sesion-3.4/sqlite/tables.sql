-- Esto es un comentario de una sola línea
/*
Coemntario de múltiples líneas
Usuarios
    - nombre
    - correo
    - contraseña
    - telefono
    - fecha de nacimiento

Canciones
    - titulo
    - artista
    - duracion
    - genero
    - album
    - año

Artista
    - nombre
    - pais
    - generos
    - canciones
    - albumes

Album
    - nombre
    - año
    - artista

----------------------------------------------------

*/

-- Sintaxis para crear una tabla
-- CREATE TABLE nombre_de_la_tabla (
--  nombre_de_la_columna tipo RESTRICCION,
--  otra_columna tipo RESTRICCION
-- ...
-- )

--DATE es únicamente la fecha
--DATETIME es fecha con hora

-- En el caso de la tabla usuario, username, email y telephone almacenarían valores únicos
-- por cada registro, es decir, no habría dos usuarios con el mismo username, etc.
-- A este tipo de atributos/columnas se les conoce como "super llave"
-- La llave primaria es aquella que el diseñador de base de datos elige de entre las super llaves
-- Para especificar que un campo es la llave primaria, se utiliza PRIMARY KEY


CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username VARCHAR(30) UNIQUE NOT NULL,
  email VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(30) NOT NULL,
  telephone VARCHAR(12) UNIQUE NOT NULL,
  birthdate DATE
);

-- Para eliminar una tabla se usa
-- DROP TABLE nombre_de_la_tabla

DROP TABLE users;


CREATE TABLE songs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title VARCHAR(50) NOT NULL,
  length INTEGER NOT NULL CHECK(length > 0),
  genre VARCHAR(30) NOT NULL,
  year INTEGER NOT NULL CHECK(year > 1500)
);


CREATE TABLE artist (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(100) NOT NULL,
  country VARCHAR(5) NOT NULL
);

