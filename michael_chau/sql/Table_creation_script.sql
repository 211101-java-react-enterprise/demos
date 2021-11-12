drop table if exists app_user;

create table app_users (
	id varchar,
	first_name varchar(25) not null,
	last_name varchar(25) not null,
	email varchar(255) unique not null,
	username varchar(20) unique not null,
	password varchar not null,
	
	constraint app_users_pk 
	primary key (id)
);

select * from app_users;