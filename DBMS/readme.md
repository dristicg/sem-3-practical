
Q1

create table hotel {
    hotel_id int primary key,
    hotel_name varchar(60),
    city varchar(40),
    room_available int,
}

Q2
a) Insert into hotel (hotel_id, hotel_name, city, room_available)
values 
(1,'Hotel A','Delhi', 5);
(2,'Hotel B','Mumbai', 7);

b) update hotel set room_available = 8 where hotel_id=1;

c) delete from hotel where hotel_id=2;

d)select sum(room_available) as total_rooms from hotel;

e)select avg(room_available) as avg_room from hotel;