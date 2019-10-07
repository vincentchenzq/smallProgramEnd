var mysql = require("mysql");
var pool = mysql.createPool({
  // var connection = mysql.createConnection({
  host: "localhost",
  port: "8889",
  user: "root",
  password: "root",
  database: "test",
  // multipleStatements: true,
  socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock"
});

// connection.connect();

// connection.query("SELECT * from solution", function(error, results, fields) {
//   if (error) {
//     console.log(error);
//   }
//   console.log("The solution is: ", results);
// });

var sql = "SELECT * FROM websites";

pool.getConnection(function(err, connection) {
  if(err){
    console.log(err)
    return;
  }
  //查
  connection.query(sql, function(err, result) {
    if (err) {
      console.log("[SELECT ERROR] - ", err.message);
      return;
    }

    console.log("--------------------------SELECT----------------------------");
    console.log(result);
    console.log(
      "------------------------------------------------------------\n\n"
    );
  });
  connection.release();
});

// connection.end();
