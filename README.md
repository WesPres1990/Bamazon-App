# Bamazon-MySQL

An Amazon-like node-based application which is run from the terminal and uses a MySQL database. It allows the user to view products, make selections, and see what was purchased.

User opens application by typing node bamazonCustomer.js in their terminal. A listing of ten products with categories, prices, and stock quantity is shown and the user is asked for the Item ID of the product he or she would like to purhcase. After selecting what is wanted, the user is then asked to provide a quantity of the product to purchase.

If the quantity/product is not available, the user is asked if he or she would like to enter another quantity or purchase another product. If the user decides to return shopping, the process starts again with the product listing, and if the user decides against this, the app is closed.

If the quantity/product is available, the user is shown what has been purchased and the total cost, and is given the option to continue shopping. If he or she is finished, the app is closed.

After the end of a successful transaction, the quantity of the products is updated to reflect the purchase.

![Image of Bamazon App - 1](screenshots/Bamazaon1.png)
![Image of Bamazon App - 2](screenshots/Bamazaon2.png)
![Image of Bamazon App - 3](screenshots/Bamazaon3.png)
![Image of Bamazon App - 4](screenshots/Bamazaon4.png)

**Future Development**

Creating a proper table and adding feature to allow user to add multiple items to a single transaction.