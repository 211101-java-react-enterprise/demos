-- single line comments

/* multi line comments */

/*

	Demo schema:
		-Deparments
			+ id
			+ name
			+ monthly_budget
			
		-Employees
			+ id
			+ first_name
			+ last_name
			+ birthdate
			+ monthly_income
			+ department_id
			+ hire_date
			+ job_title
			+ email
			
		- Products
			+ id (primary key)
			+ name
			+ price
			+ expiration_date

*/
--common to see a series of DROP table statements at the beginning of any table creation script
drop table if exists products;
drop table if exists employees;
drop table if exists departments;

create table departments (
	id serial constraint department_pk primary key, --inline constraint declaration
	name varchar(25) unique not null, --candidate key (a column that could be a primary key)
	monthly_budget numeric(8,2) --first # is precision(# digits), 2nd is scale (#decimal places)
);

insert into departments values (1, 'Accounting', 20000);
insert into departments (name, monthly_budget) values ('Marketing', 15000);

--single INSERT for multiple values
insert into departments (name, monthly_budget)
values
	('IT', 30000),
	('Human Resources', 25000),
	('Customer SErvice', 23223),
	('Regulatory Affairs', 5000);

--Query the records
Selct * from departments;

create table employees (
	id serial,
	first_name varchar(25) not null,
	last_name varchar(25) not null,
	birthdate date not null,
	monthly_income numeric(7,2),
	department_id int,
	hire_date date default current_date,
	job_title varchar(25) not null,
	email varchar(255) not null,
	
	--another way of declaring table level constraints
	constraint employees_pk
	primary key (id), --id ref to id in departments
	
	constraint employee_departments_fk
	foreign key (department_id)
	references departments
	
	-- by default, FKs automatically point to the PK of the referenced table 
	-- FKs can point to non-PK columns in a referenced table, so long as the referenced column is UNIQUE
);

create table products (
	id serial,
	name varchar(50) not null,
	prie numeric(7,2) default 0, --misspelled price
	expiration_date date not null
);

alter table products
add constraint products_pk
primary key(id);

alter table products
rename column prie to price;

insert into employees (first_name, last_name, birthdate, monthly_income, department_id, hire_date, job_title, email) 
values 
	('JOHN', 'SMITH', date '1995-01-01', 4000.00, 1, date '2015-03-28', 'AC_ACCOUNT', 'JSMITH'), 
	('JAMES', 'BOSH', date '1992-02-15', 3500.00, 2, date '2014-07-01', 'MK_REP', 'JBOSH'),
	('LUISA', 'JACKSON', date '1970-03-08', 4500.00, 3, date '2013-08-29', 'IT_PROG', 'LJACKSON'),
	('STUART', 'GARCIA', date '1965-04-12', 2000.00, 4, date '2010-02-15', 'HR_REP', 'SGARCIA'),
	('JUSTIN', 'BLACK', date '1990-05-16', 2550.00, 1, date '2015-05-02', 'AC_ACCOUNT', 'JBLACK'),
	('ANGIE', 'CROOD', date '1998-06-22', 1500.00, 1, date '2015-07-01', 'AC_ACCOUNT', 'ACROOD'),
	('CHARLES', 'DEAN', date '1973-06-08', 2250.00, 3, date '2002-03-01', 'IT_PROG', 'CDEAN'),
	('EDDIE', 'FARREL', date '1980-07-28', 3000.00, 1, date '2009-04-20', 'AC_ACCOUNT', 'EFARREL'),
	('GEORGE', 'HAYES', date '1982-08-03', 2500.00, 2, date '2012-09-22', 'MK_REP', 'GHAYES'),
	('IGOR', 'OSBOURNE', date '1987-09-11', 6000.00, 3, date '2014-11-14', 'IT_PROG', 'IKEYS'),
	('LUKE', 'MINT', date '1985-10-19', 5000.00, 4, date '2011-01-08', 'HR_REP', 'LMINT'),
	('NIGEL', 'OAKS', date '1997-11-05', 4750.00, 4, date '2014-10-01', 'HR_REP', 'NOAKS'),
	('LUKE', 'GREEN', date '1995-02-05', 4750.00, 4, date '2015-09-01', 'HR_REP', 'LGREEN');

