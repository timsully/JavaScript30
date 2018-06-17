  const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];


  function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
  }


  // Regular
  console.log('Hello');


  // Interpolated
  console.log('Hello I am a %s', 'symbol-here');


  // Styled
  console.log('%c I am some great text', 'font-size: 12px');


  // warning!
  console.warn('OH NO');


  // Error :|
  console.error('Shit!');


  // Info
  console.error('Warriors won, again.');


  // Testing
  const p = document.querySelector('p'); // Creating a const variable to allow console.assert to access HTML elements in the document
  console.assert(p.classList.contains('ouch'), 'That is wrong!'); // Writes an error message if the assertion is false, if true nothing happens


  // clearing
  console.clear() // Clears the console


  // Viewing DOM Elements
  console.log(p); // Logs the HTML element in console
  console.dir(p); // Let's you look at the class list, properties, methods, etc


  // Grouping together
  dogs.forEach(dog => { // Creating a function using the forEach() method to iterate through each element in the array called dogs
    console.groupCollapsed(`${dog.name}`); // In the console once it is logged we are formatting our list to have the ability to expand and collapse the the key value of the array dogs
    console.log(`This is ${dog.name}`); // Will log the value of the key name from the dogs array
    console.log(`${dog.name} is ${dog.age} years old`); // Will log the name and age of the dog within a string. Using backticks `` to allow the use of ES5 syntax (template literals) of the ${} to pull elements from the array
    console.log(`${dog.name} is ${dog.age * 7} years old`); // Will log the name and age of the dogs specified in the array, but multiply the age by 7
    console.groupEnd(`${dog.name}`); // Exits the current inline group in the web console 
  });


  // counting
  console.count('Steve');


  // timing
  console.time('fetching data');
  fetch('https://api.github.com/users/wesbos')
    .then(data => data.json())
    .then(data => {
      console.timeEnd('fetching data');
      console.log(data);
    });


  console.table(dogs);
