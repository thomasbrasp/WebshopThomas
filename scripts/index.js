"use strict";
// TODO: add long product description
// TODO: generate couple paragraphs with filler tekst
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
        productName: 'Sandalwood',
        size: 30,
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
        productName: 'Lemongrass',
        size: 40,
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
        productName: 'Clean Cotton',
        size: 30,
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
        productName: 'Lavender',
        size: 50,
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
        productName: 'Vanilla Bean',
        size: 60,
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
        productName: 'Ocean Breeze',
        size: 40,
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
        productName: 'Cedar Wood',
        size: 45,
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
        productName: 'Eucalyptus Mint',
        size: 35,
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
        productName: 'Pine Forest',
        size: 40,
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
        productName: 'Midnight Jasmine',
        size: 35,
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
        productName: 'Cinnamon Spice',
        size: 30,
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
