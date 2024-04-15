const images = document.querySelectorAll('.gallery img');
let currentImageIndex = 0;

function showImage(index) {
  images.forEach((image, idx) => {
    if (idx === index) {
      image.style.display = 'block';
      image.style.width = '100vw';
      image.style.height = '100vh';
      image.style.objectFit = 'contain';
    } else {
      image.style.display = 'none';
    }
  });
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  showImage(currentImageIndex);
}

images.forEach((image, index) => {
  image.addEventListener('click', () => {
    nextImage();
  });
});

document.addEventListener('DOMContentLoaded', function() {
  showImage(currentImageIndex);
});
