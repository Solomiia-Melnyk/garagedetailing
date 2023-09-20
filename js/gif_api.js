let apiKey = 'iDSOfh0odovTXOJVnrXkIhww2tKXaDxR'
let apiUrl = 'https://api.giphy.com/v1/gifs/random'

// random GIF
   async function getRandomGif() {
      const response = await fetch(`${apiUrl}?api_key=${apiKey}`)
      const data = await response.json()
      return data.data
   }

   
   async function displayGif() {
      const gifContainer = document.getElementById('gif-container')
      const gifData = await getRandomGif()

      const gifElement = document.createElement('img')
      gifElement.src = gifData.images.fixed_height.url
      gifElement.alt = 'Random GIF'
      gifContainer.appendChild(gifElement)
   }

   displayGif()

