console.log("Javascript file")

const weatherForm = document.querySelector("form")
const search = document.querySelector("input")

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault()
  const location = search.value
})
