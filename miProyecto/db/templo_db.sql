DROP SCHEMA IF EXISTS templo_db;
CREATE SCHEMA templo_db;
USE templo_db;

CREATE TABLE users (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL, 
username VARCHAR(100) NOT NULL,
email VARCHAR(150) NOT NULL,
password VARCHAR (255) ,
birthday DATE ,
img VARCHAR(255) ,
created_at DATE,
updated_at DATE
);

CREATE TABLE products (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
user_id INT UNSIGNED NOT NULL,
shirt_name VARCHAR(100) NOT NULL,
shirt_description TEXT ,
shirt_image VARCHAR(255) ,
created_at DATE,
updated_at DATE,

FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE comments(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
product_id INT UNSIGNED NOT NULL,
user_id INT UNSIGNED NOT NULL,
comentario VARCHAR(255) NOT NULL,
created_at DATE,
updated_at DATE,

FOREIGN KEY (user_id) REFERENCES users(id),
FOREIGN KEY (product_id) REFERENCES products(id)
);


INSERT INTO users 
VALUES
(DEFAULT, "agusKpo", "agustinramirezcalvo@gmail.com", "papafrita12", "2004-02-03", "agus.jpg", CURDATE(), DEFAULT),
(DEFAULT, "tomiRey", "tomucho@gmail.com", "pelotitadefutbol", "2003-01-04", "tomi.jpg", CURDATE(), DEFAULT),
(DEFAULT, "Langusa", "langa@gmail.com", "langa123", "2001-04-07", "langa.jpg", CURDATE(), DEFAULT),
(DEFAULT, "migueG", "migueguerrero@gmail.com", "miguelito123", "2000-02-23", "migueg123.jpg", CURDATE(), DEFAULT),
(DEFAULT, "franakd", "francoakd@gmail.com", "francoferrero", "2002-04-08", "franco.jpg", CURDATE(), DEFAULT),
(DEFAULT, "feliflores", "feliflores@gmail.com", "felon", "2002-11-22", "feli.jpg", CURDATE(), DEFAULT),
(DEFAULT, "rafucho123", "rafarodrigo@gmail.com", "rafa1234", "2002-03-08", "rafa.jpg", CURDATE(), DEFAULT),
(DEFAULT, "ciroareco", "ciroareco@gmail.com", "arecociro", "2005-09-05", "ciro.jpg", CURDATE(), DEFAULT),
(DEFAULT, "lucioortega", "lucioirtega@gmail.com", "ortegavoslucio", "2003-11-12", "lucio.jpg", CURDATE(), DEFAULT),
(DEFAULT, "santicasanovias", "santicasa@gmail.com", "tecla123", "2007-06-04", "santi.jpg", CURDATE(), DEFAULT);


INSERT INTO products
VALUES
(DEFAULT, 1, "Inter Milan", "Camiseta del 2020 del Inter de Milan.", "imageMilan.jpg",  CURDATE(), DEFAULT),
(DEFAULT, 4, "Argentina", "Camiseta de la selección Argentina utilizada por Riquelme", "imageArgentina.jpg",  CURDATE(), DEFAULT),
(DEFAULT, 2, "Atlético de Madrid", "Camiseta del atlético de madrid para subastar", "imageAtleticoMadrid.jpg",  CURDATE(), DEFAULT),
(DEFAULT, 3, "Barcelona", "Camiseta del Barcelona en su época dorada", "imageBarcelona.jpg",  CURDATE(), DEFAULT),
(DEFAULT, 10, "Holanda", "Camiseta de Holanda retro", "imageHolanda.jpg",  CURDATE(), DEFAULT),
(DEFAULT, 9, "Independiente", "Camiseta de Independiente utilizada por Bochini", "imageIndependiente.jpg",  CURDATE(), DEFAULT),
(DEFAULT, 5, "Liverpool", "Camiseta del liverpool", "imageLiverpool.jpg",  CURDATE(), DEFAULT),
(DEFAULT, 4, "Manchester City", "Camiseta del Manchester City donada por Sergio Aguero", "imageManCity.jpg",  CURDATE(), DEFAULT),
(DEFAULT, 7, "Real Madrid", "Camiseta del club con mas historia, el Real Madrid", "imageRealMadrid.jpg",  CURDATE(), DEFAULT),
(DEFAULT, 6, "Paris Saint-Germain", "Camiseta del Paris Saint-Germain", "imagePSG.jpg",  CURDATE(), DEFAULT);




INSERT INTO comments
VALUES
(DEFAULT, 1, 9, "Que buena camiseta, me encanto la tela!", CURDATE(), DEFAULT ),
(DEFAULT, 2, 2, "Que manera de mentir! esa camiseta no la usaba Riquelme, no les compro mas.", CURDATE(), DEFAULT ),
(DEFAULT, 3, 3, "Espectacular, cuanto sale?", CURDATE(), DEFAULT ),
(DEFAULT, 6, 6, "Bochini para esa epoca ya no jugaba, me parece que no es la que él uso.", CURDATE(), DEFAULT ),
(DEFAULT, 1, 1, "Que buena camiseta, la quiero ya.", CURDATE(), DEFAULT ),
(DEFAULT, 8, 8, "No llego a ver si es de buena calidad porque la imagen no se ve muy clara!", CURDATE(), DEFAULT ),
(DEFAULT, 1, 7, "No me gustó.", CURDATE(), DEFAULT ),
(DEFAULT, 10, 5, "La de Messi la tienen?", CURDATE(), DEFAULT ),
(DEFAULT, 4, 4, "Yo la quiero! de esas no quedan muchas.", CURDATE(), DEFAULT ),
(DEFAULT, 7, 10, "Que buena camiseta, cuanto cuesta?", CURDATE(), DEFAULT );

