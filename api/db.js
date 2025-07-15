import mysql from "mysql"

export const db = mysql.createConnection({
    host: "47.100.103.106",
    user: "owen",
    password: "@Owen1016",
    database: "blog"
})


db.connect(err => {
  if (err) {
    console.error("数据库连接失败:", err.message);
  } else {
    console.log("数据库连接成功");
  }
});
