const images = [ "10.jpeg", "11.jpeg", "12.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.style.width = '1920px';
bgImage.style.height = '1080px';

document.body.appendChild(bgImage);

