const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "portfolio",
  port: 3306
});

db.connect((err) => {
  if (err) {
    console.log("DB ERROR:", err);
  } else {
    console.log("MySQL Connected ✅");
  }
});

module.exports = db;