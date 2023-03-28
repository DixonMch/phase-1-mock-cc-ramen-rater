// write your code here
// DOM Elements
const ramenMenu = document.querySelector('#ramen-menu')
const ramenDetail = document.querySelector('#ramen-detail')
const ratingDisplay = document.querySelector('#rating-display')
const commentDisplay = document.querySelector('#comment-display')
const newRamenForm = document.querySelector('#new-ramen')

// Base URL
const BASE_URL = 'http://localhost:3000'

// Fetch All Ramen Objects
fetch(`${BASE_URL}/ramens`)
  .then(response => response.json())
  .then(ramenObjects => {
    // Display Ramen Images in #ramen-menu div
    ramenObjects.forEach(ramen => {
      const img = document.createElement('img')
      img.src = ramen.image
      img.alt = ramen.name
      img.addEventListener('click', () => displayRamenDetails(ramen))
      ramenMenu.append(img)
    })
  })

// Display Ramen Details in #ramen-detail div
function displayRamenDetails(ramen) {
  ramenDetail.querySelector('.detail-image').src = ramen.image
  ramenDetail.querySelector('.name').textContent = ramen.name
  ramenDetail.querySelector('.restaurant').textContent = ramen.restaurant
  ratingDisplay.textContent = ramen.rating
  commentDisplay.textContent = ramen.comment
}

// Create New Ramen Object and Display in #ramen-menu div
newRamenForm.addEventListener('submit', event => {
  event.preventDefault()
  const name = event.target.querySelector('#new-name').value
  const restaurant = event.target.querySelector('#new-restaurant').value
  const image = event.target.querySelector('#new-image').value
  const rating = event.target.querySelector('#new-rating').value
  const comment = event.target.querySelector('#new-comment').value

  const newRamen = { name, restaurant, image, rating, comment }

  const img = document.createElement('img')
  img.src = newRamen.image
  img.alt = newRamen.name
  img.addEventListener('click', () => displayRamenDetails(newRamen))
  ramenMenu.append(img)

  event.target.reset()
})