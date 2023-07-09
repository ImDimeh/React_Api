const http = require("http");
const express = require("express");
const cors = require("cors");
const { Server } = require("socket.io");
require("dotenv").config();
const mongoose = require("mongoose");
const productRoutes = require("./routes/product_routes");
const { promiseHooks } = require("v8");
const app = express();

require("./config/dbConfig");

app.use("/product", productRoutes );

app.listen(5500, () => console.log("le serveur demarre sur le port 5500"));




