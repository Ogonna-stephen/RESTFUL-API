const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const {errorHandler} = require("./Midlleware/errorMiddleware")
const connectDB = require("./config/db");
const port = process.env.PORT || 8000;

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use("/api/goals", require("./Routes/goalRoutes"));
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server has started running on port ${port}`);
});
