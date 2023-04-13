import React, {useState} from 'react';
import Footer from '../Footer';
import Hours from '../toolbar/Hours'
import bg from "../../assets/event-hero.webp";
import Nav from '../Nav';


const Tapas_From_Sea = [
    {
        id: 1,
        name: "Spanish Octopus",
        description: "Octopus marinated in garlic and herbs finished on the grill and served with our signature navy bean salad & sherry vinaigrette",
        price: "MRKT"
    },
    {
        id: 2,
        name: "P. E. I. Mussels",
        description: "Fresh mussels sauteed with garlic, parsley and chorizo infused oil",
        price: 16
    },
    {
        id: 3,
        name: "Calamari",
        description: "Lightly dusted flash fried calamari with roasted almonds and a parsley citrus aioli",
        price: 15
    },
    {
        id: 4,
        name: "Garlic Shrimp",
        description: "Shrimp sauteed with olive oil, garlic, Spanish chiles and parsley",
        price: 15
    },
    {
        id: 5,
        name: "Basil Wrapped Shrimp",
        description: "Shrimp and basil leaf in Brick dough with a orange ginger chili sauce",
        price: 14
    },
    {
        id: 6,
        name: "Dancing Eggplant",
        description: "Blooming eggplant topped with mirin and honey sauce, sesame seeds & wobiko flakes",
        price: 13
    },
    {
        id: 7,
        name: "Crab Stack",
        description: "Tossed with mango aioli stacked on tomato & avocado",
        price: 20
    },
    {
        id: 8,
        name: "Tuna Tartare",
        description: "Diced ahi tuna with avocado, mango topped with a crispy plantain",
        price: 16
    },
    {
        id: 9,
        name: "Boquerones",
        description: "Imported marinated white anchovies served in olive oil & grilled garlic bread",
        price: 13
    },
]

const Tapas_From_Land = [
    {
        id: 1,
        name: "Paleta Iberico Bellota Ham",
        description: "One of the finest hams in the world, aged 18 months, with pan con tomate",
        price: 25,
    },
    {
        id: 2,
        name: "Seared Foie Gras",
        description: "Seared foie gras with a berry port reduction, fresh berries over crostini",
        price: 22,
    },
    {
        id: 3,
        name: "Red Pepper Roll",
        description: "Pounded pork tenderloin roll stuffed with bacon, roasted red peppers and chipotle aïoli",
        price: 14,
    },
    {
        id: 4,
        name: "Meats And Cheeses",
        description: "A combination of cured meats and cheeses",
        price: 20,
    },
    {
        id: 5,
        name: "Albondigas",
        description: "Beef & lamb meatballs in a piquant red pepper tomato sauce",
        price: 14,
    },
    {
        id: 6,
        name: "Harissa Ribs",
        description: "Dry rubbed & slow cooked pork ribs w/ a piquant harissa sauce & Asian peanut slaw",
        price: 14,
    },
    {
        id: 7,
        name: "Lamb Skewers",
        description: "Marinated grilled lamb with quinoa tabbouleh",
        price: 14,
    },
    {
        id: 8,
        name: "Thai Chicken Spring Rolls",
        description: "Served with peanut sauce and a soy glaze",
        price: 13,
    },
    {
        id: 9,
        name: "Fusion Wings",
        description: "Honey teriyaki glazed chicken wings w/ blue cheese crumble",
        price: 14,
    },
    {
        id: 10,
        name: "Mushroom Caps",
        description: "Stuffed w/ Spanish chorizo, manchego cheese on a romesco sauce",
        price: 13,
    },
]

const Tapas_Pinchos = [
    {
        id: 1,
        name: "Short Rib Pincho",
        description: "Crustini topped with braised short rib, mushroom ragout and mascarpone cheese, topped w/ shallot roasted tomatoes",
        price: 14,
    },
    {
        id: 2,
        name: "Manchego Pincho",
        description: "Crispy bread topped w/ tomato puree, manchego cheese & quince paste",
        price: 9,
    },
    {
        id: 3,
        name: "Serrano Pincho",
        description: "Crustini topped with tomato puree, serrano ham and hard boiled egg",
        price: 10,
    },
]

const Soups = [
    {
        id: 1,
        name: "Lobster Bisque",
        description: "Topped with Main lobster meat",
        add: "add a sherry infused cream shot $2",
        price: 12,
    },
    {
        id: 2,
        name: "Andalusian Gazpacho",
        description: "Chilled traditional tomato gazpacho with a delicate tomato foam, basil oil and pine nuts",
        price: 8,
    },
    {
        id: 3,
        name: "Roasted Artichoke & Tomato",
        description: "Topped w/ house made croutons & truffle oil",
        price: 8,
    },
]

const Salads = [
    {
        id: 1,
        name: "Mediterranean Mixed Salad",
        description: "Fresh cucumber, ripe tomatoes, crisp romaine lettuce & feta cheese crumble mixed with a sumac vinaigrette and mint",
        price: 12,
    },
    {
        id: 2,
        name: "Goat Cheese Salad",
        description: "Warm goat cheese crostini, steamed beets, baby kale with mixed greens, pistachios topped with balsamic reduction",
        price: 14,
    },
    {
        id: 3,
        name: "Tomato & Fresh Burrata",
        description: "Tomatoes with burrata cheese, arugula, pine nuts, basil pesto drizzle and lemon vinaigrette",
        price: 13,
    },
    {
        id: 4,
        name: "Melon & Serrano Ham",
        description: "Serrano ham with cantaloupe melon on baby arugula and port reduction",
        price: 13,
    },
]

