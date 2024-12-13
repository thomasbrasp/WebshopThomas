"use strict";

// Retrieve product data from localStorage
const selectedProduct = localStorage.getItem('selectedProduct');
const selectedBestseller = localStorage.getItem('selectedBestseller');

document.addEventListener('DOMContentLoaded', () => {
    // Check for either selectedBestseller or selectedProduct
    const productData = localStorage.getItem('selectedBestseller') || localStorage.getItem('selectedProduct'); //after using values it gets removed so it should not give a conflict this way

    if (productData) {
        const product = JSON.parse(productData);
        localStorage.clear();
        renderProductPage(product);
    } else {
        console.error('Nope');
    }
});

function renderProductPage(product) {
    const productPageMain = document.querySelector('.product-page-main');
    if (!productPageMain) {
        console.error('Nope');
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
