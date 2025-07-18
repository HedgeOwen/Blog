import { db } from "../db.js";
import jwt from "jsonwebtoken";
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const getPosts = (req, res) => {
     const q = req.query.cat 
     ? "SELECT * FROM posts WHERE cat=?" 
     : "SELECT * FROM posts";

     db.query(q, [req.query.cat], (err, data)=>{
        if(err) return res.status(500).send(err);

        return res.status(200).json(data);
     })
}

export const getPost = (req, res) => {
    const q = "SELECT p.id, `username`, `title`, `desc`, p.img, u.img AS userImg, `cat`, `date` FROM users u JOIN posts p ON u.id=p.uid WHERE p.id = ?"

    db.query(q, [req.params.id], (err, data)=>{
        if(err) return res.status(500).json(err);

        return res.status(200).json(data[0])
    })
}

export const addPost = (req, res) => {
    const token = req.cookies.access_token;
    if(!token) return res.status(401).json("Not authenticated.")

    jwt.verify(token, "jwtkey", (err,userInfo)=>{
        if(err) return res.status(403).json("Token is not valid");

        const q = "INSERT INTO posts(`title`, `desc`, `img`, `cat`, `date`, `uid`) VALUES (?)"

        const values = [
            req.body.title,
            req.body.desc,
            req.body.img,
            req.body.cat,
            req.body.date,
            userInfo.id,
        ]

        db.query(q, [values], (err,data)=>{
            if(err) return res.status(500).json(err);
            return res.json("Post has been created.")
        })
    });
}

export const deletePost = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated.");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid");

    const postId = req.params.id;

    const getImgQuery = "SELECT img FROM posts WHERE `id` = ? AND `uid` = ?";
    db.query(getImgQuery, [postId, userInfo.id], (err, result) => {
        if (err || result.length === 0) {
            return res.status(403).json("You can only delete your own post.");
        }
        const filename = result[0].img;
        const filePath = path.join(
            __dirname,
            "../../client/public/upload",
            filename
        );

        const q = "DELETE FROM posts WHERE `id` = ? AND `uid` = ?";
        db.query(q, [postId, userInfo.id], (err, data) => {
            if (err) return res.status(403).json("Failed to delete post.");

            fs.unlink(filePath, (err) => {
            if (err) {
                console.log("Image deletion failed:", err.message);
            }
            });
            
            return res.json("Post has been deleted!");
        });
    });
  });
};

export const updatePost = (req, res) => {
    const token = req.cookies.access_token;
    if(!token) return res.status(401).json("Not authenticated.")

    jwt.verify(token, "jwtkey", (err,userInfo)=>{
        if(err) return res.status(403).json("Token is not valid");

        const postId = req.params.id;
        const q = "UPDATE posts SET `title`=?, `desc`=?, `img`=?, `cat`=? WHERE `id` = ? AND `uid` = ?"

        const values = [
            req.body.title,
            req.body.desc,
            req.body.img,
            req.body.cat,
        ]

        db.query(q, [...values, postId, userInfo.id], (err,data)=>{
            if(err) return res.status(500).json(err);
            return res.json("Post has been updated.")
        })
    });
}