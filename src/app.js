const express = require("express")
const path = require("path")

const app = express()
const publicDirectoryPath = path.join(__dirname, "../public")
app.use(express.static(publicDirectoryPath))

app.get("", (req, response) => {
  response.render("index", {
    title: "weather",
    name: "andrew Mead",
  })
})

app.get("/about", (req, response) => {
  response.render("about", {
    title: "weather",
    name: "andrew Mead",
  })
})

app.get("/help", (req, response) => {
  response.render("help", {
    helptext: "Text for help",
  })
})

app.set("view engine", "hbs")

app.get("/weather", (req, response) => {
  response.send({
    forecast: "It is snowing",
    location: "Philendelphia",
  })
})

app.listen(3000, () => {
  console.log("server is up on port 3000,")
})
