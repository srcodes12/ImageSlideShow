let i = 0;
let images = [];

images[0] = "/images/xuxspace.png";
images[1] = "/images/test3.png";
images[2] = "/images/xuxa.gif";
images[3] = "/images/crownedsss (1).png";
images[4] = "/images/onlyburns10.png";
images[5] = "/images/betrayerbanner.png";
images[6] = "/images/xuxwater.png";
images[7] = "/images/xuxspace2.png";
images[8] = "/images/xuxgfx.png";

function changeLeft() {
  document.slide.src = images[i];
  if (i <= 8 && i > 0) {
    i--;
  } else {
    if (i === 0) {
      i = i + 8;
    }
  }
}

function changeRight() {
  document.slide.src = images[i];
  if (i >= 0 && i < 8) {
    i++;
  } else {
    if (i === 8) {
      i = i - 8;
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
function img5() {
  document.slide.src = images[5];
}
function img6() {
  document.slide.src = images[6];
}
function img7() {
  document.slide.src = images[7];
}
function img8() {
  document.slide.src = images[8];
}
