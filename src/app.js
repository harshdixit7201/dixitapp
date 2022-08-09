const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 7000;

//public static path
const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

app.use(express.static(staticPath));
app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialsPath)

// Routing
app.get("/", (req, res)=>{
    res.render("index")
})

app.get("/about", (req, res)=>{
    res.render("about")
})

app.get("/weather", (req, res)=>{
    res.render("weather")
})

app.get("*", (req, res)=>{
    res.status(404).render("error4044",{
        errorMsg : "404 Page not Found"
    })
})

app.listen(port, ()=>{
    console.log("listening at port no 7000")
})