-- single line comments

/*
	multi line
	comments
*/

/*
	Demo Schema:
	
		- Departments
			+ id (primary key)
			+ name
			+ monthly_budget
			
		- Employees
			+ id (primary key)
			+ first_name
			+ last_name
			+ birthdate
			+ monthly_income
			+ department_id (foreign key)
			+ hire_date
			+ job_title
			+ email
			
		- Products
			+ id (primary key)
			+ name
			+ price
			+ expiration_date
			
*/

-- Common to see a series of DROP table statements at the beginning of any table creation script
drop table if exists products;
drop table if exists employees;
drop table if exists departments;

create table departments (
	id serial constraint department_pk primary key, -- inline constraint declaration
	name varchar(25) unique not null, -- candidate key (a column that COULD be a primary key)
	monthly_budget numeric(8, 2) -- first # is precision (# of digits), second # is scale (# of decimal places)
);

-- Unfortunately, SQL strings are single quotes.
insert into departments values (1, 'Accounting', 20000);
insert into departments (name, monthly_budget) values ('Marketing', 15000);

-- Single INSERT for multiple values
insert into departments (name, monthly_budget)
values 
	('IT', 30000),
	('Human Resources', 25000),
	('Customer Service', 2000),
	('Regulatory Affairs', 5000);
	
-- Query the records within the table
select * from departments;




















