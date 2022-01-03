SET @age = 108;
select if (@age >= 18,'Di maior', 'Di menor');
select  customer_id, active, if(active, 'Ativo', 'Inativo') as `status` 
from sakila.customer; 

select customer_id, store_id,
case store_id
	when 1 then 'loja 1'
	when 2 then 'loja 2'
end as `nome_loja` 
from sakila.customer;

select film_id, length,
	case 
		when length <= 30 then 'Até meia hora'
		when length between 31 and 60 then 'De 30 minutos a 1 hora' -- boa opção
        when length > 60 and length <= 90 then 'De 1 hora a 1 hora e meia'
        when length > 90 and length <= 120 then 'De1 hora e meia a 2horas'
        else 'Mais de duas horas'
    end as `duracao do filme`
from  sakila.film;

select length('I have a dream');
select ucase('I have a dream');
select lcase('I have a dream');
select replace('I have a dream', 'a', 'x');
select replace('I have a dream', 'dream', 'job');
select left('I have a dream', 8);
select right('I have a dream', 7);
select substring('I have a dream', 3,5);
select substring('I have a dream', -5,4);

select 5+5;
select 5-5;
select 5*5;
select 5/5;
select 5 DIV 5;
select 10 mod 7;
select round (19.49);
select round (19.50);
select round (19.44, 1);
select round (19.44052, 3);
select ceil(20.1);
select floor(20.9); 
select pow(2,8);
select sqrt(9);
select sqrt(7);
select sqrt(-7);
select rand();
select floor(1 + (rand()*10));
select min(rental_duration) from sakila.film;
select max(rental_duration) from sakila.film;
select avg(rental_duration) from sakila.film;
select sum(rental_duration) from sakila.film;
select count(address2) from sakila.address;
select count(coalesce(address2,'sem valor')) from sakila.address;

select current_date();
select now();
select datediff('2021-05-31','2021-05-01');
select return_date, rental_date, datediff(return_date, rental_date) from sakila.rental;
select timediff('14:00:30','04:15:30');
select return_date, rental_date, timediff(return_date, rental_date)  from sakila.rental; 
select date('2021-05-31 22:04:30');
select day('2021-05-31 22:04:30');
select month('2021-05-31 22:04:30');
select year('2021-05-31 22:04:30');
select hour('2021-05-31 22:04:30');
select minute('2021-05-31 22:04:30');
select second('2021-05-31 22:04:30');

select store_id, COUNT(*) from sakila.customer
group by store_id;

select rating, avg(rental_rate) from sakila.film
group by rating;

select rating, min(rental_rate) from sakila.film -- mostra o menor rate de cada classificação
group by rating;

select store_id, active, count(customer_id) as 'Total' from sakila.customer
group by  store_id, active; 

select store_id, active, count(customer_id) as 'Total' from sakila.customer
group by  store_id, active
having `total` > 100;  

select
case 
	when length <= 30 then 'Até meia hora'
	when length between 31 and 60 then 'De 30 minutos a 1 hora' -- boa opção
	when length > 60 and length <= 90 then 'De 1 hora a 1 hora e meia'
	when length > 90 and length <= 120 then 'De1 hora e meia a 2horas'
	else 'Mais de duas horas'
end as duração, -- coluna gerada dinamicamente
count(film_id) as qtd_filmes
from  sakila.film
group by duração
having qtd_filmes > 100;













