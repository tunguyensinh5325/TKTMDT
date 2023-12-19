var currentIndex = 0;
    var imageWrapper = document.getElementById("image-wrapper");
    var images = document.querySelectorAll(".image-slide");

    function showImage(index) {
      var transformValue = -index * 100;
      imageWrapper.style.transform = `translateX(${transformValue}%)`;
    }

    function showNextImage() {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    }

    function showPrevImage() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    }

    function nextImage() {
      showNextImage();
    }

    function prevImage() {
      showPrevImage();
    }
    showImage(currentIndex);


function toggleMenu() {
  var menuContent = document.getElementById("menuContent");
  menuContent.classList.toggle("show");}