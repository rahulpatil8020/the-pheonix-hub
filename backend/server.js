require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const competitionsRoutes = require("./routes/competitions");
const questionsRoutes = require("./routes/questions");
connection();

app.use(express.json());
app.use(cors());

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/competitions", competitionsRoutes);
app.use("/api/v1/competitions/:id", questionsRoutes);
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Listening on port : ${port}...`));
