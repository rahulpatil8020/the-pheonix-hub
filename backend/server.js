const express = require("express");

const app = express();
const path = require("path");
const PORT = 8000;

app.use("/", express.static(path.join(__dirname)));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
