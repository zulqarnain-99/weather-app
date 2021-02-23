console.log("Javascript file")

const weatherForm = document.querySelector("form")
const search = document.querySelector("input")
const messageOne = document.querySelector("#message-1")
const messageTwo = document.querySelector("#message-2")

messageOne.textContent = "From Javascript"

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault()
  const location = search.value
  messageOne.textContent = "Loading..."
  messageTwo.textContent = ""
})
