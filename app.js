import mysql from "mysql2/promise"
import 'dotenv/config'
//!  1->creating db connection
const db = await mysql.createConnection({
    host:"localhost",
    user:"root",
    password:process.env.MYSQL_PASSWORD,
    database:"mysql_db"
})
console.log("MYSQL connected successfully");

//!  2-> create a db
// await db.execute(`create database mysql_db`);

// console.log(await db.execute(`show databases`));

//! 3-> creating table in db

// await db.execute(`
//    CREATE TABLE users(
//    id INT AUTO_INCREMENT PRIMARY KEY,
//    username VARCHAR(50) NOT NULL,
//    email VARCHAR(50) NOT NULL UNIQUE
//    );
// `)

//! 4-> CRUD operations

//? insert--- using inline
// await db.execute(`
//     INSERT INTO users(username,email)
//     VALUES
//     ("Dileshwar singh","d@d.com")
//  `);

//? insert using prepared statements --( best way to increase security)
// await db.execute(
//     ` INSERT INTO users (username,email) VALUES(?,?),(?,?),(?,?)`,
//     ["user3","user3@mail.com","user4","user4@mail.com","user5","user5@mail.com"]
//  )

 //? insert multiple values at once
//  const values=[
//     ["alice","alice@mail"],
//     ["bob","bob@mail"],
//     ["joe","joe@mail"],
//     ["john","john@mail"]
//  ];
//  await db.query("INSERT INTO users(username,email) VALUES ?",
//     [values]
//  )

// ?  read ----
const [rows] = await db.execute(`
    SELECT * FROM users ;
`);
console.log(rows);

//? update query---
// try {
//     const [rows] = await db.execute(`UPDATE users SET username='joe2' WHERE username='joe'`)
//     console.log("All users:",rows);
// } catch (error) {
//     console.log(error);
// }

//? delete query
// try {
//     const [rows] = await db.execute(`DELETE FROM users WHERE username="joe2" `)
//     console.log(rows);
// } catch (error) {
//     console.log(error);
// }

//! can use the prepared statements for both update and delete too