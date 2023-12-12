document.addEventListener('DOMContentLoaded', function () {
  //SEARCH BAR STUFF
    const inputElement = document.querySelector('.input');

    inputElement.addEventListener('click', function () {
        inputElement.placeholder = 'Enter your Zip Code or City';
    });

    const searchButton = document.querySelector('.submit');
    searchButton.addEventListener('click', function () {
      inputElement.placeholder = " ";
      window.alert("This function doesn't actually work lol. But check out the other features: hyperlinks for the trail names, carousel, super cool design!");
  });

  // Trail Picture URLs
  let pototoChipURLs = [
      "https://californiathroughmylens.com/wp-content/uploads/2012/06/potato-chip-rock-2020-13.jpg",
      "https://hikingguy.com/wp-content/uploads/potato-chip-rock-hike-33.jpg",
      "https://luggageandlipstick.com/wp-content/uploads/2018/02/8-potato-chip-rock_Patti-Morrow_luggageandlipstick.com_.jpg"
  ];
  let roseCanyonURLs = [
      "https://i0.wp.com/hikingsdcounty.com/wp-content/uploads/2014/07/20140704Rose-Canyon3810.jpg?ssl=1",
      "https://lh3.googleusercontent.com/p/AF1QipM_y8Xy2nv_bK0gqqNzSCV9Owdb5bpUsTpby4dF=s1360-w1360-h1020",
      "https://media.sandiegoreader.com/img/photos/2012/03/06/roampic_lead_t670.jpg?b3f6a5d7692ccc373d56e40cf708e3fa67d9af9d"
  ];
  let missionTrailsURLs = [
      "https://lh3.googleusercontent.com/proxy/n7F9P5p1wm5GzZAvplF1uVh6XRavHptrmqHp4iZhcWMc2l4XDgdNu6UDtGqR4aHJlAuKFQnNW7w_8BhJk-CqO4VsWUhBn2Me1qHtdIanDtc-C3GofJ7r8cE95SLARgyxNNA-zMAPySniZefippS7pbkJ9akhdt8=s1360-w1360-h1020",
      "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMjgxMTE5NjEvMmNiNDJhN2IxOGY0MzA0NDRmZWNhMTA0MmRmOTE0ODQuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjo1MDAsImhlaWdodCI6NTAwLCJmaXQiOiJpbnNpZGUifSwicm90YXRlIjpudWxsLCJqcGVnIjp7InRyZWxsaXNRdWFudGlzYXRpb24iOnRydWUsIm92ZXJzaG9vdERlcmluZ2luZyI6dHJ1ZSwib3B0aW1pc2VTY2FucyI6dHJ1ZSwicXVhbnRpc2F0aW9uVGFibGUiOjN9fX0=",
      "https://lh3.googleusercontent.com/p/AF1QipOFbyJDrRCzAyvUEjRyLypAfZVTxsCO-IyhVLJg=s1360-w1360-h1020"
  ];
  let losPenasquitosURLs = [
      "https://lh3.googleusercontent.com/p/AF1QipN2pKIBgl3b5_JnDgCGE9JgrPL_TGUnIV0dHN9s=s1360-w1360-h1020",
      "https://lh3.googleusercontent.com/p/AF1QipN-EMtaUSTxCTCqKtzPRVyfE9cSRaJgsUB3Nn_8=s1360-w1360-h1020",
      "https://lh3.googleusercontent.com/p/AF1QipM07ebAxHg4gw3c6d1CKUNWTqu6IZEnoL-5zdFG=s1360-w1360-h1020"
  ];
  let marianBearURLs = [
      "https://lh3.googleusercontent.com/p/AF1QipN9XPX3f76hEm4p5fQ1mcc2wKa45h66BwlMGpNM=s1360-w1360-h1020",
      "https://lh3.googleusercontent.com/p/AF1QipOQfgsjVYKwAHHUFsqR5wPt43dUjzITK_5XbojW=s1360-w1360-h1020",
      "https://lh3.googleusercontent.com/p/AF1QipMHgHI757s7T2AkohoIj9QYdpcEx24DQkLM0jAz=s1360-w1360-h1020"
  ];
  let sunsetCliffsURLs = [
      "https://www.gosandiego.com/wp-content/uploads/2021/09/Sunset-Cliffs-San-Diego-AdobeStock_284221491.jpeg",
      "https://www.sportrx.com/sportrx-blog/wp-content/uploads/2018/08/sunset-cliffs-peter-tellone-1.jpg",
      "https://www.sandiego.org/-/media/images/sdta-site/things-to-do/sports-and-recreation/hiking/coastal-hikes/sunsetcliffs-16_727x545.jpg?h=545&la=en&w=727"
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
          i = pototoChipURLs.length - 1;
      }
      updateImagePotatoChip(pototoChipURLs);
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
          i = roseCanyonURLs.length - 1;
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
          i = missionTrailsURLs.length - 1;
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
          i = losPenasquitosURLs.length - 1;
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
          i = marianBearURLs.length - 1;
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
          i = sunsetCliffsURLs.length - 1;
      }
      updateImageSunsetCliffs();
  }
  function showNextSunsetCliffsImage() {
      i++;
      if (i >= sunsetCliffsURLs.length) {
          i = 0;
      }
      updateImageSunsetCliffs();
  }

  function updateImageSunsetCliffs() {
      const currentImage = document.querySelector('.carousel5');
      currentImage.src = sunsetCliffsURLs[i];
  }
});
