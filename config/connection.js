const mysql = require('mysql');
const util = require('util');

const db = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burger_db"
  });
  
  db.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
  
    console.log("connected as id " + db.threadId);
  });
  
  db.query = util.promisify(db.query);

  module.exports = db;