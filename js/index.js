// Clears the console
console.clear()

// DOM Queries
const body = document.body
const container = document.querySelector(".card-container")
const cursor = document.querySelector(".cursor")

// Main code
document.addEventListener("mousemove", event => {
  cursor.setAttribute(
    "style",
    `top: ${event.pageY - 10}px; left:${event.pageX - 10}px`
  )
})

document.addEventListener("click", () => {
  cursor.classList.add("expand")

  setTimeout(() => {
    cursor.classList.remove("expand")
  }, 500)
})

body.addEventListener("mousemove", event => {
  let x = (window.innerWidth / 2 - event.pageX) / 30
  let y = (window.innerHeight / 2 - event.pageY) / 30

  container.style.transform = `rotateX(${-y}deg) rotateY(${-x}deg)`
})
