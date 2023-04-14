let i = 0;
let images = [];

images[0] = "https://images.unsplash.com/photo-1499510011104-7b5473f3fa2e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
images[1] = "https://images.unsplash.com/photo-1536708882829-9e29ac9bfb20?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
images[2] = "https://images.unsplash.com/photo-1470751168426-9c816c6649f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
images[3] = "https://images.unsplash.com/photo-1482779204992-4e4e7d1db10c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
images[4] = "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";

function changeLeft() {
  document.slide.src = images[i];
  if (i <= 4 && i > 0) {
    i--;
  } else {
    if (i === 0) {
      i = i + 4;
    }
  }
}

function changeRight() {
  document.slide.src = images[i];
  if (i >= 0 && i < 4) {
    i++;
  } else {
    if (i === 4) {
      i = i - 4;
    }
  }
}

function img0() {
  document.slide.src = images[0];
}
function img1() {
  document.slide.src = images[1];
}
function img2() {
  document.slide.src = images[2];
}
function img3() {
  document.slide.src = images[3];
}
function img4() {
  document.slide.src = images[4];
}