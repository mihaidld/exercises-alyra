# Exercices database partie 2

## 1

Télécharger la base de donnée: https://sp.postgresqltutorial.com/wp-content/uploads/2019/05/dvdrental.zip  
Dézipper le fichier _dvdrental.zip_ et installer la base de donnée _dvdrental.tar_ avec les commandes suivantes:

```zsh
% psql -d postgres -U db_user
```

```sql
postgres=> CREATE DATABASE dvdrental;
postgres=> \quit
```

```zsh
% pg_restore -U db_user -d dvdrental ./dvdrental.tar
% psql -d dvdrental -U db_user
```

Vous êtes maintenant connectés à la base de donnée `dvdrental`

Vous pouvez récupérer un modele visuel de cette base de donnée sur:
https://www.postgresqltutorial.com/postgresql-sample-database/  
C'est très utile si vous voulez comprendre que représente cette base de données.

la commande `\dt` vous donne la liste des tables.  
la commande `\d NOM_DE_LA_TABLE` vous affiche le nom des colonnes ainsi que les types associés à chaque colonnes.

## 2

Ecrivez une requête SQL qui affiche tous les titres et descriptions des films dont la description contient le mot `Amazing`.

**_Solution_** :
```sql
SELECT title, description FROM film WHERE description LIKE '%Amazing%';
```

## 3

Ecrivez une requête SQL qui récupère tous les paiements supérieurs à 10.
Il faudra récupérer l'id, le prénom, le nom du client ainsi que le montant et la date du paiement.

```txt
customer_id | first_name |  last_name   | amount |        payment_date
```
**_Solution_** :
```sql
SELECT payment.customer_id, customer.first_name, customer.last_name, payment.amount, payment.payment_date FROM payment INNER JOIN customer ON payment.customer_id=customer.customer_id WHERE payment.amount>10;
```

## 3

Ecrivez une requête SQL qui affiche le chiffre d'affaire gagné par le video club depuis son ouverture.

**_Solution_** :
```sql
SELECT SUM(amount) FROM payment;
```

## 4

Ecrivez une requête SQL qui affiche le titre de tous les films dont la langue est l'anglais et dont la durée est supérieure à 120 minutes.

**_Solution_** :
```sql
SELECT title FROM film WHERE length > 120 AND language_id = (SELECT language_id FROM language WHERE name='English');
```

ou

```sql
SELECT title FROM film INNER JOIN language USING (language_id) WHERE name = 'English' AND length > 120;
```

## 5

Ecrivez une requête SQL qui affiche le TOP 10 des clients qui ont fait le plus d'achat dans ce video club.
Il faudra récupérer leur id, prénom, nom, email.
Il vous faudra utiliser les requêtes auxiliaires avec `WITH` pour cette exercice.

**_Solution_** :
```sql
WITH customer_total AS (SELECT customer_id, SUM(amount) as total_amount FROM payment GROUP BY customer_id), top_customers AS (SELECT customer_id, total_amount FROM customer_total ORDER BY total_amount DESC LIMIT 10) SELECT customer_id, first_name, last_name, email FROM customer WHERE customer_id IN (SELECT customer_id FROM top_customers);
```

ou

```sql
WITH customer_total AS (SELECT customer_id, SUM(amount) total_amount FROM payment GROUP BY customer_id ORDER
 BY total_amount DESC LIMIT 10) SELECT customer_id, first_name, last_name, email FROM customer WHERE customer_id IN (SEL
ECT customer_id FROM customer_total);
```

## 6

Récupérer les mêmes informations que l'exercice précédent, mais ajouter avec un `JOIN` le montant total des achats pour chacun du TOP 10 des clients.

**_Solution_** :
```sql
WITH customer_total AS (SELECT customer_id, SUM(amount) as total_amount FROM payment GROUP BY customer_id), top_customers AS (SELECT customer_id, total_amount FROM customer_total ORDER BY total_amount DESC LIMIT 10) SELECT customer.customer_id, customer.first_name, customer.last_name, customer.email, top_customers.total_amount FROM customer INNER JOIN top_customers ON customer.customer_id=top_customers.customer_id ORDER BY top_customers.total_amount DESC;
```