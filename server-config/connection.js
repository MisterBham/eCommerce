require('dotenv').config();
const mysql = require('mysql2');

const DBuser = process.env.DB_USER;
const DBpassword = process.env.DB_PASSWORD;
if (!DBuser || !DBpassword) {
  throw new Error("Ensure DBuser and/or DBpassword inputs are correct in .env file. If using the provided .env.EXAMPLE file, be sure to rename file to .env, removing the ending .EXAMPLE")
}

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

module.exports = db;