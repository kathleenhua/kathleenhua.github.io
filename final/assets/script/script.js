const images = [
    'img1',
    'img2',
    'img3',
    'img4',
    'img5'
  ];
  
let curr = 0;
let lbutt = document.getElementById("prev");
let rbutt = document.getElementById("next");
  function moveBack() {
    document.getElementById(images[curr]).style.opacity = 0;
    if (curr == 0) {
        document.getElementById(images[images.length - 1]).style.opacity = 1;
    } else {
        document.getElementById(images[curr - 1]).style.opacity = 1;
    }
    curr = (curr - 1 + + images.length) % images.length;
  }

  function moveForward() {
    document.getElementById(images[curr]).style.opacity = 0;
    if (curr == images.length - 1){
        document.getElementById(images[0]).style.opacity = 1;
    } else {
        document.getElementById(images[curr + 1]).style.opacity = 1;
    }
    curr = (curr + 1) % images.length;
  }

lbutt.onclick = moveBack;
rbutt.onclick = moveForward;

window.onload = function() {
    type();
  };

const animatedText = document.getElementById("animated-text");
const text = "Kathleen Hua";
let index = 0;
let stop;
  
function type() {
  stop = setTimeout(type, 100);
  let currentText = text.slice(0, ++index);
  animatedText.innerHTML = currentText;
  if (currentText.length === text.length) {
    clearTimeout(stop); // stop the animation
    return;
    }
}