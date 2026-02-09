const express = require("express");
const homeroute = require("./routes/index.js");
const techroute = require("./routes/tech.js");
const app = express();
const PORT =  process.env.PORT||3000;

app.use("/", homeroute)
app.use("/ttech", techroute)

app.listen(3000, () => {
    console.log(`Test server running on port: ${PORT}`);
    console.log("Press Ctrl+C to quit.");
});