let storedProduct = JSON.parse(localStorage.getItem("productForm"));
console.log(storedProduct);
let products = storedProduct ? storedProduct : [];
let productForm = {

}
showProduct()

function showProduct() {
    products.map(function(product) {
        let allProducts = document.querySelector(".allProducts");

        let nameLabel = document.createElement("span");
        let priceLabel = document.createElement("h2");
        let detailsLabel = document.createElement("h2");
        let categoryLabel = document.createElement("h2");
        let Image = document.createElement("img");
        let productContainer = document.createElement("div");
        let data = document.createElement("div");
        let sellerBtn = document.createElement("div");
        let deleteBtn = document.createElement("button");
        let editBtn = document.createElement("button");
        productContainer.className = "product";
        data.className = "data";
        nameLabel.className = "name";
        deleteBtn.innerText = "Delete";
        editBtn.innerText = "Edit";
        sellerBtn.className = "seller-btn"




        nameLabel.innerText = product.productName;
        priceLabel.innerText = product.productPrice;
        detailsLabel.innerText = product.productDetails;
        categoryLabel.innerText = product.productCategory;
        Image.src = product.productImg;


        allProducts.appendChild(productContainer);

        productContainer.appendChild(Image);
        productContainer.appendChild(nameLabel);
        productContainer.appendChild(data);
        productContainer.appendChild(sellerBtn);
        data.appendChild(priceLabel);
        data.appendChild(detailsLabel);
        data.appendChild(categoryLabel);
        sellerBtn.appendChild(deleteBtn);
        sellerBtn.appendChild(editBtn);
    })
}
let submitForm = document.querySelector(".seller-form");

submitForm.addEventListener('submit', function(event) {
    event.preventDefault()

    let name = document.getElementById("input-name");
    productForm.productName = name.value;

    let detail = document.getElementById("input-detail");
    productForm.productDetails = detail.value;

    let price = document.getElementById("input-price");
    productForm.productPrice = price.value;

    let image = document.getElementById("input-image");
    productForm.productImg = image.value;

    let category = document.getElementById("input-category");
    productForm.productCategory = category.value;
    products.push(productForm)
    console.log("productForm", productForm)
    localStorage.setItem("productForm", JSON.stringify(products));
    showProduct()


});