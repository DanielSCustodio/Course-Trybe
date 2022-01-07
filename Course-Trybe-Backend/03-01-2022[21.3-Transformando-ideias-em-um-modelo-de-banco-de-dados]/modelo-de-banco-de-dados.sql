create database if not exists albuns;
create table artista(
	artista_id int primary key auto_increment,
    nome varchar(50)
) engine=InnoDB;

create table album(
	album_id int primary key auto_increment,
    artist_id int not null,
	titulo varchar(100) not null,
    preco decimal(5,2) not null,
    estilo_id int not null,
    foreign key (artist_id) references artista(artista_id),
    foreign key (estilo_id) references estilomusical(estilo_id)
)engine=InnoDB;

create table estilomusical(
	estilo_id int primary key auto_increment,
    nome varchar(50) not null
)engine=InnoDB; 

use Biblioteca;
create database if not exists Biblioteca;

create table Autor (
	autor_id int primary key auto_increment,
    nome varchar(45)
);

create table Categoria (
	categoria_id int primary key auto_increment,
    nome varchar(45)
);

create table Cliente (
	cliente_id int primary key auto_increment,
    nome varchar(45)
);

create table Livro (
	livro_id int primary key auto_increment,
    titulo varchar(45),
    autor_id int not null,
    categoria_id int not null,
    foreign key (autor_id) references Autor(autor_id),
    foreign key (categoria_id) references Categoria(categoria_id)
);

create table Historico(
	livro_id int not null,
    cliente_id int not null,
    constraint primary key (livro_id, cliente_id),
    foreign key (livro_id)references Livro(livro_id),
    foreign key (cliente_id) references Cliente (cliente_id)
);























