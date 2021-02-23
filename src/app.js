const express = require("express")
const path = require("path")
const hbs = require("hbs")
const geocode = require("../utils/forecast")

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
  if (!req.query.address) {
    return response.send({
      error: "you must provide an address!",
    })
  }

  geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return response.send({ error })
    }

    forecast(latitude, (error, forecastData) => {
      if (error) {
        return response.send({ error })
      }
      response.send({
        forecast: forecastData,
        location,
        address: res.query.address,
      })
    })
  })
  // response.send({
  //   forecast: "It is snowing",
  //   location: "Philendelphia",
  //   address: req.query.address,
  // })
})

app.get("*", (req, response) => {
  response.render("404", {
    title: "404",
    name: "zulqarnain",
    errorMessage: "404 Not Found",
  })
})

app.get("/products", (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: "You must provide a search term",
    })
  }
  console.log(req.query.search)
  res.send({
    product: [],
  })
})

app.get("help/*", (req, response) => {
  response.send("My 404 Page")
})

app.listen(3000, () => {
  console.log("server is up on port 3000,")
})
