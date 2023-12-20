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
  menuContent.classList.toggle("show");
}

var bienhientai = 0;
    var khungnoibat = document.getElementById("khungchuanoibat");
    var noibats = document.querySelectorAll(".noibat");

    function choanh(index) {
      var transformValue = -index * 25;
      khungnoibat.style.transform = `translateX(${transformValue}%)`;
    }

    function anhtiep() {
      bienhientai = (bienhientai + 1) % (noibats.length-3);
      choanh(bienhientai);
    }

    function anhtruoc() {
      bienhientai = (bienhientai - 1 + noibats.length-3) % (noibats.length-3);
      choanh(bienhientai);
    }

    function nutanhtiep() {
      anhtiep();
    }

    function nutanhtruoc() {
      anhtruoc();
    }
    choanh(bienhientai);

var bienhientai2 = 0;
    var khungnoibat2 = document.getElementById("khungchuanoibat2");
    var noibats2 = document.querySelectorAll(".noibat2");

    function choanh2(index) {
      var transformValue = -index * 50;
      khungnoibat2.style.transform = `translateX(${transformValue}%)`;
    }

    function anhtiep2() {
      bienhientai2 = (bienhientai2 + 1) % (noibats2.length-1);
      choanh2(bienhientai2);
    }

    function anhtruoc2() {
      bienhientai2 = (bienhientai2 - 1 + noibats2.length-1) % (noibats2.length-1);
      choanh2(bienhientai2);
    }

    function nutanhtiep2() {
      anhtiep2();
    }

    function nutanhtruoc2() {
      anhtruoc2();
    }
    choanh2(bienhientai2);



