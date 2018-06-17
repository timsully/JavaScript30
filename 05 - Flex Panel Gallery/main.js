const panels = document.querySelectorAll('.panel');


function toggleOpen() {
  this.classList.toggle('open');
}


function toggleActive(e) {
  this.classList.toggle(e.propertyName);
}


panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
