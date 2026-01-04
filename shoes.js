// shoes.js - Product data with real image URLs from official brand websites

const shoes = [
    {
        id: 1,
        name: "Samba OG",
        brand: "Adidas",
        price: 100.00,
        category: "sneakers",
        image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ca32d7c441a04a909e9baf1a0101f5dc_9366/Samba_OG_Shoes_White_B75806_01_standard.jpg",
        description: "The adidas Samba OG is the classic indoor soccer shoe turned streetwear staple. With its timeless design, gum rubber outsole, and iconic T-toe overlay, it's a must-have for any sneaker collection."
    },
    {
        id: 2,
        name: "Air Force 1 '07",
        brand: "Nike",
        price: 110.00,
        category: "sneakers",
        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/95f4c8d6-4a0d-4f4e-a7c6-70c5a5c9e8f5/air-force-1-07-shoes-5C5v5P.png",
        description: "The Nike Air Force 1 '07 is the b-ball OG that puts a fresh spin on what you know best: crisp leather, bold colors and the perfect amount of flash to make you shine."
    },
    {
        id: 3,
        name: "Dunk Low Retro",
        brand: "Nike",
        price: 115.00,
        category: "sneakers",
        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7a2a8d2c-16d1-4c05-9c60-2f06b2f98091/dunk-low-retro-shoe-66RGqF.png",
        description: "Created for the hardwood but taken to the streets, the Nike Dunk Low Retro returns with crisp overlays and original team colors. Its padded, low-cut collar lets you take your game anywhere in comfort."
    },
    {
        id: 4,
        name: "9060",
        brand: "New Balance",
        price: 150.00,
        category: "sneakers",
        image: "https://nb.scene7.com/is/image/NB/u9060lbb_nb_02_i?$pdpflexf2$&qlt=80&fmt=webp&wid=880&hei=880",
        description: "The New Balance 9060 is a bold, modern take on classic New Balance design. With its exaggerated proportions, innovative cushioning, and premium materials, it's a standout sneaker for the fashion-forward."
    },
    {
        id: 5,
        name: "Clifton 9",
        brand: "Hoka",
        price: 145.00,
        category: "running",
        image: "https://www.hoka.com/dw/image/v2/BDWQ_PRD/on/demandware.static/-/Sites-masterCatalog_HOKA/default/dwf1624c3c/images/large/1123152-BBLC/1123152-BBLC.png?sw=800&sh=800",
        description: "The Hoka Clifton 9 is the perfect balance of cushioned comfort and smooth ride. With an even lighter weight and new extended heel geometry, it's our most versatile daily trainer yet."
    },
    {
        id: 6,
        name: "Cloudmonster",
        brand: "On Running",
        price: 170.00,
        category: "running",
        image: "https://www.on.com/cdn/shop/products/Cloudmonster_White_Black_Men_Front_View.png?v=1684837758&width=1200",
        description: "The On Cloudmonster is a max-cushioned running shoe with a monster-sized CloudTec® element for ultimate cushioning and a propelled ride. It's designed for runners who want to go further, faster."
    },
    {
        id: 7,
        name: "Vaporfly 3",
        brand: "Nike",
        price: 250.00,
        category: "running",
        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/11f40960-21e8-4674-8c36-ecbc1058dd92/alphafly-2-road-racing-shoes-q5pKXP.png",
        description: "The Nike Vaporfly 3 is built for the chasers, the racers and the elevated pacers. With updated technology for a propulsive sensation, it helps you chase personal bests from 10K to marathon."
    },
    {
        id: 8,
        name: "XT-6",
        brand: "Salomon",
        price: 200.00,
        category: "running",
        image: "https://www.salomon.com/en-us/shop/media/catalog/product/l/2/l20076300_fn_a1_1.png?format=webp&width=720&height=720",
        description: "The Salomon XT-6 is a technical trail running shoe that has become a streetwear icon. With its aggressive grip, protective design, and distinctive aesthetic, it performs on both trails and city streets."
    },
    {
        id: 9,
        name: "Arizona",
        brand: "Birkenstock",
        price: 140.00,
        category: "sandals",
        image: "https://www.birkenstock.com/on/demandware.static/-/Sites-master-catalog/default/dw301d3b5d/images/large/1027370_1_FSF_1.png",
        description: "The Birkenstock Arizona is the iconic two-strap sandal with a contoured cork-latex footbed that molds to your feet over time. Made from premium leather with an adjustable fit, it's comfort that lasts."
    },
    {
        id: 10,
        name: "1460 Smooth Leather",
        brand: "Dr. Martens",
        price: 170.00,
        category: "boots",
        image: "https://www.drmartens.com/dw/image/v2/AAXM_PRD/on/demandware.static/-/Sites-dr_martens_catalog/default/dw5a16d04f/images/11822006/11822006_01_570X570.png?sw=570",
        description: "The Dr. Martens 1460 Smooth Leather boot is the original 8-eyelet boot that started it all. With its iconic air-cushioned sole, durable Goodyear welt construction, and distinctive yellow stitching."
    },
    {
        id: 11,
        name: "Air Jordan 1 Low",
        brand: "Jordan",
        price: 110.00,
        category: "sneakers",
        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/4e6b8c2c-1a7e-4a0c-9e69-8d2922a7c0b3/air-jordan-1-low-shoes-4591cQ.png",
        description: "The Air Jordan 1 Low offers a clean, classic look that's familiar yet always fresh. With an iconic design that pairs perfectly with any 'fit, these sneakers bring heritage style to your wardrobe."
    },
    {
        id: 12,
        name: "Chuck Taylor All Star",
        brand: "Converse",
        price: 65.00,
        category: "sneakers",
        image: "https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dw5a7b0d36/images/a_107/M9160_A_107X1.jpg",
        description: "The Converse Chuck Taylor All Star is the original basketball shoe that became a cultural icon. With its timeless canvas upper, rubber toe cap, and All Star ankle patch, it's a true classic."
    },
    {
        id: 13,
        name: "Old Skool",
        brand: "Vans",
        price: 70.00,
        category: "sneakers",
        image: "https://images.vans.com/is/image/Vans/VN000D3HY28-HERO?$583x583$",
        description: "The Vans Old Skool is the classic skate shoe with the iconic side stripe. With durable canvas and suede construction, padded collar for support, and signature rubber waffle outsole."
    },
    {
        id: 14,
        name: "2002R",
        brand: "New Balance",
        price: 150.00,
        category: "sneakers",
        image: "https://nb.scene7.com/is/image/NB/m2002rla_nb_02_i?$pdpflexf2$&qlt=80&fmt=webp&wid=880&hei=880",
        description: "The New Balance 2002R is a reengineered version of a 2010 running model, updated with modern cushioning and premium materials. It offers a perfect blend of retro aesthetics and contemporary comfort."
    },
    {
        id: 15,
        name: "Bondi 8",
        brand: "Hoka",
        price: 165.00,
        category: "running",
        image: "https://www.hoka.com/dw/image/v2/BDWQ_PRD/on/demandware.static/-/Sites-masterCatalog_HOKA/default/dwdd96a12f/images/large/1113528-BBKB/1113528-BBKB.png?sw=800&sh=800",
        description: "The Hoka Bondi 8 is our most cushioned road running shoe ever. With an extended heel for a smooth transition and a breathable upper, it's the ultimate shoe for maximum cushioning and all-day comfort."
    },
    {
        id: 16,
        name: "Classic Leather",
        brand: "Puma",
        price: 85.00,
        category: "sneakers",
        image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/374915/01/sv01/fnd/EEA/w/1000/h/1000/fmt/png",
        description: "The Puma Classic Leather is the iconic 80s sneaker that defined an era. Made from premium leather with the iconic Formstrip, it delivers timeless style and everyday comfort."
    },
    {
        id: 17,
        name: "GEL-Kayano 30",
        brand: "ASICS",
        price: 160.00,
        category: "running",
        image: "https://www.asics.com/dw/image/v2/BDWQ_PRD/on/demandware.static/-/Sites-asi-products/default/dw6c93763b/images/1203A384_001_SR_RT_GLB.jpg",
        description: "The ASICS GEL-Kayano 30 offers next-level stability and cushioning for runners. With PureGEL technology that's 65% softer than previous GEL, it provides exceptional comfort mile after mile."
    },
    {
        id: 18,
        name: "1460 Pascal Virginia",
        brand: "Dr. Martens",
        price: 180.00,
        category: "boots",
        image: "https://www.drmartens.com/dw/image/v2/AAXM_PRD/on/demandware.static/-/Sites-dr_martens_catalog/default/dw7e607db2/images/11822601/11822601_01_570X570.png?sw=570",
        description: "The Dr. Martens 1460 Pascal Virginia boot features softer, supple leather and the iconic Dr. Martens air-cushioned sole. The 8-eyelet silhouette offers timeless style with a broken-in feel from day one."
    },
    {
        id: 19,
        name: "Cloudnova",
        brand: "On Running",
        price: 150.00,
        category: "sneakers",
        image: "https://www.on.com/cdn/shop/products/Cloudnova_Form_White_Black_Women_Front_View.png?v=1684838562&width=1200",
        description: "The On Cloudnova is a lifestyle sneaker that brings running-inspired innovation to everyday style. With its unique CloudTec® cushioning and futuristic design, it's perfect for all-day wear."
    },
    {
        id: 20,
        name: "Handball Spezial",
        brand: "Adidas",
        price: 110.00,
        category: "sneakers",
        image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/16c8b8c1e3404d02aae8afb200c427cc_9366/Handball_Spezial_Shoes_White_IG7442_01_standard.jpg",
        description: "The adidas Handball Spezial is a classic indoor court shoe that has been adopted by style-conscious crowds. With its timeless silhouette, gum rubber outsole, and premium suede construction."
    }
];