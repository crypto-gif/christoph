//index.js
//instead of body-parser i use the built-in express.urlencoded function
import express from "express";

const port = 3000;
const app = express();

//Middleware
app.use(express.urlencoded({ extended: true }));
// This is required to handle urlencoded data
app.use(express.json()); 
// This to handle json data coming from requests mainly post
app.use(express.static("public"));

app.get("/", (req, res) => {d
    res.render("index.ejs");
});

app.listen(port, () => {
    console.log("listening on port: " + port);
});
