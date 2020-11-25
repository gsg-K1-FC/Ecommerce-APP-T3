let storedCarts = JSON.parse(localStorage.getItem("carts"));

let intialCarts = [{
    id: 0,
    productName: "t-shirt",
    productDetails: "",
    productPrice: 30,
    productImg: "https://images.unsplash.com/photo-1605723802236-aef70d35a2ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",

    productCategory: "clothes"
}
    , {
        id: 5,
    productName: "shirt",
    productDetails: "",
    productPrice: 40,
    productImg: "https://images.unsplash.com/photo-1605723802236-aef70d35a2ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
    productCategory: "clothes"
}];


let carts = storedCarts ? storedCarts : intialCarts;


//container div for all items
let allProducts = document.getElementsByClassName("allProducts")[0];

let totalPrice = 0;

showCarts();

function showCarts() {
    allProducts.innerHTML = "";
    carts.forEach((cartItem , i)=> {

        //creat a dive for every item
        let productDiv = document.createElement("div");
        productDiv.className = "product";

        //for the item image
        let cardImg = document.createElement("img");
        cardImg.src = cartItem.productImg;
        productDiv.appendChild(cardImg);
        cardImg.className = "cardImg";

        //prouduct name
        let productName = document.createElement("span");
        productName.textContent = cartItem.productName;
        productName.className = "productName";
        productDiv.appendChild(productName);

        //product category
        let productCategory = document.createElement("span");
        productCategory.textContent = cartItem.productCategory;
        productCategory.className = "productCategory";
        productDiv.appendChild(productCategory);

        //creat continer dive for the delete button and the price
        let priceAndDeleteContainer = document.createElement("div");
        productDiv.appendChild(priceAndDeleteContainer);
        priceAndDeleteContainer.className = "priceAndDelete";

        //product price
        let productPrice = document.createElement("h3");
        productPrice.textContent = cartItem.productPrice;
        productPrice.className = "productPrice";
        priceAndDeleteContainer.appendChild(productPrice);

        //delete button
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "deleteButton";
        priceAndDeleteContainer.appendChild(deleteButton);

        totalPrice += cartItem.productPrice;

        allProducts.appendChild(productDiv);



        //delete items
        deleteButton.addEventListener("click", function () {
      
            let confirmationResults = confirm(
                "Are you sure you want to delete this product?"
            );
            if (confirmationResults) {
    
                carts.splice(i, 1);
                showCarts();
                
            }
           
        });

    });
    localStorage.setItem("carts", JSON.stringify(carts));
}

//store the total price in a span and give a class name 
let total = document.getElementsByClassName("total");
let price = document.createElement("span");
price.textContent = "Total price : " + totalPrice;
total.appendChild(price);



