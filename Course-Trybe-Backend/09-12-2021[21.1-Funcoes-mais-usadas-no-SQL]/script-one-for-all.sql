DROP DATABASE IF EXISTS SpotifyClone;
CREATE DATABASE SpotifyClone;
USE SpotifyClone;

CREATE TABLE planos(
	id_plano INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255),
    valor DECIMAL(3,2) NOT NULL
)engine = InnoDB;

CREATE TABLE usuarios(
	id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    idade INT NOT NULL, 
    id_plano INT NOT NULL,
    data_assinatura DATETIME NOT NULL,
    FOREIGN KEY (id_plano) REFERENCES planos (id_plano)
)engine = InnoDB;

CREATE TABLE artistas(
	id_artista INT PRIMARY KEY AUTO_INCREMENT, 
    nome VARCHAR(255) NOT NULL
)engine = InnoDB;

CREATE TABLE albuns(
	id_album INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL, 
    id_artista INT NOT NULL,
    ano_lancamento YEAR(4) NOT NULL, -- https://dev.mysql.com/doc/refman/8.0/en/year.html
	FOREIGN KEY (id_artista) REFERENCES artistas (id_artista)
)engine = InnoDB;

CREATE TABLE musicas(
	id_musica INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    id_abum INT NOT NULL,
    duracao_segundos INT NOT NULL,
    FOREIGN KEY (id_abum) REFERENCES albuns (id_album)    
)engine = InnoDB;

CREATE TABLE historico_de_reproducoes(
	id_usuario INT NOT NULL,
    id_musica INT NOT NULL,
    data_reproducao DATETIME NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuarios (id_usuario),
    FOREIGN KEY (id_musica) REFERENCES musicas (id_musica),
	PRIMARY KEY (id_usuario, id_musica)
)engine = InnoDB;

CREATE TABLE usuario_seguindo_artista(
	id_usuario INT NOT NULL,
    id_artista INT NOT NULL,
	FOREIGN KEY (id_usuario) REFERENCES usuarios (id_usuario),
    FOREIGN KEY (id_artista) REFERENCES artistas (id_artista),
	PRIMARY KEY (id_usuario, id_artista)
)engine = InnoDB;

INSERT INTO SpotifyClone.planos(nome, valor) 
VALUES
('gratuito', 0),
('universitario', 5.99),
('pessoal', 6.99 ),
('familiar', 7.99);

INSERT INTO SpotifyClone.usuarios(nome, idade, id_plano, data_assinatura) 
VALUES
('Thati', 23, 1, '2019-10-20'),
('Cintia', 35, 4, '2017-12-30'),
('Bill', 20, 2, '2019-06-05'),
('Roger', 45, 3, '2020-05-13'),
('Normam', 58, 3, '2017-02-17'),
('Patrick', 33, 4, '2017-01-06'),
('Vivian', 26, 2, '2018-01-05'),
('Carol', 19, 2, '2018-02-14'),
('Angelina', 42, 4, '2018-04-29'),
('Paul', 46, 4, '2017-01-17');

INSERT INTO SpotifyClone.artistas(nome)
VALUES
('Walter Phoenix'),
('Peter Strong'),
('Lance Day'),
('Freedie Shannon'),
('Tyler Isle'),
('Fog');

INSERT INTO SpotifyClone.albuns(nome, id_artista, ano_lancamento) 
VALUES
('Envious', 1, 1990),
('Exuberant', 1, 1993),
('Hallowed Steam', 2, 1995),
('Incandescent', 3, 1998),
('Temporary Culture', 4, 2001),
('Library of liberty', 4, 2003),
('Chained Down', 5, 2007),
('Cabinet of fools', 5, 2012),
('No guarantees', 5, 2015),
('Apparatus', 6, 2015);

