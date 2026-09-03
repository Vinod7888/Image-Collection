const express = require('express');
const mongoose = require('mongoose');
const GalleryRouter = require('./App/Routers/web/GalleryRoute');
const categoryRouter = require('./App/Routers/web/CategoryRoutes');
const app = express();
require("dotenv").config();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// ✅ CORS Enable karo (ye add karo)
const cors = require('cors');
app.use(cors()); // Sabhi domains ko allow karega

app.use("/website/spider/gallery", GalleryRouter);
app.use("/website/spider/category", categoryRouter);




mongoose.connect(process.env.DB_URL).then(
    () => {
        console.log("DataBase Connected");

        app.listen(process.env.PORT || 7000, () => {
            console.log("Server is Running on Port", process.env.PORT);
        });
    }
);