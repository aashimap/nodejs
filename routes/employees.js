const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const Employee = require("./models");

router.get("/", (req, res) => {
  Employee.fetchAll()
    .then((results) => {
      res.json(results);
    })
    .catch((error) => {
      console.error("Error retrieving employees:", error);
      res.status(500).json({ error: "Error retrieving employees" });
    });
});

router.post(
  "/",
  [check("id").exists().withMessage("ID is required")],
  async (req, res) => {
    // try {
    const err = validationResult(req);
    if (!err.isEmpty()) {
      return res.status(400).json({ errors: err.array() });
    }

    const data = req.body;

    console.log(req.body);

    await new Employee({ id: data.id }).save(data);

    // await Employee.forge({
    //   ).save();

    // const employee = new Employee({
    //   id: 1,
    //   name: "ABC",
    //   department: "ABC",
    //   salary: 40000,
    // });

    // employee
    //   .save()
    //   .then((savedUser) => {
    //     console.log(savedUser);
    //   })
    //   .catch((error) => {
    //     console.log("Employee error:", error);
    //   });

    // const employees = await Employee.fetchAll();
    res.json(true);
    // } catch (error) {
    //     if (error.message === "ID already exists") {
    //       return res.status(409).json({ error: "ID already exists" });
    //     }
    //     console.error("Error inserting employee data:", error);

    //     res.status(400).json({ error: "Error inserting employee data" });
    //   }
    // }
  }
);

// router.get("/", (req, res) => {
//   const query = "SELECT * FROM employees";
//   connection.query(query, (err, results) => {
//     if (err) {
//       res.status(400).json({ error: "Error executing query" });
//       return;
//     }
//     res.json(results);
//   });
// });

// router.post(
//   "/",
//   [check("id").exists().withMessage("ID is required")],
//   (req, res) => {
//     const err = validationResult(req);
//     if (err.isEmpty()) {
//       const sql = "SELECT name from employees where id=?";
//       connection.query(sql, [req.body.id], (err, result) => {
//         if (result.length > 0) {
//           console.log(result);
//           return res.status(409).json({ error: "ID already exists" });
//         }
//       });

//       const { id, name, department, salary } = req.body;

//       const query =
//         "INSERT INTO employees (id, name, department, salary) VALUES (?, ?, ?,?)";
//       connection.query(query, [id, name, department, salary], (err, result) => {
//         if (err) {
//           console.error("Error inserting employee data:", err);
//           res.status(400).json({ error: "Error inserting employee data" });
//           return;
//         }
//         const query2 = "SELECT * FROM employees";
//         connection.query(query2, (error, results) => {
//           res.json(results);
//         });
//       });
//     } else {
//       res.status(400).json({ errors: err.array() });
//     }
//   }
// );

// router.delete("/", [check("id").exists()], (req, res) => {
//   const result = validationResult(req);
//   if (result.isEmpty()) {
//     const id = req.body.id;
//     const sql = "DELETE FROM employees WHERE id=?";

//     connection.query(sql, [id], (error, results) => {
//       if (error) {
//         return res.status(500).json({ error: "Error deleting employee" });
//       }
//       if (results.affectedRows === 0) {
//         return res.status(404).json({ error: "Employee not found" });
//       }
//       console.log(`Deleted ${results.affectedRows} row(s)`);
//       const query2 = "SELECT * FROM employees";
//       connection.query(query2, (err, results) => {
//         res.json(results);
//       });
//     });
//   } else {
//     res.json({ errors: result.array() });
//   }
// });

// router.put("/", check("id").exists().withMessage("ID required"), (req, res) => {
//   const val = validationResult(req);
//   if (val.isEmpty()) {
//     const { id, name, department, salary } = req.body;

//     if (!id || !name || !department || !salary) {
//       return res.json("Enter all employee details");
//     }
//     const sql =
//       "UPDATE employees SET name=?, department=?, salary=? WHERE id=?";
//     connection.query(sql, [name, department, salary, id], (err, result) => {
//       console.log(result);
//       if (err) {
//         res.json("ERROR updating data");
//       }
//       if (result.affectedRows === 0) {
//         return res.status(404).json({ error: "Employee not found" });
//       }
//       res.json(result);
//     });
//   } else {
//     res.json({ errors: val.array() });
//   }
// });

module.exports = router;
