const knex = require("knex")({
  client: "mysql2",
  connection: {
    host: "localhost",
    user: "root",
    password: "Password@1234",
    database: "training",
    charset: "utf8",
  },
});

const bookshelf = require("bookshelf")(knex);

module.exports = bookshelf;

// const mysql = require("mysql");
// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Password@1234",
//   database: "training",
// });

// connection.connect((err) => {
//   if (err) {
//     console.error("Error connecting to database:", err);
//     return;
//   }
//   console.log("Connected to database");
// });

// connection.end((err) => {
//   if (err) {
//     console.error("Error closing connection:", err);
//     return;
//   }
//   console.log("Connection closed");
// });

// module.exports = connection;
