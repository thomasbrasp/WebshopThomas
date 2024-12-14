"use strict";

const shopCart = [];
const productsGrid = document.querySelector('.all-products-container');

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

products.forEach(renderProduct);

function addEventListenersToProduct(product, productLink, wishListButton, addToCartButton) {
    productLink.addEventListener('click', (event) => linkToProductPage(event, product));
    addToCartButton.addEventListener('click', (event) => addToCard(event, product));
    wishListButton.addEventListener('click', (event) => wishListToggle(event, wishListButton));
}


function addToCard(event, product) {
    event.preventDefault();
    event.stopPropagation();
    updateCart(product);
    renderShoppingCart();
}
function linkToProductPage(event, product) {
    event.preventDefault();
    localStorage.setItem('selectedProduct', JSON.stringify(product));
    window.location.href = 'productPage.html';
}

function wishListToggle(event, button) {
    event.preventDefault();
    event.stopPropagation();
    if (button.style.backgroundColor === 'black') {
        button.style.backgroundColor = 'var(--color-accent)';
        button.style.color = 'black';
    } else {
        button.style.backgroundColor = 'black';
        button.style.color = 'white';
    }
}


function createProductHTML(product) {
    return `
      <div class="img-container">
        <img alt="${product.imgAlt}" class="product-image-main" src="../${product.imgSrcMain}"/>
        <img alt="${product.imgAlt}" class="product-image-hover" src="../${product.imgSrcHover}"/>
        <div class="product-info">
          <h2 class="product-name">${product.productName}</h2>
          <h3 class="price">€${product.price}</h3>
          <p>${product.description}</p>
        </div>
      </div>`;
}
function createButtonContainer(product, productLink) {
    const buttonContainer = addElement('div', 'button-container');
    productLink.appendChild(buttonContainer);

    const wishListButton = addElement('button', 'add-to-wishlist', 'Wishlist');
    const addToCartButton = addElement('button', 'add-to-cart', 'IN WINKELMAND');
    buttonContainer.appendChild(wishListButton);
    buttonContainer.appendChild(addToCartButton);

    return {wishListButton, addToCartButton};
}
function removeItemFromCart(item) {
    shopCart.splice(shopCart.indexOf(item), 1);
    renderShoppingCart();
}


function updateItemQuantity(event, item) {
    item.quantity = parseInt(event.target.value, 10) || 1;
    item.totalPrice = item.price * item.quantity;
    renderShoppingCart();
}
function updateCart(product) {
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
}


function renderShoppingCart() {
    const shoppingCartItemList = document.querySelector('.shopping-cart-container');
    shoppingCartItemList.classList.remove('hidden');
    shoppingCartItemList.innerHTML = '';
    let sumShopCart = 0;

    const shoppingCartTitle = addElement('p', 'shopping-cart-title', 'Winkelmandje');
        shoppingCartItemList.appendChild(shoppingCartTitle);

    shoppingCartItemList.classList.remove('hidden');

    shopCart.forEach((item) => {
        const cartItem = renderCartItem(item);
        shoppingCartItemList.appendChild(cartItem.element);
        sumShopCart += item.totalPrice;

        cartItem.quantityInput.addEventListener('change', (event) => updateItemQuantity(event, item));
        cartItem.removeItemButton.addEventListener('click', () => removeItemFromCart(item));
    });

    const shoppingCartTotal = addElement('div', 'shopping-cart-total', `€${sumShopCart.toFixed(2)}`);
    shoppingCartItemList.appendChild(shoppingCartTotal);
}
function renderCartItem(item) {
    const shoppingCartItem = addElement('div', 'shopping-cart-item', null);
    shoppingCartItem.innerHTML = `
          <div class="flex-space-between">
            <h2 class="product-name">${item.productName}</h2>
            <button class="remove-from-cart">X</button>
          </div>          
          <article class="flex-space-between">      
            <h3 class="price">€${item.price}</h3>
            <input type="number" class="quantity-input" value="${item.quantity}" min="1" />
            <h3 class="total-price">€${item.totalPrice.toFixed(2)}</h3>
          </article>`;
    return {
        element: shoppingCartItem,
        quantityInput: shoppingCartItem.querySelector('.quantity-input'),
        removeItemButton: shoppingCartItem.querySelector('.remove-from-cart'),
    };
}
function renderProduct(product) {
    const productContainer = addElement('div', 'product-container');
    productsGrid.appendChild(productContainer);

    //productLink -> attribute/link -> entire product-container > buttons will be added inside later (make sure to preventDefault where needed)
    const productLink = addElement('a', null, null);
    productLink.href = 'productPage.html';
    productContainer.appendChild(productLink);
    productLink.innerHTML = createProductHTML(product);

    const buttonContainer = createButtonContainer(product, productLink);
    addEventListenersToProduct(product, productLink, buttonContainer.wishListButton, buttonContainer.addToCartButton);
}

//productpage
