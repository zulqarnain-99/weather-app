const express = require("express")
const path = require("path")
const hbs = require("hbs")

const app = express()

//Define paths for express config
const publicDirectoryPath = path.join(__dirname, "../public")
const viewPath = path.join(__dirname, "../templates/views")
const PartialPath = path.join(__dirname, "../templates/partials")

//setup handlebars engine and views location
app.set("view engine", "hbs")
app.set("views", viewPath)
hbs.registerPartials(PartialPath)

// setup static directory to serve
app.use(express.static(publicDirectoryPath))
app.use(express.static(viewPath))

app.get("", (req, response) => {
  response.render("index", {
    title: "weather",
    name: " Philips",
  })
})

app.get("/about", (req, response) => {
  response.render("about", {
    title: "about",
    name: "andrew Mead",
  })
})

app.get("/help", (req, response) => {
  response.render("help", {
    helptext: "Text for help",
    title: "Help",
    name: "Watson",
  })
})

app.get("/weather", (req, response) => {
  response.send({
    forecast: "It is snowing",
    location: "Philendelphia",
  })
})

app.listen(3000, () => {
  console.log("server is up on port 3000,")
})
