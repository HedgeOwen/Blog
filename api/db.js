import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user: "owen",
    password: "@Owen1016",
    database: "blog"
})