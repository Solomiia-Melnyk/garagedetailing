
// modal window
if (!sessionStorage.getItem('modalShown')) {
   setTimeout(openModal, 8000);
}

function openModal() {
   let modal = document.getElementById("myModal");
   modal.style.display = "block";

   // Зберігаємо інформацію, що модальне вікно було показано в пам'яті сеансу
   sessionStorage.setItem('modalShown', 'true');
}

let closeModalButton = document.getElementById("closeModal");
closeModalButton.addEventListener("click", function () {
   let modal = document.getElementById("myModal");
   modal.style.display = "none";
});

let zamow = document.getElementById("zamow");
zamow.addEventListener("click", function () {
   let modal = document.getElementById("myModal");
   modal.style.display = "none";
});
