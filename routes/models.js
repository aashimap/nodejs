const bookshelf = require("./db");
bookshelf.knex.client.config.debug = true;

module.exports = bookshelf.model("Employee", {
  tableName: "employees",
});
