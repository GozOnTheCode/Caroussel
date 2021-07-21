var i = 0;
var images = ["img1.jpeg", "img2.jpeg", "img3.jpeg"];
var time = 5000;

  function changeImg(caroussel) {
    if (caroussel != undefined) {

    if (caroussel == -1 && i == 0) {
      i = images.length -1
    } else if (caroussel == 1 && i == (images.length -1)) {
      i = 0;
    } else {
      i = i + caroussel
    }
  } else {
    if (i < images.length - 1) {
      i++;
    } else {
      i = 0;
    }
    setTimeout("changeImg()", time);
  }
    document.slide.src = images[i];
  }

  window.onload = changeImg();
