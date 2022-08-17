const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");

  btn.textContent = sound;
  btn.addEventListener("click", () => {
    stopSound();
    document.getElementById(sound).play();
  });

  document.getElementById("buttons").appendChild(btn);
});
function stopSound() {
  sounds.forEach((sound) => {
    const soundEl = document.getElementById(sound);
    soundEl.pause();
    sound.currentTime = 0;
  });
}
