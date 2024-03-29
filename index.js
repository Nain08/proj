require('dotenv').config();
const express=require('express')
const app=express();
const cors=require("cors");
const connection=require("./db");
const userRoutes=require("./routes/users");
const authRoutes=require("./routes/auth");
const path=require('path');
const passwordResetRoutes=require('./routes/passwordReset');


// database connection
connection();

// middlewares
app.use(express.json())
const corsOptions = { origin: "*" };
app.use(cors(corsOptions))

app.use(express.static(path.join(__dirname, "e-authentication/build")));

app.get("/api", (req, res) => {
    res.status(200).send("🚀 Server running 🚀");
  });

//routes
app.use("/api/users",userRoutes);
app.use("/api/auth",authRoutes);
app.use("/api/password-reset",passwordResetRoutes);

const port=process.env.PORT||8080;

// __dirname=path.resolve()
// if(process.env.NODE_ENV=="production"){
//     app.use(express.static(path.join(__dirname,"e-authentication/build")));
//     app.get('*',()=>(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'e-authentication','build','index.html'));
//     })
// }

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "e-authentication/build/index.html"));
  });

app.listen(port,()=>console.log(`Listening on port ${port}...`));