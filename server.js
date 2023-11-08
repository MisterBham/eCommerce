const express = require('express');
const mysql = require('mysql2');
require('dotenv').config();
// const controllers = require('./src/controllers');

const PORT = process.env.PORT || 3006;
const DBuser = process.env.DB_USER;
const DBpassword = process.env.DB_PASSWORD;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// app.use(controllers);

if (!DBuser || !DBpassword) {
  throw new Error("Ensure DBuser and/or DBpassword inputs are correct in .env file. If using the provided .env.EXAMPLE file, be sure to rename file to .env, removing the ending .EXAMPLE")
}
//   {
//     host: 'localhost',
//     user: 'root',
//     password: 'p@ssw0rd',
//     database: 'ecommerce_db'
//   },
//   console.log(`Connected to the ecommerce_db database.`)
// );

const db = mysql.createPool(
  {
    connectionLimit: 10,
    queueLimit: 0,
    waitForConnections: true,
    host: 'localhost',
    user: DBuser,
    password: DBpassword,
    database: 'ecommerce_db'
  },
  console.log(`Connected to the ecommerce_db database.`)
);

app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
