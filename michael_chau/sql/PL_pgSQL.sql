/* PL/pgSQL = Procdural Language extension of PostGreSQL
 	- NOT A SUBLANGUAGE
 	- Vendor specific (every DB vendor supports it, but with their own syntax)
 	- Allows devs to create:
 		+ Stored functions
 		+ Stored procedures (since PG v.11)
 		+ Triggers
 		+ Custom Types (effectively structs, not objects!)
 		
 	- Adds procedural language features to the normally declarative SQL syntax:
 		+ loops
 		+ conditionals
 		+ error/exception handling 	
*/

/* Stored functions
		Basic syntax:
			create [or replace] function [name] [parameters]
			returns [type]
			as '
				begin 
					[logic]
				end 
			'language plpgsql;
*/

create or replace function multiply (x numeric, y numeric)
returns numeric 
as '
	begin
		return x*y;
	end
' language plpgsql;

select multiply(5,4);

select multiply(2, '42'); -- Pg will attempt to coerce value that do not match to the expected type
select multiply(2, 'abc'); -- some values cannot be resonably coerced into the proper type, resulting in a sql error

create or replace function get_last_track_info()
returns text
as $$ --dollar quotes can be used to delineate function logic from rest of script like single quotes ''

	declare --declare block is used to declare vars to be used in the rest of the func's logic
		last_track_id int;
		track_name text;
		result text;
	
	begin
		select max("TrackId") --get last track id
		into last_track_id
		from "Track";
		
		select "Name" -- get name of the track with the last id
		into track_name
		from "Track"
		where "TrackId" = last_track_id;
		
		--Build the result test
		result := last_track_id || '-' || track_name; -- "123 - Some Song" := walrus for init/assignment; || for concat
		
		return result;
	end
$$ language plpgsql;

select get_last_track_info();
select * from "Track"
order by "TrackId" desc;

/*
 * Triggers
 * 	Can be called when inserting, updating, or removing data from a table
 * 	and can execute code that can perform additional complex validations or even run additional update,
 * 	insert, or delete queries to modify data in related tables.
 */

select * from colors;

create or replace function no_more_blues()
returns trigger as $$
	begin 
		--if new inserted value is blue, return null to prevent it being added
		if (new.color = 'blue')then 
			return null;
	end if;
		-- otherwise, let it be added.
		return new;
	end
$$ language plpgsql;

select * from colors;

insert into colors (color) values ('blue');
insert into colors (color) values ('ultraviolet');
update colors set color ='blue' where id = 9;
update colors set color = 'infrared' where id = 1;

--Does the trigger fire off if we manipulate a view based on the table?
create view view_colors as
select * from colors;

-- The trigger fires off, preventing illegal values from being inserted/updated.
select * from view_colors;
insert into view_colors (color) values ('blue');



















