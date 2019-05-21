function playSound(e) {
    const audio = document.querySelector(`audio[data-key ="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key ="${e.keyCode}"]`);
    if (!audio) return; // function will stop

    key.classList.add("playing");
    audio.currentTime = 0; // will rewind audio clip to the beginning of clip
    audio.play();
  }

  function removeTransition(e) {
    if (e.propertyName !== "transform") return; // will skip if not a transform property
    e.target.classList.remove("playing");
  }

  const keys = Array.from(document.querySelectorAll(".key"));
  keys.forEach(key =>
    key.addEventListener('transitionend', removeTransition)
  );
  console.table(keys);

  window.addEventListener("keydown", playSound);
  window.addEventListener(onclick, playSound);