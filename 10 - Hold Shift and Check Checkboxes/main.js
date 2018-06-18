//Create a function that checks box
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
console.log(checkboxes);


let lastChecked;


function handleCheck(e) {
  // Check if they have shift key down
  let inBetween = false;
  if(e.shiftKey && this.checked) { // The argument in the () means if they are holding down the shift key down and checking the box the action specified in block will occur
    //loop over checkbox
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
      if(checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }


      if(inBetween) {
        checkbox.checked = true;
      }


    });
  }


  lastChecked = this;
}


checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))
