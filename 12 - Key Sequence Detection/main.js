const pressed = [];
const secretCode = 'wesbos';


window.addEventListener('keyup', (e) => {
  console.log(e);
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

  if (pressed.join('').includes(secretCode)) {
    console.log('WINNER WINNNER CHICKEN DINNER');
  }
  console.log(pressed);
});
