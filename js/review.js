//review Block
let showReviewFormButton = document.getElementById("show-review-form-btn")
let reviewForm = document.getElementById("review-form")
let addReviewButton = document.getElementById("add-review-btn")
let reviewList = document.getElementById("review-list")

showReviewFormButton.addEventListener("click", function () {
  showReviewFormButton.style.display = "none"
  reviewForm.style.display = "block"
})




addReviewButton.addEventListener("click", function () {
  let stars = document.getElementById("stars").value
  let name = document.getElementById("name").value.trim()
  let reviewText = document.getElementById("review").value.trim()

  if (stars && name && reviewText) {
    let formattedDate = formatDate(new Date());

    let newReview = document.createElement("li")
    newReview.className = "review-item"
    newReview.innerHTML = `
      <strong>${name}</strong> (${formattedDate}):<br>
      <span><strong>Ocena:</strong> ${stars}</span><br>
      <span><strong>Opinia:</strong> ${reviewText}</span><br>
      <button class="aadd-reply-btn">odpowiedz</button>
      <form class="reply-form" style="display: none;">
      <textarea class="reply-text" placeholder="odpowiedz" required></textarea>
      <button class="add-reply-submit">odpowiedz</button>
      </form>
      <ul class="reply-list"></ul>
    `

    // save in  localStorage
    let reviewData = {
      stars: stars,
      name: name,
      review: reviewText,
      date:  new Date(),
      replies: []
    }

    let existingReviews = JSON.parse(localStorage.getItem("reviews")) || []
    existingReviews.push(reviewData)
    localStorage.setItem("reviews", JSON.stringify(existingReviews))

    // clean form
    reviewForm.reset()
    reviewForm.style.display = "none"
    showReviewFormButton.style.display = "block"

    reviewList.appendChild(newReview)
  }
})




// name Mounth
function getMonthName(month) {
  let nameMonths = [
    "Styczeń", "Luty", "Marzec", "Kwiecień",
    "Maj", "Czerwiec", "Lipiec", "Sierpień",
    "Wrzesień", "Październik", "Listopad", "Grudzień"
  ]
  return nameMonths[month]
}

// formate date
function formatDate(date) {
  let month = date.getMonth()
  let year = date.getFullYear()
  let monthName = getMonthName(month)
  return `${monthName} ${year}`
}


let existingReviews = JSON.parse(localStorage.getItem("reviews")) || []
// revieews after update
existingReviews.forEach(reviewData => {
  let reviewItem = document.createElement("li")
  reviewItem.className = "review-item"
  
  //formatted Date
  let reviewDate = new Date(reviewData.date)
  let formattedDate = formatDate(reviewDate)
  
  reviewItem.innerHTML = `
    <strong>${reviewData.name}</strong> (${formattedDate}):<br>
    <span><strong>Ocena:</strong> ${reviewData.stars}</span><br>
    <span><strong>Opinia:</strong> ${reviewData.review}</span><br>
    <button class="add-reply-btn">odpowiedz</button>
    <form class="reply-form" style="display: none;">
      <textarea class="reply-text" placeholder="Odpowiedz" required></textarea>
      <button class="add-reply-submit">Odpowiedz</button>
    </form>
    <ul class="reply-list"></ul>
  `

  // reply
  let replyList = reviewItem.querySelector(".reply-list")
  if (reviewData.replies) {
    reviewData.replies.forEach(reply => {
      let replyItem = document.createElement("li")
      replyItem.className = "reply-item"
      
      // reply date
      let replyDate = new Date(reply.replyDate)
      let formattedReplyDate = formatDate(replyDate)
      
      replyItem.innerHTML = `
        <div class="reply">
          <strong>Odpowiedz:</strong> ${reply.replyText}<br>
          <em>${formattedReplyDate}</em>
        </div>
      `
      replyList.appendChild(replyItem)
    })
  }

  reviewList.appendChild(reviewItem)
})



// add reply
reviewList.addEventListener("click", function (event) {
  if (event.target.classList.contains("add-reply-btn")) {
    let reviewItem = event.target.closest(".review-item")
    let replyForm = reviewItem.querySelector(".reply-form")
    replyForm.style.display = "block"
    event.target.style.display = "none"
  }
})

// reply
reviewList.addEventListener("click", function (event) {
  if (event.target.classList.contains("add-reply-submit")) {
    let reviewItem = event.target.closest(".review-item")
    let replyText = reviewItem.querySelector(".reply-text").value.trim()

    if (replyText) {
      let currentDate = new Date()
      let formattedDate = formatDate(currentDate)

      let reply = {
        replyText: replyText,
        replyDate: new Date()
      }

      let replyList = reviewItem.querySelector(".reply-list")
      let replyItem = document.createElement("li")
      replyItem.className = "reply-item"
      replyItem.innerHTML = `
        <div class="reply">
          <strong>Odpowiedz:</strong> ${replyText}<br>
          <em>Data: ${formattedDate}</em>
        </div>
      `
      replyList.appendChild(replyItem)

      // save reply in localStorage
      let reviewIndex = Array.from(reviewList.children).indexOf(reviewItem)
      existingReviews[reviewIndex].replies.push(reply)
      localStorage.setItem("reviews", JSON.stringify(existingReviews))


      let replyForm = reviewItem.querySelector(".reply-form")
      replyForm.style.display = "none"
      let addReplyButton = reviewItem.querySelector(".add-reply-btn")
      addReplyButton.style.display = "block"
    }
  }
})