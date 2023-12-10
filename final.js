document.addEventListener('DOMContentLoaded', function () {
    // Trail Picture URLs
    let pototoChipURLs = [
      "https://californiathroughmylens.com/wp-content/uploads/2012/06/potato-chip-rock-2020-13.jpg", 
      "https://hikingguy.com/wp-content/uploads/potato-chip-rock-hike-33.jpg",
      "https://luggageandlipstick.com/wp-content/uploads/2018/02/8-potato-chip-rock_Patti-Morrow_luggageandlipstick.com_.jpg"  
    ];
    let roseCanyonURLs = [
        "https://californiathroughmylens.com/wp-content/uploads/2012/06/potato-chip-rock-2020-13.jpg", 
        "https://hikingguy.com/wp-content/uploads/potato-chip-rock-hike-33.jpg",
        "https://luggageandlipstick.com/wp-content/uploads/2018/02/8-potato-chip-rock_Patti-Morrow_luggageandlipstick.com_.jpg"  
    ];
    let missionTrailsURLs = [
      "https://lh3.googleusercontent.com/proxy/n7F9P5p1wm5GzZAvplF1uVh6XRavHptrmqHp4iZhcWMc2l4XDgdNu6UDtGqR4aHJlAuKFQnNW7w_8BhJk-CqO4VsWUhBn2Me1qHtdIanDtc-C3GofJ7r8cE95SLARgyxNNA-zMAPySniZefippS7pbkJ9akhdt8=s1360-w1360-h1020", 
      "https://lh3.googleusercontent.com/p/AF1QipOQfgsjVYKwAHHUFsqR5wPt43dUjzITK_5XbojW=s1360-w1360-h1020",
      "https://lh3.googleusercontent.com/p/AF1QipOFbyJDrRCzAyvUEjRyLypAfZVTxsCO-IyhVLJg=s1360-w1360-h1020"  
    ];
    let losPenasquitosURLs = [
      "https://lh3.googleusercontent.com/p/AF1QipN2pKIBgl3b5_JnDgCGE9JgrPL_TGUnIV0dHN9s=s1360-w1360-h1020", 
      "https://lh3.googleusercontent.com/p/AF1QipN-EMtaUSTxCTCqKtzPRVyfE9cSRaJgsUB3Nn_8=s1360-w1360-h1020",
      "https://lh3.googleusercontent.com/p/AF1QipM07ebAxHg4gw3c6d1CKUNWTqu6IZEnoL-5zdFG=s1360-w1360-h1020"  
    ];
    let marianBearURLs = [
      "https://lh3.googleusercontent.com/p/AF1QipPSMFN_3YT6LTy4c-xp2gPEOsBSFdFnX_DvwOhv=s1360-w1360-h1020", 
      "https://lh3.googleusercontent.com/p/AF1QipOQfgsjVYKwAHHUFsqR5wPt43dUjzITK_5XbojW=s1360-w1360-h1020",
      "https://lh3.googleusercontent.com/p/AF1QipMHgHI757s7T2AkohoIj9QYdpcEx24DQkLM0jAz=s1360-w1360-h1020"  
    ];
    let sunsetCliffsURLs = [
      "https://lh3.googleusercontent.com/p/AF1QipPSMFN_3YT6LTy4c-xp2gPEOsBSFdFnX_DvwOhv=s1360-w1360-h1020", 
      "https://lh3.googleusercontent.com/p/AF1QipOQfgsjVYKwAHHUFsqR5wPt43dUjzITK_5XbojW=s1360-w1360-h1020",
      "https://lh3.googleusercontent.com/p/AF1QipMHgHI757s7T2AkohoIj9QYdpcEx24DQkLM0jAz=s1360-w1360-h1020"  
    ];

    document.querySelector('.prev').addEventListener('click', showPreviousPotatoChipImage);
    document.querySelector('.next').addEventListener('click', showNextPotatoChipImage);

    document.querySelector('.prev1').addEventListener('click', showPreviousRoseCanyonImage);
    document.querySelector('.next1').addEventListener('click', showNextRoseCanyonImage);

    document.querySelector('.prev2').addEventListener('click', showPreviousMissionTrailsImage);
    document.querySelector('.next2').addEventListener('click', showNextMissionTrailsImage);

    document.querySelector('.prev3').addEventListener('click', showPreviousLosPenasquitosImage);
    document.querySelector('.next3').addEventListener('click', showNextLosPenasquitosImage);

    document.querySelector('.prev4').addEventListener('click', showPreviousMarianBearImage);
    document.querySelector('.next4').addEventListener('click', showNextMarianBearImage);

    document.querySelector('.prev5').addEventListener('click', showPreviousSunsetCliffsImage);
    document.querySelector('.next5').addEventListener('click', showNextSunsetCliffsImage);

    let i = 0;

    //POTATO CHIP FUNCTIONS
    function showPreviousPotatoChipImage() {
      i--;
      if (i < 0) {
        i = pototoChipURLs - 1;
      }
      updateImagePotatoChip(potatoChipURLs);
    }
    function showNextPotatoChipImage() {
      i++;
      if (i >= pototoChipURLs.length) {
        i = 0;
      }
      updateImagePotatoChip(pototoChipURLs);
    }
    function updateImagePotatoChip(imageURLs) {
      const currentImage = document.querySelector('.carousel');
      currentImage.src = imageURLs[i];
    }


    //ROSE CANYON FUNCTIONS
    function showPreviousRoseCanyonImage() {
      i--;
      if (i < 0) {
        i = roseCanyonURLs - 1;
      }
      updateImageRoseCanyon(roseCanyonURLs);
    }
    function showNextRoseCanyonImage() {
      i++;
      if (i >= roseCanyonURLs.length) {
        i = 0;
      }
      updateImageRoseCanyon(roseCanyonURLs);
    }
    function updateImageRoseCanyon(imageURLs) {
      const currentImage = document.querySelector('.carousel1');
      currentImage.src = imageURLs[i];
    }


    //MISSION TRAILS FUNCTIONS
    function showPreviousMissionTrailsImage() {
      i--;
      if (i < 0) {
        i = missionTrailsURLs - 1;
      }
      updateImageMissionTrails(missionTrailsURLs);
    }
    function showNextMissionTrailsImage() {
      i++;
      if (i >= missionTrailsURLs.length) {
        i = 0;
      }
      updateImageMissionTrails(missionTrailsURLs);
    }
    function updateImageMissionTrails(imageURLs) {
      const currentImage = document.querySelector('.carousel2');
      currentImage.src = imageURLs[i];
    }


    //LOS PENASQUITOS FUNCTIONS
    function showPreviousLosPenasquitosImage() {
      i--;
      if (i < 0) {
        i = losPenasquitosURLs - 1;
      }
      updateImageLosPenasquitos(losPenasquitosURLs);
    }
    function showNextLosPenasquitosImage() {
      i++;
      if (i >= losPenasquitosURLs.length) {
        i = 0;
      }
      updateImageLosPenasquitos(losPenasquitosURLs);
    }
    function updateImageLosPenasquitos(imageURLs) {
      const currentImage = document.querySelector('.carousel3');
      currentImage.src = imageURLs[i];
    }

    //MARIAN BEAR FUNCTIONS
    function showPreviousMarianBearImage() {
      i--;
      if (i < 0) {
        i = marianBearURLs - 1;
      }
      updateImageMarianBear(marianBearURLs);
    }
    function showNextMarianBearImage() {
      i++;
      if (i >= marianBearURLs.length) {
        i = 0;
      }
      updateImageMarianBear(marianBearURLs);
    }
    function updateImageMarianBear(imageURLs) {
      const currentImage = document.querySelector('.carousel4');
      currentImage.src = imageURLs[i];
    }

    
    //SUNSET CLIFFS FUNCTIONS
    function showPreviousSunsetCliffsImage() {
      i--;
      if (i < 0) {
        i = sunsetCliffsURLs - 1;
      }
      updateImageSunsetCliffs(sunsetCliffsURLs);
    }
    function showNextSunsetCliffsImage() {
      i++;
      if (i >= sunsetCliffsURLs.length) {
        i = 0;
      }
      updateImageSunsetCliffs(sunsetCliffsURLs);
    }

    function updateImageSunsetCliffs(imageURLs) {
      const currentImage = document.querySelector('.carousel5');
      currentImage.src = imageURLs[i];
    }
  });