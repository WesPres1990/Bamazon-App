DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Harry Potter and the Sorcerer's Stone", "Movies", 10.00, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("The Only Way to Cross", "Books", 25.99, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Georgia Bulldogs Commemorative Rose Bowl Shirt", "Clothing/Apparel", 19.99, 75);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Whirlpool Washing Machine", "Home Appliances", 300.00, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Tenor Trombone", "Music", 100.00, 40);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("25-Sheet Capacity Shredder", "Office Supplies", 89.99, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("1996 Jeep Grand Cherokee", "Automobiles", 5000.00, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("2-Man Tent", "Camping Supplies", 80.00, 60);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("HP EliteBook (Refurbished)", "Computers", 245.00, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Justice League - First Season", "Television", 24.99, 110);