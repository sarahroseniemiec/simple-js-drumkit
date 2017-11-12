document.addEventListener("DOMContentLoaded", function () {




  function playSound(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();

  }

  function removeTransition(e) {
    if(e.propertyName !== "transform") return;
    this.classList.remove('playing');


  }

  const keys = document.querySelectorAll('.key');

  window.addEventListener("keydown", playSound);

  keys.forEach(key => key.addEventListener("transitionend", removeTransition));


});
