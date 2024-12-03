"use strict";
//        productDetails: {
//             scent:
//             burnTime:
//             wax:
//             containerMaterial:
//             color:
//             allergy:

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
document.addEventListener('DOMContentLoaded', () => {
    renderProductPage();
});

function renderProductPage() {

    const product = JSON.parse(localStorage.getItem('selectedProduct')); // Retrieve product data

    const productPageMain = document.querySelector('.product-page-main');
    const productPageContainer = addElement('div', 'product-page-container', null, null);
    productPageMain.appendChild(productPageContainer);


    productPageContainer.innerHTML = `
    <img alt="Cuban Tobacco" class="product-page-img" src="../images/Products/IMG_2400.JPG"/>
    <h2 class="product-page-name">${product.productName}</h2>
    <p class="product-page-description">Breng de rijke en warme geur van Cubaanse tabak in je huis met onze exclusieve Cuban Tobacco geurkaars. Deze
            handgemaakte kaars combineert diepe, aardse tonen van gerijpte tabaksbladeren met een vleugje zoete vanille
            en subtiel hout. Het resultaat? Een rustgevende en verfijnde geurervaring die elke ruimte vult met een kalme
            ambiance.</p>
    <h3>Productkenmerken:</h3>
    <ul class="product-details">
        <li><strong>Geur: </strong>Cubaanse tabak met vanille en houttonen</li>
        <li><strong>Brandtijd: </strong>Cubaanse tabak met vanille en houttonen</li>
        <li><strong>Wax: </strong>Cubaanse tabak met vanille en houttonen</li>
        <li><strong>Materiaal: </strong>Cubaanse tabak met vanille en houttonen</li>
        <li><strong>Kleur: </strong>Cubaanse tabak met vanille en houttonen</li>
        <li><strong>Allergien: </strong>Cubaanse tabak met vanille en houttonen</li>
    </ul>
    <p>Nog wat tekst</p>`;
}
