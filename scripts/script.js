'use strict';
//get all nested stuff out
//check feedback list and adjust accordingly
//check next assignment


(() => {

  function addElement(elementType, elementClass, elementText, href = null) {
    const element = document.createElement(elementType);
    if (elementClass) {
      element.classList.add(elementClass);
    }
    if (elementText) {
      element.textContent = elementText;
    }
    if (href) {
      element.href = href;
    }
    return element;
  }

  /*******************************************
   *         variables and objects           *
   *******************************************/

  const shoppingCart = [];
  const shoppingCartContainer = document.querySelector('.shopping-cart-container');
  //get the container where all the product-container's should be placed in.
  const productsGrid = document.querySelector('.all-products-container');

  /*******************************************
   *               products                  *
   *******************************************/
  products.forEach((product) => {
    //create productContainer and append to grid
    const productContainer = addElement('div', 'product-container', null, null);

    productsGrid.appendChild(productContainer);

    //create productLink and append to productContainer
    const productLink = addElement('a', null, null, `productPage.html`);
    productContainer.appendChild(productLink);


    //inside this attribute we write the html like we would in html.
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
    const buttonContainer = addElement('div', 'button-container', null, null);
    productLink.appendChild(buttonContainer);
    //create addToWishlistButton and append to buttonContainer
    const addToWishlistButton = addElement('button', 'add-to-wishlist', 'Wishlist');
    buttonContainer.appendChild(addToWishlistButton);
    //create addToCartButton and append to buttonContainer
    const addToCartButton = addElement('button', 'add-to-cart', 'IN WINKELMAND');
    buttonContainer.appendChild(addToCartButton);

    productLink.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent the default link behavior
      localStorage.setItem('selectedProduct', JSON.stringify(product)); // Save the clicked product details
      window.location.href = 'productPage.html'; // Navigate to the product page
    });

    //when pressed, check if item already exists
    //!exist > create item
    //exists > increases quantity
    //after if else call renderShoppingList to update result from if else
    addToCartButton.addEventListener('click', (event) => {
      event.preventDefault(); // stop bubbling --> making stuff not click through
      event.stopPropagation();

      const itemExists = shoppingCart.find((item) => item.productName === product.productName); //bool to check if item is already in the list
      if (!itemExists) {
        shoppingCart.push({
          productName: product.productName,
          quantity: 1,
          price: product.price
        });
      } else {
        itemExists.quantity += 1;
      }
      renderShoppingCart();
    }); //end of addToCartButton.event listener

    let wishListed = false;
    addToWishlistButton.addEventListener('click', (event) => {
      event.preventDefault(); // stop bubbling --> making stuff not click through
      event.stopPropagation();

      wishListed = !wishListed;
      if (wishListed) {
        addToWishlistButton.style.backgroundColor = 'black';
      } else {
        addToWishlistButton.style.backgroundColor = 'var(--color-accent)';
      }
    }); //end of addToWishlistButton.event listener
  }); //end products.forEach

  /*******************************************
   *            shopping cart                *
   *******************************************/
  function renderShoppingCart() {
    //reset
    shoppingCartContainer.innerHTML = ''; //clear existing items
    let sumShoppingCartItemsPrice = 0; //reset total price for new item

    shoppingCart.forEach((cartItem) => {
      let totalPriceCartItem = cartItem.price * cartItem.quantity; //
      sumShoppingCartItemsPrice += totalPriceCartItem;

      //create cartItem
      const shoppingCartItem = addElement('div', 'shopping-cart-item-container', null, null);
      shoppingCartContainer.appendChild(shoppingCartItem);

      //add html within the created container
      shoppingCartItem.innerHTML = `<h2 class="product-name">${cartItem.productName}</h2>
          <article class="price-quantity">      
            <h3 class="price">€${cartItem.price}</h3>
            <input type="number" class="quantity-input" value="${cartItem.quantity}" min="1" />
            <h3 class="total-price">€${totalPriceCartItem.toFixed(2)}</h3>
          </article>          
        `; //TODO change class for article accordingly

      const quantityInput = shoppingCartItem.querySelector('.quantity-input');
      quantityInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter'){
          const newQuantity = parseInt(event.target.value, 10) || 1;
          cartItem.quantity = newQuantity;
          const totalPriceCartItem = cartItem.price * newQuantity;
          shoppingCartItem.querySelector('.total-price').textContent = `€${totalPriceCartItem}`;
          renderShoppingCart();
        }
      });

      quantityInput.addEventListener('')

      const removeItemButton = addElement('button', 'remove-from-cart', 'remove');
      shoppingCartItem.appendChild(removeItemButton);

      removeItemButton.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        shoppingCart.splice(shoppingCart.indexOf(cartItem), 1);
        renderShoppingCart();
      });

    }); //end of shoppingCart.forEach

    //final cartItem will be total of the shown list
    const shoppingCartTotal = addElement('div', 'shopping-cart-total', null, null);
    shoppingCartTotal.innerHTML = `${sumShoppingCartItemsPrice.toFixed(2)}`;
    shoppingCartContainer.appendChild(shoppingCartTotal);
  }
})();
