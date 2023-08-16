const bookshelf = require("./db");
bookshelf.knex.client.config.debug = true;

const Employees = bookshelf.model(
  "Employees",
  {
    tableName: "employees",
    idAttribute: "id",
  },
  {
    insertEmployee: insertEmployee,
  }
);

async function insertEmployee(employeeData) {
  console.log("employeeData", employeeData);
  try {
    const existingEmployee = await Employees.where({
      id: employeeData.id,
    }).fetch({ require: false });
    if (existingEmployee) {
      throw new Error("ID already exists");
    }
    const employee = Employees.forge(employeeData);
    return employee.save();
  } catch (error) {
    throw error;
  }
}

module.exports = Employees;

// module.exports = bookshelf.model("Employees", {
//   tableName: "employees",
// });
