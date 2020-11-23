let storedCarts = JSON.parse(localStorage.getItem("carts"));

let initialProducts = [{
    id: 0,
    productName: "t-shirt",
    productDetails: "white t-shirt",
    productPrice: 13.5,
    productImg: "/Assets/images/t-shirt.png",
    productCategory: "clothes"
},
{
    id: 1,
    productName: "iphone x",
    productDetails: "gray",
    productPrice: 2000,
    productImg: "/Assets/images/iphone x.png",
    productCategory: "phones"
}];

// let carts = initialProducts;
 let carts = storedCarts ? storedCarts : initialProducts;

// Products Container
let productsContainer = document.getElementsByClassName("products-container")[0];

showCarts();


function showCarts(){

    productsContainer.innerHTML = "";

    // Structure:
    //products-container
    //               |> product-div
    //                           |> product--div
    //                                        |> product---div
    //                   Image Container                    |> product-img-div
    //                                                      |               |> product-img
     //                       category Div                  |> product-category-div
    //                                                      |                    |> product-content-span
    //                   Content Container                  |> product-content-div
    //                                             Price Div                    |> product-content--div
    //                                                                          |                    |> product-content-span
    //                                             Add Button Div               |> header-btns--div
    //                                                                                           |> header-btns-a
    //                                                                                                         |> header-btns-a-div
    //                                                                                                                            |> span

    carts.map(function(cartItem, i){

        let product_div = document.createElement('div');
        product_div.className = "product-div";
        productsContainer.appendChild(product_div);


        let product__div = document.createElement('div');
        product__div.className = "product--div";
        product_div.appendChild(product__div);


        let product___div = document.createElement('div');
        product___div.className = "product---div";
        product__div.appendChild(product___div);

        // Product Image
        let product_img_div = document.createElement('div');
        product_img_div.className = "product-img-div";
        product___div.appendChild(product_img_div);

        let product_img = document.createElement('img');
        product_img.className = "product-img";
        let imgSrc = cartItem.productImg;
        product_img.setAttribute("src", imgSrc);
        product_img_div.appendChild(product_img);


        // Product Name Div
        let product_name_div = document.createElement('div');
        product_name_div.className = "product-category-div";
        product___div.appendChild(product_name_div);

        let product_name_span = document.createElement('span');
        product_name_span.className = "product-content-span";
        let product_name__span = cartItem.productName;
        // product_category_span.innerText = "";
        let product_name_span_text = document.createTextNode(product_name__span);
        product_name_span.appendChild(product_name_span_text);
        product_name_div.appendChild(product_name_span);


        // Content Div
        let product_content_div = document.createElement('div');
        product_content_div.className = "product-content-div";
        product___div.appendChild(product_content_div);


        // Price
        let product_content__div = document.createElement('div');
        product_content__div.className = "product-content--div";
        product_content_div.appendChild(product_content__div);

        let product_content_span = document.createElement('span');
        product_content_span.className = "product-content-span";
        let product_content__span = cartItem.productPrice;
        let product_content_span_text = document.createTextNode(product_content__span);
        product_content_span.innerText = "$";
        product_content_span.appendChild(product_content_span_text);
        product_content__div.appendChild(product_content_span);


        // Add button
        let add_button = document.createElement('div');
        add_button.className = "header-btns--div";
        product_content_div.appendChild(add_button);

        let add_button_a = document.createElement('a');
        add_button_a.className = "header-btns-a";
        add_button.appendChild(add_button_a);

        let add_button_a_div = document.createElement('div');
        add_button_a_div.className = "header-btns-a-div";
        add_button_a.appendChild(add_button_a_div);

        let add_button_span = document.createElement('span');
        add_button_span.innerText = "Add";
        add_button_a_div.appendChild(add_button_span);


        // Category Div
        let product_category_div = document.createElement('div');
        product_category_div.className = "product-category-div";
        product___div.appendChild(product_category_div);

        let product_category_span = document.createElement('span');
        // product_category_span.className = "product-category-span";
        let product_category__span = cartItem.productCategory;
        product_category_span.innerText = "Category: ";
        let product_category_span_text = document.createTextNode(product_category__span);
        product_category_span.appendChild(product_category_span_text);
        product_category_div.appendChild(product_category_span);
    });
    

    // Local Storage
    localStorage.setItem("carts", JSON.stringify(carts));
}