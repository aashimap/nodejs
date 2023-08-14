const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Password@1234",
  database: "training",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err);
    return;
  }
  console.log("Connected to database");
});

// connection.end((err) => {
//   if (err) {
//     console.error("Error closing connection:", err);
//     return;
//   }
//   console.log("Connection closed");
// });

module.exports = connection;
