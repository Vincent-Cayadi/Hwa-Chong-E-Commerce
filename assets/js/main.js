const api_url = 'http://localhost:4000/api/product';
async function getData(){
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data);
}

getData();

data= [
    {
        id : 0,
        img : '/productImages/Aphelion Jacket.jpeg',
        name : 'Aphelion Jacket',
        price : 10,
        save: 0,
        delievery : 'Aphelion Jacket',
        sizeInPage : true ,
        sizeselected: 0,
        itemInCart: false,

    },
    {
        id : 1,
        img : '/productImages/Ispark Jacket.jpeg',
        name : 'Ispark Jacket',
        price : 10,
        save : 0,
        delievery : 'Ispark Jacket',
        sizeInPage : true ,
        sizeselected: 0,
        itemInCart: false,

    },
    {
        id : 2,
        img : '/productImages/Ortus Jacket.jpeg',
        name : 'Ortus Jacket',
        price : 10,
        save : 0,
        delievery : 'Ortus Jacket',
        sizeInPage : true ,
        sizeselected: 0,
        itemInCart: false,

    },
    {
        id : 3,
        img : '/productImages/ProEd Jacket.jpg',
        name : 'ProEd Jacket',
        price : 10,
        save : 0,
        delievery : 'ProEd Jacket',
        sizeInPage : true ,
        sizeselected: 0,
        itemInCart: false,
    },
    
    {
        id : 4,
        img : '/productImages/Aphelion Bottle.jpg',
        name : 'Aphelion Bottle',
        price : 5,
        save : 0,
        delievery : 'Aphelion Bottle',
        itemInCart: false,
    },

    {
        id : 5,
        img : '/productImages/Aphelion Backpack.jpg',
        name : 'Aphelion Backpack',
        price : 20,
        save : 0,
        delievery : 'Aphelion Backpack',
        itemInCart: false,

    },

    {
        id : 6,
        img : '/productImages/Aphelion T Shirt.jpg',
        name : 'Aphelion T Shirt',
        price : 10,
        save : 0,
        delievery : 'Aphelion T Shirt',
        sizeInPage : true ,
        sizeselected: 0,
        itemInCart: false,

    },

    {
        id : 7,
        img : '/productImages/ProEd Bottle.jpg',
        name : 'ProEd Bottle',
        price : 5,
        save : 0,
        delievery : 'ProEd Bottle',
        itemInCart: false,
    },
    
    {
        id : 8,
        img : '/productImages/ProEd Backpack.jpg',
        name : 'ProEd Backpack',
        price : 20,
        save : 0,
        delievery : 'ProEd Backpack',
        itemInCart: false,
    },

    {
        id : 9,
        img : '/productImages/ProEd Shirt.jpeg',
        name : 'ProEd T Shirt',
        price : 10,
        save : 0,
        delievery : 'ProEd T Shirt',
        sizeInPage : true ,
        sizeselected: 0,
        itemInCart: false,
    },

    {
        id : 10,
        img : '/productImages/Ortus Bottle.jpg',
        name : 'Ortus Bottle',
        price : 5,
        save : 0,
        delievery : 'Ortus Bottle',
        itemInCart: false,
    },

    {
        id : 11,
        img : '/productImages/Ortus Backpack.jpg',
        name : 'Ortus Backpack',
        price : 20,
        save : 0,
        delievery : 'Ortus Backpack',
        itemInCart: false,
    },

    {
        id : 12,
        img : '/productImages/Ortus T Shirt.jpg',
        name : 'Ortus T Shirt',
        price : 10,
        save : 0,
        delievery : 'Ortus T Shirt',
        sizeInPage : true ,
        sizeselected: 0,
        itemInCart: false,
    },

    {
        id : 13,
        img : '/productImages/Ispark Bottle.jpg',
        name : 'Ispark Bottle',
        price : 5,
        save : 0,
        delievery : 'Ispark Bottle',
        itemInCart: false,
    },

    {
        id : 14,
        img : '/productImages/Ispark Backpack.jpg',
        name : 'Ispark Backpack',
        price : 20,
        save : 0,
        delievery : 'Ispark Backpack',
        itemInCart: false,

    },

    {
        id : 15,
        img : '/productImages/Ispark T Shirt.jpg',
        name : 'Ispark T Shirt',
        price : 10,
        save : 0,
        delievery : 'Ispark T Shirt',
        sizeInPage : true ,
        sizeselected: 0,
        itemInCart: false,
    },

    {
        id : 16,
        img : '/productImages/Aphelion File.jpg',
        name : 'Aphelion File',
        price : 7,
        save : 0,
        delievery : 'Aphelion File',
        itemInCart: false,
    },

    {
        id : 17,
        img : '/productImages/Aphelion Pencil Case.jpg',
        name : 'Aphelion Pencil Case',
        price : 3,
        save : 0,
        delievery : 'Aphelion Pencil Case',
        itemInCart: false,

    },

    {
        id : 18,
        img : '/productImages/ProEd File.jpg',
        name : 'ProEd File',
        price : 7,
        save : 0,
        delievery : 'ProEd File',
        itemInCart: false,
    },

    {
        id : 19,
        img : '/productImages/ProEd Pencil Case.jpg',
        name : 'ProEd Pencil Case',
        price : 3,
        save : 0,
        delievery : 'ProEd Pencil Case',
        itemInCart: false,
    },

    {
        id : 20,
        img : '/productImages/Ortus File.jpg',
        name : 'Ortus File',
        price : 7,
        save : 0,
        delievery : 'Ortus File',
        itemInCart: false,

    },

    {
        id : 21,
        img : '/productImages/Ortus Pencil Case.jpg',
        name : 'Ortus Pencil Case',
        price : 3,
        save : 0,
        delievery : 'Ortus Pencil Case',
        itemInCart: false,
    },

    {
        id : 22,
        img : '/productImages/Ispark File.jpg',
        name : 'Ispark File',
        price : 7,
        save : 0,
        delievery : 'Ispark File',
        itemInCart: false,
    },

    {
        id : 23,
        img : '/productImages/Ispark Pencil Case.jpg',
        name : 'Ispark Pencil Case',
        price : 3,
        save : 0,
        delievery : 'Ispark Pencil Case',
        itemInCart: false,
    },
];

cartObj = getCookie("cart");
if(cartObj != "") {
    console.log("Load cart.");
    data = JSON.parse(cartObj);
}
// let cartList=[]; 

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
for(i=0;i<data.length;i++){
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
    detailDescription.innerHTML = 'Description:' +data[getId].delievery;
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

// update cookie using all data.
function updateCookie() {
    document.cookie = "cart=" + JSON.stringify(data);
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

// hide your cart page
function hideCart(){
    document.getElementById('main').style.display= "block";
    document.getElementById('cart-container').style.display= "none";
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
var totalSaving;
var input; 
var quantityinput;
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
    console.log(clrNode.childNodes)
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
    // cartList = cartList.filter((list)=>list.id!=itemId);
    updateCartPage();
    updateCookie();
}

