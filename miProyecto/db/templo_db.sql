CREATE SCHEMA templo_db;
USE templo_db;

CREATE TABLE users (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
username VARCHAR(100) ,
email VARCHAR(150) ,
password VARCHAR (255) ,
birthday DATE ,
img VARCHAR(255) ,
created_at DATE,
updated_at DATE
);

CREATE TABLE products (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
user_id INT UNSIGNED ,
shirt_name VARCHAR(100) ,
shirt_description TEXT ,
shirt_image VARCHAR(255) ,
created_at DATE,
updated_at DATE,

FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE comments(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
product_id INT UNSIGNED ,
user_id INT UNSIGNED ,
comentario VARCHAR(255) ,
created_at DATE,
updated_at DATE,

FOREIGN KEY (user_id) REFERENCES users(id),
FOREIGN KEY (product_id) REFERENCES products(id)
);


INSERT INTO users 
VALUES
(DEFAULT, "agusKpo", "agustinramirezcalvo@gmail.com", "papafrita12", "2004-02-03", "agus.jpg", DEFAULT, DEFAULT);



INSERT INTO products
VALUES
(DEFAULT, 1, "Independiente", "Camiseta de 1982 utilizada por Rolfi Montenegro.", "cai.jpg",  DEFAULT, DEFAULT);


INSERT INTO comments
VALUES
(DEFAULT, 1, 1, "Que buena camiseta, me encanto la tela!", DEFAULT, DEFAULT );
