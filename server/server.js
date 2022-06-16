const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "root",
    database: "users",
});


app.post("/create", (req, res) => {
    const email = req.body.email;

    db.query(
        "INSERT INTO customers (email) VALUES (?)",
        email,
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Values Inserted");
            }
        }
    );
});

// app.get("/employees", (req, res) => {
//     db.query("SELECT * FROM employees", (err, result) => {
//         if (err) {
//             console.log(err);
//         } else {
//             res.send(result);
//         }
//     });
// });

// app.put("/update", (req, res) => {
//     const id = req.body.id;
//     const wage = req.body.wage;
//     db.query(
//         "UPDATE employees SET wage = ? WHERE id = ?",
//         [wage, id],
//         (err, result) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 res.send(result);
//             }
//         }
//     );
// });
//
// app.delete("/delete/:id", (req, res) => {
//     const id = req.params.id;
//     db.query("DELETE FROM employees WHERE id = ?", id, (err, result) => {
//         if (err) {
//             console.log(err);
//         } else {
//             res.send(result);
//         }
//     });
// });

app.listen(3001, () => {
    console.log("Yey, your server is running on port 3001");
});