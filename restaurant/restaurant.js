var images = [
    "Images/main-background2.jpg",
    "Images/main-background4.jpg",
    "Images/main-background6.jpg"
]
const thing = document.getElementById('main-page');
var i = 0;
setInterval(function() {
      document.getElementById('main-page').style.backgroundImage = "url(" + images[i] + ")";
      i = i + 1;
      if (i == images.length) {
        i =  0;
      }
      console.log("url(" + images[i] + ")");
}, 8000);
