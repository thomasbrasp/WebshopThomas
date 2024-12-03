'use strict';
//get all nested stuff out
//check feedback list and adjust accordingly
//check next assignment


(() => {
  const products = [
    {
      productName: 'Cuban Tobacco - 30cl',
      price: 11.11,
      imgSrcMain: 'images/Products/IMG_2398.JPG',
      imgSrcHover: 'images/Products/IMG_2400.JPG',
      imgAlt: 'Cuban Tobacco',
      href: 'productPage.html',
      description: 'Een luxe geur van rijke tabak en traditie. Perfect voor een warme, verfijnde sfeer.',
      productDetails: {
        scent: 'Citrus',
        burnTime: 10,
        wax: 'RCX',
        containerMaterial: 'glass',
        color: 'white',
        allergy: 'none'
      }
    },
    {
      productName: 'Sandalwood - 30cl',
      price: 22.22,
      imgSrcMain: 'images/Products/IMG_2401.JPG',
      imgSrcHover: 'images/Products/IMG_2405.JPG',
      imgAlt: 'Sandalwood',
      href: 'Sandalwood.html',
      description: 'Een warme, houtachtige geur die sereniteit brengt. Ideaal voor een rustgevende ambiance.',
      productDetails: {
        scent: 'Sandelhout',
        burnTime: 35,
        wax: 'Sojawas',
        containerMaterial: 'Glas',
        color: 'Beige',
        allergy: 'Kan sporen van noten bevatten'
      }
    },
    {
      productName: 'Lemongrass - 40cl',
      price: 33.33,
      imgSrcMain: 'images/Products/IMG_2402.JPG',
      imgSrcHover: 'images/Products/IMG_2404.JPG',
      imgAlt: 'Lemongrass',
      href: 'Lemongrass.html',
      description: 'Een frisse, citrusachtige geur die energie geeft. Perfect om elke ruimte op te frissen.',
      productDetails: {
        scent: 'Citroengras',
        burnTime: 50,
        wax: 'Sojawas',
        containerMaterial: 'Keramiek',
        color: 'Groen',
        allergy: 'Geen'
      }
    },
    {
      productName: 'Clean Cotton - 30cl',
      price: 44.44,
      imgSrcMain: 'images/Products/IMG_2387.JPG',
      imgSrcHover: 'images/Products/IMG_2416.JPG',
      imgAlt: 'Clean Cotton',
      href: 'CleanCotton.html',
      description: 'Een frisse geur van schoon linnen. Brengt een gevoel van puurheid en kalmte.',
      productDetails: {
        scent: 'Schoon Linnen',
        burnTime: 40,
        wax: 'Koolzaadwas',
        containerMaterial: 'Glas',
        color: 'Wit',
        allergy: 'Geen'
      }
    },
    {
      productName: 'Lavender - 50cl',
      price: 55.55,
      imgSrcMain: 'images/Products/IMG_2425.JPG',
      imgSrcHover: 'images/Products/IMG_2428.JPG',
      imgAlt: 'Lavender',
      href: 'Lavender.html',
      description: 'Een klassieke bloemengeur die ontspanning biedt. Ideaal voor rust en zelfzorg.',
      productDetails: {
        scent: 'Lavendel',
        burnTime: 60,
        wax: 'Bijenwas',
        containerMaterial: 'Glas',
        color: 'Paars',
        allergy: 'Kan pollen bevatten'
      }
    },
    {
      productName: 'Vanilla Bean - 35cl',
      price: 66.66,
      imgSrcMain: 'images/Products/IMG_2458.JPG',
      imgSrcHover: 'images/Products/IMG_2462.JPG',
      imgAlt: 'Vanilla Bean',
      href: 'VanillaBean.html',
      description: 'Een warme, romige geur die comfort brengt. Perfect voor een gezellige sfeer.',
      productDetails: {
        scent: 'Vanille',
        burnTime: 45,
        wax: 'Koolzaadwas',
        containerMaterial: 'Keramiek',
        color: 'Crème',
        allergy: 'Geen'
      }
    },
    {
      productName: 'Ocean Breeze - 40cl',
      price: 77.77,
      imgSrcMain: 'images/Products/IMG_2457.JPG',
      imgSrcHover: 'images/Products/IMG_2461.JPG',
      imgAlt: 'Ocean Breeze',
      href: 'OceanBreeze.html',
      description: 'De frisse geur van de zee in huis. Ideaal voor een kalme, ontspannende ambiance.',
      productDetails: {
        scent: 'Zee Bries',
        burnTime: 50,
        wax: 'Sojawas',
        containerMaterial: 'Glas',
        color: 'Blauw',
        allergy: 'Geen'
      }
    },
    {
      productName: 'Cedar Wood - 45cl',
      price: 88.88,
      imgSrcMain: 'images/Products/IMG_2407.JPG',
      imgSrcHover: 'images/Products/IMG_2415.JPG',
      imgAlt: 'Cedar Wood',
      href: 'CedarWood.html',
      description: 'Een rijke, aardse geur met houtachtige tonen. Perfect om rust en comfort te brengen.',
      productDetails: {
        scent: 'Cederhout',
        burnTime: 55,
        wax: 'Koolzaadwas',
        containerMaterial: 'Hout',
        color: 'Bruin',
        allergy: 'Geen'
      }
    },
    {
      productName: 'Eucalyptus Mint - 30cl',
      price: 99.99,
      imgSrcMain: 'images/Products/IMG_2426.JPG',
      imgSrcHover: 'images/Products/IMG_2427.JPG',
      imgAlt: 'Eucalyptus Mint',
      href: 'EucalyptusMint.html',
      description: 'Een frisse mix van munt en eucalyptus. Zuivert de lucht en ontspant de zintuigen.',
      productDetails: {
        scent: 'Eucalyptus en Munt',
        burnTime: 40,
        wax: 'Sojawas',
        containerMaterial: 'Glas',
        color: 'Groen',
        allergy: 'Geen'
      }
    },
    {
      productName: 'Pine Forest - 40cl',
      price: 100.0,
      imgSrcMain: 'images/Products/IMG_2401.JPG',
      imgSrcHover: 'images/Products/IMG_2405.JPG',
      imgAlt: 'Pine Forest',
      href: 'PineForest.html',
      description: 'De geur van een serene dennenbos. Ideaal voor een winterse, gezellige ambiance.',
      productDetails: {
        scent: 'Dennenhout',
        burnTime: 50,
        wax: 'Sojawas',
        containerMaterial: 'Keramiek',
        color: 'Donkergroen',
        allergy: 'Geen'
      }
    },
    {
      productName: 'Midnight Jasmine - 35cl',
      price: 49.99,
      imgSrcMain: 'images/Products/IMG_2401.JPG',
      imgSrcHover: 'images/Products/IMG_2405.JPG',
      imgAlt: 'Midnight Jasmine',
      href: 'MidnightJasmine.html',
      description: 'Een bloemige geur met hints van oranjebloesem. Zorgt voor een romantische sfeer.',
      productDetails: {
        scent: 'Jasmijn',
        burnTime: 45,
        wax: 'Bijenwas',
        containerMaterial: 'Glas',
        color: 'Lichtgeel',
        allergy: 'Kan pollen bevatten'
      }
    },
    {
      productName: 'Cinnamon Spice - 30cl',
      price: 39.99,
      imgSrcMain: 'images/Products/IMG_2401.JPG',
      imgSrcHover: 'images/Products/IMG_2405.JPG',
      imgAlt: 'Cinnamon Spice',
      href: 'CinnamonSpice.html',
      description: 'Warme tonen van kaneel en kruiden. Perfect voor gezellige en feestelijke momenten.',
      productDetails: {
        scent: 'Kaneel',
        burnTime: 40,
        wax: 'Sojawas',
        containerMaterial: 'Keramiek',
        color: 'Roodbruin',
        allergy: 'Geen'
      }
    }
  ]; //12 script

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
