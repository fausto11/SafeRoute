CREATE DATABASE crime;
USE crime;

CREATE TABLE users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255)
);

CREATE TABLE reports(
    id INT AUTO_INCREMENT PRIMARY KEY,
    parroquia VARCHAR(255),
    distrito VARCHAR(255),
    circuito VARCHAR(255),
    delito VARCHAR(255),
    hour INT,
    shooting BOOLEAN DEFAULT false,
    consumo_droga BOOLEAN DEFAULT false,
    venta_droga BOOLEAN DEFAULT false,
    indice VARCHAR(255),
    latitud VARCHAR(255),
    longitud VARCHAR(255),
    year INT,
    location VARCHAR(255),
    user_id INT NOT NULL,
    completed BOOLEAN DEFAULT false,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE shared_reports(
    id INT AUTO_INCREMENT PRIMARY KEY,
    crime_report INT,
    user_id INT,
    shared_with_id INT,
    FOREIGN KEY (crime_report) REFERENCES reports(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (shared_with_id) REFERENCES users(id) ON DELETE CASCADE
);

INSERT INTO users (name, email,password) VALUES('Fausto','fausto@gmail.com','12345678');
INSERT INTO users (name, email,password) VALUES('Jhonny','jhonny@gmail.com','12345678');
INSERT INTO users (name, email,password) VALUES('Joshua','joshua@gmail.com','12345678');


INSERT INTO reports(parroquia,distrito,circuito,delito,hour,shooting,consumo_droga,venta_droga,indice,latitud,longitud,year,location,user_id)
VALUES
('ALANGASI','LOS CHILLOS','ALANGASI','ROBO',13,0,0,0,'ALTO','-0.304714','-78.416503',2022,'(-0.304714,-78.416503)',1),
('AMAGUANA','LOS CHILLOS','AMAGUANA','ROBO',11,0,0,0,'ALTO','-0.28596','-78.440097',2022,'(-0.28596,-78.440097)',2),
('AMAGUANA','LOS CHILLOS','EL EJIDO','ROBO PERSONAS',11,0,0,0,'MEDIO','-0.285853','-78.437043',2022,'(-0.285853,-78.437043)',2),
('AMAGUANA','LOS CHILLOS','SANTA ISABEL','TENTATIVA DE ROBO',15,0,0,0,'MEDIO','-0.308739','-78.413464',2022,'(-0.308739,-78.413464)',1),
('ATAHUALPA','LA DELICIA','PERUCHO','ROBO A CARRO',21,0,0,0,'ALTO','-0.299465','-78.455587',2022,'(-0.299465,-78.455587)',3);


SELECT reports.*, shared_reports.shared_with_id
FROM reports
LEFT JOIN shared_reports ON reports.id = shared_reports.crime_report
WHERE reports.user_id=[user_id] OR shared_reports.shared_with_id=[user_id]
