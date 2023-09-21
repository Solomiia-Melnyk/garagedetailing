const videoItems = document.querySelectorAll('.video-item');
const videoPopup = document.getElementById('videoPopup');
const popupVideo = document.getElementById('popupVideo');
const closePopup = document.getElementById('closePopup');

videoItems.forEach((item) => {
  item.addEventListener('click', () => {
    const videoSource = item.querySelector('source').getAttribute('src');
    popupVideo.setAttribute('src', videoSource);
    videoPopup.style.display = 'block';
  });
});

closePopup.addEventListener('click', () => {
  popupVideo.pause();
  videoPopup.style.display = 'none';
});
