use tarefas_db;

create table equipe(
	id int not null auto_increment,
	nome varchar(100) not null,
    coordenador varchar(100) not null,
    dev1 varchar(100) not null,
    dev2 varchar(100) not null,
    dev3 varchar(100) not null,
    primary key (id)
);

create table tarefa(
	id int not null auto_increment,
    titulo varchar(100) not null,
    descricao text not null,
    responsavel varchar(100) not null,
    equipe_responsavel varchar(100) not null,
    id_equipe int not null,
    primary key (id)    
);

alter table tarefa 
add foreign key (id_equipe)
references equipe(id);

insert into equipe
(nome, coordenador, dev1, dev2, dev3)
values
('Delta', 'Ikaro', 'Marcos', 'Gabriel', 'Lucas'),
('Assisoft', 'Edir', 'Custódio', 'Evaldo', 'João'),
('Alpha', 'Juliano', 'Daniel', 'Dhany', 'Vilma');


insert into tarefa
(titulo, descricao, responsavel, equipe_responsavel, id_equipe)
values
('Node.js', 'Fazer api em node.js com todas as função de listagem para filtros', 'Ikaro','Delta' , '1'),
('Vue.js', 'Fazer front end com vue.js ultilizando diretivas','Daniel','Alpha' , '3'),
('Designer', 'Fazer protótipo no figma para fazer apresentação para o cliente','Lucas','Delta' ,' 1'),
('Banco de dados', 'Fazer alteração no banco de dados adicionando uma nova tabela ','Edir','Assisoft' , '2');

create user 'suporte'@'localhost' identified by 'suporte99';
grant all privileges on tarefas_db.* to 'suporte'@'localhost';

