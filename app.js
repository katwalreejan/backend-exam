const express = require("express");
require('dotenv').config();
const app = express();
const userRoutes = require("./routes/userRoutes");
const carRoutes = require("./routes/carRoutes");
const connectDB = require("./config/db");
connectDB();

const morgan = require("morgan");
app.use(morgan("dev"));

// Middleware to parse JSON
app.use(express.json());
 

app.use("/api/users", userRoutes);


app.use("/api/cars", carRoutes);



const port = process.env.PORT || 4003;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
 