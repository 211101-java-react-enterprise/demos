-- Joins

/*
	Join Types
		- INNER
			+ FULL
			+ RIGHT
			+ LEFT
			
		- OUTER
			+ FULL
			+ RIGHT
			+ LEFT
			
		- SELF
		
		- CROSS 
		
		+--------------------------------------+
		
			Theta Join
				+ When your ON clause uses an arbitrary comparison <, >, >=, <= etc
				
			Equi Join
				+ "Natural join"
				+ The join occurs on a column whose name is shared between both tables
				+ Can use the USING clause to simplify the query (instead of the ON clause)
*/

select *
from "Artist";

select *
from "Album";

-- INNER JOIN with an ON clause
-- the INNER keyword is implicit
select "AlbumId", "Title", "Name" 
from "Album" alb
join inner "Artist" art
on alb."ArtistId" = art."ArtistId";

-- INNER JOIN with the USING clause
select "AlbumId", "Title", "Name" as "Artist"
from "Album" 
join "Artist" 
using ("ArtistId");

select *
from "Employee";

-- Self join (table joins to itself)
select e1."FirstName", e1."LastName", e1."Title", e2."FirstName", e2."LastName", e2."Title"
from "Employee" e1
join "Employee" e2
on e1."ReportsTo" = e2."EmployeeId";

-- Multi-table joins
select
	track."Name" as track_name,
	alb."Title" as album_title,
	art."Name" as artist_name
from "Track" track
join "Album" alb
using ("AlbumId")
join "Artist" art
using ("ArtistId")
order by artist_name, album_title;

create table sizes (
	id serial constraint sizes_pk primary key,
	size varchar
);

create table colors (
	id serial constraint colors_pk primary key,
	color varchar
);

insert into sizes (size)
values 
	('S'), ('M'), ('L'), ('XL'), ('XXL');


insert into colors (color)
values 
	('red'), ('orange'), ('yellow'), ('green'), ('blue'), ('indigo'), ('violet');

select s.size, c.color
from sizes s 
cross join colors c;