const Dinner_From_Sea = [
    {
        id: 1,
        name: "Lamoraga Paella",
        description: "Traditional Spanish saffron rice prepared with a selection of fresh seafood and chorizo",
        add: "Add Main lobster tail $MKT",
        price: 34,
    },
    {
        id: 2,
        name: "Chilean Sea Bass",
        description: "Baked wasabi pea encrusted sea bass on top roasted cauliflower-mashed potatoes along with shiitake mushrooms & bok choy in a sweet soy reduction",
        price: 43,
    },
    {
        id: 3,
        name: "Black Grouper",
        description: "Grilled black grouper over carrot whipped potatoes & grilled artichoke with a lemon beurre blanc",
        price: 38,
    },
    {
        id: 4,
        name: "Scottish Salmon",
        description: "Seared salmon over quinoa, spinach & mushroom medley",
        price: 30,
    },
    {
        id: 5,
        name: "Lobster Truffle Fettuccine",
        description: "Maine lobster, cherry tomatoes, kale and fettuccine tossed in a lemon truffle cream sauce",
        price: 42,
    },
    {
        id: 6,
        name: "Florida Snapper",
        description: "Seared snapper over creamy polenta & a fennel tomato broth w/a hint of anise",
        price: 36,
    },
    {
        id: 7,
        name: "Local Mahi Mahi",
        description: "Grilled Mahi Mahi w/ an orange-ginger-chili sauce, lemongrass rice, shiitake mushrooms boy chok & mango salsa",
        price: 29,
    },
    {
        id: 8,
        name: "Pir Piri Swordfish",
        description: "Grilled swordfish, bell pepper & onion skewers marinated in a piri piri pepper sauce",
        price: 32,
    },
    {
        id: 9,
        name: "Tuna Niçoise Salad",
        description: "Seared Ahi tuna, mixed baby greens, cherry tomatoes, green beans, red peppers, onions, pine nuts, boiled egg, anchovies, olives & lemon caper dressing",
        price: 28,
    },
]

const Dinner_From_Land = [
    {
        id: 1,
        name: "Meat Paella",
        description: "A meat lover's delight, featuring beef filet, pork shoulder, chorizo & chicken thigh blended with saffron rice",
        price: 32,
    },
    {
        id: 2,
        name: "Beef Short Ribs",
        description: "Tender slow-braised short ribs in a red wine reduction with mashed potatoes and vegetable of the day",
        price: 36,
    },
    {
        id: 3,
        name: "Grass-Fed Hanger Steak",
        description: "Grilled marinated hanger steak with French fries, vegetable of the day & chipotle Hollandaise sauce",
        price: 32,
    },
    {
        id: 4,
        name: "Chicken Rigatoni",
        description: "Imported pasta, grilled chicken breast, crimini mushrooms & peas tossed in a house made vodka sauce",
        price: 26,
    },
    {
        id: 5,
        name: "Dry Aged Pork Chop",
        description: "14 oz bone in pork chop with roasted brussel sprouts, roasted fingerling potatoes & a spiced rum demi glaze",
        price: 34,
    },
    {
        id: 6,
        name: "1/2 Grilled Chicken",
        description: "Rosemary-lemon marinated chicken, grilled & served w/ French fries, vegetables of the day & salsa verde",
        price: 26,
    },
    {
        id: 7,
        name: "Filet Mignon",
        description: "Grilled filet of beef w/ jalapeño scalloped potatoes & haricot vert",
        price: 46,
    },
]

const Dinner_Sides = [
    {
        id: 1,
        name: "French Fries",
        description: "House cut french fries with sea salt",
        price: 8,
    },
    {
        id: 2,
        name: "Grilled Asparagus",
        description: "Asparagus with olive oil and sea salt",
        price: 8,
    },
    {
        id: 3,
        name: "Patatas Bravas",
        description: "",
        price: 10,
    },
    {
        id: 4,
        name: "Maple Soy Brussel Sprouts",
        description: "",
        price: 8,
    },
    {
        id: 5,
        name: "Grilled Artichoke Hearts",
        description: "",
        price: 12,
    },
    {
        id: 6,
        name: "Bread Basket",
        description: "",
        price: 3,
    },
]

const Desserts = [
    {
        id: 1,
        name: "Lamoraga Bread Pudding",
        description: "Coconut and white chocolate laced bread pudding with vanilla ice cream",
        price: 9,
    },
    {
        id: 2,
        name: "Flan",
        description: "Thick Andalusian custard topped with house made caramel",
        price: 9,
    },
    {
        id: 3,
        name: "Cheesecake",
        description: "Delicate cheesecake tartlet on ginger bread crust with violet ice cream",
        price: 11,
    },
    {
        id: 4,
        name: "Belgium Chocolate Brownie Vegan",
        description: "Warm chunky chocolate brownie with wild berry compote",
        price: 10,
    },
    {
        id: 5,
        name: "Key Lime Torte",
        description: "Tangy lime mousse and cake layered with cream cheese filling",
        price: 10,
    },
    {
        id: 6,
        name: "Chocolate Deluxe",
        description: "Warm chocolate lava cake with vanilla ice cream and raspberry drizzle",
        price: 11,
    },
    {
        id: 7,
        name: "Fig Tart",
        description: "Warm roasted fig shortbread with vanilla ice cream",
        price: 11,
    },
    {
        id: 8,
        name: "Sorbets & Ice Creams",
        description: "Ask your server for our varieties",
        price: 7,
    },
]

const Vegan = [
    {
        id: 1,
        name: "Vegan Paella",
        description: "A wide variety of fresh seasonal vegetables and house made vegetable stock prepared saffron rice",
        price: 26,
    },
    {
        id: 2,
        name: "Avocado Pincho",
        description: "Crispy plantain topped with smashed avocado, diced cherry tomato, EVOO and balsamic drizzle",
        price: 14,
    },
    {
        id: 3,
        name: "Mushroom Calamari",
        description: "Oyster & Shiitake mushrooms flash fried w/ roasted almonds & caper citrus aioli",
        price: 14,
    },
    {
        id: 4,
        name: "Massaman Curry",
        description: "A flavorful & lightly spiced Thai curry w/ coconut milk. vegetables, potatoes, cashews & lemon grass rice",
        price: 26,
    },
    {
        id: 5,
        name: "Truffle Pasta",
        description: "Vegan pasta tossed w/ Beyond sausage, mushrooms, vegan cream & truffle sauce",
        price: 30,
    },
]

const HappyHour_From_Sea = [
    {
        id: 1,
        name: "Calamari",
        description: "Flash fried, roasted almond & parsley aioli",
        price: 12,
    },
    {
        id: 2,
        name: "Mussels",
        description: "Sautéed w/ chorizo, garlic & parsley",
        price: 12,
    },
    {
        id: 3,
        name: "Boquerones",
        description: "Imported marinated white anchovies w/ EVOO & garlic bread",
        price: 10,
    },
    {
        id: 4,
        name: "Lump Crab Stack",
        description: "Tossed w/ mango aioli stacked on tomatoes & avocado",
        price: 16,
    },
    {
        id: 5,
        name: "Basil Wrapped Shrimp",
        description: "Shrimp, basil leaf & orange chili sauce",
        price: 10,
    },
]

