drop database if exists lebonclown;
create database lebonclown;
use lebonclown;

create table user 
(
    id int auto_increment primary key,
    firstname varchar(30) not null,
    lastname varchar(30) not null,
    password varchar(30) not null,
    email varchar(30) not null,
    bio varchar(250) null,
    profile_pic varchar(200) DEFAULT 'https://i.ibb.co/cr26yfF/default-avatar.jpg',
    city varchar(30) not null
);
create table post
(
    id int auto_increment primary key,
    user_id int,
    created_at timestamp default CURRENT_TIMESTAMP,
    title varchar(30) not null,
    category enum ('Magicien','Clown','Jongleur','Illusionniste','Troubadour'),
    content varchar(300) not null,
    profile_pic varchar (500),
    price varchar(10),
    FOREIGN KEY (user_id) REFERENCES user(id)
);

INSERT INTO `user`
(`firstname`, `lastname`, `password`, `email`, `bio`, `profile_pic`, `city`) 
VALUES
('Youri', 'Ligotmi', 'pouet', 'yligotmi@msn.com', 'Je voudrais instaurer un nouvel ordre mondial', 'https://randomuser.me/api/portraits/men/43.jpg', 'Angers');
INSERT INTO `post`
(`user_id`, `title`, `category`, `content`,`profile_pic`,`price`) 
VALUES
(1, 'Vous n y croierez pas', 'Magicien', "La magie existe et je vais vous le prouver!!!! Donnez moi ma chance Abracadabra","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGlOXIfFBEmrq5PehdTiLsWXgGVcXgtjoSXEwk-N4gjoLzb4eY&s",'1000');
INSERT INTO `post`
(`user_id`, `title`, `category`, `content`,`profile_pic`,`price`) 
VALUES
(1, ' oracle outragent', 'Troubadour', "Hallo...Win? et farendolle de sérénades", "https://images-na.ssl-images-amazon.com/images/I/61DuzL0GQ%2BL._AC_SY355_.jpg",'105');
INSERT INTO `post`
(`user_id`, `title`, `category`, `content`,`profile_pic`,`price`) 
VALUES
(1, 'C est moi KIRI', 'Clown', "tarte a la creme ou a la pasteque sortez les serpentin j arrive...","https://static.actu.fr/uploads/2017/10/Clown-terrifiant-854x480.jpg",'3');
INSERT INTO `post`
(`user_id`, `title`, `category`, `content`,`profile_pic`,`price`) 
VALUES
(1, ' equilibre', 'Jongleur', "jongleur manchot cherche stage en cirque ou hopital","https://sceno.fr/media/image/?w=900&q=75&type=jpg&f=81878&action=best&ft=.jpg",'45');
INSERT INTO `post`
(`user_id`, `title`, `category`, `content`,`profile_pic`,`price`) 
VALUES
(1, 'Vous n y croierez pas', 'Magicien', "La magie existe et je vais vous le prouver!!!! Donnez moi ma chance Abracadabra","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGlOXIfFBEmrq5PehdTiLsWXgGVcXgtjoSXEwk-N4gjoLzb4eY&s",'1000');
INSERT INTO `post`
(`user_id`, `title`, `category`, `content`,`profile_pic`,`price`) 
VALUES
(1, ' oracle outragent', 'Troubadour', "Hallo...Win? et farendolle de sérénades", "https://images-na.ssl-images-amazon.com/images/I/61DuzL0GQ%2BL._AC_SY355_.jpg",'105');
INSERT INTO `post`
(`user_id`, `title`, `category`, `content`,`profile_pic`,`price`) 
VALUES
(1, 'C est moi KIRI', 'Clown', "tarte a la creme ou a la pasteque sortez les serpentin j arrive...","https://static.actu.fr/uploads/2017/10/Clown-terrifiant-854x480.jpg",'3');
INSERT INTO `post`
(`user_id`, `title`, `category`, `content`,`profile_pic`,`price`) 
VALUES
(1, ' equilibre', 'Jongleur', "jongleur manchot cherche stage en cirque ou hopital","https://sceno.fr/media/image/?w=900&q=75&type=jpg&f=81878&action=best&ft=.jpg",'45');