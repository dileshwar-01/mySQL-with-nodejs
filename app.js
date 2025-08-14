import mysql from "mysql2/promise"
import 'dotenv/config'
// 1->creating db connection
const db = await mysql.createConnection({
    host:"localhost",
    user:"root",
    password:process.env.MYSQL_PASSWORD,
    database:"mysql_db"
})
console.log("MYSQL connected successfully");

//2-> create a db
// await db.execute(`create database mysql_db`);

// console.log(await db.execute(`show databases`));

// 3-> creating table in db
await db.execute(`
   CREATE TABLE users(
   id INT AUTO_INCREMENT PRIMARY KEY,
   username VARCHAR(50) NOT NULL,
   email VARCHAR(50) NOT NULL UNIQUE
   );
`)

