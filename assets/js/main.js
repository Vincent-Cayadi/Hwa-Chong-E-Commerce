data= [
    {
        id : 0,
        img : '/Website-Backup/assets/images/Jacket.jpg',
        name : 'Aphelion Jacket',
        price : 10,
        save : 0,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 1,
        img : '/Website-Backup/assets/images/Jacket.jpg',
        name : 'Ispark Jacket',
        price : 10,
        save : 0,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 2,
        img : '/Website-Backup/assets/images/Jacket.jpg',
        name : 'Ortus Jacket',
        price : 10,
        save : 0,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 3,
        img : '/Website-Backup/assets/images/Jacket.jpg',
        name : 'ProEd Jacket',
        price : 10,
        save : 0,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 4,
        img : '/Website-Backup/assets/images/Jacket.jpg',
        name : 'Aphelion Jacket',
        price : 10,
        save : 0,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 5,
        img : '/Website-Backup/assets/images/Jacket.jpg',
        name : 'Ispark Jacket',
        price : 10,
        save : 0,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 6,
        img : '/Website-Backup/assets/images/Jacket.jpg',
        name : 'Ortus Jacket',
        price : 10,
        save : 0,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 7,
        img : '/Website-Backup/assets/images/Jacket.jpg',
        name : 'ProEd Jacket',
        price : 10,
        save : 0,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 8,
        img : '/Website-Backup/assets/images/Jacket.jpg',
        name : 'Aphelion Jacket',
        price : 10,
        save : 0,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 9,
        img : '/Website-Backup/assets/images/Jacket.jpg',
        name : 'Ispark Jacket',
        price : 10,
        save : 0,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 10,
        img : '/Website-Backup/assets/images/Jacket.jpg',
        name : 'Ortus Jacket',
        price : 10,
        save : 0,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 11,
        img : '/Website-Backup/assets/images/Jacket.jpg',
        name : 'ProEd Jacket',
        price : 10,
        save : 0,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 12,
        img : '/Website-Backup/assets/images/Jacket.jpg',
        name : 'Aphelion Jacket',
        price : 10,
        save : 0,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    
];

// let cartList=[]; 

cartObj = getCookie("cart");
if(cartObj != "") {
    console.log("Load cart.");
    data = JSON.parse(cartObj);
}


var i;
var detail =document.getElementsByClassName('card-item');
var detailsImg = document.getElementById('details-img')
var detailTitle = document.getElementById('detail-title')
var detailPrice = document.getElementById('detail-price')
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
    if(!data[id].itemInCart){
        // cartList= [...cartList,data[id]];
        alert('Item Added to Your Cart')
    }
    else{
        alert('Your Item is Already There')
    }
    data[id].itemInCart= true
    updateCartPage()
    updateCookie()
}

//back to main page
function refreshPage(){
    detailsPage.style.display = 'none'
}

// hide your cart page
function hideCart(){
    document.getElementById('main').style.display= "block";
    document.getElementById('cart-container').style.display= "none";
}

//display your cart page
function displayCart(){
    document.getElementById('main').style.display= "none";
    document.getElementById('details-page').style.display= "none";
    document.getElementById('cart-container').style.display= "block";
    updateCartPage()
}

var totalAmount;
var totalItems;
var totalSaving;
var input; 
var quantityinput;


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
    var clrNode=document.getElementById('item-body');
        clrNode.innerHTML= '';
        console.log(clrNode.childNodes)
        cartList.map((cart)=>
        {
            var cartCont = document.getElementById('item-body');

            var tempCart = document.createElement('div')
            tempCart.setAttribute('class','cart-list');
            tempCart.setAttribute('id',cart.id);

            var listImg = document.createElement('img');
            listImg.setAttribute('id','list-img');
            listImg.src = cart.img
            tempCart.appendChild(listImg)

            var listPay = document.createElement('h3');
            listPay.setAttribute('class','pay');
            listPay.innerHTML ='$'+ cart.price;
            tempCart.appendChild(listPay);

            var listQuantity = document.createElement('input');
            listQuantity.setAttribute('class','quantity');
            listQuantity.setAttribute('type','number');
            listQuantity.setAttribute('value','1');
            tempCart.appendChild(listQuantity);
            quantityinput = document.getElementsByClassName('quantity').value

            var totalPrice = document.createElement('h3');
            totalPrice.setAttribute('class','totalPrice');
            totalPrice.innerHTML = '$' + cart.price * quantityinput;
            tempCart.appendChild(totalPrice)

            var listName = document.createElement('h3');
            listName.setAttribute('class','list-name');
            listName.innerHTML = cart.name;
            tempCart.appendChild(listName)

            var listTrash = document.createElement('i');
            listTrash.setAttribute('class','fa fa-trash ');
            listTrash.setAttribute('id','remove');
            tempCart.appendChild(listTrash);

            totalAmount = totalAmount + cart.price*quantityinput;
            totalSaving = totalSaving + cart.save;
            totalItems = totalItems + quantityinput;
            cartCont.appendChild(tempCart) 
        })
        document.getElementById('total-amount').innerHTML = 'Total Amount : $ ' + totalAmount;
        document.getElementById('total-items').innerHTML = 'Total Items : ' + totalItems;
        document.getElementById('you-saved').innerHTML = 'You Saved : $ ' + totalSaving;
        document.getElementById('total').style.display= "block";
}
    updateCartPage()
quantityinput.onchange = function(){
    if(quantityinput>0){
    updateCartPage()
    }
    else{
        quantityinput=1
        console.log("changed")
    }
}

//remove item from the cart, and then update cart page and cookie.
function removeFromCart(itemId){
    data[itemId].itemInCart = false;
    // cartList = cartList.filter((list)=>list.id!=itemId);
    updateCartPage();
    updateCookie();
}

document.onload(updateCartPage())
