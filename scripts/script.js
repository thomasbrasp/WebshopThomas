'use strict';
//get all nested stuff out
//check feedback list and adjust accordingly
//check next assignment

function addElement(elementType, elementClass, elementText) {
    const element = document.createElement(elementType);
    if (elementClass) {
        element.classList.add(elementClass);
    }
    if (elementText) {
        element.textContent = elementText;
    }
    return element;
}

/*******************************************
 *         variables and objects           *
 *******************************************/

const shopCart = [];
//get the container where all the product-container's should be placed in.
const productsGrid = document.querySelector('.all-products-container');


/*******************************************
 *               products                  *
 *******************************************/
products.forEach((product) => {
    const productContainer = addElement('div', 'product-container', null);
    productsGrid.appendChild(productContainer);

    //productLink -> attribute/link -> entire product-container > buttons will be added inside later (make sure to preventDefault where needed)
    const productLink = addElement('a', null, null);
    productLink.href = 'productPage.html';
    productContainer.appendChild(productLink);

    productLink.innerHTML = `
      <div class="img-container">
        <img alt="${product.imgAlt}" class="product-image-main" src="../${product.imgSrcMain}"/>
        <img alt="${product.imgAlt}" class="product-image-hover" src="../${product.imgSrcHover}"/>
        <div class="product-info">
          <h2 class="product-name">${product.productName}</h2>
          <h3 class="price">€${product.price}</h3>
          <p>${product.description}</p>
        </div>
      </div>`;

    //create buttonContainer and append to productLink
    const buttonContainer = addElement('div', 'button-container', null);
    productLink.appendChild(buttonContainer);
    //create addToWishlistButton and append to buttonContainer
    const wishListButton = addElement('button', 'add-to-wishlist', 'Wishlist');

    buttonContainer.appendChild(wishListButton);
    //create addToCartButton and append to buttonContainer
    const addToCartButton = addElement('button', 'add-to-cart', 'IN WINKELMAND');
    buttonContainer.appendChild(addToCartButton);

    productLink.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default link behavior
        localStorage.setItem('selectedProduct', JSON.stringify(product)); // Save the clicked product details
        window.location.href = 'productPage.html'; // Navigate to the product page
    });

    //when pressed, check if item already exists
    addToCartButton.addEventListener('click', (event) => {
        event.preventDefault(); // stop bubbling --> making stuff not click through
        event.stopPropagation();

        const item = shopCart.find((item) => item.productName === product.productName); //bool to check if item is already in the list
        if (!item) {
            shopCart.push({
                productName: product.productName,
                quantity: 1,
                price: product.price,
                totalPrice: product.price,
            });
        } else {
            item.quantity += 1;
            item.totalPrice = item.price * item.quantity;
        }
        renderShoppingCart();
    }); //end of addToCartButton.event listener

    let wishListed = false;

    wishListButton.addEventListener('click', (event) => {
        event.preventDefault(); // stop bubbling --> making stuff not click through
        event.stopPropagation();

        wishListed = !wishListed;
        wishListed
            ? wishListButton.style.backgroundColor = 'black'
            : wishListButton.style.backgroundColor = 'var(--color-accent)';
    }); //end of addToWishlistButton.event listener
}); //end products.forEach


/*******************************************
 *            shopping cart                *
 *******************************************/
function renderShoppingCart() {

    const shoppingCartItemList = document.querySelector('.shopping-cart-container');
    shoppingCartItemList.innerHTML = ''; //clear existing items

    let sumShopCart = 0;
    shopCart.forEach((item) => {

        /*******************************************
         *          item shopping cart             *
         *******************************************/
        const shoppingCartItem = addElement('div', 'shopping-cart-item', null);
        shoppingCartItemList.appendChild(shoppingCartItem);

        shoppingCartItem.innerHTML = `
          <div class="flex-space-between">
          <h2 class="product-name">${item.productName}</h2>
          <input type="number" class="quantity-input" value="${item.quantity}" min="1" />          
          </div>
          <button class="remove-from-cart">remove</button>
          <article class="flex-space-between">      
            <h3 class="price">€${item.price}</h3>
            
            <h3 class="total-price">€${item.totalPrice.toFixed(2)}</h3>
          </article>          
        `; //TODO change class for article accordingly
        //TODO when changing names or classes, change css also

        /*******************************************
         *           Quantity Updates              *
         *******************************************/
        function updateQuantity(event){
            item.quantity = parseInt(event.target.value, 10) || 1;
            item.totalPrice = item.price * item.quantity;
            shoppingCartItem.querySelector('.total-price').textContent = `€${sumShopCart.toFixed(2)}`;

            renderShoppingCart()

        }
        sumShopCart += item.totalPrice;
        const quantityInput = shoppingCartItem.querySelector('.quantity-input');
        quantityInput.addEventListener('change', updateQuantity);


        // const removeItemButton = addElement('button', 'remove-from-cart', 'remove');
        // shoppingCartItem.appendChild(removeItemButton);
        const removeItemButton = document.querySelector('.remove-from-cart');
        removeItemButton.addEventListener('click', (event) => {
            event.preventDefault();
            shopCart.splice(shopCart.indexOf(item), 1);
            renderShoppingCart();
        });

    }); //end of shopCart.forEach

    const shoppingCartTotal = addElement('div', 'shopping-cart-total', null);
    shoppingCartTotal.innerHTML = `${sumShopCart.toFixed(2)}`;
    shoppingCartItemList.appendChild(shoppingCartTotal);
} //end renderingShoppingCart()