const HappyHour_From_Land = [
    {
        id: 1,
        name: "Avocado Pincho",
        description: "Plantain, Avocado, tomato & balsamic drizzle",
        price: 9,
    },
    {
        id: 2,
        name: "Fusion Wings",
        description: "Teriyaki glazed & blue cheese crumble",
        price: 10,
    },
    {
        id: 3,
        name: "Slider Combo",
        description: "Choose your combo between our beef and pork sliders",
        price: 10,
    },
    {
        id: 4,
        name: "Thai Chicken Spring Roll",
        description: "With a toasted peanut sauce & soy glaze",
        price: 9,
    },
    {
        id: 5,
        name: "Albondigas",
        description: "Beef & lamb meatballs",
        price: 10,
    },
    {
        id: 6,
        name: "Meat & Cheese",
        description: "Chef selection of cured meats and cheeses",
        price: 18,
    },
    {
        id: 7,
        name: "Iberico Bellota Ham",
        description: "Aged 18 months, w/ pan con tomate",
        price: 20,
    },
    {
        id: 8,
        name: "Chorizo Mushroom Caps",
        description: "Chorizo and manchego & romesco sauce",
        price: 9,
    },
    {
        id: 9,
        name: "Mushroom Calamari",
        description: "Oyster & shiitake mushrooms, lightly dusted & flash fried w/ a caper citrus aioli",
        price: 10,
    },
]

const HappyHour_Sides = [
    {
        id: 1,
        name: "French Fries",
        description: "Add truffle +2",
        price: 4,
    },
    {
        id: 2,
        name: "Patatas Bravas",
        description: "",
        price: 5,
    },
    {
        id: 3,
        name: "Brussel Sprouts",
        description: "",
        price: 6,
    },
]

const Cocktails = [
    {
        id: 1,
        name: 'Grapefruit Crush',
        description: 'Stoli Ruby Red Vodka, Bauchant Orange, Grapefruit Juice',
        price: 14,
    },
    {
        id: 2,
        name: 'Lychee Vacation',
        description: 'Stolichnaya Vodka, St Germain Elderflower, Lemon Juice, Lychee Purée',
        price: 15,
    },
    {
        id: 3,
        name: 'Bloody Monkey',
        description: 'Monkey 47 gin, Blood Orange, Aperol',
        price: 18,
    },
    {
        id: 4,
        name: 'Mochatini',
        description: 'Lavazza Espresso, Stolichnaya Vanilla, Licor 43',
        price: 16,
    },
    {
        id: 5,
        name: "Basíl-Ica Martini",
        description: "Spanish Ginraw Gin, St Germain Elderflower, Lemon Juice, Basil Leaf",
        price: 15,
    },
    {
        id: 6,
        name: "Strawberry Spiced Margarita",
        description: "Espanita Blanco Tequila, habanero Simple Syrup, Lime Juice, Strawberry Purée, w/ Sugar and Salt Rim",
        price: 15,
    },
    {
        id: 7,
        name: "The Dragon Margarita",
        description: "Casa Dragones Blanco, one of the world's top Tequilas, Agave Nectar, Fresh Lime Juice",
        price: 20,
    },
    {
        id: 8,
        name: "Starburst",
        description: "Disaronno Amaretto, Pallini Limoncello, Agave Nectar",
        price: 15,
    },
    {
        id: 9,
        name: "High West Old Fashioned",
        description: "High West American Prairie Bourbon, Luxardo Cherry, Orange Peel, Bitters",
        price: 18,
    },
    {
        id: 10,
        name: "The Joven",
        description: "Casa Dragones Joven, neat & served with dark chocolate. A Must Try!",
        price: 55,
    },
]

const Beer = [
    {
        id: 1,
        name: "Estrella Damm",
        description: "Spain - Draft/On-Tap",
        price: 8,
    },
    {
        id: 2,
        name: "Stella Artois",
        description: "Belgium - Draft/On-Tap",
        price: 8,
    },
    {
        id: 3,
        name: "Sweetwater 420 IPA",
        description: "USA - Draft/On-Tap",
        price: 8,
    },
    {
        id: 4,
        name: "Becks NA",
        description: "Bottle",
        price: 4,
    },
    {
        id: 5,
        name: "Bud Light",
        description: "Bottle",
        price: 5,
    },
    {
        id: 6,
        name: "Corona",
        description: "Bottle",
        price: 6,
    },
    {
        id: 7,
        name: "Founders Breakfast Stout",
        description: "Bottle",
        price: 9,
    },
    {
        id: 8,
        name: "Hoegaarden",
        description: "Bottle",
        price: 6,
    },
    {
        id: 9,
        name: "Michelob Ultra",
        description: "Bottle",
        price: 5,
    },
]

const Wine_BTG = [
    {
        id: 1,
        name: "SANGRIA, House made Sangria",
        description: "Red and White",
        priceBTG: 12,
        price: 48,
    },
]

const Sparkling_BTG = [
    {
        id: 1,
        name: "Marques de Caceres, Cava, Spain",
        priceBTG: 11,
        price: 44,
    },
    {
        id: 2,
        name: "Luca Paretti, Prosecco, Veneto, Italy",
        priceBTG: 13,
        price: 0,
    },
    {
        id: 3,
        name: "Mas Fi Brut Rosé, Cava, Spain",
        priceBTG: 11,
        price: 44,
    }
]

const Rose_BTG = [
    {
        id: 1,
        name: "Dom. Ott, By. Ott, Côtes de Provence, France",
        priceBTG: 16,
        price: 64,
    },
    {
        id: 2,
        name: "Borsao Rosado, Campo de Borja, Spain",
        priceBTG: 11,
        price: 44,
    },
]

