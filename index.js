document.addEventListener("DOMContentLoaded", (e) => {

// 1. get elements we need to interact with

const titanicButton = document.getElementById('Titanic')
const terminatorButton = document.getElementById('Terminator 2')

const title = document.getElementById('title')
const director = document.getElementById('director')
const genre = document.getElementById('genre')
const filmRating = document.getElementById('filmRating')
const poster = document.getElementById('poster')
const audienceScore = document.getElementById('audienceScore')


const changeMovie = (movie) => {
  title.innerHTML = movies[movie].title
  director.innerHTML = movies[movie].director
  genre.innerHTML = movies[movie].genre
  filmRating.innerHTML = movies[movie].genre
  poster.innerHTML = movies[movie].poster
  audienceScore.innerHTML = movies[movie].audienceScore
  
  console.log('hi')


const posterImg = document.getElementById('poster')
  posterImg.src = movies[movie].poster
  
const descriptionElement = document.getElementById('description')
descriptionElement.innerHTML = movies[movie].description

const scoreElement = document.getElementById('audienceScore')
scoreElement.innerHTML = movies[movie].audienceScore

const castUL = document.createElement('ul')

// the problem is we want to make an <li> for every cast member

for (let person of movies[movie].cast) {
  const li = document.createElement('li') // <li><li>
  li.innerHTML = person.role + ": " + person.actor
  castUL.appendChild(li)
}

const castDiv = document.getElementById('cast')
castDiv.appendChild(castUL)



const reviewsUL = document.createElement('ul')

for (let person of movies[movie].reviews) {
  const li = document.createElement('li') // <li><li>
  li.innerHTML = review.username + ": " + review.content
  reviewsUL.appendChild(li)
}

const reviewsDiv = document.getElementById('reviews')
reviewsDiv.appendChild(reviewsUL)

}



titanicButton.addEventListener('click', () => changeMovie('Titanic'))
terminatorButton.addEventListener('click', () => changeMovie('Terminator 2'))


});
