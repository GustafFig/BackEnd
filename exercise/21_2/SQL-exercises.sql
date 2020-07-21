-- 1.1 Select the names of all the products in the store.
SELECT Name FROM Products;

-- 1.2 Select the names and the prices of all the products in the store.
SELECT `Name`, price FROM Products;

-- 1.3 Select the name of the products with a price less than or equal to $200.
SELECT `name` FROM Products
WHERE price < 200;

-- 1.4 Select all the products with a price between $60 and $120.
SELECT * FROM Products
WHERE price BETWEEN 60 AND 120;

-- 1.5 Select the name and price in cents (i.e., the price must be multiplied by 100).
SELECT name, price * 100 AS Price FROM Products;

-- 1.6 Compute the average price of all the products.
SELECT AVG(price) AS `Average Price` FROM Products;

-- 1.7 Compute the average price of all products with manufacturer code equal to 2.
SELECT AVG(price) FROM Products
WHERE Manufacturer = 2
GROUP BY Manufacturer;
select avg(price) from Products where  Manufacturer = 2;

-- 1.8 Compute the number of products with a price larger than or equal to $180.
SELECT COUNT(*) FROM Products
WHERE price >= 180;

-- 1.9 Select the name and price of all products with a price larger than or equal to $180, and sort first by price (in descending order), and then by name (in ascending order).
SELECT `name`, price FROM Products
WHERE price >= 180
ORDER BY price DESC, `name` ASC;

-- 1.10 Select all the data from the products, including all the data for each product's manufacturer.
SELECT P.*, M.*
FROM Products AS P
INNER JOIN Manufacturers AS M
ON P.manufacturer = M.code;

-- 1.11 Select the product name, price, and manufacturer name of all the products.
SELECT prod.`name`, prod.price, manu.`name`
FROM Products AS prod
INNER JOIN Manufacturers AS manu
ON manu.code = prod.manufacturer;

-- 1.12 Select the average price of each manufacturer's products, showing only the manufacturer's code.
SELECT manu.code, AVG(prod.price)
FROM Manufacturers AS manu
INNER JOIN Products AS prod
ON manu.code = prod.manufacturer
GROUP BY manu.code;

-- 1.13 Select the average price of each manufacturer's products, showing the manufacturer's name.
SELECT manu.name, AVG(prod.price)
FROM Manufacturers AS manu
INNER JOIN Products AS prod
ON prod.manufacturer = manu.code
GROUP BY manu.name;

-- 1.14 Select the names of manufacturer whose products have an average price larger than or equal to $150.
SELECT manu.name, AVG(prod.price) AS Average_price
FROM Manufacturers AS manu
INNER JOIN Products AS prod
ON prod.manufacturer = manu.code
GROUP BY manu.name
HAVING Average_price >= 150;

-- 1.15 Select the name and price of the cheapest product.
SELECT name FROM Products
WHERE price = (
	SELECT MIN(price) FROM Products
);


-- 1.16 Select the name of each manufacturer along with the name and price of its most expensive product.
SELECT manu.name, MAX(PRICE)
FROM Manufacturers AS manu
INNER JOIN Products AS prod
ON prod.manufacturer = manu.code
GROUP BY manu.name;

select max_price_mapping.name as manu_name, max_price_mapping.price, products_with_manu_name.name as product_name
from 
    (SELECT Manufacturers.Name, MAX(Price) price
     FROM Products, Manufacturers
     WHERE Manufacturer = Manufacturers.Code
     GROUP BY Manufacturers.Name)
     as max_price_mapping
   left join
     (select Products.*, Manufacturers.name manu_name
      from Products join Manufacturers
      on (Products.manufacturer = Manufacturers.code))
      as products_with_manu_name
 on
   (max_price_mapping.name = products_with_manu_name.manu_name
    and
    max_price_mapping.price = products_with_manu_name.price); 

-- 1.17 Add a new product: Loudspeakers, $70, manufacturer 2.
-- 1.18 Update the name of product 8 to "Laser Printer".
-- 1.19 Apply a 10% discount to all products.
-- 1.20 Apply a 10% discount to all products with a price larger than or equal to $120.