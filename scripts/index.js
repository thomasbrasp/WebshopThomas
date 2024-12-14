"use strict";
// TODO: add long product description
// TODO: generate couple paragraphs with filler tekst

//pagina met klanten moet niet in nav
//admin only pagina maar er moet geen wachtwoord op staan
//layout detig maken voor de ndex pagina
//layout in orde brengen voor pagina met alle klanten
//nakijken wat we geleerd hebben en dat toepassen op de elementen die ik al had toegevoegd
//producten ook in json ztten
//deel

const products = [
    {
        productName: 'Cuban Tobacco',
        size: 30,
        price: 11.11,
        imgSrcMain: 'images/Products/IMG_2398.JPG',
        imgSrcHover: 'images/Products/IMG_2400.JPG',
        imgAlt: 'Cuban Tobacco',
        href: 'productPage.html',
        description: 'Een luxe geur van rijke tabak en traditie. Perfect voor een warme, verfijnde sfeer.',
        longDescription: "Ontdek de tijdloze elegantie van Cuban Tobacco, een geur die de rijke tradities van handgerolde sigaren en verfijning oproept. De warme, aardse tonen van tabak worden subtiel versterkt door een hint van citrus, wat zorgt voor een harmonieuze balans tussen kracht en frisheid. Deze kaars is met zorg vervaardigd met een unieke mix van RCX-was, waardoor een schone en langdurige brandtijd wordt gegarandeerd. Of je nu ontspant met een goed boek of een gezellige avond met vrienden doorbrengt, Cuban Tobacco voegt een vleugje luxe en sfeer toe aan elke gelegenheid.",
        productDetails: {
            scent: 'Citrus',
            burnTime: 10,
            wax: 'RCX',
            containerMaterial: 'glass',
            color: 'white',
            allergy: 'none',

        }
    },
    {
        productName: 'Sandalwood',
        size: 30,
        price: 22.22,
        imgSrcMain: 'images/Products/IMG_2424.JPG',
        imgSrcHover: 'images/Products/IMG_2429.JPG',
        imgAlt: 'Sandalwood',
        href: 'Sandalwood.html',
        description: 'Een warme, houtachtige geur die sereniteit brengt. Ideaal voor een rust.',
        longDescription: "Laat je meevoeren naar serene bossen met de warme, houtachtige geur van Sandalwood. Deze kaars brengt rust en evenwicht in elke ruimte met zijn diep aardse en zachte tonen. Vervaardigd met natuurlijke sojawas en een elegante glazen houder, is het een perfecte keuze voor meditatie of ontspanning. De langdurige brandtijd maakt het ideaal voor zowel korte momenten van zelfzorg als lange, rustgevende avonden.",
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
        productName: 'Lemongrass',
        size: 40,
        price: 33.33,
        imgSrcMain: 'images/Products/IMG_2457.JPG',
        imgSrcHover: 'images/Products/IMG_2461.JPG',
        imgAlt: 'Lemongrass',
        href: 'Lemongrass.html',
        description: 'Een frisse, citrusachtige geur die energie geeft. Perfect om elke ruimte op te frissen.',
        longDescription: "Breng energie en frisheid in je huis met de verkwikkende geur van Lemongrass. Deze kaars combineert een heldere citrusgeur met subtiele groene ondertonen, waardoor een revitaliserende sfeer ontstaat. Met een indrukwekkende brandtijd en duurzaam geproduceerde sojawas in een stijlvolle keramische houder, is Lemongrass perfect om je ruimte op te frissen na een drukke dag.",
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
        productName: 'Clean Cotton',
        size: 30,
        price: 44.44,
        imgSrcMain: 'images/Products/IMG_2407.JPG',
        imgSrcHover: 'images/Products/IMG_2415.JPG',
        imgAlt: 'Clean Cotton',
        href: 'CleanCotton.html',
        description: 'Een frisse geur van schoon linnen. Brengt een gevoel van puurheid en kalmte.',
        longDescription: "Ervaar de pure frisheid van schoon linnen met Clean Cotton. Deze geur roept beelden op van een zomerse bries en pas gewassen lakens die in de zon drogen. De kaars, gegoten in koolzaadwas en gepresenteerd in een elegant glazen potje, creëert een kalme en serene sfeer in elke ruimte. Ideaal voor momenten waarop je simpelweg wilt genieten van een gevoel van reinheid en comfort.",
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
        productName: 'Lavender',
        size: 50,
        price: 55.55,
        imgSrcMain: 'images/Products/IMG_2401.JPG',
        imgSrcHover: 'images/Products/IMG_2405.JPG',
        imgAlt: 'Lavender',
        href: 'Lavender.html',
        description: 'Een klassieke bloemengeur die ontspanning biedt. Ideaal voor rust en zelfzorg.',
        longDescription: "Laat je omarmen door de rustgevende geur van Lavender, een klassieke favoriet die ontspanning en sereniteit biedt. De zachte bloemige tonen vullen je ruimte met een gevoel van welzijn, ideaal voor een rustige avond of een moment van zelfzorg. Gemaakt van natuurlijke bijenwas en verpakt in een verfijnde glazen houder, is Lavender de perfecte keuze voor wie balans en rust zoekt.",
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
        productName: 'Vanilla Bean',
        size: 60,
        price: 66.66,
        imgSrcMain: 'images/Products/IMG_2425.JPG',
        imgSrcHover: 'images/Products/IMG_2428.JPG',
        imgAlt: 'Vanilla Bean',
        href: 'VanillaBean.html',
        description: 'Een warme, romige geur die comfort brengt. Perfect voor een gezellige sfeer.',
        longDescription: "Geniet van de rijke en warme geur van Vanilla Bean, een uitnodigende mix die comfort en gezelligheid uitstraalt. De romige vanilletonen zorgen voor een ontspannen sfeer, perfect voor knusse avonden. Deze kaars, vervaardigd met koolzaadwas en gepresenteerd in een stijlvolle keramische houder, brengt een vleugje luxe en warmte in je huis.",
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
        productName: 'Ocean Breeze',
        size: 40,
        price: 77.77,
        imgSrcMain: 'images/Products/IMG_2459.JPG',
        imgSrcHover: 'images/Products/IMG_2460.JPG',
        imgAlt: 'Ocean Breeze',
        href: 'OceanBreeze.html',
        description: 'De frisse geur van de zee in huis. Ideaal voor een kalme, ontspannende ambiance.',
        longDescription: "Breng de frisheid van de zee naar je huis met Ocean Breeze. Deze geur roept de ontspannende sfeer op van golven die zachtjes het strand raken. De kaars, gegoten in duurzame sojawas en verpakt in een verfijnde glazen houder, biedt een lange brandtijd en een vleugje kustmagie. Ideaal voor wie verlangt naar een rustgevende, kalme ambiance.",
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
        productName: 'Cedar Wood',
        size: 45,
        price: 88.88,
        imgSrcMain: 'images/Products/IMG_2413.JPG',
        imgSrcHover: 'images/Products/IMG_2414.JPG',
        imgAlt: 'Cedar Wood',
        href: 'CedarWood.html',
        description: 'Een rijke, aardse geur met houtachtige tonen. Perfect om rust te brengen.',
        longDescription: "Ervaar de rijke, aardse geur van Cedar Wood, een uitnodigende mix van houtachtige tonen en subtiele warmte. Deze kaars is ideaal om rust en comfort in je ruimte te brengen. Verpakt in een elegante houten houder en gegoten met koolzaadwas, biedt Cedar Wood een langdurige, schone verbranding en een verfijnde toevoeging aan je interieur.",
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
        productName: 'Eucalyptus Mint',
        size: 35,
        price: 99.99,
        imgSrcMain: 'images/Products/IMG_2402.JPG',
        imgSrcHover: 'images/Products/IMG_2404.JPG',
        imgAlt: 'Eucalyptus Mint',
        href: 'EucalyptusMint.html',
        description: 'Een frisse mix van munt en eucalyptus. Zuivert de lucht en ontspant de zintuigen.',
        longDescription: "Verfris je zintuigen met de stimulerende geur van Eucalyptus Mint. Deze kaars combineert de verkwikkende kracht van eucalyptus met de koele frisheid van munt, wat zorgt voor een zuiverende en kalmerende ambiance. Gemaakt van natuurlijke sojawas en verpakt in een stijlvolle glazen houder, is dit de perfecte keuze voor ontspanning na een drukke dag.",
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
        productName: 'Pine Forest',
        size: 40,
        price: 100.0,
        imgSrcMain: 'images/Products/IMG_2426.JPG',
        imgSrcHover: 'images/Products/IMG_2427.JPG',
        imgAlt: 'Pine Forest',
        href: 'PineForest.html',
        description: 'De geur van een serene dennenbos. Ideaal voor een winterse, gezellige ambiance.',
        longDescription: "Breng de rust van een dennenbos in je huis met Pine Forest. De authentieke geur van dennennaalden en houtachtige tonen creëert een warme, winterse sfeer. Gegoten in sojawas en gepresenteerd in een elegante keramische houder, is deze kaars ideaal voor gezellige avonden en feestelijke momenten.",
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
        productName: 'Midnight Jasmine',
        size: 35,
        price: 49.99,
        imgSrcMain: 'images/Products/IMG_2458.JPG',
        imgSrcHover: 'images/Products/IMG_2462.JPG',
        imgAlt: 'Midnight Jasmine',
        href: 'MidnightJasmine.html',
        description: 'Een bloemige geur met hints van oranjebloesem. Zorgt voor romantiek.',
        longDescription: "Ervaar de romantische elegantie van Midnight Jasmine, een bloemige geur met hints van oranjebloesem en delicate jasmijn. Deze kaars roept een magische, serene sfeer op en is perfect voor ontspannende avonden of bijzondere gelegenheden. Met natuurlijke bijenwas en een verfijnde glazen houder, is het een tijdloze keuze voor je interieur.",
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
        productName: 'Cinnamon Spice',
        size: 30,
        price: 39.99,
        imgSrcMain: 'images/Products/IMG_2387.JPG',
        imgSrcHover: 'images/Products/IMG_2416.JPG',
        imgAlt: 'Cinnamon Spice',
        href: 'CinnamonSpice.html',
        description: 'Warme tonen van kaneel en kruiden. Perfect voor gezellige en feestelijke momenten.',
        longDescription: "Breng warmte en gezelligheid in je huis met de geur van Cinnamon Spice. Deze kaars combineert de zoete tonen van kaneel met een subtiele mix van kruiden, perfect voor feestelijke momenten of knusse avonden. Gegoten in duurzame sojawas en verpakt in een stijlvolle keramische houder, voegt het een vleugje warmte en luxe toe aan je ruimte.",
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

function addElement(elementType, elementClass) {
    const element = document.createElement(elementType);
    if (elementClass) {
        element.classList.add(elementClass);
    }
    return element;
}

const bestsellers = products.slice(0, 3);
for (let i = 0; i < bestsellers.length; i++) {
    const product = bestsellers[i];
    const bestsellerContainer = document.querySelector('#bestsellers-container');
    const bestseller = addElement('div', 'bestseller-container');

    bestseller.innerHTML = `
    <div class="bestseller-info-container">
        <img src="${product.imgSrcMain}" alt="${product.imgAlt}" class="bestseller-image">
        <h3 class="bestseller-name">${product.productName}</h3>
        <p class="bestseller-description">${product.description}</p>
    </div>
    <div class="bestseller-button">
        <a href="#" class="bestseller-link">Bekijk product</a>
    </div>`;

    const link = bestseller.querySelector('.bestseller-link');
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default navigation
        localStorage.setItem('selectedBestseller', JSON.stringify(product)); // Store product details
        window.location.href = 'pages/productPage.html'; // Redirect to the product page
    });


    bestsellerContainer.appendChild(bestseller);
}
