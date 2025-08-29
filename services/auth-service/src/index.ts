import express from "express";
import cors from 'cors'
import authRoutes from "./interface/auth.routes";

const app = express();
app.use(cors());
app.use(express.json());

// routes
app.use("/auth", authRoutes);

app.listen(5001, ()=> {
    console.log("Auth service running on 5001");
})