const White_BTG = [
    {
        id: 1,
        name: "Castello Di Poggio, Moscato d'Asti, Italy",
        priceBTG: 13,
        price: 0,
    },
    {
        id: 2,
        name: "Riesling, R. Prüm Essence, Mosel, Germany",
        priceBTG: 11,
        price: 44,
    },
    {
        id: 3,
        name: "Pinot Grigio, Borghi Ad Est, Friuli, Italy",
        priceBTG: 13,
        price: 52,
    },
    {
        id: 4,
        name: "Hondarrabi Zuri/Beltza, Gaintza Txakolina, Basque Region, Spain",
        priceBTG: 16,
        price: 64,
    },
    {
        id: 5,
        name: "Sauvignon Blanc, Allan Scott, Marlborough, NZ",
        priceBTG: 13,
        price: 52,
    },
    {
        id: 6,
        name: "Albariño, Licia, Rias Baixas, Spain",
        priceBTG: 14,
        price: 56,
    },
    {
        id: 7,
        name: "Sauvignon Blanc, Langlois Chateau, Sancerre, France",
        priceBTG: 18,
        price: 72,
    },
    {
        id: 8,
        name: "Chardonnay,Olema, Sonoma, CA",
        priceBTG: 15,
        price: 60,
    },
]

const Red_BTG = [
    {
        id: 1,
        name: "Garnacha, Black Slate, La Viella Alta, Priorat, Spain",
        priceBTG: 16,
        price: 64,
    },
    {
        id: 2,
        name: "Pinot Noir, Joseph Drouhiin, Bourgogne, Burgundy , France",
        priceBTG: 18,
        price: 72,
    },
    {
        id: 3,
        name: "Monastrell, Tarima Hill, Alicante, Spain",
        priceBTG: 13,
        price: 52,
    },
    {
        id: 4,
        name: "Monastrell, Lemelson - Thea's Selection, Willamette Valley, OR",
        priceBTG: 18,
        price: 72,
    },
    {
        id: 5,
        name: "Malbec, Proemio Reserve, Mendoza, Argentina",
        priceBTG: 15,
        price: 60,
    },
    {
        id: 6,
        name: "Tempranillo, Viña Bujanda Reserva, Rioja, Spain",
        priceBTG: 16,
        price: 64,
    },
    {
        id: 7,
        name: "Cabernet Sauv., Oberon, Napa, CA",
        priceBTG: 16,
        price: 64,
    },
]

const Sparkling = [
    {
        id: 1,
        name: "Champagne, Laurent-Perrier, Champagne, France",
        price: 95,
    },
    {
        id: 2,
        name: "Champagne, Laurent-Perrier, Champagne, France",
        price: 115,
    },
    {
        id: 3,
        name: "Champagne, Nicolas Feulliatte, Champagne, France, 2003",
        price: 125,
    },
]

const Light_Crisp_White_and_Rose = [
    {
        id: 1,
        name: "Vermentino, Banfi La Pettegola, Piedmont, Italy",
        price: 44,
    },
    {
        id: 2,
        name: "Chenin Blanc, AA Badenhorst, 'Secateurs', Swartland, South Africa",
        price: 48,
    },
    {
        id: 3,
        name: "Sauvignon Blanc, J.C Dagueneau, Pouilly-Fume, France",
        price: 60,
    },
    {
        id: 4,
        name: "Sauvignon Blanc, Henri Bourgois, Les Baronnes, Sancerre, France",
        price: 68,
    },
]

const Fun_Interesting_White_and_Rose = [
    {
        id: 1,
        name: "Verdelho, Quinta Da Fonte Souto Branco, Alentejo, Portugal",
        price: 45,
    },
    {
        id: 2,
        name: "Verdejo, Telmo Rodriguez, Basa, Rueda, Spain",
        price: 46,
    },
    {
        id: 3,
        name: "Furmint, Royal Tokaji, The Oddity, Tokaj, Hungary",
        price: 50,
    },
    {
        id: 4,
        name: "Godello, Godelia, Bierzo, Spain",
        price: 54,
    },
    {
        id: 5,
        name: "Eiswein, Dr. P. Bergweiler Noble House, Mosel, Germany",
        price: 55,
    },
    {
        id: 6,
        name: "Rosé, Les Sarrins, Cotes de Provence, France",
        price: 60,
    },
]

const Full_Bold_White_and_Rose = [
    {
        id: 1,
        name: "Chardonnay, La Crema, Sonoma, California",
        price: 65,
    },
    {
        id: 2,
        name: "Chardonnay, Provenance Vineyard, Carneros, California",
        price: 70,
    },
    {
        id: 3,
        name: "Chardonnay, Rombauer, Carneros, California",
        price: 95,
    },
]

const Spanish_Red = [
    {
        id: 1,
        name: "Tempranillo, Sierra Cantabria Crianza, Rioja, Spain, 2016",
        price: 55,
    },
    {
        id: 2,
        name: "Tinto Fino, Cuentavinas, Rivera del Duero, Spain, 2019",
        price: 80,
    },
    {
        id: 3,
        name: "Tinta de Toro, Numanthia Numanthia, Toro, Spain, 2016",
        price: 95,
    },
    {
        id: 4,
        name: "Tempranillo, Marques De Caceres, Gaudium, Rioja, Spain, 2016",
        price: 100,
    },
    {
        id: 5,
        name: "Tempranillo, Vegas Sicilia Alion, Ribera del Duero, Spain, 2016",
        price: 170,
    },
    {
        id: 6,
        name: "Tempranillo, Emilio Moro, Malleolus De Valderramiro, Ribera del Duero, Spain, 2015",
        price: 205,
    },
    {
        id: 7,
        name: "Tinta de Toro, Numanthia Termanthia, Toro, Spain, 2011",
        price: 245,
    },
    {
        id: 8,
        name: "Tempranillo, Benjamin Romeo Contador, Rioja, Spain, 2014",
        price: 325,
    },
    {
        id: 9,
        name: "Tempranillo, Vegas Sicilia Unico, Ribera del Duero, Spain, 2010",
        price: 495,
    },
]

const Light_Bodied_Red = [
    {
        id: 1,
        name: "Lagrein, Elena Walch, Alto Adige, Italy",
        price: 50,
    },
    {
        id: 2,
        name: "Pinot Noir, Sonnet, Muns Vineyard, Santa Cruz Mountains, California, 2017",
        price: 65,
    },
    {
        id: 3,
        name: "Pinot Noir, Greg La Follette (GLF), North Coast, California, 2018",
        price: 65,
    },
    {
        id: 4,
        name: "Pinot Noir, Pascal Clement, Savigny-Les-Beaune, Burgundy, France, 2018",
        price: 85,
    },
    {
        id: 5,
        name: "Gamay, Dom. De L'Ecu, Sanctus, Loire, France, 2016",
        price: 105,
    },
    {
        id: 6,
        name: "Pinot Noir, Aurelien Verdet, Vielilles Vignes, Vosne-Romanee, Burgundy, France, 2017",
        price: 195,
    },
]

