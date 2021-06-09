// DOM Queries
const container = document.querySelector(".card-container")
const body = document.body

body.addEventListener("mousemove", event => {
  let x = (window.innerWidth / 2 - event.pageX) / 30
  let y = (window.innerHeight / 2 - event.pageY) / 30

  container.style.transform = `rotateX(${-y}deg) rotateY(${-x}deg)`
})
