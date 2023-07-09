import * as http from "http";
import express from "express";
import cors from "cors";
// const { Server } = require("socket.io");
// require("dotenv").config();
// const mongoose = require("mongoose");
import productRoutes from './routes/product_routes.js';

import bodyParser from "body-parser";



const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

import './config/dbConfig.js';

app.use("/product", productRoutes);

app.listen(5500, () => console.log("le serveur demarre sur le port 5500"));
