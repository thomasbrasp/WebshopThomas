"use strict";
// • toon de klanten op een passende manier
// • plaats jouw klanten in een flex-container
// • jouw klant heeft minimaal:
// • aanspreektitel
// • voornaam
// • achternaam
// • land
// • afbeelding

const createElement = (elementtype, elementClass, elementText) => {
    const element = document.createElement(elementtype);
    if (elementClass) {
        element.classList.add(elementClass);
    }
    if (elementText) {
        element.textContent = elementText;
    }
    return element;
};

const clientsjson = `
[
    {
        "title": "Miss",
        "first": "Jennie",
        "last": "Nichols",
        "country": "United States",
        "largeImg": "https://randomuser.me/api/portraits/women/67.jpg"
    },
    {
        "title": "Mr",
        "first": "John",
        "last": "Doe",
        "country": "Canada",
        "largeImg": "https://randomuser.me/api/portraits/men/76.jpg"
    },
    {
        "title": "Ms",
        "first": "Jane",
        "last": "Smith",
        "country": "United Kingdom",
        "largeImg": "https://randomuser.me/api/portraits/women/77.jpg"
    },
    {
        "title": "Dr",
        "first": "Emily",
        "last": "Johnson",
        "country": "Australia",
        "largeImg": "https://randomuser.me/api/portraits/women/78.jpg"
    },
    {
        "title": "Mr",
        "first": "Robert",
        "last": "Brown",
        "country": "New Zealand",
        "largeImg": "https://randomuser.me/api/portraits/men/79.jpg"
    }
]
`;
let clients = JSON.parse(clientsjson);

const displayClients = () => {
    const grandparent = document.querySelector('.grandparent');

    clients.forEach(client => {
        // Create parent container for each client
        const parent = createElement('div', 'parent');


        // Create and append image
        const imageElement = createElement('img', 'child');
        imageElement.src = client.largeImg;
        imageElement.alt = `${client.first} ${client.last}`;


        // Create details overlay
        const details = createElement('div', 'details');

        details.innerHTML = `
            <p><strong>${client.title}</strong>${client.first}${client.last}</p>
            <p>${client.country}</p>            
        `;

        // Hover effect to show details
        parent.addEventListener('mouseenter', () => {
            details.style.opacity = '1';
        });
        parent.addEventListener('mouseleave', () => {
            details.style.opacity = '0';
        });

        // Append elements to parent
        parent.appendChild(imageElement);
        parent.appendChild(details);

        // Append parent to grandparent container
        grandparent.appendChild(parent);
    });
};

// Initialize the client display
document.addEventListener('DOMContentLoaded', () => {
    displayClients();
});
