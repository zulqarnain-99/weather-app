const express = require("express")
const path = require("path")

const app = express()
const publicDirectoryPath = path.join(__dirname, "../public")
app.use(express.static(publicDirectoryPath))

app.get("/help", (req, response) => {
  response.send("Help Page")
})

app.get("/about", (req, response) => {
  response.send("<h1>About Page</h1>")
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
