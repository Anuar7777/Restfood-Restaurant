let popupContent = document.getElementById("modal_window");
let closeButton = document.querySelector(".modal_close");
let popup = document.querySelector(".modal_content");
let playButton = document.getElementById("modal_play");
let videoFrame = document.querySelector("#modal_window iframe");

closeButton.addEventListener("click", function (event) {
  event.stopPropagation();
  popupContent.style.display = "none";
  videoFrame.src = "";
});

playButton.addEventListener("click", function () {
  popupContent.style.display = "flex";
  videoFrame.src = "https://www.youtube.com/embed/0O2aH4XLbto";
});

popupContent.addEventListener("click", function () {
  popupContent.style.display = "none";
  videoFrame.src = "";
});
