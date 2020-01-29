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
    category enum('Cours','Logements','Fournitures','Jobs','Events'),
    content varchar(300) not null,
    event_date datetime,
    FOREIGN KEY (user_id) REFERENCES user(id)
);
INSERT INTO `user`
(`firstname`, `lastname`, `password`, `email`, `bio`, `profile_pic`, `city`) 
VALUES
('Youri', 'Ligotmi', 'pouet', 'yligotmi@msn.com', 'Je voudrais instaurer un nouvel ordre mondial', 'https://randomuser.me/api/portraits/men/43.jpg', 'Angers');
INSERT INTO `post`
(`user_id`, `title`, `category`, `content`) 
VALUES
(1, 'Recherche appartement', 'Logements', "Bonjour amis dipsers, je suis actuellement à la recherche d'un appartement dans la région de Marseille, si possible pret du vieux port pour contempler la vue et respirer le vent salé. Contactez moi si vous avez des pistes, merci à tous");
