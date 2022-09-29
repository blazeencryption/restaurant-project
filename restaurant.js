product = []
products_sum = 0
product_exists = 0
opened_nav = 'closed'
var images = [
    "Images/main-background2.jpg",
    "Images/main-background4.jpg",
    "Images/main-background6.jpg"
]
var opened = 0
const thing = document.getElementById('main-page');
i = 0;
setInterval(function() {
      document.getElementById('main-page').style.backgroundImage = "url(" + images[i] +")";
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
function addtocart(name, img, price, product_class) {
  
  for (product_object of product) {
    if (Object.values(product_object).includes(name)) {
      product_exists = 1;
      product_object["quantity"] += 1;
      console.log("this product already exists")
      break;
    } else {
      product_exists = 0;
    }
  }
  if (product_exists === 1) {
    var price_elements = document.getElementsByClassName(product_class);
    var quantity_elements = document.getElementsByClassName(product_class + "quantity");
    products_sum += price
    document.getElementById('sumprice').innerHTML = products_sum + '$';
    Array.from(price_elements).forEach(price_element => {
      price_element.removeChild(price_element.lastChild);
      new_price = document.createTextNode(product_object['quantity'] * price+ '$');
      price_element.appendChild(new_price);
    });
    Array.from(quantity_elements).forEach(quantity_element => {
      quantity_element.removeChild(quantity_element.lastChild);
      new_quantity = document.createTextNode('Quantity: ' + product_object['quantity']);
      quantity_element.appendChild(new_quantity);
    });
  } else {
    products_sum += price;
    document.getElementById('sumprice').innerHTML = products_sum + '$';
    const product_card = document.createElement('div');
    const product_image_section = document.createElement('div');
    const product_text_section = document.createElement('div');
    const product_image = document.createElement('img');
    const product_title = document.createElement('h1');
    const product_title_heading = document.createTextNode(name);
    const item_price = document.createElement('p');
    const item_price_text = document.createTextNode(price + '$');
    const item_quantity = document.createElement('p');
    const item_quantity_text = document.createTextNode('Quantity: 1');
    document.getElementById('check-out-bar').appendChild(product_card);
    product_card.appendChild(product_image_section);
    product_card.appendChild(product_text_section);
    product_image_section.appendChild(product_image);
    product_text_section.appendChild(product_title);
    product_title.appendChild(product_title_heading);
    product_text_section.appendChild(item_price);
    item_price.appendChild(item_price_text);
    product_text_section.appendChild(item_quantity);
    item_quantity.appendChild(item_quantity_text);
    product_image.src= img;
    product_card.className = 'check-out-card';
    product_image_section.className = 'check-out-image-section';
    product_text_section.className = 'check-out-option-section';
    product_image.className = "check-out-image";
    product_text_section.className = 'check-out-option-section'
    product_title.className = 'check-out-heading';
    item_price.className = 'check-out-price';
    item_price.classList.add(product_class);
    item_quantity.className = 'item-quantity';
    item_quantity.classList.add(product_class + 'quantity');
    product_title.style.fontSize="22px";
    product.push({
      product_name: name,
      product_price: price,
      quantity : 1
    });
    const cart_numbers = document.getElementsByClassName('cart-quantity');
    Array.from(cart_numbers).forEach(cart_number => {
      cart_number.innerHTML = product.length;
    });
  }
}
function reveal_class(category_class) {
  const categoryelements = document.getElementsByClassName(category_class);
  const cards = document.getElementsByClassName('card');
  Array.from(cards).forEach(card => {
    card.style.display="none";
  })
  Array.from(categoryelements).forEach(cat_element => {
    cat_element.style.display="block";
  });
}

function check_out() {
  document.getElementById('popup').style.opacity='1';
  document.getElementById('popup').style.zIndex='100';
  product = [];
  products_sum = 0;
  product_exists = 0;
  const cart_numbers = document.getElementsByClassName('cart-quantity');
  Array.from(cart_numbers).forEach(cart_number => {
    cart_number.innerHTML = product.length;
  });
  const check_out_bar = document.getElementById('check-out-bar');
  const check_out_card = document.getElementsByClassName('check-out-card');
  document.getElementById('sumprice').innerHTML = products_sum + '$';
  while (check_out_bar.firstChild) {
    check_out_bar.removeChild(check_out_card[0]);
  }
  
}
function openmenu() {
  if (opened_nav === "closed") {
    document.getElementById('nav-section').style.height="320px";
    document.getElementById('nav-section-elements').style.display="block";
    document.getElementById('nav-section').style.opacity='1';
    opened_nav = "opened"
  } else {
    document.getElementById('nav-section-elements').style.display="none";
    document.getElementById('nav-section').style.height="0px";
    document.getElementById('nav-section').style.opacity='0';
    opened_nav = "closed"
  }
  
}
function remove_popup() {
  document.getElementById('popup').style.opacity="0";
  document.getElementById('popup').style.zIndex="-100";
}




