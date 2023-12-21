function toggleMenu() {
    var menuContent = document.getElementById("menuContent");
    menuContent.classList.toggle("show");
}
function showImage(thumbnail, imageSource) {
    var largeImage = document.getElementById('largeImage');

    // Đặt tất cả các ảnh nhỏ về trạng thái ban đầu (không được chọn)
    var thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach(function (thumb) {
        thumb.classList.remove('selected');
    });

    // Đặt ảnh nhỏ được chọn vào trạng thái đã chọn
    thumbnail.classList.add('selected');

    // Cập nhật ảnh lớn
    largeImage.src = imageSource;
}
function selectBox(selectedBox) {
    var boxes = document.querySelectorAll('.kt');

    // Đặt tất cả các thẻ div về trạng thái ban đầu (không được chọn)
    boxes.forEach(function (box) {
        box.classList.remove('selected');
    });

    // Đặt thẻ div được chọn vào trạng thái đã chọn
    selectedBox.classList.add('selected');
}

let number = 1;
function updateNumber(operation) {
  if (operation === 'add') {
    number += 1;
  } else if (operation === 'subtract' && number > 1) {
    number -= 1;
  }

  document.getElementById('number').innerText = number;
}


function showPopup() {
  document.getElementById('infor-khachhang').style.display = 'flex';
  setTimeout(function () {
    document.getElementById('infor-khachhang').style.opacity = '1';
  }, 10);
}

function closePopup() {
  document.getElementById('infor-khachhang').style.opacity = '0';
  setTimeout(function () {
    document.getElementById('infor-khachhang').style.display = 'none';
  }, 300);
}
var buyButtons = document.querySelectorAll('.mua-ngay');

buyButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        alert('Đã đặt hàng thành công');
    });
});
    