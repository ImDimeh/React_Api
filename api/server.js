import http from "http";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
// import { Server } from "socket.io";
// import dotenv from "dotenv";
// import mongoose from "mongoose";
import productRoutes from "./routes/product_routes.js";
import { promiseHooks } from "v8";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

import "./config/dbConfig";

app.use("/product", productRoutes);

app.listen(5500, () => console.log("Le serveur démarre sur le port 5500"));
