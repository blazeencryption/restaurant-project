
var images = [
    "Images/main-background2.jpg",
    "Images/main-background4.jpg",
    "Images/main-background6.jpg"
]
var opened = 0
const thing = document.getElementById('main-page');
var i = 0;
setInterval(function() {
      document.getElementById('main-page').style.backgroundImage = "url(" + images[i] + ")";
      i = i + 1;
      if (i == images.length) {
        i =  0;
      }
}, 8000);
$(".carousel").swipe({
  swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
      if (direction == 'left') $(this).carousel('next');
      if (direction == 'right') $(this).carousel('prev');
  },
  allowPageScroll: "vertical" 
});
function description(element, elements) {
  document.getElementById(element).classList.toggle('opened-description');
  texts = document.getElementsByClassName(elements);
  Array.from(texts).forEach(text_element => {
    text_element.classList.toggle('opened-text')
  });
}

function revealbar() {
  document.getElementById('check-out-bar').classList.toggle('opened-check-out-bar');
}
function addtocart(element, price) {
  document.getElementById(element).style.display="block";
  product = [
    {
    name:element,
    product_price:price
    }
  ]
  console.log(product)
}
