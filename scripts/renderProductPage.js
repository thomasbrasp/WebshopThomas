"use strict";


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

document.addEventListener('DOMContentLoaded', () => {
    renderProductPage();
});

function renderProductPage() {

    const product = JSON.parse(localStorage.getItem('selectedProduct')); // Retrieve product data

    const productPageMain = document.querySelector('.product-page-main');
    const productPageContainer = addElement('div', 'product-page-container', null);
    productPageMain.appendChild(productPageContainer);


    productPageContainer.innerHTML = `
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
    <p>Nog wat tekst</p>`;
}

renderShoppingCart();
