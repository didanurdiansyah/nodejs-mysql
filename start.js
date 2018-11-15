var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb_nodejs"
});


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  //create database
  // con.query("CREATE DATABASE mydb_nodejs", function (err, result) {
  //   if (err) throw err;
  //   console.log("Database created");
  // });

  //create table
  // var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("Table created");
  // });

  //insert
  var sql = "INSERT INTO customers (name, address) VALUES ('Company 4A Inc', 'Mountain 21')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });

  //select
  con.query("SELECT * FROM customers", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });

  //where
  con.query("SELECT * FROM customers WHERE address = 'Park Lane 38'", function (err, result) {
    if (err) throw err;
    console.log(result);
  });

  //order by
  con.query("SELECT * FROM customers ORDER BY name", function (err, result) {
    if (err) throw err;
    console.log("-----------------------------------------------------------------");
    console.log(result);
    console.log("-----------------------------------------------------------------");
  });
  
  //delete
  var sql = "DELETE FROM customers WHERE address = 'Highway 37'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
  });

  //drop
  // var sql = "DROP TABLE customers";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("Table deleted");
  // });

  //update
  // var sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log(result.affectedRows + " record(s) updated");
  // });

  //limit
  // var sql = "SELECT * FROM customers LIMIT 5";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log(result);
  // });

  //join
  // var sql = "SELECT users.name AS user, products.name AS favorite FROM users JOIN products ON users.favorite_product = products.id";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log(result);
  // });

});