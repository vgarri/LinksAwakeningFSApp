CREATE DATABASE backendfinalproject;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    img VARCHAR(255) NOT NULL,
    role VARCHAR(10) DEFAULT 'user' CHECK (role IN ('admin', 'user'))
);

CREATE TABLE completedMarkers (
    marker_id SERIAL PRIMARY KEY,
    user_id int NOT NULL,
    mongo_title VARCHAR(255) NOT NULL,
    mongo_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Para crear usuarios no hace falta pasarle el rol, por defecto lo haremos con rol user. 
-- Dentro de la BBDD cambiaremos el rol si es necesario.
INSERT INTO users(username, password, email, img)
VALUES
	('Bolito', '1234567', 'bolito@dominio.com', 'img.com')

INSERT INTO completedMarkers(user_id, mongo_title, mongo_id)
VALUES
	('1', 'Se buscan desarrolladores Fullstack','67306e499fb6d04b2cdea1f5')
SELECT *
    FROM favorites

SELECT *
    FROM users