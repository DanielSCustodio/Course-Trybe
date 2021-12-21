select * from sakila.actor where first_name ='johnny';
select actor.last_name from sakila.actor where first_name ='johnny';
select * from sakila.actor where first_name ='johnny' OR last_name='cage';
select * from sakila.film where rental_duration =6 AND (rating='R' OR rating='PG');
select * from sakila.film where rental_duration=7 AND rating IN ('NC-17', 'G');
select * from sakila.film where rental_duration=7 AND rating NOT IN ('NC-17', 'G');
select *from sakila.film where length between 50 AND 130;
select * from sakila.actor where first_name  between 'a' AND 'e'
order by first_name;

select *from sakila.rental
where return_date between '2005-05-27' AND '2005-06-03'; 

select *from sakila.rental
where return_date between '2005-05-27 00:00:00' AND '2005-05-27 23:59:59';

select * from sakila.rental 
where Date(return_date) = '2005-05-27'
order by return_date;

select count(*) from sakila.rental
where month(return_date) ='05';

select count(*) from sakila.rental
where year(return_date) ='2005';

select now();
select DATE(now());

select * from sakila.customer
where first_name like '%FER%';

select * from sakila.customer
where first_name like '_A_';

select * from sakila.actor
where first_name like '_RA%'
order by first_name;

select * from sakila.film
where description like '%drama%';













