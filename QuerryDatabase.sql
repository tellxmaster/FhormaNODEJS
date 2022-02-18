use master;

CREATE TABLE producto(
	id 				int primary key identity,
	nombre 			char(50),
	descripcion 	char(250),
	stock			int,
	imagen			image,
);

INSERT into producto values('Monk Soul','Zapatos de cuero hechos en suela natural.','10','');
INSERT into producto values('Eva Sneakers','Las zapatillas que no sabías que necesitabas han llegado para llenarte de comodidad y clase!.','10','');

SELECT * FROM  producto

create table tipo_usuario(
	id_tipo 		int primary key identity	not null,
	nombre_tipo		char(50)					not null
);

create table usuario(
	id_usr 			int primary key identity	not null,
	nickname_usr 	char(50)					not null,
	password_usr	char(50)					not null,
	nombre_usr  	char(50)					not null,
	cedula_usr		char(10)					not null,
	direccion_usr	char(250)					not null,
	celular_usr		char(10)					not null,
	telefono_usr	char(10)					null,
	fecha_nac_usr	date						not null,
	ultima_con_usr	date						null,
	id_tipo_usr		int 						not null,
	constraint fk_usuario_relations_tipo_usuario foreign key (id_tipo_usr)
      references tipo_usuario (id_tipo)
);

SELECT * FROM usuario
CREATE INDEX relationship_1_fk on tipo_usuario  (
	id_tipo  asc
);

insert into tipo_usuario values ('Administrador');
insert into tipo_usuario values ('Vendedor');
insert into tipo_usuario values ('Cliente');