const Medium_Bodied_Red = [
    {
        id: 1,
        name: "Syrah, Mommessin Grand Granite Sirane, Quincie, France,2016",
        price: 54,
    },
    {
        id: 2,
        name: "Zinfadel, Di Stasio, Arnador County, California, 2017",
        price: 60,
    },
    {
        id: 3,
        name: "Bordeaux, Chateau Haut-Vigneau, Pessac-Leognan, France, 2018",
        price: 65,
    },
    {
        id: 4,
        name: "Barbera Blend, Lo Zoccolaio Baccanera, Langhe, Italy, 2015",
        price: 70,
    },
    {
        id: 5,
        name: "Bordeaux Blend, Cain Concept, St. Helena, Napa, California, 2013",
        price: 95,
    },
    {
        id: 6,
        name: "Cabernet Franc, Titus, Napa, California, 2019",
        price: 110,
    },
]

const Full_Bodied_Red = [
    {
        id: 1,
        name: "Aglianico, San Salvatore Ceraso, Campania, Italy, 2019",
        price: 55,
    },
    {
        id: 2,
        name: "Vinho Tinto, Wine & Soul Manoella, Douro, Portugal, 2018",
        price: 64,
    },
    {
        id: 3,
        name: "Cabernet Blend, Black Ridge, San Andreas, Santa Cruz Mountains, California, 2017",
        price: 70,
    },
    {
        id: 4,
        name: "Bordeaux Blend, Lancaster, Winemaker's Cuvee, Alexander Valley, California, 2018",
        price: 105,
    },
    {
        id: 5,
        name: "Red Blend, Quinta De La Rosa, Reserva, Douro, Portugal, 2017",
        price: 110,
    },
    {
        id: 6,
        name: "Cabernet Sauv., Lewelling Vineyards, St. Helena, Napa, California, 2016",
        price: 125,
    },
    {
        id: 7,
        name: "Cabernet Sauv., Roubaix, Rutherford, Napa, California, 2017",
        price: 160,
    },
    {
        id: 8,
        name: "uscan Blend, Antinori Solaia, Toscana IGT, Tuscany, Italy, 2018",
        price: 395,
    },
]

const End_Of_Bin_Red = [
    {
        id: 1,
        name: "Pinotage, Barista, Western Cape, South Africa, 2020",
        price: 55,
    },
    {
        id: 2,
        name: "Red Blend, Cantine Russo, Rampante, Sicily, Italy, 2012",
        price: 55,
    },
    {
        id: 3,
        name: "Frappato, Donnafugata, Bell'Assai, Sicily, Italy, 2019",
        price: 65,
    },
    {
        id: 4,
        name: "Cabernet Sauv., Pepper Bridge, Walla Walla, Washington, 2016",
        price: 85,
    },
    {
        id: 5,
        name: "Sangiovesse, Camigliano Gualto Riserva, Brunello di Montalcino, Italy, 2013",
        price: 115,
    },
    {
        id: 6,
        name: "Cabernet Sauv., Inglenook, Rutherford, Napa, California, 2017",
        price: 115,
    },
    {
        id: 7,
        name: "Red Blend, Leon Barral Faugeres Valiniere, Languedoc-Roussillon, France, 2017",
        price: 125,
    },
]

