

document.getElementById("showSpase").addEventListener("click", function() {
  let space = document.getElementById("apod-container")
  if (space.classList.contains("hidden")) {
    space.classList.remove("hidden")
  } else {
    space.classList.add("hidden")
  }
})





let apiKey2 = 'LRadLpJdjMezRKJd89zOPQPAgMUUXlVdoqEmyHke'
let api = `https://api.nasa.gov/planetary/apod?api_key=${apiKey2}`

//get Astronomy Picture of the Day
async function getAPOD() {
   let response = await fetch(api)
   let data = await response.json()
   return data
}

async function displayAPOD() {
   let apodContainer = document.getElementById('apod-container')
   let apodData = await getAPOD()

   if (apodData.media_type === 'image') {
         let apodImage = document.createElement('img')
         apodImage.src = apodData.url
         apodImage.alt = apodData.title
         apodContainer.appendChild(apodImage)
   }

   let apodTitle = document.createElement('h3')
   apodTitle.textContent = apodData.title
   apodContainer.appendChild(apodTitle)

   let apodExplanation = document.createElement('p')
   apodExplanation.textContent = apodData.explanation
   apodContainer.appendChild(apodExplanation)
}

displayAPOD()

