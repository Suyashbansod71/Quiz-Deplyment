const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cors = require("cors");
const connectDB = require('./config/db');
const path = require("path");

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/user", require("./routes/userRoutes"));


//static files
app.use(express.static(path.join(__dirname, "./client/build")))

app.get('*', function(req,res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"))
});

const PORT = process.env.PORT || 5100

app.use(cors());

app.listen(PORT,() => {

    console.log(`Server is running on port ${PORT}`.bgCyan.white);
});
