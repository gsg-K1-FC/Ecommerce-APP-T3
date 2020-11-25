let storedCarts = JSON.parse(localStorage.getItem("carts"));




let carts = storedCarts ? storedCarts : [];


//container div for all items
let allProducts = document.getElementsByClassName("allProducts")[0];
let container = document.getElementsByClassName("container")[0];

let totalprice = document.getElementById("totalPrice");
let total = 0;
showCarts();

function showCarts() {
    allProducts.innerHTML = "";
    totalprice.textContent = "Total price : " + 0;

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


   //product category
   let productCategory = document.createElement("span");
   productCategory.textContent = cartItem.productCategory;
   productCategory.className = "productCategory";
   productDiv.appendChild(productCategory);

  

        allProducts.appendChild(productDiv);



        //delete items
        deleteButton.addEventListener("click", function () {
      
            let confirmationResults = confirm(
                "Are you sure you want to delete this product?"
            );
            if (confirmationResults) {
    
                carts.splice(i, 1);
                localStorage.setItem("carts", JSON.stringify(carts));
                showCarts(); 
            }
           
        });

    });
    total = carts.reduce(function(accumulator, currentValue) {
 
        return accumulator + currentValue.productPrice;
    
      },0)
      
 
      totalprice.textContent = "Total price : " + total;
 
    localStorage.setItem("carts", JSON.stringify(carts));
}

container.appendChild(allProducts);



