import express from "express"
import authRoutes from "./routes/auth.js"
import postRoutes from "./routes/posts.js"
import userRoutes from "./routes/users.js"
import cookieParser from "cookie-parser"
import multer from "multer"
import cors from "cors";

app.use(cors({
  origin: "http://47.100.103.106:3000",
  credentials: true
}));

const app = express()

app.use(express.json())
app.use(cookieParser())


const storage = multer. diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../client/public/upload')
    },
    filename: function (req, file, cb) {
        const cleanName = file.originalname.replace(/\s+/g, "_"); 
        cb(null, Date.now() + "_" + cleanName);
    }
})

const upload = multer({ storage })

app.post('/api/upload', upload.single('file'), function(req, res) {
    const file = req.file;
    res.status(200).json(file.filename)
})

app.use("/api/auth", authRoutes)
app.use("/api/posts", postRoutes)
app.use("/api/users", userRoutes)

app.listen(8800, () => {
    console.log("Connected!")
})
