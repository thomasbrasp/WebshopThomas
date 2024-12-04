"use strict";


const product = JSON.parse(localStorage.getItem('selectedProduct')); // Retrieve product data

document.addEventListener('DOMContentLoaded', () => {
    renderProductPage(product);
});


function renderProductPage(product) {
    const productPageMain = document.querySelector('.product-page-main');
    const productPageContainer = addElement('div', 'product-page-container');

    productPageContainer.innerHTML =`
    <img alt=${product.imgAlt} class="product-page-img" src="../${product.imgSrcMain}"/>
    <h2 class="product-page-name">${product.productName}</h2>
    <p class="product-page-description" style="width: 500px">${product.longDescription}</p>
    <h3>Productkenmerken:</h3>
    <ul class="product-details">
        <li><strong>Geur: </strong>${product.productDetails.scent}</li>
        <li><strong>Brandtijd: </strong>${product.productDetails.burnTime}</li>
        <li><strong>Wax: </strong>${product.productDetails.wax}</li>
        <li><strong>Materiaal: </strong>${product.productDetails.containerMaterial}</li>
        <li><strong>Kleur: </strong>${product.productDetails.color}</li>
        <li><strong>Allergien: </strong>${product.productDetails.allergy}</li>
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

