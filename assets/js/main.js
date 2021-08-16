const fetch = require('sync-fetch')

// Product list from server, without buy information.
data = fetch('http://localhost:4000/api/product').json()

cartObj = getCookie("cart");
if(cartObj != "") {
    const sold_data = JSON.parse(cartObj);
    console.log("Sold data:");
    console.log(sold_data);
    data = mergeData(data, sold_data);
    // data = JSON.parse(cartObj);
    console.log("Merged data:");
    console.log(data);
}
 
function mergeData(data, sold_data) {
    for(let i = 0; i < sold_data.length; ++i) {
        data[sold_data[i].id].itemInCart = true;
        data[sold_data[i].id].sizeselected = sold_data[i].sizeselected;
    }
    return data;
}

var i;
var detail =document.getElementsByClassName('card-item');
var detailsImg = document.getElementById('details-img')
var detailTitle = document.getElementById('detail-title')
var detailPrice = document.getElementById('detail-price')
var detailDescription = document.getElementById('detail-description')
var detailSize = document.getElementById('detail-size')
var detailsPage = document.getElementById('details-page');
var back = document.getElementById('buy')
back.addEventListener('click',refreshPage)
var addToCarts = document.querySelectorAll('#add-to-cart')
var cart = document.getElementById('cart');

// click event to display cart page
cart.addEventListener('click',displayCart)

var carts = document.getElementById('carts');

//click events to add items to cart from details page
carts.addEventListener('click',()=>addToCart(getId))

//events on dynamically created element to remove items from list
document.addEventListener('click',function (e){
    if(e.target.id=='remove'){
        var itemId = e.target.parentNode.id
        removeFromCart(itemId)
    }
})

//click event to display details page
for(i=0;i<detail.length;i++){
    detail[i].addEventListener('click',handleDetail)
}

var getId;

//click events to add items to cart from home page cart icon
addToCarts.forEach(val=>val.addEventListener('click',()=>addToCart(val.parentNode.id)));