const MenuPage = () => {


    const [isTapasOpen, setIsTapasOpen] = useState(true);
    const [isSoupsSaladsOpen, setIsSoupsSaladsOpen] = useState(false);
    const [isDinnerOpen, setIsDinnerOpen] = useState(false);
    const [isVeganOpen, setIsVeganOpen] = useState(false);
    const [isHappyHourOpen, setIsHappyHourOpen] = useState(false);
    const [isDrinksOpen, setIsDrinksOpen] = useState(false);
    
    const [isCocktailsOpen, setIsCocktailsOpen] = useState(true);
    const [isWineOpen, setIsWineOpen] = useState(false);
    const [isWineBTGOpen, setIsWineBTGOpen] = useState(false);

    const handleMenu = (menu) => {
        setIsTapasOpen(menu === 'tapas');
        setIsSoupsSaladsOpen(menu === 'soupsSalads');
        setIsDinnerOpen(menu === 'dinner');
        setIsVeganOpen(menu === 'vegan');
        setIsHappyHourOpen(menu === 'happyHour');
        setIsDrinksOpen(menu === 'drinks');
    };

    const handleDrinkMenu = (drink) => {
        setIsCocktailsOpen(drink === 'cocktail');
        setIsWineOpen(drink === 'wine');
        setIsWineBTGOpen(drink === 'winebtg');
    }
    
    return (
        <div>
            <Nav/>
            <Hours/>
            <div className='h-screen'>
                <img src={bg} alt="bg-hero" className='object-cover w-full h-[70vh]'/>
                <div className='absolute flex justify-center w-full top-60'>
                    <p className='font-serif text-spirit text-7xl leading-[130%]'>Menus</p>
                </div>
            </div>
            <div className='m-[auto] font-serif w-[80%] '>
                <div className='flex items-center justify-around text-spirit text-[10px] gap-1 lg:text-[23px] font-bold mb-10'>
                    <button className={`${isTapasOpen ? 'bg-spirit text-black' : 'bg-menu'} h:bg-spirit lg:px-10 lg:py-2 px-2 py-3`} onClick={() => handleMenu('tapas')}>Tapas</button>
                    <button className={`${isSoupsSaladsOpen ? 'bg-spirit text-black' : 'bg-menu'} h:bg-spirit lg:px-10 lg:py-2 px-2 py-1`} onClick={() => handleMenu('soupsSalads')}>Soups & Salads</button>
                    <button className={`${isDinnerOpen ? 'bg-spirit text-black' : 'bg-menu'} h:bg-spirit lg:px-10 lg:py-2 px-2 py-3`} onClick={() => handleMenu('dinner')}>Dinner</button>
                    <button className={`${isVeganOpen ? 'bg-spirit text-black' : 'bg-menu'} h:bg-spirit lg:px-10 lg:py-2 px-2 py-3`} onClick={() => handleMenu('vegan')}>Vegan</button>
                    <button className={`${isHappyHourOpen ? 'bg-spirit text-black' : 'bg-menu'} h:bg-spirit lg:px-10 lg:py-2 px-2 py-1`} onClick={() => handleMenu('happyHour')}>Happy Hour</button>
                    <button className={`${isDrinksOpen ? 'bg-spirit text-black' : 'bg-menu'} h:bg-spirit lg:px-10 lg:py-2 px-2 py-3`} onClick={() => handleMenu('drinks')}>Drinks</button>
                </div>
                <div className={`${isTapasOpen ? '' : 'hidden'} w-full flex justify-center flex-col`}>
                    <div className=''>
                        <h2 className='lg:text-6xl leading-[130%] text-[38px] text-spirit font-semibold'>From The Sea</h2>
                        <div className='grid grid-cols-2 gap-5'>
                            {
                                Tapas_From_Sea.map(({id, name, description, price}) => {
                                    return(
                                        <div key={id}>
                                            <h3 className='lg:text-[45px] text-[25px] font-semibold leading-[130%]'>{name}</h3>
                                            <p className='font-sans text-[12px] lg:text-base'>{description}</p>
                                            <p className='font-sans'>${price}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className='w-full h-[2px] bg-line'></div>
                    </div>
                    <div className=''>
                        <h2 className='lg:text-6xl leading-[130%] text-[38px] text-spirit font-semibold'>From The Land</h2>
                        <div className='grid grid-cols-2 gap-5'>
                            {
                                Tapas_From_Land.map(({id, name, description, price}) => {
                                    return(
                                        <div key={id}>
                                            <h3 className='lg:text-[45px] text-[25px] font-semibold leading-[130%]'>{name}</h3>
                                            <p className='font-sans text-[12px] lg:text-base'>{description}</p>
                                            <p className='font-sans'>${price}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className='w-full h-[2px] bg-line'></div>
                    </div>
                    <div className=''>
                        <h2 className='lg:text-6xl leading-[130%] text-[38px] text-spirit font-semibold'>Pinchos</h2>
                        <div className='grid grid-cols-2 gap-5'>
                            {
                                Tapas_Pinchos.map(({id, name, description, price}) => {
                                    return(
                                        <div key={id}>
                                            <h3 className='lg:text-[45px] text-[25px] font-semibold leading-[130%]'>{name}</h3>
                                            <p className='font-sans text-[12px] lg:text-base'>{description}</p>
                                            <p className='font-sans'>${price}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className='w-full h-[2px] bg-line'></div>
                    </div>
                </div>
                <div className={`${isSoupsSaladsOpen ? '' : 'hidden'}`}>
                    <div className=''>
                        <h2 className='lg:text-6xl leading-[130%] text-[38px] text-spirit font-semibold'>Soups</h2>
                        <div className='grid grid-cols-2 gap-5'>
                            {
                                Soups.map(({id, name, description, add, price}) => {
                                    return(
                                        <div key={id}>
                                            <h3 className='lg:text-[45px] text-[25px] font-semibold leading-[130%]'>{name}</h3>
                                            <p className='font-sans text-[12px] lg:text-base'>{description}</p>
                                            <p className='font-sans text-[13px] font-semibold'>{add}</p>
                                            <p className='font-sans'>${price}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className='w-full h-[2px] bg-line'></div>
                    </div>
                    <div className=''>
                        <h2 className='lg:text-6xl leading-[130%] text-[38px] text-spirit font-semibold'>Salads</h2>
                        <div className='grid grid-cols-2 gap-5'>
                            {
                                Salads.map(({id, name, description, price}) => {
                                    return(
                                        <div key={id}>
                                            <h3 className='lg:text-[45px] text-[25px] font-semibold leading-[130%]'>{name}</h3>
                                            <p className='font-sans text-[12px] lg:text-base'>{description}</p>
                                            <p className='font-sans'>${price}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className={`${isDinnerOpen ? '' : 'hidden'}`}>
                    <div className=''>
                        <h2 className='lg:text-6xl leading-[130%] text-[38px] text-spirit font-semibold'>From The Sea</h2>
                        <div className='grid grid-cols-2 gap-5'>
                            {
                                Dinner_From_Sea.map(({id, name, description, add, price}) => {
                                    return(
                                        <div key={id}>
                                            <h3 className='lg:text-[45px] text-[25px] font-semibold leading-[130%]'>{name}</h3>
                                            <p className='font-sans text-[12px] lg:text-base'>{description}</p>
                                            <p className='font-sans text-[13px] font-semibold'>{add}</p>
                                            <p className='font-sans'>${price}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className='w-full h-[2px] bg-line'></div>
                    </div>
                    <div className=''>
                        <h2 className='lg:text-6xl leading-[130%] text-[38px] text-spirit font-semibold'>From The Land</h2>
                        <div className='grid grid-cols-2 gap-5'>
                            {
                                Dinner_From_Land.map(({id, name, description, price}) => {
                                    return(
                                        <div key={id}>
                                            <h3 className='lg:text-[45px] text-[25px] font-semibold leading-[130%]'>{name}</h3>
                                            <p className='font-sans text-[12px] lg:text-base'>{description}</p>
                                            <p className='font-sans'>${price}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className='w-full h-[2px] bg-line'></div>
                    </div>
                    <div className=''>
                        <h2 className='lg:text-6xl leading-[130%] text-[38px] text-spirit font-semibold'>Sides</h2>
                        <div className='grid grid-cols-2 gap-5'>
                            {
                                Dinner_Sides.map(({id, name, description, price}) => {
                                    return(
                                        <div key={id}>
                                            <h3 className='lg:text-[45px] text-[25px] font-semibold leading-[130%]'>{name}</h3>
                                            <p className='font-sans text-[12px] lg:text-base'>{description}</p>
                                            <p className='font-sans'>${price}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className='w-full h-[2px] bg-line'></div>
                    </div>
                    <div className=''>
                        <h2 className='lg:text-6xl leading-[130%] text-[38px] text-spirit font-semibold'>Desserts</h2>
                        <div className='grid grid-cols-2 gap-5'>
                            {
                                Desserts.map(({id, name, description, price}) => {
                                    return(
                                        <div key={id}>
                                            <h3 className='lg:text-[45px] text-[25px] font-semibold leading-[130%]'>{name}</h3>
                                            <p className='font-sans text-[12px] lg:text-base'>{description}</p>
                                            <p className='font-sans'>${price}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className={`${isVeganOpen ? '' : 'hidden'}`}>
                    <div className=''>
                        <h2 className='lg:text-6xl leading-[130%] text-[38px] text-spirit font-semibold'>Vegan Options</h2>
                        <div className='grid grid-cols-2 gap-5'>
                            {
                                Vegan.map(({id, name, description, price}) => {
                                    return(
                                        <div key={id}>
                                            <h3 className='lg:text-[45px] text-[25px] font-semibold leading-[130%]'>{name}</h3>
                                            <p className='font-sans text-[12px] lg:text-base'>{description}</p>
                                            <p className='font-sans'>${price}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className={`${isHappyHourOpen ? '' : 'hidden'}`}>
                    <div className=''>
                        <h2 className='lg:text-6xl leading-[130%] text-[38px] text-spirit font-semibold'>From The Sea</h2>
                        <div className='grid grid-cols-2 gap-5'>
                            {
                                HappyHour_From_Sea.map(({id, name, description, price}) => {
                                    return(
                                        <div key={id}>
                                            <h3 className='lg:text-[45px] text-[25px] font-semibold leading-[130%]'>{name}</h3>
                                            <p className='font-sans text-[12px] lg:text-base'>{description}</p>
                                            <p className='font-sans'>${price}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className='w-full h-[2px] bg-line'></div>
                    </div>
                    <div className=''>
                        <h2 className='lg:text-6xl leading-[130%] text-[38px] text-spirit font-semibold'>From The Land</h2>
                        <div className='grid grid-cols-2 gap-5'>
                            {
                                HappyHour_From_Land.map(({id, name, description, price}) => {
                                    return(
                                        <div key={id}>
                                            <h3 className='lg:text-[45px] text-[25px] font-semibold leading-[130%]'>{name}</h3>
                                            <p className='font-sans text-[12px] lg:text-base'>{description}</p>
                                            <p className='font-sans'>${price}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className='w-full h-[2px] bg-line'></div>
                    </div>
                    <div className=''>
                        <h2 className='lg:text-6xl leading-[130%] text-[38px] text-spirit font-semibold'>Sides</h2>
                        <div className='grid grid-cols-2 gap-5'>
                            {
                                HappyHour_Sides.map(({id, name, description, price}) => {
                                    return(
                                        <div key={id}>
                                            <h3 className='lg:text-[45px] text-[25px] font-semibold leading-[130%]'>{name}</h3>
                                            <p className='font-sans text-[12px] lg:text-base'>{description}</p>
                                            <p className='font-sans'>${price}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className={`${isDrinksOpen ? '' : 'hidden'}`}>
                    <div className='flex flex-row justify-around mt-3 font-bold text-spirit text-[10px] lg:text-[23px] mb-10'>
                        <button onClick={() => handleDrinkMenu('cocktail')} className={`${isCocktailsOpen ? 'bg-spirit text-black' : 'bg-menu'} h:bg-spirit lg:px-10 lg:py-2 px-2 py-1`}>Cocktails & Beer</button>
                        <button onClick={() => handleDrinkMenu('winebtg')} className={`${isWineBTGOpen ? 'bg-spirit text-black' : 'bg-menu'} h:bg-spirit lg:px-10 lg:py-2 px-2 py-1`}>Wine BTG</button>
                        <button onClick={() => handleDrinkMenu('wine')} className={`${isWineOpen ? 'bg-spirit text-black' : 'bg-menu'} h:bg-spirit lg:px-10 lg:py-2 px-2 py-1`}>Wine</button>
                    </div>
                    <div className={`${isCocktailsOpen ? '' : 'hidden'}`}>
                        <div className=''>
                            <h2 className='lg:text-6xl leading-[130%] text-[38px] text-spirit font-semibold'>Cocktails</h2>
                            <div className='grid grid-cols-2 gap-5'>
                                {
                                    Cocktails.map(({id, name, description, price}) => {
                                        return(
                                            <div key={id}>
                                                <h3 className='lg:text-[45px] text-[25px] font-semibold leading-[130%]'>{name}</h3>
                                                <p className='font-sans text-[12px] lg:text-base'>{description}</p>
                                                <p className='font-sans'>${price}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className='w-full h-[2px] bg-line'></div>
                        </div>
                        <div className=''>
                            <h2 className='lg:text-6xl leading-[130%] text-[38px] text-spirit font-semibold'>Beer</h2>
                            <div className='grid grid-cols-2 gap-5'>
                                {
                                    Beer.map(({id, name, description, price}) => {
                                        return(
                                            <div key={id}>
                                                <h3 className='lg:text-[45px] text-[25px] font-semibold leading-[130%]'>{name}</h3>
                                                <p className='font-sans text-[12px] lg:text-base'>{description}</p>
                                                <p className='font-sans'>${price}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className={`${isWineBTGOpen ? '' : 'hidden'}`}>
                        <div className=''>
                            <h2 className='lg:text-6xl leading-[130%] text-[38px] text-spirit font-semibold'>Wines By The Glass</h2>
                            <div className=''>
                                {
                                    Wine_BTG.map(({id, name, description,priceBTG, price}) => {
                                        return(
                                            <div key={id} className='flex items-baseline justify-between'>
                                                <div>
                                                    <h3 className='lg:text-[22px] font-semibold'>{name}</h3>
                                                    <p className='font-sans'>{description}</p>
                                                </div>
                                                <div className='flex gap-1 font-sans lg:text-[22px]'>
                                                    <p>${priceBTG}</p>
                                                    <p>|</p>
                                                    <p >${price}</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className=''>
                            <h2 className='lg:text-6xl leading-[130%] text-[38px] text-spirit font-semibold'>Sparkling</h2>
                            <div className='font-sans'>
                                {
                                    Sparkling_BTG.map(({id, name, description,priceBTG, price}) => {
                                        return(
                                            <div key={id} className='flex items-baseline justify-between'>
                                                <div>
                                                    <h3 className='lg:text-[22px]'>{name}</h3>
                                                    <p>{description}</p>
                                                </div>
                                                <div className='flex gap-1 lg:text-[22px]'>
                                                    <p>${priceBTG}</p>
                                                    <div className={`flex ${price === 0 ? 'hidden' : 'gap-1'}`}>
                                                        <p>|</p>
                                                        <p>${price}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className=''>
                            <h2 className='lg:text-6xl leading-[130%] text-[38px] text-spirit font-semibold'>Rose</h2>
                            <div className='font-sans'>
                                {
                                    Rose_BTG.map(({id, name, description,priceBTG, price}) => {
                                        return(
                                            <div key={id} className='flex items-baseline justify-between'>
                                                <div>
                                                    <h3 className='lg:text-[22px]'>{name}</h3>
                                                    <p>{description}</p>
                                                </div>
                                                <div className='flex gap-1 lg:text-[22px]'>
                                                    <p>${priceBTG}</p>
                                                    <div className={`flex ${price === 0 ? 'hidden' : 'gap-1'}`}>
                                                        <p>|</p>
                                                        <p>${price}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className=''>
                            <h2 className='lg:text-6xl leading-[130%] text-[38px] text-spirit font-semibold'>White</h2>
                            <div className='font-sans'>
                                {
                                    White_BTG.map(({id, name, description,priceBTG, price}) => {
                                        return(
                                            <div key={id} className='flex items-baseline justify-between'>
                                                <div>
                                                    <h3 className='lg:text-[22px]'>{name}</h3>
                                                    <p>{description}</p>
                                                </div>
                                                <div className='flex gap-1 lg:text-[22px]'>
                                                    <p>${priceBTG}</p>
                                                    <div className={`flex ${price === 0 ? 'hidden' : 'gap-1'}`}>
                                                        <p>|</p>
                                                        <p>${price}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className=''>
                            <h2 className='lg:text-6xl leading-[130%] text-[38px] text-spirit font-semibold'>Red</h2>
                            <div className='font-sans'>
                                {
                                    Red_BTG.map(({id, name, description,priceBTG, price}) => {
                                        return(
                                            <div key={id} className='flex items-baseline justify-between'>
                                                <div>
                                                    <h3 className='lg:text-[22px]'>{name}</h3>
                                                    <p>{description}</p>
                                                </div>
                                                <div className='flex gap-1 lg:text-[22px]'>
                                                    <p>${priceBTG}</p>
                                                    <div className={`flex ${price === 0 ? 'hidden' : 'gap-1'}`}>
                                                        <p>|</p>
                                                        <p>${price}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className={`${isWineOpen ? '' : 'hidden'}`}>
                        <div className='mt-10'>
                            <h2 className='lg:text-6xl leading-[130%] text-[38px] text-spirit font-semibold'>Sparkling</h2>
                            <div className='font-sans'>
                                {
                                    Sparkling.map(({id, name, price}) => {
                                        return(
                                            <div key={id} className='flex items-baseline justify-between lg:text-[22px]'>
                                                <h3>{name}</h3>
                                                <p>${price}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className='mt-20'>
                            <h2 className='lg:text-6xl leading-[130%] text-[38px] text-spirit font-semibold'>White & Rose</h2>
                            <p className='text-[32px] mb-6'>Light & Crisp</p>
                            <div className='font-sans'>
                                {
                                    Light_Crisp_White_and_Rose.map(({id, name, price}) => {
                                        return(
                                            <div key={id} className='flex items-baseline justify-between lg:text-[22px]'>
                                                <h3 >{name}</h3>
                                                <p>${price}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className='mt-10'>
                            <p className='text-[32px] mb-6'>Fun & Interesting</p>
                            <div className='font-sans'>
                                {
                                    Fun_Interesting_White_and_Rose.map(({id, name, price}) => {
                                        return(
                                            <div key={id} className='flex items-baseline justify-between lg:text-[22px]'>
                                                <h3 >{name}</h3>
                                                <p>${price}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className='mt-10'>
                            <p className='text-[32px] mb-6'>Full & Bold</p>
                            <div className='font-sans'>
                                {
                                    Full_Bold_White_and_Rose.map(({id, name, price}) => {
                                        return(
                                            <div key={id} className='flex items-baseline justify-between lg:text-[22px]'>
                                                <h3 >{name}</h3>
                                                <p>${price}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className='mt-20'>
                            <h2 className='lg:text-6xl leading-[130%] text-[38px] text-spirit font-semibold'>Spanish Red</h2>
                            <div className='font-sans'>
                                {
                                    Spanish_Red.map(({id, name, price}) => {
                                        return(
                                            <div key={id} className='flex items-baseline justify-between lg:text-[22px]'>
                                                <h3 >{name}</h3>
                                                <p>${price}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className='mt-20'>
                            <h2 className='lg:text-6xl leading-[130%] text-[38px] text-spirit font-semibold'>Red</h2>
                            <p className='text-[32px] mb-6'>Light Bodied</p>
                            <div className='font-sans'>
                                {
                                    Light_Bodied_Red.map(({id, name, price}) => {
                                        return(
                                            <div key={id} className='flex items-baseline justify-between lg:text-[22px]'>
                                                <h3 >{name}</h3>
                                                <p>${price}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className='mt-10'>
                            <p className='text-[32px] mb-6'>Medium Bodied</p>
                            <div className='font-sans'>
                                {
                                    Medium_Bodied_Red.map(({id, name, price}) => {
                                        return(
                                            <div key={id} className='flex items-baseline justify-between lg:text-[22px]'>
                                                <h3 >{name}</h3>
                                                <p>${price}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className='mt-10'>
                            <p className='text-[32px] mb-6'>Full Bodied</p>
                            <div className='font-sans'>
                                {
                                    Full_Bodied_Red.map(({id, name, price}) => {
                                        return(
                                            <div key={id} className='flex items-baseline justify-between lg:text-[22px]'>
                                                <h3 >{name}</h3>
                                                <p>${price}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className='mt-10'>
                            <p className='text-[32px] mb-6'>End Of Bin</p>
                            <div className='font-sans'>
                                {
                                    End_Of_Bin_Red.map(({id, name, price}) => {
                                        return(
                                            <div key={id} className='flex items-baseline justify-between lg:text-[22px]'>
                                                <h3 >{name}</h3>
                                                <p>${price}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}


export default MenuPage