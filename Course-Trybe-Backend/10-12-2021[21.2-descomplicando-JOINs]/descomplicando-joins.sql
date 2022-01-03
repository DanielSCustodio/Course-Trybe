select * from sakila.address
inner join
sakila.city
on address.city_id = city.city_id;

select 
customer.customer_id, customer.first_name, customer.last_name, address.address,
address.district, address.city_id, city.city, city.country_id, country.country
from sakila.customer
inner join sakila.address on customer.address_id = address.address_id
inner join sakila.city on address.city_id = city.city_id
inner join sakila.country on city.country_id = country.country_id; 

select * from pet_db.friends
left join pet_db.pets on pets.owner_id = friends.friend_id;

select friend_id, count(pets.pet_id) from pet_db.friends
left join pet_db.pets on pets.owner_id = friends.friend_id
group by friend_id;



select * from pet_db.friends
inner join pet_db.pets on pets.owner_id = friends.friend_id;

select * from sakila.actor a, sakila.actor b
where a.first_name = b.first_name and a.last_name <> b.last_name;

select * from sakila.actor a
inner join sakila.actor b on  a.first_name = b.first_name and a.last_name <> b.last_name;

select * from sakila.customer
inner join sakila.address 
on customer.address_id = address.address_id
where store_id = 2;
