// details function
function handleDetail(e){
    detailsPage.style.display = 'block'
    getId= this.parentNode.id;
    detailsImg.src= data[getId].img;
    detailTitle.innerHTML=   data[getId].name;
    detailPrice.innerHTML= 'Price : $ ' +data[getId].price;
    detailDescription.innerHTML = 'Description:' +data[getId].description;
    if (data[getId].sizeInPage == true){
        detailSize.style.display = 'block'
    }
    else{
        detailSize.style.display = 'none'
    }
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

function generateSoldData(data) {
    let sold_data = [];
    for (let i = 0 ; i < data.length; ++i) {
        if(!data[i].itemInCart) continue;

        let item = {};
        item.id = data[i].id;
        item.sizeselected = data[i].sizeselected;

        sold_data.push(item);
    }
    return sold_data;
}

// update cookie using all data.
function updateCookie() {
    document.cookie = "cart=" + JSON.stringify(generateSoldData(data));
}

// add item to the cart
function addToCart(id) {
    data[id].sizeselected = document.getElementById("detail-size").options.selectedIndex
    if((data[id].sizeselected == 0) && (data[id].sizeInPage == true)){
        alert("Did not choose size!")
        addToCart()
    }
    if(!data[id].itemInCart){
        alert('Item Added to Your Cart')
    }
    else{
        alert('Your Item is Already There')
    }
    data[id].itemInCart= true
    updateCartPage()
    updateCookie()
    detailsPage.style.display = 'none'
}

//back to main page
function refreshPage(){
    detailsPage.style.display = 'none'
}

//display your cart page
function displayCart(){
    document.getElementById('main').style.display= "none";
    document.getElementById('details-page').style.display= "none";
    document.getElementById('cart-container').style.display= "block";
    updateCartPage()
}

function ready() {
    var quantityInputs = document.getElementsByClassName('quantity');

    for (var i = 0; i < quantityInputs.length; ++i){
        quantityInputs[i].addEventListener('change', quantityChanged)
    }
}

function quantityChanged(event) {
    var quantityInput = event.target
    if (isNaN(quantityInput.value) || quantityInput.value <= 0) {
        quantityInput.value = 1
    }
    var id = quantityInput.parentNode.id;
    var price = document.getElementById('pay' + id).innerHTML;
    document.getElementById('totalPrice' + id).innerHTML = price * quantityInput.value;

    updateTotal()
}

// Updates total information in the bottom-left panel.
function updateTotal(){
    var quantityInputs = document.getElementsByClassName('quantity');
    var prices = document.getElementsByClassName('totalPrice');

    var totalCount = 0, totalPrice = 0;
    for (var i = 0; i < quantityInputs.length; ++i) {
        console.log(quantityInputs[i].value);
        totalCount += parseInt(quantityInputs[i].value);
    }
    for (var i = 0; i < prices.length; ++i) {
        console.log(prices[i].innerHTML);
        totalPrice += parseFloat(prices[i].innerHTML);
    }

    document.getElementById('total-items').innerHTML = totalCount;
    document.getElementById('total-amount').innerHTML = totalPrice;
}


var totalAmount;
var totalItems;
var temp_quantity


// Update cartList and corresponding elements.
function updateCartPage(){

    let cartList = data.filter( 
        function(e) {
          return e.itemInCart;
        }
    );
    if(cartList.length==0){
        document.getElementById('cart-with-items').style.display= "none";
        document.getElementById('empty-cart').style.display= "block";
    }
    else{
        document.getElementById('empty-cart').style.display= "none";
        document.getElementById('cart-with-items').style.display= "grid";
        
    }

    totalAmount=0;
    totalItems = 0;
    totalSaving=0;
    temp_quantity=1;
    var clrNode=document.getElementById('item-body');
    clrNode.innerHTML= '';
    // console.log(clrNode.childNodes)
    cartList.map((cart)=>
    {
        var cartCont = document.getElementById('item-body');

        var tempCart = document.createElement('div')
        tempCart.setAttribute('id',cart.id);
        tempCart.setAttribute('class','cart-list');

        var listImg = document.createElement('img');
        listImg.setAttribute('id','list-img' + cart.id);
        listImg.setAttribute('class','list-img');
        listImg.src = cart.img
        tempCart.appendChild(listImg)

        var listPayContainer = document.createElement('h3');
        listPayContainer.setAttribute('class','payContainer');
        listPayContainer.innerHTML ='$'
        var listPay = document.createElement('h3');
        listPay.setAttribute('id','pay' + cart.id);
        listPay.setAttribute('class','pay');
        listPay.innerHTML = cart.price;
        tempCart.appendChild(listPay);
        tempCart.appendChild(listPayContainer);

        var listQuantity = document.createElement('input');
        listQuantity.setAttribute('id','quantity' + cart.id);
        listQuantity.setAttribute('class','quantity');
        listQuantity.setAttribute('type','number');
        listQuantity.setAttribute('value',"1");
        tempCart.appendChild(listQuantity);

        var totalPriceContainer = document.createElement('h3');
        totalPriceContainer.setAttribute('class','totalPriceContainer');
        totalPriceContainer.innerHTML = '$';
        var totalPrice = document.createElement('h3');
        totalPrice.setAttribute('id','totalPrice' + cart.id);
        totalPrice.setAttribute('class','totalPrice');
        totalPrice.innerHTML = cart.price;
        tempCart.appendChild(totalPriceContainer)
        tempCart.appendChild(totalPrice)

        var listName = document.createElement('h3');
        listName.setAttribute('class','list-name');
        if (data[cart.id].sizeselected == 1){
            listName.innerHTML = cart.name + " S";
        }
        else if (data[cart.id].sizeselected == 2){
            listName.innerHTML = cart.name + " M";
        }
        else if (data[cart.id].sizeselected == 3){
            listName.innerHTML = cart.name + " L";
        }
        else{
            listName.innerHTML = cart.name;
        }

        tempCart.appendChild(listName)

        var listTrash = document.createElement('i');
        listTrash.setAttribute('class','fa fa-trash ');
        listTrash.setAttribute('id','remove');
        tempCart.appendChild(listTrash);

        totalAmount = totalAmount + cart.price*temp_quantity;
        totalItems = totalItems + temp_quantity;
        cartCont.appendChild(tempCart) 
    })
    document.getElementById('total-amount-container').innerHTML = 'Total Amount : $ ' 
    document.getElementById('total-amount').innerHTML = totalAmount;
    document.getElementById('total-items-container').innerHTML = 'Total Items : '  
    document.getElementById('total-items').innerHTML = totalItems;
    document.getElementById('total').style.display= "block";
    ready()
        
}


//remove item from the cart, and then update cart page and cookie.
function removeFromCart(itemId){
    data[itemId].itemInCart = false;
    data[itemId].sizeselected = 0;
    updateCartPage();
    updateCookie();
}