insert into employees (first_name, last_name,birthdate,monthly_income,department_id,job_title,email)
values ('Michael','Chau',date '1994-11-07', 0, 3, 'L', 'mchau@revature.net');

select * from employees e;

insert into products (name, price, expiration_date)
values
	('Asprin', 5.00, date '2021-2-23'),
	('Penicillin', 5.00, date '2021-2-23'),
	('Insulin', 3.00, date '2021-2-23'),
	('Acreaminophen', 5.00, date '2021-2-23'),
	('Amoxicillin', 9.00, date '2021-2-23');

select * from products p;

commit; --commits DML statements to DB memory (this is automatic in DBeaver, but dont rely on that)	

delete from products
where name = 'Insulin';

delete from products;

rollback; --takes you back to the previous savepoint or commit.
		-- helps when you do something wrong and haven't commited yet
		-- Rolling back to a savepoint and then rolling back again will take you to the previous commit
		-- You cannot rollback beyond a commit 
		-- Making a savepoint when oen already exists will overwrite the previous one

--get certain columns from a table
select name, price
from products p;

-- column aliases for expressions
select name, price as original_price, (price - (price* .3)) as sale_price
from products p;

-- WHERE CLAUSE
select id, name, price
from products p where price <= 10;

select *
from products p 
where expiration_date < date '2032-03-3';

select *
from products p
where expiration_date < '01-APR-2023'; --date string w/o date keyword format: dd-mm-yyyy

select *
from products
where expiration_date < '2019-2-21'; --date string format yyyy-mm-dd

--MULTIPLE CONDITIONS IN WHERE
select *
from products p
where
	(
		id<5
		or name='Amoxicillin'
		and price>5
	)
	and
	(
		price<=6
		or expiration_date = '2021-2-23'
	);
	
/*
 * Logical Operatiors
 * 	- AND, OR, NOT
 * 	- documentation links: 
 * 	- https://www.postgresql.org/docs/11/functions-logical.html
 *  - https://www.postgresql.org/docs/11/functions-comparison.html
 */


-- DISTINCT KEYWORD
select depart_id
from employees e;

--eliminates deuplicates from the result set
select distinct department_id
from employees e;

-- a record is considered to be a "duplicate" if all of the values of the record match to another
select distinct first_name, last-name, department_id
from employees e;

-- ORDER by *(sorts records of the result set)
selet * from employees e
order by birthdate asc; --asc is implied and not requiredd  (ok to include through)

select *
from employees e 
order by birthdate desc;

select *
from employees e
order by first_name;

-- more than one order criteria
select * from employees e
order by department_id desc, monthly_income;


/*
 * Scaler functions
 * 
 * 	aka single-row/value funtion, return a value for every row that is processed in a query.
 * 
 * 	Types:
 * 	- Numeric functions (https://www.postgresql.org/docs/11/functions-math.html
 *  - Character functions (https://www.postgresql.org/docs/11/functions-string.html
 *  - Date functions (https://www.postgresql.org/docs/11/functions-datetime.html
 */

select substring('test', 1, 3); --inclusive range, index 1-based (gross)
select abs(-11);

select floor(2.678); --2
select ceiling (2.00001); --3
select round (2.499); --2

select first_name, last_name, age(current_date, birthdate) as current_age
from employees e;

/*
 * Aggregate functions
 *  - operates which can be performed on a group of records in order to provide a single value/result
 */

select min(price) as min_price, max(price) as max_price, avg(price), sum(price)
from products p;

select count(name)
from products p;

--add a new column to products for an abbreviated name of each product
alter table products
add column abbr_name varchar(4);

--update values within new abbr column
update products
set abbr_name = substring(name, 1, 4)
where id<4;

--The count() function only counts non-null values!
select count(abbr_name)
from products p;




	