INSERT INTO SpotifyClone.musicas(nome, id_abum, duracao_segundos)
VALUES
('Soul For Us', 1, 200),
('Reflections Of Magic', 1, 163),
('Dance With Her Own', 1, 116),
('Troubles Of My Inner Fire', 1, 203),
('Time Fireworks', 1, 152),
('Magic Circus', 2, 105),
('Honey, So Do I', 2, 207),
("Sweetie, Let's Go Wild", 2, 139),
('She Knows', 2, 244),
('Fantasy For Me', 3, 100),
('Celebration Of More', 3, 146),
('Rock His Everything', 3, 223),
('Home Forever', 3, 231),
('Diamond Power', 3, 241),
("Let's Be Silly", 3, 132),
('Thang Of Thunder', 4, 240),
('Words Of Her Life', 4, 185),
('Without My Streets', 4, 176),
('Need Of The Evening', 4, 190),
('History Of My Roses', 4, 222),
('Without My Love', 4, 111),
('Walking And Game', 4, 123),
('Young And Father', 4, 197),
('Finding My Traditions', 5, 179),
('Walking And Man', 5, 229),
('Hard And Time', 5, 135),
("Honey, I'm A Lone Wolf", 5, 150),
("She Thinks I Won't Stay Tonight", 5, 166),
("He Heard You're Bad For Me", 5, 154),
("He Hopes We Can't Stay", 5, 210),
('I Know I Know', 5, 117),
("He's Walking Away", 5, 159),
("He's Trouble", 5, 138),
('I Heard I Want To Bo Alone', 5, 120),
('I Ride Alone', 5, 151),
('Honey', 6, 79),
('You Cheated On Me', 6, 95),
("Wouldn't It Be Nice", 6, 213),
('Baby', 6, 136),
('You Make Me Feel So..', 6, 83);

INSERT INTO SpotifyClone.historico_de_reproducoes(id_usuario, id_musica, data_reproducao)
VALUES
(1, 36, '2020-02-28 10:45:55'),
(1, 25, '2020-05-02 05:30:35'),
(1, 23, '2020-03-06 11:22:33'),
(1, 14, '2020-08-05 08:05:17'),
(1, 15, '2020-09-14 16:32:22'),
(2, 34, '2020-01-02 07:40:33'),
(2, 24, '2020-05-16 06:16:22'),
(2, 21, '2020-10-09 12:27:48'),
(2, 39, '2020-09-21 13:14:46'),
(3, 6, '2020-11-13 16:55:13'),
(3, 3, '2020-12-05 18:38:30'),
(3, 26, '2020-07-30 10:00:00'),
(4, 2, '2021-08-15 17:10:10'),
(4, 35, '2021-07-10 15:20:30'),
(4, 27, '2021-01-09 01:44:33'),
(5, 7, '2020-07-03 19:33:28'),
(5, 12, '2017-02-24 21:14:22'),
(5, 14, '2020-08-06 15:23:43'),
(5, 1, '2020-11-10 13:52:27'),
(6, 38, '2019-02-07 20:33:48'),
(6, 29, '2017-01-24 00:31:17'),
(6, 30, '2017-10-12 12:35:20'),
(6, 22, '2018-05-29 14:56:41'),
(7, 5, '2018-05-09 22:30:49'),
(7, 4, '2020-07-27 12:52:58'),
(7, 11, '2018-01-16 18:40:43'),
(8, 39, '2018-03-21 16:56:40'),
(8, 40, '2020-10-18 13:38:05'),
(8, 32, '2019-05-25 08:14:03'),
(8, 33, '2021-08-15 21:37:09'),
(9, 16, '2021-05-24 17:23:45'),
(9, 17, '2018-12-07 22:48:52'),
(9, 8, '2021-03-14 06:14:26'),
(9, 9, '2020-04-01 03:36:00'),
(10, 20, '2017-02-06 08:21:34'),
(10, 21, '2017-12-04 05:33:43'),
(10, 12, '2017-07-27 05:24:49'),
(10,13, '2017-12-25 01:03:57');


INSERT INTO SpotifyClone.usuario_seguindo_artista(id_usuario, id_artista)
VALUES
(1, 1),
(1, 4),
(1, 3),
(2, 1),
(2, 3),
(3, 2),
(3, 1),
(4, 4),
(5, 5),
(5, 6),
(6, 6),
(6, 3),
(6, 1),
(7, 2),
(7, 5),
(8, 1),
(8, 5),
(9, 6),
(9, 4),
(9, 3),
(10, 2),
(10, 6);

SELECT
	(SELECT count(*) FROM SpotifyClone.musicas) AS cancoes,
    (SELECT count(*) FROM SpotifyClone.artistas) AS artistas,
    (SELECT count(*) FROM SpotifyClone.albuns) AS albuns;



















