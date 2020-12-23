WITH customer_total AS (
    SELECT customer_id, SUM(amount) total_amount 
    FROM payment 
    GROUP BY customer_id
    ORDER BY total_amount DESC 
    LIMIT 10), 
SELECT customer_id, first_name, last_name, email 
FROM customer 
WHERE customer_id 
IN (
    SELECT customer_id
    FROM customer_total);

WITH customer_total AS (
    SELECT customer_id, SUM(amount) as total_amount 
    FROM payment 
    GROUP BY customer_id), 

    top_customers AS (
        SELECT customer_id, total_amount 
        FROM customer_total 
        ORDER BY total_amount DESC 
        LIMIT 10)
         
        SELECT customer.customer_id, customer.first_name, customer.last_name, customer.email, top_customers.total_amount 
        FROM customer INNER JOIN top_customers ON customer.customer_id=top_customers.customer_id 
        ORDER BY top_customers.total_amount DESC;
