const express = require("express");
const app = express();

const employeesRoute = require("./routes/employees");

const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/employees", employeesRoute);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
