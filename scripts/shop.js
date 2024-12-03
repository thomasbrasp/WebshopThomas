'use strict';
//CHECKLIST
// winkelmandje:::
// Plaats in het aside-element op de shoppagina jouw winkelwandje.
// Zorg ervoor dat een gebruiker vanuit deze pagina een product kan toevoegen aan het winkelmandje.
// Als een product meermaals wordt toegevoegd, staat dit maar 1 keer in de lijst en met aanduiding van het aantal.
//
// wishlist:::
// Als je op het wishlist-symbool op jouw webshop klikt, wordt dit
// symbool “gekleurd” zodat het duidelijk is dat het product op de
// verlanglijst staat.
//  Als een gebruiker nog eens op het symbool klikt, gaat het product uit
// de verlanglijst.

// const producten = [{voornaam: "Thomas", achternaam: "Keirsen", totaal: 10}, {voornaam: "Indy", achternaam: "Keirsen", totaal: 20}]
// const totaal = producten.reduce((acc, curr) => acc + curr.totaal, 0);
//
// console.log(totaal);

// const producten = [{voornaam: "Thomas", achternaam: "Keirsen", type: "rode kaars", totaal: 10}, {voornaam: "Indy", achternaam: "Keirsen", type: "rode kaars", totaal: 20}, {voornaam: "Indy", achternaam: "Keirsen", type: "gele kaars", totaal: 20}]
// const iets = producten.reduce((acc, curr) => ({...acc, [curr.type]: (acc[curr.type] ?? 0) + curr.totaal}), {});
//
// console.log(iets);

//TODO: productName and productSize/type different element
//TODO remove from cart
//TODO make shopping list sticky
//TODO wishlists
//TODO rename variables
//TODO isolate functions
//TODO read more about event listeners
//TODO design total shopping cart
//TODO: add sub total | VAT | price to pay

//thoughts wrapped
//THOUGHTS (bigger picture)
//add remove 1x button
//add dropdown menu for quantity
//add remove item
//sticky shopping list
//complete feedback form
//make product pages for each product
//on product page make button or form for reviews
//make review.html maybe or add some extra stuff that works
// double check feedback form
// check if color palette from dark mode suits the project
//evaluate if existing JS needs to be rewritten
//if needed script for each function or aspect of interactive environment

//THOUGHTS (related to these features)
//make function product only about product
//get values for shopping list in global variables
//make function shopping list only about shopping list
//think of getting the event listeners outside scope script and shopping list, learn the thoughts and process.
//rename variables --> they are not clear at all
//make more and bigger titles to help thought process
//subtotal --> vat on top --> to pay price
// view cart button ?
// checkout button with empty link
//no accent colors for shopping list items --> grey odd - white even
// total/checkout container accent color but gentle
//make the item name in cart list the link to product page

//BRAINSTORM
//product.foreach, only items
//event listener on add to cart
//event listener on remove from cart
//write logics globally, when everything works narrow down within scopes.
//ignore visuals and style until logics work
//fuck webtechnologie
//wishlisted items


// /*******************************************
//  *         variables and objects           *
//  *******************************************/
//
// (() => {
// const shoppingCart = [];
// const shoppingCartContainer = document.querySelector('.shopping-cart-container');
// //get the container where all the product-container's should be placed in.
// const productsGrid = document.querySelector('.all-script-container');
//
// /*******************************************
//  *               script                  *
//  *******************************************/
// script.forEach((product) => {
//   //create productContainer and append to grid
//   const productContainer = addElement('div', 'product-container', null, null);
//   productsGrid.appendChild(productContainer);
//   //create productLink and append to productContainer
//   const productLink = addElement('a', null, null, `productPage.html`);
//   productContainer.appendChild(productLink);
//
//   //when product is clicked, all values are stored globally
//   productLink.addEventListener('click', (event) => {
//     event.preventDefault();
//     window.selectedProduct = product;
//     window.location.href = `productPage.html`;
//   })
//
//
//   //inside this attribute we write the html like we would in html.
//   productLink.innerHTML = `
//       <div class="img-container">
//         <img alt="${product.imgAlt}" class="product-image-main" src="../${product.imgSrcMain}"/>
//         <img alt="${product.imgAlt}" class="product-image-hover" src="../${product.imgSrcHover}"/>
//         <div class="product-info">
//           <h2 class="product-name">${product.productName}</h2>
//           <h3 class="price">€${product.price}</h3>
//           <p>${product.description}</p>
//         </div>
//       </div>`;
//
//   //create buttonContainer and append to productLink
//   const buttonContainer = addElement('div', 'button-container', null, null);
//   productLink.appendChild(buttonContainer);
//   //create addToWishlistButton and append to buttonContainer
//   const addToWishlistButton = addElement('button', 'add-to-wishlist', 'Wishlist');
//   buttonContainer.appendChild(addToWishlistButton);
//   //create addToCartButton and append to buttonContainer
//   const addToCartButton = addElement('button', 'add-to-cart', 'IN WINKELMAND');
//   buttonContainer.appendChild(addToCartButton);
//
//   //when pressed, check if item already exists
//   //!exist > create item
//   //exists > increases quantity
//   //after if else call renderShoppingList to update result from if else
//   addToCartButton.addEventListener('click', (event) => {
//     event.preventDefault(); // stop bubbling --> making stuff not click through
//
//     const itemExists = shoppingCart.find((item) => item.productName === product.productName); //bool to check if item is already in the list
//     if (!itemExists) {
//       shoppingCart.push({
//         productName: product.productName,
//         quantity: 1,
//         price: product.price
//       });
//     } else {
//       itemExists.quantity += 1;
//     }
//     renderShoppingCart();
//   }); //end of addToCartButton.event listener
//
//   let wishlisted = false;
//   addToWishlistButton.addEventListener('click', (eventTwo) => {
//     eventTwo.preventDefault();
//     wishlisted = !wishlisted;
//     if (wishlisted) {
//       addToWishlistButton.style.backgroundColor = 'black';
//     } else {
//       addToWishlistButton.style.backgroundColor = 'var(--color-accent)';
//     }
//   }); //end of addToWishlistButton.event listener
// }); //end script.forEach
//
// /*******************************************
//  *            shopping cart                *
//  *******************************************/
// function renderShoppingCart() {
//   //reset
//   shoppingCartContainer.innerHTML = ''; //clear existing items
//   let sumShoppingCartItemsPrice = 0; //reset total price for new item
//
//   shoppingCart.forEach((cartItem) => {
//     const totalPriceCartItem = cartItem.price * cartItem.quantity; //
//     sumShoppingCartItemsPrice += totalPriceCartItem;
//
//     //create cartItem
//     const shoppingCartItem = addElement('div', 'shopping-cart-item-container', null, null);
//     //add html within the created container
//     shoppingCartItem.innerHTML = `<h2 class="product-name">${cartItem.productName}</h2>
//           <article class="price-quantity">
//             <h3 class="price">€${cartItem.price}</h3>
//             <h3 class="quantity">x${cartItem.quantity}</h3>
//             <h3 class="total-price">€${totalPriceCartItem.toFixed(2)}</h3>
//           </article>
//         `; //TODO change class for article accordingly
//
//     shoppingCartContainer.appendChild(shoppingCartItem);
//   }); //end of shoppingCart.forEach
//
//   //final cartItem will be total of the shown list
//   const shoppingCartTotal = addElement('div', 'shopping-cart-total', null, null);
//   shoppingCartTotal.innerHTML = `${sumShoppingCartItemsPrice.toFixed(2)}`;
//   shoppingCartContainer.appendChild(shoppingCartTotal);
// }
//
//
//
// })();

