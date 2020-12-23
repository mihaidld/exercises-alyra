# Exercices database partie 1

Le rendu de ces exercices se fera dans un repository accessible depuis github qui contiendra un unique fichier README.md. Ce fichier contiendra toutes les commandes et les outputs de ces commandes classées par exercices, comme demandé dans les énoncés.

## 1

Créer une base de donnée "db_1" qui contient une table "users" qui correspond à la database que nous avons créé dans le cours précédent sur express:

```js
const db_user = {
  alice: "123",
  bob: "456",
  charlie: "789",
};
```

Créez les bons champs et donner les bons types à chaque champs. N'oubliez pas un champ "id" qui correspondra à la clé primaire.
Ensuite afficher toutes les lignes de la table "users" de la base de donnée "db_1".
Vous devrez fournir les commandes SQL entrées ainsi que tous les outputs de ces commandes.

**_Solution_** :

```
postgres=> CREATE DATABASE db_1;
CREATE DATABASE
postgres=> \c db_1;
You are now connected to database "db_1" as user "db_user".
db_1=> CREATE TABLE users (id SERIAL PRIMARY KEY, name VARCHAR(30), password VARCHAR(15));
CREATE TABLE
db_1=> INSERT INTO users (name, password) VALUES ('alice', '123'), ('bob', '456'), ('charlie', '789');
INSERT 0 3
db_1=> SELECT \* from users;
id | name | password
----+---------+----------
1 | alice | 123
2 | bob | 456
3 | charlie | 789
(3 rows)
```

## 2

Ajouter 3 utilisateurs 'dan', 'eve', 'faythe' qui auront respectivement les password '101112', '131415', '161718'.
Affichez toutes les lignes de la table "users" de la base de donnée "db_1".
Vous devrez fournir les commandes SQL entrées ainsi que tous les outputs de ces commandes.

**_Solution_** :

```
db_1=> INSERT INTO users (name, password) VALUES ('dan', '101112'), ('eve', '131415'), ('faythe', '161718');
INSERT 0 3
db_1=> SELECT \* from users;
id | name | password
----+---------+----------
1 | alice | 123
2 | bob | 456
3 | charlie | 789
4 | dan | 101112
5 | eve | 131415
6 | faythe | 161718
(6 rows)
```

## 3

Affichez toutes les lignes de la table "users" de la base de donnée "db_1" dont le password possède plus de 3 caractères. Pour cela il vous faudra utiliser la fonction LENGTH.
Vous devrez fournir les commandes SQL entrées ainsi que tous les outputs de ces commandes.

**_Solution_** :

```
db_1=> SELECT \* FROM users WHERE CHAR_LENGTH(password) > 3;
id | name | password
----+--------+----------
4 | dan | 101112
5 | eve | 131415
6 | faythe | 161718
(3 rows)
```

## 4

Modifiez la table "users" afin d'ajouter une nouvelle colonne "bio" qui contiendra une description a propos de l'utilisateur. Ce champ "bio" sera du texte avec un nombre de caractères illimités et sa valeur par défaut sera "Hello, world!".
Vous devrez fournir les commandes SQL entrées ainsi que tous les outputs de ces commandes.

**_Solution_** :

```
db_1=> ALTER TABLE users ADD COLUMN bio TEXT DEFAULT 'Hello, world!';
ALTER TABLE
```

## 5

Modifiez toutes les lignes existantes pour que la "bio" de chacun affiche, "Hello, I am PRENOM_DU_USER".
Il faudra remplacer PRENOM_DU_USER par le véritable login de l'utilisateur.
Vous devrez fournir les commandes SQL entrées ainsi que tous les outputs de ces commandes.

**_Solution_** :

```
db_1=> UPDATE users SET bio = 'Hello, I am '|| name;
UPDATE 6
```

## 6

Afficher les 2 lignes qui ont les "id" les plus grands par ordre décroissant.
Vous devrez fournir les commandes SQL entrées ainsi que tous les outputs de ces commandes.

**_Solution_** :

```
db_1=> SELECT \* FROM users ORDER BY id DESC LIMIT 2;
id | name | password | bio
----+--------+----------+--------------------
6 | faythe | 161718 | Hello, I am faythe
5 | eve | 131415 | Hello, I am eve
(2 rows)
```

## 7

Afficher toutes les lignes de la table "users" dont les "id" sont impairs par ordre croissant.
Vous devrez fournir les commandes SQL entrées ainsi que tous les outputs de ces commandes.

**_Solution_** :

```
db_1=> SELECT \* FROM users WHERE id % 2 = 1 ORDER BY id ASC;
id | name | password | bio
----+---------+----------+---------------------
1 | alice | 123 | Hello, I am alice
3 | charlie | 789 | Hello, I am charlie
5 | eve | 131415 | Hello, I am eve
(3 rows)
```

## 8

Effacez toutes les lignes de la table "users dont les "id" sont pairs. Affichez toutes les lignes de la table users.
Vous devrez fournir les commandes SQL entrées ainsi que tous les outputs de ces commandes.

**_Solution_** :

```
db_1=> DELETE FROM users WHERE id % 2 = 0;
DELETE 3
db_1=> SELECT \* from users;
id | name | password | bio
----+---------+----------+---------------------
1 | alice | 123 | Hello, I am alice
3 | charlie | 789 | Hello, I am charlie
5 | eve | 131415 | Hello, I am eve
(3 rows)
```

## 9

Effacer la TABLE "users".
Effacer la DATABASE "db_1".
Vous devrez fournir les commandes SQL entrées ainsi que tous les outputs de ces commandes.

**_Solution_** :

```
db_1=> DROP TABLE users;
DROP TABLE
db_1=> \c postgres;
You are now connected to database "postgres" as user "db_user".
postgres=> DROP DATABASE db_1;
DROP DATABASE
```
