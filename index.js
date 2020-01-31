var isOpen = false;
var price = 0;
var precoTotal = 0;

function showCart() {
    var elementsInCart = document.getElementsByClassName("InCart");
    var itemsCart = document.getElementById("itemsInCart");
    var precoTotalLabel = document.getElementById("precoTotal");
    
    if (isOpen == false) {
        itemsCart.style.display = "block";

        if (elementsInCart.length != 0) {
            var i;
            for (i=0;i<elementsInCart.length;i++) {
                var div = document.createElement("div");
                div.innerHTML = elementsInCart[i].name;

                document.getElementById("itemsInCart").appendChild(div);
            }
        }

        isOpen = true;
    }
    else if (isOpen == true) {
        itemsCart.style.display = "none";
        
        var toDelete = document.getElementById("itemsInCart").childElementCount;
        
        while (document.getElementById("itemsInCart").firstChild) {
            document.getElementById("itemsInCart").removeChild(document.getElementById("itemsInCart").firstChild);
        }
        var h3 = document.createElement("h3");
        h3.innerHTML = "Items in Cart:";
        document.getElementById("itemsInCart").appendChild(h3);

        isOpen = false;
    }

        precoTotalLabel.innerHTML = "Total: " + precoTotal + " &euro;";
}

function addRemCart(obj, preco) {
    if (obj.className == "notInCart") {
        obj.className = "InCart";
        obj.value = "Remove from cart";

        precoTotal = precoTotal + preco;

        alert("Adicionaste " + obj.name + " ao carrinho!");

        showCart();
    }
    else if (obj.className == "InCart") {
        obj.className = "notInCart";
        obj.value = "Add to cart";
        
        precoTotal = precoTotal - preco;

        alert("Removeste " + obj.name + " do carrinho!");

        showCart();
    }
    else alert("An error ocurred!");
}

function confirmRegistration() {
    if ((document.forms["registration"]["pw"].value) == (document.forms["registration"]["pwC"].value))
        alert("Welcome " + document.forms["registration"]["fname"].value + ' "' + document.forms["registration"]["username"].value + '" ' + document.forms["registration"]["lname"].value + " to YoMM!");
    else alert("Passwords don't match! Please try again!");
}

var isLoginOpen = false;
var loginForm = document.getElementById("login")
function openCloseLogin() {
    if (isLoginOpen == false) {
        loginForm.style.display = "flex";
        isLoginOpen = true;
    }
    else if (isLoginOpen == true) {
        loginForm.style.display = "none";
        isLoginOpen = false;
    }
}

function confirmLogin() {
    alert("User not found. Try again!");
}