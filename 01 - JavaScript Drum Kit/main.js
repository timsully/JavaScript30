function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);


    if(!audio) return; // Stops audio from running if value is not specified
    audio.currentTime = 0; // Rewinds audio to the start when you click/press on a button with audio attached to it
    audio.play();
    key.classList.add('playing');
}


function removeTransition(e) {
  if(e.propertyName !== 'transform') return; // Skips if it is not a transform property


  this.classList.remove('playing');
};


const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
