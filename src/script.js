const footer = document.querySelector("footer");
const audio = document.querySelector("#sonido");

footer.addEventListener("mouseenter", function() {
    audio.currentTime = 0;
    audio.play();
});

footer.addEventListener("mouseleave", function() {
    audio.pause();
    audio.currentTime = 0;
});