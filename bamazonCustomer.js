var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3308,

    user: "root",

    password: "root",
    database: "bamazon"
});

connection.connect(function(err){
    if (err) throw err;
    console.log("Connected as id " + connection.threadId);
    startStore();
});

function startStore(){
    connection.query("SELECT * FROM products", function(err, res){
        console.log("==========================================")
        console.log("Welcome to Bamazon! Here are our products.")
        console.log("-----------------------------------------------------------------------")
        console.log("Item ID" + " | " + "Product Name" + " | " + "Department Name" + " | " + "Price" + " | " + "Stock Quantity")
        console.log("-----------------------------------------------------------------------")
        for(i = 0; i < res.length; i++) {
            console.log(res[i].item_id + ' | ' + res[i].product_name + ' | ' + res[i].department_name + ' | ' + '$' + res[i].price + ' | ' + res[i].stock_quantity + " units" + "\n");
        }
        console.log("-------------------------------------")
        shopping();
    });
}

function shopping(){
    connection.query("SELECT*FROM products", function(err, res){
        if (err) throw err;
        inquirer
        .prompt([
            {
                name: "choice",
                type: "rawlist",
                choices: function(){
                    var choiceArray = [];
                    for (var i=0; i < res.length; i++){
                        choiceArray.push(res[i].item_id);
                    }
                    return choiceArray;
                },
                message: "What is the Item ID of the product you would like to purchase?"
            },
            {
                name: "quantity",
                type: "input",
                message: "How many would you like to purchase?"
            }
        ])
        .then(function(answer){
            var chosenItem;
            for (var i=0; i < res.length; i++){
                if (res[i].item_id === answer.choice){
                    chosenItem = res[i];
                }
            }

            if (chosenItem.stock_quantity < parseInt(answer.quantity)){
                connection.query(
                    "UPDATE products SET ? WHERE ?",
                    [
                        {
                            stock_quantity: answer.quantity
                        },
                        {
                            item_id: chosenItem.item_id
                        }
                    ],
                    function(error){
                        if (err) throw err;
                        console.log("Item successfully purchased");
                        start();
                    }
                );
            }
            else{
                console.log("Sorry, this is an insufficient quantity");
                start();
            }
        });
    });
}

// function shopping(){
//     inquirer
//     .prompt({
//         name: "choice",
//         type: "rawlist",
//         message: "What is the Item ID of the product you would like to purchase?",
//         choices: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
//     })
// }