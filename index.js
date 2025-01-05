const express = require('express');
const path = require('path');
const app = express();

app.get("/", (req, res) =>
{
    res.sendFile(path.join(__dirname, "public", "index.html"));
});


app.listen(3000, () =>
{
    console.log("app is running on port 3000. access localhost:3000/ on your browser");
})