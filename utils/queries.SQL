
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    img VARCHAR(255) NOT NULL,
    role VARCHAR(10) DEFAULT 'user' CHECK (role IN ('admin', 'user'))
);
CREATE TABLE markers (
    marker_id SERIAL PRIMARY KEY,
    marker_title VARCHAR(50) UNIQUE NOT NULL,
    type VARCHAR(255) NOT NULL,
    x int NOT NULL,
    y int NOT NULL,
    z int NOT NULL

);

CREATE TABLE completedMarkers (
    completed_id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    marker_title VARCHAR(50) UNIQUE NOT NULL,
    FOREIGN KEY (marker_title) REFERENCES markers(marker_title),
    FOREIGN KEY (username) REFERENCES users(username)
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