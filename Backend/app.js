import express from "express";
import {config} from "dotenv";
import ErrorMiddleware from "./middlewares/error.js";
import cookieParser from "cookie-parser";
import cors from 'cors';

config({
    path:"./config/config.env",
});
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

import payment from "./routes/paymentroutes.js"
import user from "./routes/userRoutes.js";

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'], // Add any custom headers
}));
app.options('*', cors())
app.use("/api/v1", user);
app.use("/api/v1", payment);
app.use(ErrorMiddleware);

app.get("/api/v1/getKey",(req,res)=>res.status(200).json({key: process.env.RAZORPAY_API_KEY}))
export default app;
