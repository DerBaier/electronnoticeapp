const express = require("express");
const app = express();


app.listen(9000, () => {
    console.log("Server listening now on Port 9000");
})

app.get("/", (req, res) => {
    res.send("Tesert");
})