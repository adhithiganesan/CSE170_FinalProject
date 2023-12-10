document.addEventListener('DOMContentLoaded', function () {
    //Potato Chip Rock
    let imageURLs = [
      "https://californiathroughmylens.com/wp-content/uploads/2012/06/potato-chip-rock-2020-13.jpg", 
      "https://hikingguy.com/wp-content/uploads/potato-chip-rock-hike-33.jpg",
      "https://luggageandlipstick.com/wp-content/uploads/2018/02/8-potato-chip-rock_Patti-Morrow_luggageandlipstick.com_.jpg"  
    ];
    //Rose Canyon
    let imageURLs1 = [
        "https://californiathroughmylens.com/wp-content/uploads/2012/06/potato-chip-rock-2020-13.jpg", 
        "https://hikingguy.com/wp-content/uploads/potato-chip-rock-hike-33.jpg",
        "https://luggageandlipstick.com/wp-content/uploads/2018/02/8-potato-chip-rock_Patti-Morrow_luggageandlipstick.com_.jpg"  
    ];
  
    let i = 0;
  
    document.querySelector('.prev').addEventListener('click', showPreviousImage);
    document.querySelector('.next').addEventListener('click', showNextImage);
  
    function showPreviousImage() {
      i--;
      if (i < 0) {
        i = imageURLs.length - 1;
      }
      updateImage();
    }
  
    function showNextImage() {
      i++;
      if (i >= imageURLs.length) {
        i = 0;
      }
      updateImage();
    }
  
    function updateImage() {
      const currentImage = document.querySelector('.carousel');
      currentImage.src = imageURLs[i];
    }
  });