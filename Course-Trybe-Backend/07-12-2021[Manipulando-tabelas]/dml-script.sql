-- the rock 202
insert into sakila.actor values(202,'The', 'Rock',now());
select * from sakila.actor order by actor_id desc limit 15;
insert into sakila.actor (first_name, last_name, last_update)values('Sam', 'Elliott', now());
insert into sakila.actor (actor_id, first_name, last_name)values('Ashton', 'Kutcher');
insert into sakila.actor(actor_id, first_name, last_name) 
values(205,'Debra', 'Winger'),(206,'Elisha', 'Cuthbert');

insert ignore into sakila.actor(actor_id, first_name, last_name) 
values(205,'Debra', 'Winger'),(206,'Elisha', 'Cuthbert'),(207,'Sharon','Lawrence');

insert into  sakila.actor (first_name, last_name)
select first_name,last_name from sakila.customer limit 5; -- copia de dados entre tabelas

update sakila.actor set first_name ='Dwayne', last_name='Johnson'where actor_id= 202;
update sakila.customer set active=0 where store_id in (1,2);
update sakila.customer set active = 1 order by customer_id limit 5;
select * from sakila.customer;

delete from sakila.actor where actor_id > 207;
-- truncate table sakila.actor;



