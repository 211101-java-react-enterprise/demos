
/*
 * Subqueries
 * 	aka: Nested Queries
 * 
 * 	can be used within:
 * - WHERE clause
 * - column selector list
 * - FROM clause
 * 
*/

--Subquery in a FROM clause
select some_name.* --alias to be defined soon
from (
	select *
	from "Genre"
	where "Name" like 'R%' -- like operator is case-sensitive, and the % is a wildcard
) as some_name
where some_name."GenreId" > 6;

select *
from "Genre"
where "Name" like 'R%';

-- Subquery in a WHERE clause
select *
from "Employee" e 
where "HireDate" in -- in operators is for checking to see if a value is included within a result set of other values
	(
		select "HireDate"
		from "Employee"
		order by "EmployeeId"
		limit 5 --limits the result to 5 records
	);
	
/* 
	Views
		When we execute a query, we generate a result set.
		Sometimes we may requently use that result set as
		a base for executing other queries.
		
	Views are just the result sets of saved querires that have
	a name and can be referenced by other queries.
	Views act as a sort of "virtual table"
*/

create table trainers (
	id serial constraint trainer_pk primary key,
	fn varchar not null check (fn <> ''), -- <> not equal operator 
	ln varchar not null check (ln <> '')
);

insert into trainers (fn,ln)
values ('Wezley', 'Singleton');

insert into trainers (fn,ln)
values ('DoesntWork', '');

insert into trainers (fn,ln)
values ('Wezley', 'Marriedton'),
	('Whose', 'Who'),
	('Ya', 'hooo');

select * from trainers;

select * from trainers
where id >= 2;

create view view_trainers as
select * from trainers
where id >= 2;

select * from view_trainers
where id = 1; -- doesn't show wezley because id not represented in view set

-- Inserting records into a view works
insert into view_trainers (fn, ln) 
values
	('Jacob', 'Davis');

-- Inserting/updating/removing values from a view will impact the underlying table.
select * from trainers; -- and it impacts the underlying table

-- What about manipulating the underlying table and seeing the impact on the view?
insert into trainers (fn, ln)
values
	('Em', 'ily'),
	('Mr.', 'Terminator');

--Check the impact on the view: trainers were added
select * from view_trainers;

--View can be thought of as a synthatically prettier version of the following
select sq.*
from (
	select *
	from trainers 
	where id >=2
) as sq;


























