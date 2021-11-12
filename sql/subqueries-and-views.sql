/* Subqueries
	AKA: Nested Queries
	
	Can be used within: 
		- WHERE clause
		- column selector list
		- FROM clause
*/

-- Subquery in a FROM clause (effectively queries a result set; similar to querying a View)
select some_name.* -- alias to de defined soon
from (
	select *
	from "Genre"
	where "Name" like 'R%' -- like operator is case-sensitive, and the % is a wildcard
) as some_name
where some_name."GenreId" > 6;

-- This is the subquery from the above statement.
select *
from "Genre"
where "Name" like 'R%';

-- Subquery in a WHERE clause
select *
from "Employee"
where "HireDate" in -- the IN operator is for checking to see if a value is included within a result set of other values
	(
		select "HireDate"
		from "Employee"
		order by "HireDate"
		limit 5 -- limits the result set to 5 records
	);

/*
 * Views
 * 		When we execute a query, we generate a result set.
 * 		Sometimes we may frequently use that result set as
 * 		a base for executing other queries.
 * 
 * 		Views are just the result sets of saved queries that
 * 		have a name and can be referenced by other queries.
 * 		Views act as a sort of "virtual table"
 */

drop table trainers;
create table trainers (
	id serial constraint trainer_pk primary key,
	fn varchar not null check (fn <> ''),
	ln varchar not null check (ln <> '')
);

insert into trainers (fn, ln) 
values ('Wezley', 'Singleton');

insert into trainers (fn, ln) 
values ('Doesn"t work', '');

insert into trainers (fn, ln) 
values 
	('Brandon', 'Pinkerton'),
	('Mehrab', 'Rahman'),
	('Trevin', 'Chester');


select * from trainers;

select *
from trainers 
where id >= 2;

create view view_trainers as
select *
from trainers 
where id >= 2;

-- Wezley doesn't show up because that record is not in the result set represented by the view_trainers view
select *
from view_trainers
where id = 1;

-- Brandon shows up because he is in the original result set
select *
from view_trainers
where id = 2;

-- Can we insert records into a view? Seems to work...
insert into view_trainers (fn, ln)
values
	('Jacob', 'Davis'),
	('Harvey', 'Hill');

-- But what effect did that have on the underlying table?
select *
from trainers;

-- Inserting/updating/removing values from a view will impact the underlying table.

-- What about manipulating the underlying table and seeing the impact on the view?
insert into trainers (fn, ln)
values 
	('Emily', 'Higgins'),
	('Genesis', 'Bonds'),
	('Blake', 'Kruppa');

-- Check the impact on the view: trainers were added
select *
from view_trainers;

-- Views can be thought of as a syntactically prettier version of the following
select sq.*
from (
	select *
	from trainers 
	where id >= 2 
) as sq;

















