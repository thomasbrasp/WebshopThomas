"use strict";

// Retrieve product data from localStorage
const selectedProduct = localStorage.getItem('selectedProduct');
const selectedBestseller = localStorage.getItem('selectedBestseller');

document.addEventListener('DOMContentLoaded', () => {
    let product;

    // Prioritize selectedBestseller over selectedProduct
    if (selectedBestseller) {
        product = JSON.parse(selectedBestseller); // Use selectedBestseller if available
        console.log('Using selectedBestseller data');
        localStorage.removeItem('selectedBestseller');
    } else if (selectedProduct) {
        product = JSON.parse(selectedProduct); // Use selectedProduct if selectedBestseller is not available
        console.log('Using selectedProduct data');
        localStorage.removeItem('selectedProduct');
    } else {
        console.error('No product data found in localStorage.');
        return; // Exit early if no product data is available
    }

    renderProductPage(product); // Render the product page with the chosen data
});

function renderProductPage(product) {
    const productPageMain = document.querySelector('.product-page-main');
    if (!productPageMain) {
        console.error('Product page container not found!');
        return;
    }

    const productPageContainer = addElement('div', 'product-page-container');

    productPageContainer.innerHTML = `
    <img alt="${product.imgAlt}" class="product-page-img" src="../${product.imgSrcMain}"/>
    <h2 class="product-page-name">${product.productName}</h2>
    <p class="product-page-description" style="width: 500px">${product.longDescription}</p>
    <h3>Productkenmerken:</h3>
    <ul class="product-details">
        <li><strong>Geur: </strong>${product.productDetails.scent}</li>
        <li><strong>Brandtijd: </strong>${product.productDetails.burnTime}</li>
        <li><strong>Wax: </strong>${product.productDetails.wax}</li>
        <li><strong>Materiaal: </strong>${product.productDetails.containerMaterial}</li>
        <li><strong>Kleur: </strong>${product.productDetails.color}</li>
        <li><strong>Allergieën: </strong>${product.productDetails.allergy}</li>
    </ul>
    <p>${product.description}</p>`;

    productPageMain.appendChild(productPageContainer);
}

function addElement(elementType, elementClass) {
    const element = document.createElement(elementType);
    if (elementClass) {
        element.classList.add(elementClass);
    }
    return element;
}
