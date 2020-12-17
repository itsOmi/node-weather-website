console.log('Client side JS')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')


weatherForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const location = search.value
  const weatherURL = 'http://localhost:3000/weather?address=' + encodeURIComponent(location)

  messageOne.textContent = 'Loading...'
  messageTwo.textContent = ''

  fetch(weatherURL).then((response) => {
    response.json().then((body) => {
      if (body.error) {
        messageOne.textContent = body.error
      } else {
        messageOne.textContent = 'Location: ' + body.location
        messageTwo.textContent = 'Forecast: ' + body.forecast
      }
    })
  })
})