var mysql = require("mysql");
const { sqlConfig } = require("../config/sql.config");
var pool = mysql.createPool(sqlConfig);

pool.getConnection(function(err, connection) {
  if (err) {
    console.log(err);
    return;
  }
  var sql = "SELECT * FROM websites";
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
