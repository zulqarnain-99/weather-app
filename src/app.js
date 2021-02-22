const express = require("express")

const app = express()

app.get("", (req, response) => {
  response.send("Hello Express")
})

app.get("/help", (req, response) => {
  response.send("Help Page")
})

app.get("/about", (req, response) => {
  response.send("About Page")
})

app.get("/weather", (req, response) => {
  response.send("Weather Page")
})

app.listen(3000, () => {
  console.log("server is up on port 3000,")
})
