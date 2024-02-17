create database adatech;

create table users (
id serial primary key,
name text,
email text unique not null,
password text not null
);

create table task (
id serial primary key,
description text not null,
createAt date,
userId integer references users(id) not null
);