CREATE DATABASE IF NOT EXISTS music;

USE music;

DROP TABLE IF EXISTS songs;

DROP TABLE IF EXISTS artists;

CREATE TABLE artists (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    genre VARCHAR(30) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE songs (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    album VARCHAR(50) NOT NULL,
    artist_id INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (artist_id) REFERENCES artists(id)
);

INSERT INTO
    artists (name, genre)
VALUES
    ("Angra", "power metal"),
    ("Rhapsody", "power metal"),
    ("Racionais MC's", "rap"),
    ("Elis Regina", "MPB"),
    ('Nina Simone', 'R&B');

INSERT INTO
    songs (name, album, artist_id)
VALUES
    ('Carry On', 'Angels Cry', 1),
    ('Eternal Glory', 'Symphony of Enchanted Lands', 2),
    ('Diário de um Detento', 'Sobrevivendo no Inferno', 3),
    ('Feeling Good', 'I Put a Spell on You', 5),
    ("Ain't Got No / I Got Life", 'Nuff Said!', 5);
