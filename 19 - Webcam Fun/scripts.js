// Targetting the player class and will pipe our camera into the video element and will dump it into the canvas every so often once it is called upon
const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');


function getVideo() {
  navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(localMediaStream => {
      console.log(localMediaStream);
      video.src = window.URL.createObjectURL(localMediaStream); // Setting video source for live video feed which converts localMediaStream into something the video media player can understand
      video.play();
    })
    .catch(err => {
      console.error('OH NO!', err);
    })
}


function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height); // adding video element to drawImage to add it to our canvas, starting at the top left hand corner of the canvas + width and height that specified in the above lines of code
    // Take the px out
    let pixels = ctx.getImageData(0, 0, width, height);
    // Manipulating the pixels
    // pixels = redEffect(pixels);

    pixels = greenScreen(pixels);
    // Putting the pixels back
    ctx.putImageData(pixels, 0, 0);


  }, 16);
}


function takePhoto() {
  // played the sound
  snap.currentTime = 0;
  snap.play();

  // take data out of the canvas
  const data = canvas.toDataURL('image/jpgeg');
  const link = document.createElement('a'); // creating anchor link
  link.href = data;
  link.setAttribute('download', 'myImageHeHe');
  link.innerHTML = `<img src="${data}" alt="" />`
  strip.insertBefore(link, strip.firstChild);

}


function redEffect(pixels) {
  for(let i = 0; i < pixels.data.length; i = i += 4) { // iterating through the length of the array of data
    pixels.data[i + 0] = pixels.data[i + 0] + 100; // Red
    pixels.data[i + 1] = pixels.data[i + 1] - 50; // Green
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // Blue
  }
  return pixels;
}


function rgbSplit(pixels) {
  for(let i = 0; i < pixels.data.length; i = i += 4) { // iterating through the length of the array of data
    pixels.data[i - 150] = pixels.data[i + 0]; // Red
    pixels.data[i + 100] = pixels.data[i + 1]; // Green
    pixels.data[i - 550] = pixels.data[i + 2]; // Blue
  }
  return pixels;
}


function greenScreen(pixels) {
  const levels = {}; // holds min and max green

  document.querySelectorAll('.rgb input').forEach((input) => {
    levels[input.name] = input.value;
  });

  for (i = 0; i < puxels.data.length; i = i + 4) {
    red = pixels.data[i + 0];
    green = pixels.data[i + 1];
    blue = pixels.data[i + 2];
    alpha = pixels.data[i + 3];

    if(red >= levels.rmin
      && green >= levels.gmin
      && blue >= levels.bmin
      && red <= levels.rmax
      && green <= levels.gmax
      && blue <= levels.bmax) {
        // take out alpha
        pixels.data[i + 3] = 0;
      }
  }
}


getVideo();

video.addEventListener('canplay', paintToCanvas);
