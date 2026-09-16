AOS.init({
    duration: 1000,once: true,offset: 100
})
$(document).ready(function () {
    $('#menu').click(function () {
        $('#mobileMenu').toggleClass('active');
    });
});
// SCROLLING TICKER
function showDateTime() {
    let now = new Date();
    let dateText = now.toDateString(); 
    let timeText = now.toLocaleTimeString();
    let dateTimeElements = document.querySelectorAll(".ticker-datetime");
    for (let i = 0; i < dateTimeElements.length; i++) {
        dateTimeElements[i].textContent = dateText + " | " + timeText;
    }
}
function showLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(gotLocation, noLocation);
    } else {
        setTickerLocationText("Location not supported");
    }
}
function gotLocation(position) {
    let lat = position.coords.latitude.toFixed(2);
    let lon = position.coords.longitude.toFixed(2);
    setTickerLocationText("Lat: " + lat + ", Lon: " + lon);
}
function noLocation() {
    setTickerLocationText("Location permission denied");
}
function setTickerLocationText(text) {
    let locationElements = document.querySelectorAll(".ticker-location");
    for (let i = 0; i < locationElements.length; i++) {
        locationElements[i].textContent = text;
    }
}
showDateTime();
setInterval(showDateTime, 1000);
showLocation();
//visitor counter
let count = localStorage.getItem("albertoVisitors");
if (!count) {
    count = 1;
} else {
    count = parseInt(count) + 1;
}
localStorage.setItem("albertoVisitors", count);
document.getElementById("visitorCount").textContent =
    String(count).padStart(4, "0");
const menuLinks = document.querySelectorAll(".navbar a");
menuLinks.forEach(link => {
    link.addEventListener("click", function () {
        menuLinks.forEach(item => {
            item.classList.remove("active");
        });
        this.classList.add("active");
    });
});
const products = [
    {
        brand: "Rolex",
        name: "Submariner Date",
        category: "Luxury",
        gender: "Men",
        price: 3180000,
        image: "https://images.pexels.com/photos/6230455/pexels-photo-6230455.jpeg",
        description: "Iconic swiss prestige defines the Submariner Date with effortless distinction. Iconic dive-watch DNA gives this design unmistakable authority. Designed for men who expect luxury without compromise. Crafted to impress, it combines distinctive style with an enduring premium presence. It ships in a signature presentation box, ready to gift or wear straight away.",
        inStock: true,
        stockQuantity: 5
    },
    {
        brand: "Rolex",
        name: "Datejust 41",
        category: "Luxury",
        gender: "Men",
        price: 2550000,
        image: "https://images.pexels.com/photos/14778525/pexels-photo-14778525.jpeg",
        description: "The Datejust 41 pairs uncompromising horological excellence with a beautifully composed silhouette. Signature date detailing adds a polished, timeless finish. Every detail feels considered, confident, and exceptionally premium. Crafted to impress, it combines distinctive style with an enduring premium presence. Backed by an official warranty, it's a piece built to be worn for years to come.",
        inStock: true,
        stockQuantity: 2
    },
    {
        brand: "Rolex",
        name: "GMT-Master II",
        category: "Luxury",
        gender: "Men",
        price: 3900000,
        image: "https://media.istockphoto.com/id/187351476/photo/long-exposure-wrist-watch.webp?a=1&b=1&s=612x612&w=0&k=20&c=VCXa7fjgkFnsaayFGJ2IRyPEKHx6TlX5smjDKhwbwo4=",
        description: "Legendary wrist presence gives the GMT-Master II an unmistakably elevated presence. Dual-time character makes every journey feel more refined. A refined statement for men with discerning taste. A sophisticated finishing touch makes this timepiece especially memorable on the wrist. Each unit is quality-checked before dispatch, so it arrives in flawless condition.",
        inStock: false,
        stockQuantity: 0
    },
    {
        brand: "Rolex",
        name: "Oyster Perpetual",
        category: "Classic",
        gender: "Men",
        price: 2350000,
        image: "https://images.unsplash.com/photo-1620625515032-6ed0c1790c75?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8T3lzdGVyJTIwUGVycGV0dWFsfGVufDB8fDB8fHww",
        description: "Iconic swiss prestige defines the Oyster Perpetual with effortless distinction. Pure, balanced lines deliver understated confidence. Designed for men who expect luxury without compromise. Its refined character makes it a standout choice for any sophisticated collection. A versatile choice that transitions effortlessly from daywear to evening occasions.",
        inStock: true,
        stockQuantity: 12
    },
    {
        brand: "Rolex",
        name: "Explorer",
        category: "Sports",
        gender: "Men",
        price: 2680000,
        image: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "The Explorer pairs uncompromising horological excellence with a beautifully composed silhouette. Adventure-ready spirit meets quietly commanding sophistication. Every detail feels considered, confident, and exceptionally premium. Its timeless appeal brings an unmistakable sense of confidence to every occasion. It remains one of the most requested pieces in its collection this season.",
        inStock: true,
        stockQuantity: 17
    },
    {
        brand: "Rolex",
        name: "Day-Date 40",
        category: "Luxury",
        gender: "Men",
        price: 4750000,
        image: "https://images.pexels.com/photos/14778525/pexels-photo-14778525.jpeg",
        description: "Legendary wrist presence gives the Day-Date 40 an unmistakably elevated presence. A prestigious profile designed to make every moment count. A refined statement for men with discerning taste. Crafted to impress, it combines distinctive style with an enduring premium presence. Paired with premium after-sales support, ownership feels as refined as the design itself.",
        inStock: true,
        stockQuantity: 3
    },
    {
        brand: "Rolex",
        name: "Sea-Dweller",
        category: "Sports",
        gender: "Men",
        price: 3650000,
        image: "https://images.pexels.com/photos/4276458/pexels-photo-4276458.jpeg",
        description: "Iconic swiss prestige defines the Sea-Dweller with effortless distinction. Professional diving character brings formidable presence to the wrist. Designed for men who expect luxury without compromise. A sophisticated finishing touch makes this timepiece especially memorable on the wrist. Its balanced proportions make it comfortable for everyday wear without losing presence.",
        inStock: true,
        stockQuantity: 3
    },
    {
        brand: "Rolex",
        name: "Yacht-Master",
        category: "Luxury",
        gender: "Men",
        price: 4100000,
        image: "https://images.pexels.com/photos/32815447/pexels-photo-32815447.jpeg",
        description: "The Yacht-Master pairs uncompromising horological excellence with a beautifully composed silhouette. Nautical elegance adds a relaxed yet luxurious attitude. Every detail feels considered, confident, and exceptionally premium. A sophisticated finishing touch makes this timepiece especially memorable on the wrist. A timeless investment piece that only grows more distinguished with age.",
        inStock: true,
        stockQuantity: 18
    },
    {
        brand: "Rolex",
        name: "Air-King",
        category: "Classic",
        gender: "Men",
        price: 2450000,
        image: "https://images.pexels.com/photos/364822/rolex-watch-time-luxury-364822.jpeg",
        description: "Legendary wrist presence gives the Air-King an unmistakably elevated presence. Aviation-inspired character gives the design a bold edge. A refined statement for men with discerning taste. Crafted to impress, it combines distinctive style with an enduring premium presence. It ships in a signature presentation box, ready to gift or wear straight away.",
        inStock: true,
        stockQuantity: 19
    },
    {
        brand: "Rolex",
        name: "Milgauss",
        category: "Classic",
        gender: "Men",
        price: 2850000,
        image: "https://images.pexels.com/photos/16587541/pexels-photo-16587541.jpeg",
        description: "Iconic swiss prestige defines the Milgauss with effortless distinction. Distinctive engineering heritage makes this piece uniquely memorable. Designed for men who expect luxury without compromise. Its timeless appeal brings an unmistakable sense of confidence to every occasion. Backed by an official warranty, it's a piece built to be worn for years to come.",
        inStock: false,
        stockQuantity: 0
    },
    {
        brand: "Rolex",
        name: "Cosmograph Daytona",
        category: "Sports",
        gender: "Men",
        price: 5200000,
        image: "https://media.istockphoto.com/id/113735916/photo/wristwatch.webp?a=1&b=1&s=612x612&w=0&k=20&c=q-vuyUqgeVkSobFXd2zWmRsSt922wdmq870oSjgUOas=",
        description: "The Cosmograph Daytona pairs uncompromising horological excellence with a beautifully composed silhouette. Racing-bred energy transforms precision into pure wrist charisma. Every detail feels considered, confident, and exceptionally premium. Its timeless appeal brings an unmistakable sense of confidence to every occasion. Each unit is quality-checked before dispatch, so it arrives in flawless condition.",
        inStock: true,
        stockQuantity: 21
    },
    {
        brand: "Rolex",
        name: "Deepsea",
        category: "Sports",
        gender: "Men",
        price: 4250000,
        image: "https://media.istockphoto.com/id/172129113/photo/watch.webp?a=1&b=1&s=612x612&w=0&k=20&c=vCIpZz4NYezQWQLi4s1UKkuB52l07Huk5zOaZvQKwY0=",
        description: "Legendary wrist presence gives the Deepsea an unmistakably elevated presence. Extreme-depth heritage creates a powerful, uncompromising presence. A refined statement for men with discerning taste. Its refined character makes it a standout choice for any sophisticated collection. A versatile choice that transitions effortlessly from daywear to evening occasions.",
        inStock: true,
        stockQuantity: 2
    },
    {
        brand: "Rolex",
        name: "Sky-Dweller",
        category: "Luxury",
        gender: "Men",
        price: 4950000,
        image: "https://media.istockphoto.com/id/523388852/photo/golden-watch.webp?a=1&b=1&s=612x612&w=0&k=20&c=4kOiXsBfvWpNfXAiUpv1JlO0awj2p9mc03zmJUE2bUc=",
        description: "Iconic swiss prestige defines the Sky-Dweller with effortless distinction. Sophisticated functionality meets an unmistakably executive aesthetic. Designed for men who expect luxury without compromise. Its refined character makes it a standout choice for any sophisticated collection. It remains one of the most requested pieces in its collection this season.",
        inStock: true,
        stockQuantity: 13
    },
    {
        brand: "Rolex",
        name: "Oyster Perpetual 41",
        category: "Classic",
        gender: "Men",
        price: 2400000,
        image: "https://images.unsplash.com/photo-1670404160620-a3a86428560e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cm9sZXglMjB3YXRjaGVzfGVufDB8fDB8fHww",
        description: "The Oyster Perpetual 41 pairs uncompromising horological excellence with a beautifully composed silhouette. Pure, balanced lines deliver understated confidence. Every detail feels considered, confident, and exceptionally premium. Crafted to impress, it combines distinctive style with an enduring premium presence. Paired with premium after-sales support, ownership feels as refined as the design itself.",
        inStock: false,
        stockQuantity: 0
    },
    {
        brand: "Rolex",
        name: "Datejust Wimbledon",
        category: "Luxury",
        gender: "Men",
        price: 2750000,
        image: "https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cm9sZXglMjB3YXRjaGVzfGVufDB8fDB8fHww",
        description: "Legendary wrist presence gives the Datejust Wimbledon an unmistakably elevated presence. Distinctive dial character adds a refined signature touch. A refined statement for men with discerning taste. Crafted to impress, it combines distinctive style with an enduring premium presence. Its balanced proportions make it comfortable for everyday wear without losing presence.",
        inStock: true,
        stockQuantity: 18
    },
    {
        brand: "Michael Kors",
        name: "Bradshaw Mini",
        category: "Luxury",
        gender: "Women",
        price: 105000,
        image: "https://dreamspakistan.com/cdn/shop/files/73845.png?v=1782286894&width=330",
        description: "Modern fashion luxury defines the Bradshaw Mini with effortless distinction. Polished fashion details create a confident designer statement. Designed for women who expect luxury without compromise. Crafted to impress, it combines distinctive style with an enduring premium presence. A timeless investment piece that only grows more distinguished with age.",
        inStock: true,
        stockQuantity: 10
    },
    {
        brand: "Michael Kors",
        name: "Parker",
        category: "Classic",
        gender: "Women",
        price: 98000,
        image: "https://dreamspakistan.com/cdn/shop/files/73833.png?v=1782286894&width=330",
        description: "The Parker pairs polished metropolitan glamour with a beautifully composed silhouette. Graceful detailing keeps the look effortlessly polished. Every detail feels considered, confident, and exceptionally premium. A sophisticated finishing touch makes this timepiece especially memorable on the wrist. It ships in a signature presentation box, ready to gift or wear straight away.",
        inStock: true,
        stockQuantity: 18
    },
    {
        brand: "Michael Kors",
        name: "Pyper",
        category: "Classic",
        gender: "Women",
        price: 92000,
        image: "https://dreamspakistan.com/cdn/shop/files/71837.png?v=1782286895&width=330",
        description: "Distinctive designer elegance gives the Pyper an unmistakably elevated presence. Minimalist charm brings a sleek, feminine finish. A refined statement for women with discerning taste. Its timeless appeal brings an unmistakable sense of confidence to every occasion. Backed by an official warranty, it's a piece built to be worn for years to come.",
        inStock: false,
        stockQuantity: 0
    },
    {
        brand: "Michael Kors",
        name: "Darci",
        category: "Luxury",
        gender: "Women",
        price: 110000,
        image: "https://dreamspakistan.com/cdn/shop/files/71832.png?v=1782130943&width=330",
        description: "Modern fashion luxury defines the Darci with effortless distinction. Glamorous detailing catches the light with elegant confidence. Designed for women who expect luxury without compromise. Its timeless appeal brings an unmistakable sense of confidence to every occasion. Each unit is quality-checked before dispatch, so it arrives in flawless condition.",
        inStock: true,
        stockQuantity: 22
    },
    {
        brand: "Michael Kors",
        name: "Sofie",
        category: "Classic",
        gender: "Women",
        price: 95000,
        image: "https://dreamspakistan.com/cdn/shop/files/70607.png?v=1782130943&width=330",
        description: "The Sofie pairs polished metropolitan glamour with a beautifully composed silhouette. Balanced proportions create a quietly luxurious everyday statement. Every detail feels considered, confident, and exceptionally premium. A sophisticated finishing touch makes this timepiece especially memorable on the wrist. A versatile choice that transitions effortlessly from daywear to evening occasions.",
        inStock: true,
        stockQuantity: 19
    },
    {
        brand: "Michael Kors",
        name: "Lexington Mini",
        category: "Classic",
        gender: "Women",
        price: 102000,
        image: "https://dreamspakistan.com/cdn/shop/files/62259.png?v=1782130942&width=330",
        description: "Distinctive designer elegance gives the Lexington Mini an unmistakably elevated presence. Metropolitan styling gives the wrist a confident designer edge. A refined statement for women with discerning taste. A sophisticated finishing touch makes this timepiece especially memorable on the wrist. It remains one of the most requested pieces in its collection this season.",
        inStock: true,
        stockQuantity: 7
    },
    {
        brand: "Michael Kors",
        name: "Runway Pavé",
        category: "Luxury",
        gender: "Women",
        price: 125000,
        image: "https://dreamspakistan.com/cdn/shop/files/51728.png?v=1782130940&width=330",
        description: "Modern fashion luxury defines the Runway Pavé with effortless distinction. Statement glamour arrives with unmistakable fashion presence. Designed for women who expect luxury without compromise. Its timeless appeal brings an unmistakable sense of confidence to every occasion. Paired with premium after-sales support, ownership feels as refined as the design itself.",
        inStock: true,
        stockQuantity: 18
    },
    {
        brand: "Michael Kors",
        name: "Portia",
        category: "Luxury",
        gender: "Women",
        price: 108000,
        image: "https://dreamspakistan.com/cdn/shop/files/51710.png?v=1782130942&width=330",
        description: "The Portia pairs polished metropolitan glamour with a beautifully composed silhouette. Refined femininity shines through every polished detail. Every detail feels considered, confident, and exceptionally premium. Its timeless appeal brings an unmistakable sense of confidence to every occasion. Its balanced proportions make it comfortable for everyday wear without losing presence.",
        inStock: true,
        stockQuantity: 19
    },
    {
        brand: "Michael Kors",
        name: "Jaryn",
        category: "Classic",
        gender: "Women",
        price: 97000,
        image: "https://dreamspakistan.com/cdn/shop/files/51693.png?v=1782130943&width=330",
        description: "Distinctive designer elegance gives the Jaryn an unmistakably elevated presence. Clean sophistication makes it beautifully versatile. A refined statement for women with discerning taste. Its refined character makes it a standout choice for any sophisticated collection. A timeless investment piece that only grows more distinguished with age.",
        inStock: false,
        stockQuantity: 0
    },
    {
        brand: "Michael Kors",
        name: "Darci Gold",
        category: "Luxury",
        gender: "Women",
        price: 118000,
        image: "https://dreamspakistan.com/cdn/shop/files/51692.png?v=1782130942&width=330",
        description: "Modern fashion luxury defines the Darci Gold with effortless distinction. Glamorous detailing catches the light with elegant confidence. Designed for women who expect luxury without compromise. A sophisticated finishing touch makes this timepiece especially memorable on the wrist. It ships in a signature presentation box, ready to gift or wear straight away.",
        inStock: true,
        stockQuantity: 22
    },
    {
        brand: "Citizen Eco-Drive",
        name: "Corso",
        category: "Classic",
        gender: "Men",
        price: 95000,
        image: "https://citizenwatch.widen.net/content/f6cmiphib1/webp",
        description: "The Corso pairs refined Japanese engineering with a beautifully composed silhouette. Classic balance delivers dependable elegance from day to night. Every detail feels considered, confident, and exceptionally premium. Its timeless appeal brings an unmistakable sense of confidence to every occasion. Backed by an official warranty, it's a piece built to be worn for years to come.",
        inStock: true,
        stockQuantity: 25
    },
    {
        brand: "Citizen Eco-Drive",
        name: "Brycen Chronograph",
        category: "Sports",
        gender: "Men",
        price: 115000,
        image: "https://citizenwatch.widen.net/content/e0l1gkwyea/webp",
        description: "Effortless light-powered performance gives the Brycen Chronograph an unmistakably elevated presence. Chronograph energy adds sporty precision and modern attitude. A refined statement for men with discerning taste. Crafted to impress, it combines distinctive style with an enduring premium presence. Each unit is quality-checked before dispatch, so it arrives in flawless condition.",
        inStock: true,
        stockQuantity: 19
    },
    {
        brand: "Citizen Eco-Drive",
        name: "Promaster Diver",
        category: "Sports",
        gender: "Men",
        price: 145000,
        image: "https://citizenwatch.widen.net/content/lzdvbvmvwm/webp",
        description: "Innovative everyday precision defines the Promaster Diver with effortless distinction. Adventure-driven design brings serious diving character to the wrist. Designed for men who expect luxury without compromise. Its refined character makes it a standout choice for any sophisticated collection. A versatile choice that transitions effortlessly from daywear to evening occasions.",
        inStock: true,
        stockQuantity: 12
    },
    {
        brand: "Citizen Eco-Drive",
        name: "Promaster Skyhawk",
        category: "Sports",
        gender: "Men",
        price: 155000,
        image: "https://citizenwatch.widen.net/content/xyt27kzgdd/webp",
        description: "The Promaster Skyhawk pairs refined Japanese engineering with a beautifully composed silhouette. Aviation-inspired functionality makes the profile confidently distinctive. Every detail feels considered, confident, and exceptionally premium. Its refined character makes it a standout choice for any sophisticated collection. It remains one of the most requested pieces in its collection this season.",
        inStock: true,
        stockQuantity: 6
    },
    {
        brand: "Citizen Eco-Drive",
        name: "Paradex",
        category: "Classic",
        gender: "Men",
        price: 108000,
        image: "https://citizenwatch.widen.net/content/thxpu5c2rt/webp",
        description: "Effortless light-powered performance gives the Paradex an unmistakably elevated presence. Contemporary lines create a fresh, polished impression. A refined statement for men with discerning taste. A sophisticated finishing touch makes this timepiece especially memorable on the wrist. Paired with premium after-sales support, ownership feels as refined as the design itself.",
        inStock: true,
        stockQuantity: 8
    },
    {
        brand: "Citizen Eco-Drive",
        name: "Stiletto",
        category: "Classic",
        gender: "Men",
        price: 125000,
        image: "https://citizenwatch.widen.net/content/ixoa3nehvq/webp",
        description: "Innovative everyday precision defines the Stiletto with effortless distinction. Ultra-slim refinement gives the wrist an effortlessly sleek profile. Designed for men who expect luxury without compromise. A sophisticated finishing touch makes this timepiece especially memorable on the wrist. Its balanced proportions make it comfortable for everyday wear without losing presence.",
        inStock: false,
        stockQuantity: 0
    },
    {
        brand: "Citizen Eco-Drive",
        name: "Calendrier",
        category: "Classic",
        gender: "Men",
        price: 118000,
        image: "https://citizenwatch.widen.net/content/onrw9ptrhx/webp",
        description: "The Calendrier pairs refined Japanese engineering with a beautifully composed silhouette. Calendar detailing adds useful sophistication to its elegant design. Every detail feels considered, confident, and exceptionally premium. Its refined character makes it a standout choice for any sophisticated collection. A timeless investment piece that only grows more distinguished with age.",
        inStock: true,
        stockQuantity: 16
    },
    {
        brand: "Citizen Eco-Drive",
        name: "Tsuyosa",
        category: "Luxury",
        gender: "Men",
        price: 132000,
        image: "https://citizenwatch.widen.net/content/zxni1lsqmi/webp",
        description: "Effortless light-powered performance gives the Tsuyosa an unmistakably elevated presence. Sport-luxury styling creates a bold contemporary signature. A refined statement for men with discerning taste. Its refined character makes it a standout choice for any sophisticated collection. It ships in a signature presentation box, ready to gift or wear straight away.",
        inStock: true,
        stockQuantity: 24
    },
    {
        brand: "Citizen Eco-Drive",
        name: "Super Titanium",
        category: "Sports",
        gender: "Men",
        price: 145000,
        image: "https://citizenwatch.widen.net/content/zxfdgkrhby/webp",
        description: "Innovative everyday precision defines the Super Titanium with effortless distinction. Lightweight strength delivers comfort with premium presence. Designed for men who expect luxury without compromise. A sophisticated finishing touch makes this timepiece especially memorable on the wrist. Backed by an official warranty, it's a piece built to be worn for years to come.",
        inStock: true,
        stockQuantity: 20
    },
    {
        brand: "Citizen Eco-Drive",
        name: "Nighthawk",
        category: "Sports",
        gender: "Men",
        price: 128000,
        image: "https://citizenwatch.widen.net/content/or0hltjx6o/webp",
        description: "The Nighthawk pairs refined Japanese engineering with a beautifully composed silhouette. Dark aviation character creates a striking, confident silhouette. Every detail feels considered, confident, and exceptionally premium. Its refined character makes it a standout choice for any sophisticated collection. Each unit is quality-checked before dispatch, so it arrives in flawless condition.",
        inStock: true,
        stockQuantity: 4
    },
    {
        brand: "Citizen Eco-Drive",
        name: "Silhouette Crystal",
        category: "Luxury",
        gender: "Women",
        price: 98000,
        image: "https://citizenwatch.widen.net/content/9fbzbvngtv/webp",
        description: "Effortless light-powered performance gives the Silhouette Crystal an unmistakably elevated presence. Elegant proportions create an exceptionally graceful wrist presence. A refined statement for women with discerning taste. Crafted to impress, it combines distinctive style with an enduring premium presence. A versatile choice that transitions effortlessly from daywear to evening occasions.",
        inStock: true,
        stockQuantity: 6
    },
    {
        brand: "Citizen Eco-Drive",
        name: "Calendrier Ladies",
        category: "Classic",
        gender: "Women",
        price: 105000,
        image: "https://citizenwatch.widen.net/content/qa5avljtx9/webp",
        description: "Innovative everyday precision defines the Calendrier Ladies with effortless distinction. Calendar detailing adds useful sophistication to its elegant design. Designed for women who expect luxury without compromise. Its refined character makes it a standout choice for any sophisticated collection. It remains one of the most requested pieces in its collection this season.",
        inStock: true,
        stockQuantity: 5
    },
    {
        brand: "Citizen Eco-Drive",
        name: "Corso Ladies",
        category: "Classic",
        gender: "Women",
        price: 92000,
        image: "https://citizenwatch.widen.net/content/prf9iz8mnz/webp",
        description: "The Corso Ladies pairs refined Japanese engineering with a beautifully composed silhouette. Graceful proportions deliver timeless feminine sophistication. Every detail feels considered, confident, and exceptionally premium. A sophisticated finishing touch makes this timepiece especially memorable on the wrist. Paired with premium after-sales support, ownership feels as refined as the design itself.",
        inStock: true,
        stockQuantity: 14
    },
    {
        brand: "Citizen Eco-Drive",
        name: "Earl Grey",
        category: "Classic",
        gender: "Women",
        price: 85000,
        image: "https://citizenwatch.widen.net/content/ihasmrgod8/webp",
        description: "Effortless light-powered performance gives the Earl Grey an unmistakably elevated presence. Distinctive detailing gives the Earl Grey a memorable presence. A refined statement for women with discerning taste. Crafted to impress, it combines distinctive style with an enduring premium presence. Its balanced proportions make it comfortable for everyday wear without losing presence.",
        inStock: false,
        stockQuantity: 0
    },
    {
        brand: "Citizen Eco-Drive",
        name: "Stiletto Ladies",
        category: "Luxury",
        gender: "Women",
        price: 112000,
        image: "https://citizenwatch.widen.net/content/cbrzjchctu/webp",
        description: "Innovative everyday precision defines the Stiletto Ladies with effortless distinction. Ultra-slim refinement gives the wrist an effortlessly sleek profile. Designed for women who expect luxury without compromise. A sophisticated finishing touch makes this timepiece especially memorable on the wrist. A timeless investment piece that only grows more distinguished with age.",
        inStock: true,
        stockQuantity: 25
    },
    {
        brand: "Citizen Eco-Drive",
        name: "Chandler Ladies",
        category: "Classic",
        gender: "Women",
        price: 88000,
        image: "https://citizenwatch.widen.net/content/a4xgbglzjx/webp",
        description: "The Chandler Ladies pairs refined Japanese engineering with a beautifully composed silhouette. Graceful proportions deliver timeless feminine sophistication. Every detail feels considered, confident, and exceptionally premium. Crafted to impress, it combines distinctive style with an enduring premium presence. It ships in a signature presentation box, ready to gift or wear straight away.",
        inStock: true,
        stockQuantity: 11
    },
    {
        brand: "Citizen Eco-Drive",
        name: "Eco-Drive Diamond",
        category: "Luxury",
        gender: "Women",
        price: 125000,
        image: "https://citizenwatch.widen.net/content/un6ie8lgpz/webp",
        description: "Effortless light-powered performance gives the Eco-Drive Diamond an unmistakably elevated presence. Brilliant accents add a subtle touch of luxury. A refined statement for women with discerning taste. Crafted to impress, it combines distinctive style with an enduring premium presence. Backed by an official warranty, it's a piece built to be worn for years to come.",
        inStock: true,
        stockQuantity: 12
    },
    {
        brand: "Citizen Eco-Drive",
        name: "Silhouette Gold",
        category: "Luxury",
        gender: "Women",
        price: 115000,
        image: "https://citizenwatch.widen.net/content/lqlkglysah/webp",
        description: "Innovative everyday precision defines the Silhouette Gold with effortless distinction. Elegant proportions create an exceptionally graceful wrist presence. Designed for women who expect luxury without compromise. Crafted to impress, it combines distinctive style with an enduring premium presence. Each unit is quality-checked before dispatch, so it arrives in flawless condition.",
        inStock: true,
        stockQuantity: 19
    },
    {
        brand: "Citizen Eco-Drive",
        name: "Corso Pearl",
        category: "Luxury",
        gender: "Women",
        price: 108000,
        image: "https://citizenwatch.widen.net/content/cprn9cmkjg/webp",
        description: "The Corso Pearl pairs refined Japanese engineering with a beautifully composed silhouette. Pearl-inspired elegance adds a graceful, luminous character. Every detail feels considered, confident, and exceptionally premium. Crafted to impress, it combines distinctive style with an enduring premium presence. A versatile choice that transitions effortlessly from daywear to evening occasions.",
        inStock: true,
        stockQuantity: 3
    },
    {
        brand: "Citizen Eco-Drive",
        name: "Luna",
        category: "Classic",
        gender: "Women",
        price: 90000,
        image: "https://citizenwatch.widen.net/content/g98pfrlk3s/webp",
        description: "Effortless light-powered performance gives the Luna an unmistakably elevated presence. Soft contemporary lines bring a luminous feminine charm. A refined statement for women with discerning taste. A sophisticated finishing touch makes this timepiece especially memorable on the wrist. It remains one of the most requested pieces in its collection this season.",
        inStock: true,
        stockQuantity: 9
    },
    {
        brand: "Bulova",
        name: "Precisionist",
        category: "Luxury",
        gender: "Men",
        price: 245000,
        image: "https://monicajewelers.com/cdn/shop/files/97B235.jpg?v=1751404392&width=533",
        description: "American horological character defines the Precisionist with effortless distinction. Precision-led engineering gives the design remarkable confidence. Designed for men who expect luxury without compromise. Its refined character makes it a standout choice for any sophisticated collection. Paired with premium after-sales support, ownership feels as refined as the design itself.",
        inStock: true,
        stockQuantity: 22
    },
    {
        brand: "Bulova",
        name: "Lunar Pilot",
        category: "Sports",
        gender: "Men",
        price: 285000,
        image: "https://monicajewelers.com/cdn/shop/files/96B439.jpg?v=1737616281&width=533",
        description: "The Lunar Pilot pairs precision-led sophistication with a beautifully composed silhouette. Space-racing heritage adds a legendary sense of adventure. Every detail feels considered, confident, and exceptionally premium. A sophisticated finishing touch makes this timepiece especially memorable on the wrist. Its balanced proportions make it comfortable for everyday wear without losing presence.",
        inStock: false,
        stockQuantity: 0
    },
    {
        brand: "Bulova",
        name: "Marine Star",
        category: "Sports",
        gender: "Men",
        price: 225000,
        image: "https://monicajewelers.com/cdn/shop/products/96B329.jpg?v=1659685807&width=533",
        description: "Bold heritage craftsmanship gives the Marine Star an unmistakably elevated presence. Maritime character meets polished modern performance. A refined statement for men with discerning taste. Its timeless appeal brings an unmistakable sense of confidence to every occasion. A timeless investment piece that only grows more distinguished with age.",
        inStock: true,
        stockQuantity: 10
    },
    {
        brand: "Bulova",
        name: "Ambassador",
        category: "Luxury",
        gender: "Men",
        price: 265000,
        image: "https://monicajewelers.com/cdn/shop/products/98C123_1024x1024_0eeede18-ea80-47ee-9bd5-2a09fbb657a0.jpg?v=1503785009&width=533",
        description: "American horological character defines the Ambassador with effortless distinction. Substantial proportions create a commanding executive presence. Designed for men who expect luxury without compromise. Its timeless appeal brings an unmistakable sense of confidence to every occasion. It ships in a signature presentation box, ready to gift or wear straight away.",
        inStock: true,
        stockQuantity: 22
    },
    {
        brand: "Bulova",
        name: "Wilton Automatic",
        category: "Classic",
        gender: "Men",
        price: 195000,
        image: "https://monicajewelers.com/cdn/shop/files/98A330_1.jpg?v=1784933341&width=533",
        description: "The Wilton Automatic pairs precision-led sophistication with a beautifully composed silhouette. Mechanical character adds warmth to its timeless elegance. Every detail feels considered, confident, and exceptionally premium. Its refined character makes it a standout choice for any sophisticated collection. Backed by an official warranty, it's a piece built to be worn for years to come.",
        inStock: true,
        stockQuantity: 10
    },
    {
        brand: "Bulova",
        name: "Classic Automatic",
        category: "Classic",
        gender: "Men",
        price: 145000,
        image: "https://monicajewelers.com/cdn/shop/files/98A330_1.jpg?v=1784933341&width=533",
        description: "Bold heritage craftsmanship gives the Classic Automatic an unmistakably elevated presence. Mechanical character adds warmth to its timeless elegance. A refined statement for men with discerning taste. Its refined character makes it a standout choice for any sophisticated collection. Each unit is quality-checked before dispatch, so it arrives in flawless condition.",
        inStock: true,
        stockQuantity: 22
    },
    {
        brand: "Bulova",
        name: "Surveyor",
        category: "Classic",
        gender: "Men",
        price: 135000,
        image: "https://monicajewelers.com/cdn/shop/files/96C142.webp?v=1784933087&width=533",
        description: "American horological character defines the Surveyor with effortless distinction. Versatile proportions make it a polished daily companion. Designed for men who expect luxury without compromise. Crafted to impress, it combines distinctive style with an enduring premium presence. A versatile choice that transitions effortlessly from daywear to evening occasions.",
        inStock: true,
        stockQuantity: 15
    },
    {
        brand: "Bulova",
        name: "Sutton Automatic",
        category: "Classic",
        gender: "Men",
        price: 155000,
        image: "https://monicajewelers.com/cdn/shop/files/97B236.jpg?v=1751404536&width=533",
        description: "The Sutton Automatic pairs precision-led sophistication with a beautifully composed silhouette. Mechanical character adds warmth to its timeless elegance. Every detail feels considered, confident, and exceptionally premium. Its refined character makes it a standout choice for any sophisticated collection. It remains one of the most requested pieces in its collection this season.",
        inStock: true,
        stockQuantity: 20
    },
    {
        brand: "Bulova",
        name: "Devil Diver",
        category: "Sports",
        gender: "Men",
        price: 235000,
        image: "https://monicajewelers.com/cdn/shop/files/IMG-2924.webp?v=1746136053&width=533",
        description: "Bold heritage craftsmanship gives the Devil Diver an unmistakably elevated presence. Bold dive heritage delivers unmistakable sporting character. A refined statement for men with discerning taste. Crafted to impress, it combines distinctive style with an enduring premium presence. Paired with premium after-sales support, ownership feels as refined as the design itself.",
        inStock: false,
        stockQuantity: 0
    },
    {
        brand: "Bulova",
        name: "Hack Watch",
        category: "Vintage",
        gender: "Men",
        price: 165000,
        image: "https://monicajewelers.com/cdn/shop/files/96A310.jpg?v=1738567418&width=533",
        description: "American horological character defines the Hack Watch with effortless distinction. Military-inspired heritage gives the piece authentic vintage appeal. Designed for men who expect luxury without compromise. Crafted to impress, it combines distinctive style with an enduring premium presence. Its balanced proportions make it comfortable for everyday wear without losing presence.",
        inStock: false,
        stockQuantity: 0
    },
    {
        brand: "Bulova",
        name: "Sutton",
        category: "Luxury",
        gender: "Women",
        price: 215000,
        image: "https://monicajewelers.com/cdn/shop/products/96R212_499.jpg?v=1493437651",
        description: "The Sutton pairs precision-led sophistication with a beautifully composed silhouette. Refined finishing creates an elegant, contemporary profile. Every detail feels considered, confident, and exceptionally premium. Its timeless appeal brings an unmistakable sense of confidence to every occasion. A timeless investment piece that only grows more distinguished with age.",
        inStock: true,
        stockQuantity: 5
    },
    {
        brand: "Bulova",
        name: "Crystal Sutton",
        category: "Luxury",
        gender: "Women",
        price: 235000,
        image: "https://monicajewelers.com/cdn/shop/files/97B236.jpg?v=1751404536",
        description: "Bold heritage craftsmanship gives the Crystal Sutton an unmistakably elevated presence. Refined finishing creates an elegant, contemporary profile. A refined statement for women with discerning taste. Its refined character makes it a standout choice for any sophisticated collection. It ships in a signature presentation box, ready to gift or wear straight away.",
        inStock: true,
        stockQuantity: 13
    },
    {
        brand: "Bulova",
        name: "Rhapsody",
        category: "Luxury",
        gender: "Women",
        price: 225000,
        image: "https://monicajewelers.com/cdn/shop/files/3ED461D7-E35B-45C3-9177-47CA06665869.jpg?v=1743275448",
        description: "American horological character defines the Rhapsody with effortless distinction. Delicate detailing creates a graceful, sophisticated rhythm. Designed for women who expect luxury without compromise. A sophisticated finishing touch makes this timepiece especially memorable on the wrist. Backed by an official warranty, it's a piece built to be worn for years to come.",
        inStock: true,
        stockQuantity: 16
    },
    {
        brand: "Bulova",
        name: "Classic Diamond",
        category: "Luxury",
        gender: "Women",
        price: 255000,
        image: "https://monicajewelers.com/cdn/shop/files/97P173.jpg?v=1738820537&width=533",
        description: "The Classic Diamond pairs precision-led sophistication with a beautifully composed silhouette. Brilliant accents add a subtle touch of luxury. Every detail feels considered, confident, and exceptionally premium. Its refined character makes it a standout choice for any sophisticated collection. Each unit is quality-checked before dispatch, so it arrives in flawless condition.",
        inStock: false,
        stockQuantity: 0
    },
    {
        brand: "Bulova",
        name: "Rubaiyat",
        category: "Luxury",
        gender: "Women",
        price: 240000,
        image: "https://monicajewelers.com/cdn/shop/files/98R255.jpg?v=1738820186&width=533",
        description: "Bold heritage craftsmanship gives the Rubaiyat an unmistakably elevated presence. Distinctive heritage styling makes the silhouette beautifully memorable. A refined statement for women with discerning taste. A sophisticated finishing touch makes this timepiece especially memorable on the wrist. A versatile choice that transitions effortlessly from daywear to evening occasions.",
        inStock: true,
        stockQuantity: 18
    },
    {
        brand: "Bulova",
        name: "Surveyor Lady",
        category: "Classic",
        gender: "Women",
        price: 135000,
        image: "https://monicajewelers.com/cdn/shop/files/97L181.jpg?v=1738819813&width=533",
        description: "American horological character defines the Surveyor Lady with effortless distinction. Versatile proportions make it a polished daily companion. Designed for women who expect luxury without compromise. Crafted to impress, it combines distinctive style with an enduring premium presence. It remains one of the most requested pieces in its collection this season.",
        inStock: true,
        stockQuantity: 5
    },
    {
        brand: "Bulova",
        name: "Classic Lady",
        category: "Classic",
        gender: "Women",
        price: 112000,
        image: "https://monicajewelers.com/cdn/shop/files/96L338.jpg?v=1738819663&width=533",
        description: "The Classic Lady pairs precision-led sophistication with a beautifully composed silhouette. Distinctive detailing gives the Classic Lady a memorable presence. Every detail feels considered, confident, and exceptionally premium. Crafted to impress, it combines distinctive style with an enduring premium presence. Paired with premium after-sales support, ownership feels as refined as the design itself.",
        inStock: true,
        stockQuantity: 18
    },
    {
        brand: "Bulova",
        name: "Marine Star Lady",
        category: "Sports",
        gender: "Women",
        price: 145000,
        image: "https://monicajewelers.com/cdn/shop/files/97R103_150Logo.jpg?v=1738819380&width=533",
        description: "Bold heritage craftsmanship gives the Marine Star Lady an unmistakably elevated presence. Sporting energy is softened by elegant feminine refinement. A refined statement for women with discerning taste. Crafted to impress, it combines distinctive style with an enduring premium presence. Its balanced proportions make it comfortable for everyday wear without losing presence.",
        inStock: true,
        stockQuantity: 14
    },
    {
        brand: "Bulova",
        name: "Sutton Rose Gold",
        category: "Luxury",
        gender: "Women",
        price: 245000,
        image: "https://monicajewelers.com/cdn/shop/files/96L329.jpg?v=1738817311&width=533",
        description: "American horological character defines the Sutton Rose Gold with effortless distinction. Warm metallic tones create an instantly luxurious impression. Designed for women who expect luxury without compromise. Its timeless appeal brings an unmistakable sense of confidence to every occasion. A timeless investment piece that only grows more distinguished with age.",
        inStock: true,
        stockQuantity: 22
    },
    {
        brand: "Bulova",
        name: "Sutton Pearl",
        category: "Luxury",
        gender: "Women",
        price: 225000,
        image: "https://monicajewelers.com/cdn/shop/files/98L320.jpg?v=1738649744&width=533",
        description: "The Sutton Pearl pairs precision-led sophistication with a beautifully composed silhouette. Refined finishing creates an elegant, contemporary profile. Every detail feels considered, confident, and exceptionally premium. Its timeless appeal brings an unmistakable sense of confidence to every occasion. It ships in a signature presentation box, ready to gift or wear straight away.",
        inStock: true,
        stockQuantity: 8
    },
    {
        brand: "Omega",
        name: "Speedmaster Moonwatch Professional",
        category: "Luxury",
        gender: "Men",
        price: 2150000,
        image: "https://www.omegawatches.com/media/catalog/product/o/m/omega-speedmaster-racing-co-axial-master-chronometer-chronograph-44-25-mm-32933445104001-eadffe.png?w=230",
        description: "Timeless technical excellence gives the Speedmaster Moonwatch Professional an unmistakably elevated presence. Legendary space heritage gives the chronograph enduring prestige. A refined statement for men with discerning taste. Its refined character makes it a standout choice for any sophisticated collection. Backed by an official warranty, it's a piece built to be worn for years to come.",
        inStock: true,
        stockQuantity: 6
    },
    {
        brand: "Omega",
        name: "Seamaster Diver 300M",
        category: "Sports",
        gender: "Men",
        price: 1680000,
        image: "https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-diver-300m-co-axial-master-chronometer-42-mm-21092422001001-fa8838.png?w=230",
        description: "Prestigious swiss mastery defines the Seamaster Diver 300M with effortless distinction. Ocean-bred performance meets unmistakable Swiss sophistication. Designed for men who expect luxury without compromise. A sophisticated finishing touch makes this timepiece especially memorable on the wrist. Each unit is quality-checked before dispatch, so it arrives in flawless condition.",
        inStock: true,
        stockQuantity: 22
    },
    {
        brand: "Omega",
        name: "Constellation Co-Axial",
        category: "Luxury",
        gender: "Men",
        price: 1420000,
        image: "https://www.omegawatches.com/media/catalog/product/o/m/omega-speedmaster-first-omega-in-space-co-axial-master-chronometer-chronograph-39-7-mm-31030405006001-ee9450.png?w=230",
        description: "The Constellation Co-Axial pairs exceptional mechanical heritage with a beautifully composed silhouette. Distinctive design language creates a refined collector's presence. Every detail feels considered, confident, and exceptionally premium. Its timeless appeal brings an unmistakable sense of confidence to every occasion. A versatile choice that transitions effortlessly from daywear to evening occasions.",
        inStock: true,
        stockQuantity: 16
    },
    {
        brand: "Omega",
        name: "De Ville Prestige",
        category: "Classic",
        gender: "Men",
        price: 1180000,
        image: "https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-railmaster-co-axial-master-chronometer-small-seconds-38-mm-23512382013001-8612b7.png?w=230",
        description: "Timeless technical excellence gives the De Ville Prestige an unmistakably elevated presence. Dress-watch elegance brings quiet luxury to every occasion. A refined statement for men with discerning taste. Its timeless appeal brings an unmistakable sense of confidence to every occasion. It remains one of the most requested pieces in its collection this season.",
        inStock: true,
        stockQuantity: 6
    },
    {
        brand: "Omega",
        name: "Aqua Terra",
        category: "Luxury",
        gender: "Men",
        price: 1550000,
        image: "https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-diver-300m-co-axial-master-chronometer-42-mm-21032422001005-2b286f.png?w=230",
        description: "Prestigious swiss mastery defines the Aqua Terra with effortless distinction. Versatile refinement transitions seamlessly from city to escape. Designed for men who expect luxury without compromise. Its timeless appeal brings an unmistakable sense of confidence to every occasion. Paired with premium after-sales support, ownership feels as refined as the design itself.",
        inStock: true,
        stockQuantity: 1
    },
    {
        brand: "Omega",
        name: "Seamaster Planet Ocean",
        category: "Sports",
        gender: "Men",
        price: 1850000,
        image: "https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-41-mm-22010412101001-4c58ba.png?w=230",
        description: "The Seamaster Planet Ocean pairs exceptional mechanical heritage with a beautifully composed silhouette. Professional dive character meets sophisticated luxury finishing. Every detail feels considered, confident, and exceptionally premium. Its refined character makes it a standout choice for any sophisticated collection. Its balanced proportions make it comfortable for everyday wear without losing presence.",
        inStock: false,
        stockQuantity: 0
    },
    {
        brand: "Omega",
        name: "Speedmaster Racing",
        category: "Sports",
        gender: "Men",
        price: 1720000,
        image: "https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-diver-300m-co-axial-master-chronometer-42-mm-21030422010001-e12e6f.png?w=230",
        description: "Timeless technical excellence gives the Speedmaster Racing an unmistakably elevated presence. Motorsport-inspired energy makes precision feel exhilarating. A refined statement for men with discerning taste. Its timeless appeal brings an unmistakable sense of confidence to every occasion. A timeless investment piece that only grows more distinguished with age.",
        inStock: true,
        stockQuantity: 20
    },
    {
        brand: "Omega",
        name: "Seamaster Heritage",
        category: "Vintage",
        gender: "Men",
        price: 1650000,
        image: "https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-diver-300m-co-axial-master-chronometer-42-mm-21062422010001-3e939d.png?w=230",
        description: "Prestigious swiss mastery defines the Seamaster Heritage with effortless distinction. Ocean-bred performance meets unmistakable Swiss sophistication. Designed for men who expect luxury without compromise. Crafted to impress, it combines distinctive style with an enduring premium presence. It ships in a signature presentation box, ready to gift or wear straight away.",
        inStock: true,
        stockQuantity: 5
    },
    {
        brand: "Omega",
        name: "De Ville Hour Vision",
        category: "Luxury",
        gender: "Men",
        price: 1350000,
        image: "https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-diver-300m-co-axial-master-chronometer-42-mm-21030422003001-5c4934.png?w=230",
        description: "The De Ville Hour Vision pairs exceptional mechanical heritage with a beautifully composed silhouette. Architectural detailing gives the silhouette modern sophistication. Every detail feels considered, confident, and exceptionally premium. A sophisticated finishing touch makes this timepiece especially memorable on the wrist. Backed by an official warranty, it's a piece built to be worn for years to come.",
        inStock: true,
        stockQuantity: 17
    },
    {
        brand: "Omega",
        name: "Constellation Globemaster",
        category: "Luxury",
        gender: "Men",
        price: 1950000,
        image: "https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-41-mm-22010412103005-e57760.png?w=230",
        description: "Timeless technical excellence gives the Constellation Globemaster an unmistakably elevated presence. Distinctive design language creates a refined collector's presence. A refined statement for men with discerning taste. Its refined character makes it a standout choice for any sophisticated collection. Each unit is quality-checked before dispatch, so it arrives in flawless condition.",
        inStock: true,
        stockQuantity: 21
    },
    {
        brand: "Omega",
        name: "Constellation Ladies",
        category: "Luxury",
        gender: "Women",
        price: 1350000,
        image: "https://timeavenue.com/wp-content/uploads/2026/07/Omega-De-Ville-Prestige-434.23.34.20.55-1-600x600.webp",
        description: "Prestigious swiss mastery defines the Constellation Ladies with effortless distinction. Distinctive design language creates a refined collector's presence. Designed for women who expect luxury without compromise. Its refined character makes it a standout choice for any sophisticated collection. A versatile choice that transitions effortlessly from daywear to evening occasions.",
        inStock: true,
        stockQuantity: 2
    },
    {
        brand: "Omega",
        name: "De Ville Trésor",
        category: "Luxury",
        gender: "Women",
        price: 1280000,
        image: "https://timeavenue.com/wp-content/uploads/2026/04/Omega-Constellation-131.15.28.60.11-2-600x600.webp",
        description: "The De Ville Trésor pairs exceptional mechanical heritage with a beautifully composed silhouette. Dress-watch elegance brings quiet luxury to every occasion. Every detail feels considered, confident, and exceptionally premium. Its timeless appeal brings an unmistakable sense of confidence to every occasion. It remains one of the most requested pieces in its collection this season.",
        inStock: true,
        stockQuantity: 25
    },
    {
        brand: "Omega",
        name: "Aqua Terra Shades",
        category: "Luxury",
        gender: "Women",
        price: 1190000,
        image: "https://timeavenue.com/wp-content/uploads/2026/04/Omega-De-Ville-Prestige-424.10.40.20.02-3-600x600.webp",
        description: "Timeless technical excellence gives the Aqua Terra Shades an unmistakably elevated presence. Versatile refinement transitions seamlessly from city to escape. A refined statement for women with discerning taste. Crafted to impress, it combines distinctive style with an enduring premium presence. Paired with premium after-sales support, ownership feels as refined as the design itself.",
        inStock: true,
        stockQuantity: 22
    },
    {
        brand: "Omega",
        name: "Trésor Quartz",
        category: "Classic",
        gender: "Women",
        price: 980000,
        image: "https://timeavenue.com/wp-content/uploads/2026/03/Omega-Seamaster-Aqua-Terra-150m-220.20.30.20.02-1-600x600.webp",
        description: "Prestigious swiss mastery defines the Trésor Quartz with effortless distinction. Understated elegance creates an exceptionally refined feminine statement. Designed for women who expect luxury without compromise. Its timeless appeal brings an unmistakable sense of confidence to every occasion. Its balanced proportions make it comfortable for everyday wear without losing presence.",
        inStock: true,
        stockQuantity: 13
    },
    {
        brand: "Omega",
        name: "Constellation Diamond",
        category: "Luxury",
        gender: "Women",
        price: 1750000,
        image: "https://timeavenue.com/wp-content/uploads/2026/03/Omega-Seamaster-Planet-Ocean-6000m-215.30.46.21.06-1-600x600.webp",
        description: "The Constellation Diamond pairs exceptional mechanical heritage with a beautifully composed silhouette. Distinctive design language creates a refined collector's presence. Every detail feels considered, confident, and exceptionally premium. A sophisticated finishing touch makes this timepiece especially memorable on the wrist. A timeless investment piece that only grows more distinguished with age.",
        inStock: true,
        stockQuantity: 13
    },
    {
        brand: "Omega",
        name: "De Ville Prestige Ladies",
        category: "Classic",
        gender: "Women",
        price: 1120000,
        image: "https://timeavenue.com/wp-content/uploads/2026/03/Omega-Speedmaster-Moonwatch-Professional-310.30.42.50.01-13-600x600.webp",
        description: "Timeless technical excellence gives the De Ville Prestige Ladies an unmistakably elevated presence. Dress-watch elegance brings quiet luxury to every occasion. A refined statement for women with discerning taste. Its timeless appeal brings an unmistakable sense of confidence to every occasion. It ships in a signature presentation box, ready to gift or wear straight away.",
        inStock: false,
        stockQuantity: 0
    },
    {
        brand: "Omega",
        name: "Aqua Terra Pearl",
        category: "Luxury",
        gender: "Women",
        price: 1250000,
        image: "https://timeavenue.com/wp-content/uploads/2026/03/Omega-Seamaster-Aqua-Terra-150m-220.32.41.21.03-6-600x600.webp",
        description: "Prestigious swiss mastery defines the Aqua Terra Pearl with effortless distinction. Versatile refinement transitions seamlessly from city to escape. Designed for women who expect luxury without compromise. A sophisticated finishing touch makes this timepiece especially memorable on the wrist. Backed by an official warranty, it's a piece built to be worn for years to come.",
        inStock: true,
        stockQuantity: 2
    },
    {
        brand: "Omega",
        name: "Constellation Gold",
        category: "Luxury",
        gender: "Women",
        price: 1680000,
        image: "https://timeavenue.com/wp-content/uploads/2026/03/Omega-Seamaster-Aqua-Terra-150m-220.20.30.20.63-8-600x600.webp",
        description: "The Constellation Gold pairs exceptional mechanical heritage with a beautifully composed silhouette. Distinctive design language creates a refined collector's presence. Every detail feels considered, confident, and exceptionally premium. Its timeless appeal brings an unmistakable sense of confidence to every occasion. Each unit is quality-checked before dispatch, so it arrives in flawless condition.",
        inStock: true,
        stockQuantity: 7
    },
    {
        brand: "Omega",
        name: "Trésor Rose Gold",
        category: "Luxury",
        gender: "Women",
        price: 1450000,
        image: "https://timeavenue.com/wp-content/uploads/2026/02/Omega-Seamaster-Planet-Ocean-600m-217.32.42.21.01-14-600x600.webp",
        description: "Timeless technical excellence gives the Trésor Rose Gold an unmistakably elevated presence. Warm metallic tones create an instantly luxurious impression. A refined statement for women with discerning taste. Crafted to impress, it combines distinctive style with an enduring premium presence. A versatile choice that transitions effortlessly from daywear to evening occasions.",
        inStock: true,
        stockQuantity: 4
    },
    {
        brand: "TAG Heuer",
        name: "Carrera Chronograph",
        category: "Luxury",
        gender: "Men",
        price: 1120000,
        image: "https://dreamspakistan.com/cdn/shop/files/80589_2.png?v=1782802698&width=330",
        description: "Dynamic swiss performance defines the Carrera Chronograph with effortless distinction. Racing heritage turns precision into a confident statement. Designed for men who expect luxury without compromise. Its refined character makes it a standout choice for any sophisticated collection. It remains one of the most requested pieces in its collection this season.",
        inStock: true,
        stockQuantity: 2
    },
    {
        brand: "TAG Heuer",
        name: "Monaco Chronograph",
        category: "Luxury",
        gender: "Men",
        price: 1250000,
        image: "https://dreamspakistan.com/cdn/shop/files/80588.png?v=1781180147&width=330",
        description: "The Monaco Chronograph pairs motorsport-inspired sophistication with a beautifully composed silhouette. Iconic geometry delivers unmistakable individuality and racing spirit. Every detail feels considered, confident, and exceptionally premium. Its refined character makes it a standout choice for any sophisticated collection. Paired with premium after-sales support, ownership feels as refined as the design itself.",
        inStock: false,
        stockQuantity: 0
    },
    {
        brand: "TAG Heuer",
        name: "Aquaracer Professional 300",
        category: "Sports",
        gender: "Men",
        price: 980000,
        image: "https://dreamspakistan.com/cdn/shop/files/80588.png?v=1781180147&width=330",
        description: "Bold contemporary precision gives the Aquaracer Professional 300 an unmistakably elevated presence. Aquatic performance meets polished Swiss luxury with confidence. A refined statement for men with discerning taste. Its timeless appeal brings an unmistakable sense of confidence to every occasion. Its balanced proportions make it comfortable for everyday wear without losing presence.",
        inStock: true,
        stockQuantity: 18
    },
    {
        brand: "TAG Heuer",
        name: "Formula 1 Chronograph",
        category: "Sports",
        gender: "Men",
        price: 720000,
        image: "https://dreamspakistan.com/cdn/shop/files/80505.png?v=1778486318&width=330",
        description: "Dynamic swiss performance defines the Formula 1 Chronograph with effortless distinction. Motorsport energy brings youthful precision to the wrist. Designed for men who expect luxury without compromise. Its timeless appeal brings an unmistakable sense of confidence to every occasion. A timeless investment piece that only grows more distinguished with age.",
        inStock: false,
        stockQuantity: 0
    },
    {
        brand: "TAG Heuer",
        name: "Autavia Chronograph",
        category: "Vintage",
        gender: "Men",
        price: 1050000,
        image: "https://dreamspakistan.com/cdn/shop/files/80504.png?v=1778486318&width=330",
        description: "The Autavia Chronograph pairs motorsport-inspired sophistication with a beautifully composed silhouette. Heritage racing character adds depth and authenticity. Every detail feels considered, confident, and exceptionally premium. A sophisticated finishing touch makes this timepiece especially memorable on the wrist. It ships in a signature presentation box, ready to gift or wear straight away.",
        inStock: true,
        stockQuantity: 1
    },
    {
        brand: "TAG Heuer",
        name: "Monaco Gulf",
        category: "Luxury",
        gender: "Men",
        price: 1380000,
        image: "https://dreamspakistan.com/cdn/shop/files/80503.png?v=1778486318&width=330",
        description: "Bold contemporary precision gives the Monaco Gulf an unmistakably elevated presence. Iconic geometry delivers unmistakable individuality and racing spirit. A refined statement for men with discerning taste. A sophisticated finishing touch makes this timepiece especially memorable on the wrist. Backed by an official warranty, it's a piece built to be worn for years to come.",
        inStock: false,
        stockQuantity: 0
    },
    {
        brand: "TAG Heuer",
        name: "Carrera Calibre 16",
        category: "Luxury",
        gender: "Men",
        price: 1180000,
        image: "https://dreamspakistan.com/cdn/shop/files/80502.png?v=1778486318&width=330",
        description: "Dynamic swiss performance defines the Carrera Calibre 16 with effortless distinction. Racing heritage turns precision into a confident statement. Designed for men who expect luxury without compromise. Crafted to impress, it combines distinctive style with an enduring premium presence. Each unit is quality-checked before dispatch, so it arrives in flawless condition.",
        inStock: true,
        stockQuantity: 13
    },
    {
        brand: "TAG Heuer",
        name: "Carrera Lady",
        category: "Luxury",
        gender: "Women",
        price: 850000,
        image: "https://dreamspakistan.com/cdn/shop/files/72704.png?v=1762324856&width=330",
        description: "The Carrera Lady pairs motorsport-inspired sophistication with a beautifully composed silhouette. Racing heritage turns precision into a confident statement. Every detail feels considered, confident, and exceptionally premium. Its timeless appeal brings an unmistakable sense of confidence to every occasion. A versatile choice that transitions effortlessly from daywear to evening occasions.",
        inStock: false,
        stockQuantity: 0
    },
    {
        brand: "TAG Heuer",
        name: "Link Ladies",
        category: "Classic",
        gender: "Women",
        price: 790000,
        image: "https://dreamspakistan.com/cdn/shop/files/67940.png?v=1766211246&width=330",
        description: "Bold contemporary precision gives the Link Ladies an unmistakably elevated presence. Graceful proportions deliver timeless feminine sophistication. A refined statement for women with discerning taste. A sophisticated finishing touch makes this timepiece especially memorable on the wrist. It remains one of the most requested pieces in its collection this season.",
        inStock: true,
        stockQuantity: 12
    },
    {
        brand: "TAG Heuer",
        name: "Aquaracer Diamond",
        category: "Luxury",
        gender: "Women",
        price: 895000,
        image: "https://dreamspakistan.com/cdn/shop/files/67937.png?v=1765785544&width=330",
        description: "Dynamic swiss performance defines the Aquaracer Diamond with effortless distinction. Aquatic performance meets polished Swiss luxury with confidence. Designed for women who expect luxury without compromise. Its timeless appeal brings an unmistakable sense of confidence to every occasion. Paired with premium after-sales support, ownership feels as refined as the design itself.",
        inStock: true,
        stockQuantity: 16
    },
    {
        brand: "TAG Heuer",
        name: "Carrera Rose Gold",
        category: "Luxury",
        gender: "Women",
        price: 980000,
        image: "https://dreamspakistan.com/cdn/shop/files/67923.png?v=1766212132&width=330",
        description: "The Carrera Rose Gold pairs motorsport-inspired sophistication with a beautifully composed silhouette. Warm metallic tones create an instantly luxurious impression. Every detail feels considered, confident, and exceptionally premium. Its refined character makes it a standout choice for any sophisticated collection. Its balanced proportions make it comfortable for everyday wear without losing presence.",
        inStock: false,
        stockQuantity: 0
    },
    {
        brand: "TAG Heuer",
        name: "Formula 1 Pink",
        category: "Sports",
        gender: "Women",
        price: 720000,
        image: "https://dreamspakistan.com/cdn/shop/files/62529.png?v=1766216608&width=330",
        description: "Bold contemporary precision gives the Formula 1 Pink an unmistakably elevated presence. Motorsport energy brings youthful precision to the wrist. A refined statement for women with discerning taste. Its refined character makes it a standout choice for any sophisticated collection. A timeless investment piece that only grows more distinguished with age.",
        inStock: true,
        stockQuantity: 15
    },
    {
        brand: "TAG Heuer",
        name: "Link Diamond",
        category: "Luxury",
        gender: "Women",
        price: 925000,
        image: "https://dreamspakistan.com/cdn/shop/files/63311.png?v=1756381650&width=330",
        description: "Dynamic swiss performance defines the Link Diamond with effortless distinction. Brilliant accents add a subtle touch of luxury. Designed for women who expect luxury without compromise. Crafted to impress, it combines distinctive style with an enduring premium presence. It ships in a signature presentation box, ready to gift or wear straight away.",
        inStock: true,
        stockQuantity: 10
    },
    {
        brand: "Longines",
        name: "Master Collection",
        category: "Luxury",
        gender: "Men",
        price: 690000,
        image: "https://api.ecom.longines.com/media/catalog/product/w/a/watch-collection-longines-master-collection-l2-450-4-87-2-2bae45-hero.png?w=384",
        description: "The Master Collection pairs quietly luxurious refinement with a beautifully composed silhouette. Traditional craftsmanship is expressed with sophisticated modern balance. Every detail feels considered, confident, and exceptionally premium. Its timeless appeal brings an unmistakable sense of confidence to every occasion. Backed by an official warranty, it's a piece built to be worn for years to come.",
        inStock: false,
        stockQuantity: 0
    },
    {
        brand: "Longines",
        name: "Spirit",
        category: "Luxury",
        gender: "Men",
        price: 615000,
        image: "https://api.ecom.longines.com/media/catalog/product/w/a/watch-collection-longines-master-collection-l2-449-5-87-2-d2ba91-hero.png?w=384",
        description: "Distinguished traditional craftsmanship gives the Spirit an unmistakably elevated presence. Aviation heritage gives the design adventurous elegance. A refined statement for men with discerning taste. Crafted to impress, it combines distinctive style with an enduring premium presence. Each unit is quality-checked before dispatch, so it arrives in flawless condition.",
        inStock: false,
        stockQuantity: 0
    },
    {
        brand: "Longines",
        name: "HydroConquest",
        category: "Sports",
        gender: "Men",
        price: 545000,
        image: "https://api.ecom.longines.com/media/catalog/product/w/a/watch-collection-conquest-l3-750-4-92-6-8ebe7c-hero.png?w=384",
        description: "Elegant swiss heritage defines the HydroConquest with effortless distinction. Sporting confidence meets refined aquatic versatility. Designed for men who expect luxury without compromise. A sophisticated finishing touch makes this timepiece especially memorable on the wrist. A versatile choice that transitions effortlessly from daywear to evening occasions.",
        inStock: true,
        stockQuantity: 9
    },
    {
        brand: "Longines",
        name: "Conquest",
        category: "Classic",
        gender: "Men",
        price: 495000,
        image: "https://api.ecom.longines.com/media/catalog/product/w/a/watch-collection-conquest-l3-750-4-09-6-398794-hero.png?w=384",
        description: "The Conquest pairs quietly luxurious refinement with a beautifully composed silhouette. Balanced sport-luxury styling makes it exceptionally adaptable. Every detail feels considered, confident, and exceptionally premium. Crafted to impress, it combines distinctive style with an enduring premium presence. It remains one of the most requested pieces in its collection this season.",
        inStock: true,
        stockQuantity: 23
    },
    {
        brand: "Longines",
        name: "Elegant Collection",
        category: "Classic",
        gender: "Women",
        price: 475000,
        image: "https://api.ecom.longines.com/media/catalog/product/w/a/watch-collection-longines-mini-dolcevita-l5-200-4-87-6-523674-hero.png?w=384",
        description: "Distinguished traditional craftsmanship gives the Elegant Collection an unmistakably elevated presence. Subtle proportions create an enduring feminine aesthetic. A refined statement for women with discerning taste. Crafted to impress, it combines distinctive style with an enduring premium presence. Paired with premium after-sales support, ownership feels as refined as the design itself.",
        inStock: true,
        stockQuantity: 1
    },
    {
        brand: "Longines",
        name: "Master Collection Lady",
        category: "Luxury",
        gender: "Women",
        price: 575000,
        image: "https://api.ecom.longines.com/media/catalog/product/w/a/watch-collection-longines-primaluna-l8-124-4-87-6-516ad1-hero.png?w=384",
        description: "Elegant swiss heritage defines the Master Collection Lady with effortless distinction. Traditional craftsmanship is expressed with sophisticated modern balance. Designed for women who expect luxury without compromise. Its refined character makes it a standout choice for any sophisticated collection. Its balanced proportions make it comfortable for everyday wear without losing presence.",
        inStock: true,
        stockQuantity: 17
    },
    {
        brand: "Longines",
        name: "Conquest Classic Lady",
        category: "Classic",
        gender: "Women",
        price: 455000,
        image: "https://api.ecom.longines.com/media/catalog/product/w/a/watch-collection-longines-dolcevita-l5-512-4-70-2-209f99-hero.png?w=384",
        description: "The Conquest Classic Lady pairs quietly luxurious refinement with a beautifully composed silhouette. Balanced sport-luxury styling makes it exceptionally adaptable. Every detail feels considered, confident, and exceptionally premium. Crafted to impress, it combines distinctive style with an enduring premium presence. A timeless investment piece that only grows more distinguished with age.",
        inStock: true,
        stockQuantity: 23
    },
    {
        brand: "Longines",
        name: "Record Lady",
        category: "Luxury",
        gender: "Women",
        price: 525000,
        image: "https://api.ecom.longines.com/media/catalog/product/w/a/watch-collection-longines-mini-dolcevita-l5-200-4-71-0-eb9b27-hero.png?w=384",
        description: "Distinguished traditional craftsmanship gives the Record Lady an unmistakably elevated presence. Precision-focused heritage brings a distinguished sense of occasion. A refined statement for women with discerning taste. Its refined character makes it a standout choice for any sophisticated collection. It ships in a signature presentation box, ready to gift or wear straight away.",
        inStock: true,
        stockQuantity: 1
    },
    {
        brand: "Seiko",
        name: "Presage Cocktail Time",
        category: "Classic",
        gender: "Men",
        price: 135000,
        image: "https://seikousa.com/cdn/shop/files/SRPL75_1.png?v=1751484365&width=360",
        description: "Masterful japanese craftsmanship defines the Presage Cocktail Time with effortless distinction. Captivating dial character evokes sophisticated evening elegance. Designed for men who expect luxury without compromise. Its timeless appeal brings an unmistakable sense of confidence to every occasion. Backed by an official warranty, it's a piece built to be worn for years to come.",
        inStock: true,
        stockQuantity: 10
    },
    {
        brand: "Seiko",
        name: "Presage Classic",
        category: "Classic",
        gender: "Men",
        price: 128000,
        image: "https://seikousa.com/cdn/shop/files/HAB002_1_36ff5a32-b6a6-47f9-a554-55df110684e0.png?v=1786541677&width=360",
        description: "The Presage Classic pairs refined horological artistry with a beautifully composed silhouette. Japanese artistry makes every dial detail feel considered. Every detail feels considered, confident, and exceptionally premium. Its refined character makes it a standout choice for any sophisticated collection. Each unit is quality-checked before dispatch, so it arrives in flawless condition.",
        inStock: true,
        stockQuantity: 3
    },
    {
        brand: "Seiko",
        name: "Prospex Diver",
        category: "Sports",
        gender: "Men",
        price: 165000,
        image: "https://seikousa.com/cdn/shop/files/SNE506_1_b1dce6b3-16fa-445b-b613-f812e03feff2.png?v=1786482752&width=360",
        description: "Distinctive everyday precision gives the Prospex Diver an unmistakably elevated presence. Purpose-built performance brings authentic adventure to the wrist. A refined statement for men with discerning taste. Its refined character makes it a standout choice for any sophisticated collection. A versatile choice that transitions effortlessly from daywear to evening occasions.",
        inStock: true,
        stockQuantity: 9
    },
    {
        brand: "Seiko",
        name: "Prospex Samurai",
        category: "Sports",
        gender: "Men",
        price: 175000,
        image: "https://seikousa.com/cdn/shop/files/SUR449_1_87fba1cf-acf7-4476-bf83-426cc5d88ed3.png?v=1786480685&width=360",
        description: "Masterful japanese craftsmanship defines the Prospex Samurai with effortless distinction. Purpose-built performance brings authentic adventure to the wrist. Designed for men who expect luxury without compromise. Its refined character makes it a standout choice for any sophisticated collection. It remains one of the most requested pieces in its collection this season.",
        inStock: true,
        stockQuantity: 6
    },
    {
        brand: "Seiko",
        name: "Prospex Turtle",
        category: "Vintage",
        gender: "Men",
        price: 155000,
        image: "https://seikousa.com/cdn/shop/files/SRPD79_1_7b1facc0-f5a4-4dd8-b0e8-5d533af98d85.png?v=1786545498&width=360",
        description: "The Prospex Turtle pairs refined horological artistry with a beautifully composed silhouette. Purpose-built performance brings authentic adventure to the wrist. Every detail feels considered, confident, and exceptionally premium. Its refined character makes it a standout choice for any sophisticated collection. Paired with premium after-sales support, ownership feels as refined as the design itself.",
        inStock: true,
        stockQuantity: 8
    },
    {
        brand: "Seiko",
        name: "Lukia",
        category: "Classic",
        gender: "Women",
        price: 115000,
        image: "https://seikousa.com/cdn/shop/files/SSEH024_1_8c0e4024-427d-49cb-a058-a9429c7930f1.png?v=1776189047&width=360",
        description: "Distinctive everyday precision gives the Lukia an unmistakably elevated presence. Refined Japanese femininity meets polished contemporary design. A refined statement for women with discerning taste. Crafted to impress, it combines distinctive style with an enduring premium presence. Its balanced proportions make it comfortable for everyday wear without losing presence.",
        inStock: true,
        stockQuantity: 25
    },
    {
        brand: "Seiko",
        name: "Ladies Automatic",
        category: "Classic",
        gender: "Women",
        price: 105000,
        image: "https://seikousa.com/cdn/shop/files/SUR444_1_065dc4bf-5959-4395-a638-63a81bdd0fb3.png?v=1759873197&width=360",
        description: "Masterful japanese craftsmanship defines the Ladies Automatic with effortless distinction. Mechanical character adds warmth to its timeless elegance. Designed for women who expect luxury without compromise. Its refined character makes it a standout choice for any sophisticated collection. A timeless investment piece that only grows more distinguished with age.",
        inStock: true,
        stockQuantity: 21
    },
    {
        brand: "Seiko",
        name: "Solar Lady",
        category: "Classic",
        gender: "Women",
        price: 95000,
        image: "https://seikousa.com/cdn/shop/files/SWR048_1_906e83db-62f4-420e-9278-8e11e69ddc4d.png?v=1786480923&width=360",
        description: "The Solar Lady pairs refined horological artistry with a beautifully composed silhouette. Light-powered convenience keeps the sophistication effortlessly modern. Every detail feels considered, confident, and exceptionally premium. Its timeless appeal brings an unmistakable sense of confidence to every occasion. It ships in a signature presentation box, ready to gift or wear straight away.",
        inStock: true,
        stockQuantity: 25
    },
    {
        brand: "Seiko",
        name: "Presage Cocktail Lady",
        category: "Luxury",
        gender: "Women",
        price: 135000,
        image: "https://seikousa.com/cdn/shop/files/SWR085_1_937a938a-ac80-4838-ad72-17c2bf04f6b0.png?v=1786480249&width=360",
        description: "Distinctive everyday precision gives the Presage Cocktail Lady an unmistakably elevated presence. Captivating dial character evokes sophisticated evening elegance. A refined statement for women with discerning taste. Crafted to impress, it combines distinctive style with an enduring premium presence. Backed by an official warranty, it's a piece built to be worn for years to come.",
        inStock: true,
        stockQuantity: 8
    },
    {
        brand: "Seiko",
        name: "Diamond Accent",
        category: "Luxury",
        gender: "Women",
        price: 128000,
        image: "https://seikousa.com/cdn/shop/files/SUR633_1_9a6ffc34-3530-49c3-9910-b1092e56e959.png?v=1786483903&width=360",
        description: "Masterful japanese craftsmanship defines the Diamond Accent with effortless distinction. Delicate brilliance adds a luxurious finishing touch. Designed for women who expect luxury without compromise. Crafted to impress, it combines distinctive style with an enduring premium presence. Each unit is quality-checked before dispatch, so it arrives in flawless condition.",
        inStock: true,
        stockQuantity: 24
    },
    {
        brand: "Tissot",
        name: "Le Locle Automatic",
        category: "Classic",
        gender: "Men",
        price: 165000,
        image: "https://monicajewelers.com/cdn/shop/files/T137.407.17.051.00_R_1.jpg?v=1687851178&width=533",
        description: "The Le Locle Automatic pairs contemporary watchmaking heritage with a beautifully composed silhouette. Mechanical character adds warmth to its timeless elegance. Every detail feels considered, confident, and exceptionally premium. Crafted to impress, it combines distinctive style with an enduring premium presence. A versatile choice that transitions effortlessly from daywear to evening occasions.",
        inStock: true,
        stockQuantity: 7
    },
    {
        brand: "Tissot",
        name: "Gentleman Powermatic 80",
        category: "Classic",
        gender: "Men",
        price: 178000,
        image: "https://monicajewelers.com/cdn/shop/products/T137.210.11.081.00_R_1.webp?v=1658912941&width=533",
        description: "Refined everyday sophistication gives the Gentleman Powermatic 80 an unmistakably elevated presence. Clean sophistication makes it a natural modern classic. A refined statement for men with discerning taste. Crafted to impress, it combines distinctive style with an enduring premium presence. It remains one of the most requested pieces in its collection this season.",
        inStock: true,
        stockQuantity: 12
    },
    {
        brand: "Tissot",
        name: "PRX Powermatic 80",
        category: "Luxury",
        gender: "Men",
        price: 195000,
        image: "https://monicajewelers.com/cdn/shop/products/T137.407.16.041.00_R_1.webp?v=1659331897&width=533",
        description: "Versatile swiss elegance defines the PRX Powermatic 80 with effortless distinction. Retro-integrated styling delivers an unmistakable contemporary statement. Designed for men who expect luxury without compromise. Crafted to impress, it combines distinctive style with an enduring premium presence. Paired with premium after-sales support, ownership feels as refined as the design itself.",
        inStock: true,
        stockQuantity: 1
    },
    {
        brand: "Tissot",
        name: "Seastar 1000",
        category: "Sports",
        gender: "Men",
        price: 165000,
        image: "https://monicajewelers.com/cdn/shop/products/T137.427.11.041.00_R_1.png?v=1658830081&width=533",
        description: "The Seastar 1000 pairs contemporary watchmaking heritage with a beautifully composed silhouette. Aquatic confidence meets polished Swiss sports-luxury character. Every detail feels considered, confident, and exceptionally premium. Its refined character makes it a standout choice for any sophisticated collection. Its balanced proportions make it comfortable for everyday wear without losing presence.",
        inStock: true,
        stockQuantity: 16
    },
    {
        brand: "Tissot",
        name: "Desir",
        category: "Classic",
        gender: "Women",
        price: 115000,
        image: "https://monicajewelers.com/cdn/shop/files/T126.010.16.113.00_R.jpg?v=1688463731&width=533",
        description: "Refined everyday sophistication gives the Desir an unmistakably elevated presence. Delicate details create a graceful, feminine impression. A refined statement for women with discerning taste. A sophisticated finishing touch makes this timepiece especially memorable on the wrist. A timeless investment piece that only grows more distinguished with age.",
        inStock: true,
        stockQuantity: 23
    },
    {
        brand: "Tissot",
        name: "Classic Dream",
        category: "Classic",
        gender: "Women",
        price: 108000,
        image: "https://monicajewelers.com/cdn/shop/products/T094.210.11.116.01_R_1.webp?v=1659005623&width=533",
        description: "Versatile swiss elegance defines the Classic Dream with effortless distinction. Balanced design makes everyday elegance feel effortless. Designed for women who expect luxury without compromise. Crafted to impress, it combines distinctive style with an enduring premium presence. It ships in a signature presentation box, ready to gift or wear straight away.",
        inStock: true,
        stockQuantity: 12
    },
    {
        brand: "Tissot",
        name: "Bellissima Rose Gold",
        category: "Luxury",
        gender: "Women",
        price: 175000,
        image: "https://monicajewelers.com/cdn/shop/files/T140.009.36.091.00_R.jpg?v=1688381967&width=533",
        description: "The Bellissima Rose Gold pairs contemporary watchmaking heritage with a beautifully composed silhouette. Feminine refinement is elevated by warm, luxurious detailing. Every detail feels considered, confident, and exceptionally premium. Crafted to impress, it combines distinctive style with an enduring premium presence. Backed by an official warranty, it's a piece built to be worn for years to come.",
        inStock: true,
        stockQuantity: 24
    },
    {
        brand: "Tissot",
        name: "Lovely Pearl",
        category: "Luxury",
        gender: "Women",
        price: 155000,
        image: "https://monicajewelers.com/cdn/shop/products/T867.405.39.013.00_R.webp?v=1659098208&width=533",
        description: "Refined everyday sophistication gives the Lovely Pearl an unmistakably elevated presence. Soft pearl character brings delicate sophistication to the wrist. A refined statement for women with discerning taste. A sophisticated finishing touch makes this timepiece especially memorable on the wrist. Each unit is quality-checked before dispatch, so it arrives in flawless condition.",
        inStock: true,
        stockQuantity: 12
    },
    {
        brand: "Alberto",
        name: "Royal Gold",
        category: "Luxury",
        gender: "Men",
        price: 185000,
        image: "https://seikousa.com/cdn/shop/files/SNKP27_1_8ccedeff-050f-4123-b3a2-8044953bdd0b.png?v=1786539511&width=360",
        description: "Distinctive luxury character defines the Royal Gold with effortless distinction. Golden accents create an unmistakably regal impression. Designed for men who expect luxury without compromise. Its refined character makes it a standout choice for any sophisticated collection. A versatile choice that transitions effortlessly from daywear to evening occasions.",
        inStock: false,
        stockQuantity: 0
    },
    {
        brand: "Alberto",
        name: "Executive Black",
        category: "Luxury",
        gender: "Men",
        price: 165000,
        image: "https://seikousa.com/cdn/shop/files/SNKN37_1_b1fad6e0-5620-4e72-8517-7dead2bfd853.png?v=1786539496&width=360",
        description: "The Executive Black pairs polished statement elegance with a beautifully composed silhouette. Deep tones and polished details project executive confidence. Every detail feels considered, confident, and exceptionally premium. Crafted to impress, it combines distinctive style with an enduring premium presence. It remains one of the most requested pieces in its collection this season.",
        inStock: false,
        stockQuantity: 0
    },
    {
        brand: "Alberto",
        name: "Signature Silver",
        category: "Luxury",
        gender: "Men",
        price: 145000,
        image: "https://seikousa.com/cdn/shop/files/SNKP23_1_59fb770a-b3ab-4e99-9051-322c8f90170a.png?v=1786539503&width=360",
        description: "Refined contemporary craftsmanship gives the Signature Silver an unmistakably elevated presence. Silver-toned refinement creates a clean, distinguished statement. A refined statement for men with discerning taste. A sophisticated finishing touch makes this timepiece especially memorable on the wrist. Paired with premium after-sales support, ownership feels as refined as the design itself.",
        inStock: true,
        stockQuantity: 11
    },
    {
        brand: "Alberto",
        name: "Prestige Chronograph",
        category: "Luxury",
        gender: "Men",
        price: 195000,
        image: "https://seikousa.com/cdn/shop/files/SNKM97_1_83159c4f-f7fb-4765-b369-486488e2501f.png?v=1786539492&width=360",
        description: "Distinctive luxury character defines the Prestige Chronograph with effortless distinction. Layered chronograph detailing adds depth and distinction. Designed for men who expect luxury without compromise. Crafted to impress, it combines distinctive style with an enduring premium presence. Its balanced proportions make it comfortable for everyday wear without losing presence.",
        inStock: true,
        stockQuantity: 20
    },
    {
        brand: "Alberto",
        name: "Classic Heritage",
        category: "Classic",
        gender: "Men",
        price: 85000,
        image: "https://seikousa.com/cdn/shop/files/SUR597_4_0e964194-2871-4cf8-b949-934346eb6038.png",
        description: "The Classic Heritage pairs polished statement elegance with a beautifully composed silhouette. Traditional proportions create enduring, versatile elegance. Every detail feels considered, confident, and exceptionally premium. Its refined character makes it a standout choice for any sophisticated collection. A timeless investment piece that only grows more distinguished with age.",
        inStock: true,
        stockQuantity: 20
    },
    {
        brand: "Alberto",
        name: "Heritage Silver",
        category: "Classic",
        gender: "Men",
        price: 78000,
        image: "https://seikousa.com/cdn/shop/files/SRPE37_1_c47cae0b-6a9e-4b10-aeea-95ce42feb1c7.png?v=1786480978&width=360",
        description: "Refined contemporary craftsmanship gives the Heritage Silver an unmistakably elevated presence. Polished silver tones give the design timeless clarity. A refined statement for men with discerning taste. A sophisticated finishing touch makes this timepiece especially memorable on the wrist. It ships in a signature presentation box, ready to gift or wear straight away.",
        inStock: true,
        stockQuantity: 16
    },
    {
        brand: "Alberto",
        name: "Vintage Heritage",
        category: "Vintage",
        gender: "Men",
        price: 72000,
        image: "https://seikousa.com/cdn/shop/files/SFJ007_1_5a517ed4-eb74-49de-b847-492d1ef3492b.png?v=1786480355&width=360",
        description: "Distinctive luxury character defines the Vintage Heritage with effortless distinction. Old-world character is finished with modern sophistication. Designed for men who expect luxury without compromise. Crafted to impress, it combines distinctive style with an enduring premium presence. Backed by an official warranty, it's a piece built to be worn for years to come.",
        inStock: true,
        stockQuantity: 12
    },
    {
        brand: "Alberto",
        name: "Vintage Gold",
        category: "Vintage",
        gender: "Men",
        price: 95000,
        image: "https://seikousa.com/cdn/shop/files/SFJ005_1_ea3012c3-336d-4368-9fa7-86072b0c5bae.png?v=1786480343&width=360",
        description: "The Vintage Gold pairs polished statement elegance with a beautifully composed silhouette. Radiant metallic character creates a distinctly prestigious presence. Every detail feels considered, confident, and exceptionally premium. Its timeless appeal brings an unmistakable sense of confidence to every occasion. Each unit is quality-checked before dispatch, so it arrives in flawless condition.",
        inStock: true,
        stockQuantity: 3
    },
    {
        brand: "Alberto",
        name: "Royal Black",
        category: "Luxury",
        gender: "Men",
        price: 175000,
        image: "https://seikousa.com/cdn/shop/files/SRPL15_1.png?v=1786536733&width=360",
        description: "Refined contemporary craftsmanship gives the Royal Black an unmistakably elevated presence. Distinctive detailing gives the Royal Black a memorable presence. A refined statement for men with discerning taste. A sophisticated finishing touch makes this timepiece especially memorable on the wrist. A versatile choice that transitions effortlessly from daywear to evening occasions.",
        inStock: true,
        stockQuantity: 4
    },
    {
        brand: "Alberto",
        name: "Executive Silver",
        category: "Luxury",
        gender: "Men",
        price: 155000,
        image: "https://seikousa.com/cdn/shop/files/SRPL11_1_29edfff8-87f6-4ed8-97cb-a6042456e8a8.png?v=1786536709&width=360",
        description: "Distinctive luxury character defines the Executive Silver with effortless distinction. Distinctive detailing gives the Executive Silver a memorable presence. Designed for men who expect luxury without compromise. Its refined character makes it a standout choice for any sophisticated collection. It remains one of the most requested pieces in its collection this season.",
        inStock: true,
        stockQuantity: 23
    },
    {
        brand: "Alberto",
        name: "Prestige Gold",
        category: "Luxury",
        gender: "Men",
        price: 205000,
        image: "https://seikousa.com/cdn/shop/files/SPB210_1_358f850f-bd97-457b-b4fa-6e19950b3e36.png?v=1786536619&width=360",
        description: "The Prestige Gold pairs polished statement elegance with a beautifully composed silhouette. Radiant metallic character creates a distinctly prestigious presence. Every detail feels considered, confident, and exceptionally premium. Crafted to impress, it combines distinctive style with an enduring premium presence. Paired with premium after-sales support, ownership feels as refined as the design itself.",
        inStock: true,
        stockQuantity: 16
    },
    {
        brand: "Alberto",
        name: "Classic Black",
        category: "Classic",
        gender: "Men",
        price: 82000,
        image: "https://seikousa.com/cdn/shop/files/SPB249_1_9ce40801-495d-4119-b38c-2c183894510b.png?v=1786480855&width=360",
        description: "Refined contemporary craftsmanship gives the Classic Black an unmistakably elevated presence. Distinctive detailing gives the Classic Black a memorable presence. A refined statement for men with discerning taste. Its timeless appeal brings an unmistakable sense of confidence to every occasion. Its balanced proportions make it comfortable for everyday wear without losing presence.",
        inStock: true,
        stockQuantity: 14
    },
    {
        brand: "Alberto",
        name: "Heritage Automatic",
        category: "Vintage",
        gender: "Men",
        price: 125000,
        image: "https://seikousa.com/cdn/shop/files/SRPL81_1_a74b7d76-d336-4907-9845-dae4ecfcf322.png?v=1759981846&width=360",
        description: "Distinctive luxury character defines the Heritage Automatic with effortless distinction. Mechanical character adds warmth to its timeless elegance. Designed for men who expect luxury without compromise. Its refined character makes it a standout choice for any sophisticated collection. A timeless investment piece that only grows more distinguished with age.",
        inStock: true,
        stockQuantity: 11
    },
    {
        brand: "Alberto",
        name: "Signature Chronograph",
        category: "Classic",
        gender: "Men",
        price: 165000,
        image: "https://seikousa.com/cdn/shop/files/SSH137_1.png?v=1787071966&width=360",
        description: "The Signature Chronograph pairs polished statement elegance with a beautifully composed silhouette. Distinctive detailing gives the Signature Chronograph a memorable presence. Every detail feels considered, confident, and exceptionally premium. Crafted to impress, it combines distinctive style with an enduring premium presence. It ships in a signature presentation box, ready to gift or wear straight away.",
        inStock: false,
        stockQuantity: 0
    },
    {
        brand: "Alberto",
        name: "Royal Rose",
        category: "Luxury",
        gender: "Women",
        price: 175000,
        image: "https://monicajewelers.com/cdn/shop/files/GW-17-1-18-pcard-1.webp?v=1718949546&width=533",
        description: "Refined contemporary craftsmanship gives the Royal Rose an unmistakably elevated presence. Distinctive detailing gives the Royal Rose a memorable presence. A refined statement for women with discerning taste. Its timeless appeal brings an unmistakable sense of confidence to every occasion. Backed by an official warranty, it's a piece built to be worn for years to come.",
        inStock: true,
        stockQuantity: 24
    },
    {
        brand: "Alberto",
        name: "Prestige Pearl",
        category: "Luxury",
        gender: "Women",
        price: 185000,
        image: "https://monicajewelers.com/cdn/shop/files/GW-31-1-18-pcard-1.webp?v=1718948136&width=533",
        description: "Distinctive luxury character defines the Prestige Pearl with effortless distinction. Pearl-inspired elegance adds a graceful, luminous character. Designed for women who expect luxury without compromise. Its timeless appeal brings an unmistakable sense of confidence to every occasion. Each unit is quality-checked before dispatch, so it arrives in flawless condition.",
        inStock: true,
        stockQuantity: 13
    },
    {
        brand: "Alberto",
        name: "Elite Rose Gold",
        category: "Luxury",
        gender: "Women",
        price: 195000,
        image: "https://monicajewelers.com/cdn/shop/files/media_0763508e-166a-4286-81b3-0860a9b88447.webp?v=1782155616&width=533",
        description: "The Elite Rose Gold pairs polished statement elegance with a beautifully composed silhouette. Warm metallic tones create an instantly luxurious impression. Every detail feels considered, confident, and exceptionally premium. A sophisticated finishing touch makes this timepiece especially memorable on the wrist. A versatile choice that transitions effortlessly from daywear to evening occasions.",
        inStock: true,
        stockQuantity: 3
    },
    {
        brand: "Alberto",
        name: "Signature Gold Lady",
        category: "Luxury",
        gender: "Women",
        price: 165000,
        image: "https://monicajewelers.com/cdn/shop/files/h42245191.jpg?v=1691637234&width=533",
        description: "Refined contemporary craftsmanship gives the Signature Gold Lady an unmistakably elevated presence. Radiant metallic character creates a distinctly prestigious presence. A refined statement for women with discerning taste. Its refined character makes it a standout choice for any sophisticated collection. It remains one of the most requested pieces in its collection this season.",
        inStock: true,
        stockQuantity: 6
    },
    {
        brand: "Alberto",
        name: "Classic Pearl",
        category: "Classic",
        gender: "Women",
        price: 85000,
        image: "https://monicajewelers.com/cdn/shop/files/h36225770.jpg?v=1691386262&width=533",
        description: "Distinctive luxury character defines the Classic Pearl with effortless distinction. Pearl-inspired elegance adds a graceful, luminous character. Designed for women who expect luxury without compromise. Its refined character makes it a standout choice for any sophisticated collection. Paired with premium after-sales support, ownership feels as refined as the design itself.",
        inStock: true,
        stockQuantity: 1
    },
    {
        brand: "Alberto",
        name: "Vintage Rose",
        category: "Vintage",
        gender: "Women",
        price: 82000,
        image: "https://monicajewelers.com/cdn/shop/files/h32275890.jpg?v=1691560924&width=533",
        description: "The Vintage Rose pairs polished statement elegance with a beautifully composed silhouette. Warm rose tones lend the silhouette graceful vintage charm. Every detail feels considered, confident, and exceptionally premium. Its refined character makes it a standout choice for any sophisticated collection. Its balanced proportions make it comfortable for everyday wear without losing presence.",
        inStock: true,
        stockQuantity: 15
    },
    {
        brand: "Alberto",
        name: "Vintage Elite",
        category: "Vintage",
        gender: "Women",
        price: 89000,
        image: "https://monicajewelers.com/cdn/shop/products/h32261137.webp?v=1661167211&width=533",
        description: "Refined contemporary craftsmanship gives the Vintage Elite an unmistakably elevated presence. Classic femininity meets a quietly luxurious finish. A refined statement for women with discerning taste. Its timeless appeal brings an unmistakable sense of confidence to every occasion. A timeless investment piece that only grows more distinguished with age.",
        inStock: true,
        stockQuantity: 5
    },
    {
        brand: "Alberto",
        name: "Royal Pearl",
        category: "Luxury",
        gender: "Women",
        price: 180000,
        image: "https://monicajewelers.com/cdn/shop/products/h52414131.webp?v=1661167634&width=533",
        description: "Distinctive luxury character defines the Royal Pearl with effortless distinction. Pearl-inspired detailing gives the profile regal elegance. Designed for women who expect luxury without compromise. Crafted to impress, it combines distinctive style with an enduring premium presence. It ships in a signature presentation box, ready to gift or wear straight away.",
        inStock: true,
        stockQuantity: 20
    },
    {
        brand: "Alberto",
        name: "Prestige Rose",
        category: "Luxury",
        gender: "Women",
        price: 175000,
        image: "https://monicajewelers.com/cdn/shop/products/h32315811.webp?v=1661165317&width=533",
        description: "The Prestige Rose pairs polished statement elegance with a beautifully composed silhouette. Warm rose tones create a polished luxury statement. Every detail feels considered, confident, and exceptionally premium. Its refined character makes it a standout choice for any sophisticated collection. Backed by an official warranty, it's a piece built to be worn for years to come.",
        inStock: true,
        stockQuantity: 22
    },
    {
        brand: "Alberto",
        name: "Elite Pearl",
        category: "Luxury",
        gender: "Women",
        price: 190000,
        image: "https://monicajewelers.com/cdn/shop/products/h32405111.webp?v=1661164410&width=533",
        description: "Refined contemporary craftsmanship gives the Elite Pearl an unmistakably elevated presence. Luminous pearl character elevates the feminine silhouette. A refined statement for women with discerning taste. Its refined character makes it a standout choice for any sophisticated collection. Each unit is quality-checked before dispatch, so it arrives in flawless condition.",
        inStock: true,
        stockQuantity: 5
    },
    {
        brand: "Michael Kors",
        name: "Michael Kors Gen 6 Bradshaw",
        category: "Smart",
        gender: "Women",
        price: 72000,
        image: "https://plus.unsplash.com/premium_photo-1681147547346-2d73c90988d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHNtYXJ0JTIwd2F0Y2h8ZW58MHx8MHx8fDA%3D",
        description: "A glamorous fusion of fashion and intelligent technology, designed with signature Michael Kors sophistication. Elegant detailing meets connected functionality for a truly polished everyday experience. Its timeless appeal brings an unmistakable sense of confidence to every occasion. A versatile choice that transitions effortlessly from daywear to evening occasions.",
        inStock: true,
        stockQuantity: 5
    },
    {
        brand: "Michael Kors",
        name: "Michael Kors Gen 6 Lexington",
        category: "Smart",
        gender: "Men",
        price: 75000,
        image: "https://images.unsplash.com/photo-1549482199-bc1ca6f58502?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHNtYXJ0JTIwd2F0Y2h8ZW58MHx8MHx8fDA%3D",
        description: "Confident styling meets modern smartwatch intelligence in this distinguished timepiece. Crafted for the gentleman who values refined design, connected convenience, and contemporary performance. Its timeless appeal brings an unmistakable sense of confidence to every occasion. It remains one of the most requested pieces in its collection this season.",
        inStock: false,
        stockQuantity: 0
    },
    {
        brand: "Michael Kors",
        name: "Michael Kors Access Runway",
        category: "Smart",
        gender: "Women",
        price: 68000,
        image: "https://images.unsplash.com/photo-1635841172808-372fb4371458?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHNtYXJ0JTIwd2F0Y2h8ZW58MHx8MHx8fDA%3D",
        description: "A sophisticated statement piece blending luxurious fashion with smart functionality. Its elegant profile and connected features make it a natural companion for modern, style-conscious women. Crafted to impress, it combines distinctive style with an enduring premium presence. Paired with premium after-sales support, ownership feels as refined as the design itself.",
        inStock: true,
        stockQuantity: 24
    },
    {
        brand: "Michael Kors",
        name: "Michael Kors Access Sofie",
        category: "Smart",
        gender: "Women",
        price: 65000,
        image: "https://plus.unsplash.com/premium_photo-1728595645341-27a84a134841?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fHNtYXJ0JTIwd2F0Y2h8ZW58MHx8MHx8fDA%3D",
        description: "Graceful design meets intelligent connectivity in a beautifully feminine silhouette. Created for effortless sophistication, this timepiece brings a refined digital experience to every occasion. Crafted to impress, it combines distinctive style with an enduring premium presence. Its balanced proportions make it comfortable for everyday wear without losing presence.",
        inStock: true,
        stockQuantity: 17
    },
    {
        brand: "Michael Kors",
        name: "Michael Kors Gen 6 Camille",
        category: "Smart",
        gender: "Women",
        price: 69000,
        image: "https://plus.unsplash.com/premium_photo-1712848346375-3d6cc9842dad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAxfHxzbWFydCUyMHdhdGNofGVufDB8fDB8fHww",
        description: "An elegant interpretation of connected timekeeping, combining luxurious detailing with modern digital convenience. Designed to complement a sophisticated wardrobe from morning to evening. Crafted to impress, it combines distinctive style with an enduring premium presence. A timeless investment piece that only grows more distinguished with age.",
        inStock: true,
        stockQuantity: 5
    },
    {
        brand: "Michael Kors",
        name: "Michael Kors Gen 5 Lexington",
        category: "Smart",
        gender: "Men",
        price: 67000,
        image: "https://images.unsplash.com/photo-1641457474717-26e699f45414?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxzbWFydCUyMHdhdGNofGVufDB8fDB8fHww",
        description: "A bold expression of contemporary watchmaking with intelligent capabilities beneath its classic exterior. Designed for men who expect technology to retain an unmistakably premium character. Crafted to impress, it combines distinctive style with an enduring premium presence. It ships in a signature presentation box, ready to gift or wear straight away.",
        inStock: true,
        stockQuantity: 7
    },
    {
        brand: "Michael Kors",
        name: "Michael Kors Access Bradshaw",
        category: "Smart",
        gender: "Women",
        price: 61000,
        image: "https://images.unsplash.com/photo-1626194062394-022cc80f6d2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxzbWFydCUyMHdhdGNofGVufDB8fDB8fHww",
        description: "Signature glamour meets connected technology in a statement-making design. A beautifully detailed smartwatch created for women who appreciate luxury, personality, and modern convenience. A sophisticated finishing touch makes this timepiece especially memorable on the wrist. Backed by an official warranty, it's a piece built to be worn for years to come.",
        inStock: true,
        stockQuantity: 7
    },
    {
        brand: "Michael Kors",
        name: "Michael Kors Access Grayson",
        category: "Smart",
        gender: "Men",
        price: 63000,
        image: "https://plus.unsplash.com/premium_photo-1712762000321-bbef20545b43?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA1fHxzbWFydCUyMHdhdGNofGVufDB8fDB8fHww",
        description: "A refined masculine profile concealing a modern connected experience. The Grayson brings classic sophistication, intelligent functionality, and confident styling together in one distinguished timepiece. A sophisticated finishing touch makes this timepiece especially memorable on the wrist. Each unit is quality-checked before dispatch, so it arrives in flawless condition.",
        inStock: false,
        stockQuantity: 0
    },
    {
        brand: "Citizen Eco-Drive",
        name: "Citizen Connected Classic",
        category: "Smart",
        gender: "Men",
        price: 82000,
        image: "https://images.unsplash.com/photo-1722153768985-9286321b8769?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2fHxzbWFydCUyMHdhdGNofGVufDB8fDB8fHww",
        description: "Inspired by Citizen's tradition of precision, this connected concept combines sophisticated styling with intelligent everyday functionality. A refined choice for those who appreciate understated technological luxury. Its timeless appeal brings an unmistakable sense of confidence to every occasion. A versatile choice that transitions effortlessly from daywear to evening occasions.",
        inStock: true,
        stockQuantity: 17
    },
    {
        brand: "Citizen Eco-Drive",
        name: "Citizen Connected Elegance",
        category: "Smart",
        gender: "Women",
        price: 79000,
        image: "https://images.unsplash.com/photo-1560779690-96fa7f71eec2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTgwfHxzbWFydCUyMHdhdGNofGVufDB8fDB8fHww",
        description: "A graceful interpretation of intelligent timekeeping, bringing elegant proportions together with modern connected features. Designed for women who prefer technology with timeless sophistication. Its timeless appeal brings an unmistakable sense of confidence to every occasion. It remains one of the most requested pieces in its collection this season.",
        inStock: true,
        stockQuantity: 19
    },
    {
        brand: "Citizen Eco-Drive",
        name: "Citizen Eco-Drive Connect",
        category: "Smart",
        gender: "Men",
        price: 88000,
        image: "https://images.unsplash.com/photo-1579811216948-6f57c19376a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHNtYXJ0JTIwd2F0Y2h8ZW58MHx8MHx8fDA%3D",
        description: "Precision-inspired design meets connected convenience in a sophisticated everyday companion. Its balanced profile reflects Citizen's enduring watchmaking character with a contemporary digital touch. A sophisticated finishing touch makes this timepiece especially memorable on the wrist. Paired with premium after-sales support, ownership feels as refined as the design itself.",
        inStock: true,
        stockQuantity: 18
    },
    {
        brand: "Citizen Eco-Drive",
        name: "Citizen Connected Sport",
        category: "Smart",
        gender: "Men",
        price: 76000,
        image: "https://images.unsplash.com/photo-1698729616509-060e8f58e6c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHNtYXJ0JTIwd2F0Y2h8ZW58MHx8MHx8fDA%3D",
        description: "Designed around an active lifestyle, this sporty connected timepiece combines confident proportions with intelligent functionality. Built for movement while retaining a distinctly premium aesthetic. A sophisticated finishing touch makes this timepiece especially memorable on the wrist. Its balanced proportions make it comfortable for everyday wear without losing presence.",
        inStock: true,
        stockQuantity: 5
    },
    {
        brand: "Citizen Eco-Drive",
        name: "Citizen Connected Grace",
        category: "Smart",
        gender: "Women",
        price: 74000,
        image: "https://images.unsplash.com/photo-1593871978329-02621035b835?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjAzfHxzbWFydCUyMHdhdGNofGVufDB8fDB8fHww",
        description: "Elegant lines and intelligent features come together in a beautifully balanced wrist companion. Created for women seeking refined design, everyday connectivity, and effortless sophistication. Crafted to impress, it combines distinctive style with an enduring premium presence. A timeless investment piece that only grows more distinguished with age.",
        inStock: false,
        stockQuantity: 0
    },
    {
        brand: "Citizen Eco-Drive",
        name: "Citizen Connected Heritage",
        category: "Smart",
        gender: "Men",
        price: 85000,
        image: "https://images.unsplash.com/photo-1598516802414-50a01bee818d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHNtYXJ0JTIwd2F0Y2h8ZW58MHx8MHx8fDA%3D",
        description: "Heritage-inspired aesthetics meet modern connected functionality in this distinguished concept timepiece. Designed for those who admire traditional watch character with a contemporary edge. Crafted to impress, it combines distinctive style with an enduring premium presence. It ships in a signature presentation box, ready to gift or wear straight away.",
        inStock: true,
        stockQuantity: 15
    },
    {
        brand: "Citizen Eco-Drive",
        name: "Citizen Connected Pearl",
        category: "Smart",
        gender: "Women",
        price: 81000,
        image: "https://images.unsplash.com/photo-1748280613430-27e9ecb9aaf6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjIyfHxzbWFydCUyMHdhdGNofGVufDB8fDB8fHww",
        description: "Delicate elegance meets intelligent convenience in a sophisticated modern profile. Designed to complement graceful personal style while bringing connected features naturally into everyday life. Its timeless appeal brings an unmistakable sense of confidence to every occasion. Backed by an official warranty, it's a piece built to be worn for years to come.",
        inStock: true,
        stockQuantity: 17
    },
    {
        brand: "Bulova",
        name: "Bulova Connected Classic",
        category: "Smart",
        gender: "Men",
        price: 78000,
        image: "https://images.unsplash.com/photo-1617625802912-cde586faf331?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHNtYXJ0JTIwd2F0Y2h8ZW58MHx8MHx8fDA%3D",
        description: "A distinguished interpretation of connected watchmaking, combining Bulova-inspired elegance with modern digital functionality. Crafted for men who appreciate confident design and intelligent convenience. Its refined character makes it a standout choice for any sophisticated collection. Each unit is quality-checked before dispatch, so it arrives in flawless condition.",
        inStock: true,
        stockQuantity: 17
    },
    {
        brand: "Bulova",
        name: "Bulova Connected Luxe",
        category: "Smart",
        gender: "Women",
        price: 76000,
        image: "https://plus.unsplash.com/premium_photo-1728324765205-289d852f3442?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjI5fHxzbWFydCUyMHdhdGNofGVufDB8fDB8fHww",
        description: "Refined detailing and intelligent functionality create an effortlessly luxurious wrist experience. Designed for women who want their technology to feel as elegant as their finest accessories. A sophisticated finishing touch makes this timepiece especially memorable on the wrist. A versatile choice that transitions effortlessly from daywear to evening occasions.",
        inStock: false,
        stockQuantity: 0
    },
    {
        brand: "Bulova",
        name: "Bulova Connected Sport",
        category: "Smart",
        gender: "Men",
        price: 69000,
        image: "https://media.istockphoto.com/id/2218615047/photo/person-wearing-a-smartwatch-that-tracks-health-data-with-digital-holographic-visuals.webp?a=1&b=1&s=612x612&w=0&k=20&c=elQx9TYnWquqc5PIpP8Qvu78P7YiBz7bwEhPUj1EYo4=",
        description: "Bold proportions and performance-inspired styling give this connected timepiece a confident presence. Designed for active lifestyles without compromising Bulova's sophisticated character. Crafted to impress, it combines distinctive style with an enduring premium presence. It remains one of the most requested pieces in its collection this season.",
        inStock: true,
        stockQuantity: 17
    },
    {
        brand: "Bulova",
        name: "Bulova Connected Elegance",
        category: "Smart",
        gender: "Women",
        price: 71000,
        image: "https://images.unsplash.com/photo-1694837449886-80df7fe6024e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQzfHxzbWFydCUyMHdhdGNofGVufDB8fDB8fHww",
        description: "A graceful balance of contemporary technology and refined watch design. Its elegant silhouette brings intelligent functionality to a beautifully sophisticated everyday accessory. A sophisticated finishing touch makes this timepiece especially memorable on the wrist. Paired with premium after-sales support, ownership feels as refined as the design itself.",
        inStock: false,
        stockQuantity: 0
    },
    {
        brand: "Bulova",
        name: "Bulova Precision Connect",
        category: "Smart",
        gender: "Men",
        price: 83000,
        image: "https://images.unsplash.com/photo-1461141346587-763ab02bced9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNtYXJ0JTIwd2F0Y2h8ZW58MHx8MHx8fDA%3D",
        description: "Precision-inspired styling meets connected intelligence in this commanding timepiece. Designed for the modern gentleman who values performance, presence, and sophisticated technology. Its timeless appeal brings an unmistakable sense of confidence to every occasion. Its balanced proportions make it comfortable for everyday wear without losing presence.",
        inStock: true,
        stockQuantity: 6
    },
    {
        brand: "Bulova",
        name: "Bulova Modern Pearl",
        category: "Smart",
        gender: "Women",
        price: 73000,
        image: "https://images.unsplash.com/photo-1687259126959-83ebfc093a77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQ4fHxzbWFydCUyMHdhdGNofGVufDB8fDB8fHww",
        description: "Contemporary elegance takes center stage in this beautifully refined connected watch. A sophisticated choice for women who prefer subtle luxury paired with intelligent everyday functionality. Its timeless appeal brings an unmistakable sense of confidence to every occasion. A timeless investment piece that only grows more distinguished with age.",
        inStock: true,
        stockQuantity: 25
    },
    {
        brand: "Bulova",
        name: "Bulova Heritage Connect",
        category: "Smart",
        gender: "Men",
        price: 80000,
        image: "https://images.unsplash.com/photo-1660844817855-3ecc7ef21f12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D",
        description: "Classic watchmaking character is reimagined through a connected modern lens. Its heritage-inspired presence makes a powerful statement while intelligent features enhance everyday convenience. Its timeless appeal brings an unmistakable sense of confidence to every occasion. It ships in a signature presentation box, ready to gift or wear straight away.",
        inStock: true,
        stockQuantity: 6
    },
    {
        brand: "Seiko",
        name: "Seiko Connected Classic",
        category: "Smart",
        gender: "Men",
        price: 74000,
        image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D",
        description: "A sophisticated concept combining Seiko-inspired precision with modern connected functionality. Designed for men who appreciate clean proportions, dependable character, and understated technological elegance. Its timeless appeal brings an unmistakable sense of confidence to every occasion. Backed by an official warranty, it's a piece built to be worn for years to come.",
        inStock: false,
        stockQuantity: 0
    },
    {
        brand: "Seiko",
        name: "Seiko Connected Grace",
        category: "Smart",
        gender: "Women",
        price: 70000,
        image: "https://plus.unsplash.com/premium_photo-1713490250984-d6d676d895b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjU3fHxzbWFydCUyMHdhdGNofGVufDB8fDB8fHww",
        description: "Elegant proportions meet intelligent convenience in a refined contemporary silhouette. Designed to complement sophisticated personal style while keeping modern connectivity close at hand. Its timeless appeal brings an unmistakable sense of confidence to every occasion. Each unit is quality-checked before dispatch, so it arrives in flawless condition.",
        inStock: true,
        stockQuantity: 4
    },
    {
        brand: "Seiko",
        name: "Seiko Connected Sport",
        category: "Smart",
        gender: "Men",
        price: 68000,
        image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D",
        description: "A dynamic connected timepiece inspired by Seiko's performance-oriented character. Bold styling and intelligent functionality create a confident companion for active modern lifestyles. A sophisticated finishing touch makes this timepiece especially memorable on the wrist. A versatile choice that transitions effortlessly from daywear to evening occasions.",
        inStock: true,
        stockQuantity: 11
    },
    {
        brand: "Seiko",
        name: "Seiko Connected Pearl",
        category: "Smart",
        gender: "Women",
        price: 72000,
        image: "https://plus.unsplash.com/premium_photo-1681336549524-ee1ba4b2881e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjYxfHxzbWFydCUyMHdhdGNofGVufDB8fDB8fHww",
        description: "Subtle sophistication defines this elegant connected watch, pairing graceful styling with contemporary functionality. Created for women who value timeless beauty with a modern technological edge. Its refined character makes it a standout choice for any sophisticated collection. It remains one of the most requested pieces in its collection this season.",
        inStock: true,
        stockQuantity: 17
    },
    {
        brand: "Seiko",
        name: "Seiko Precision Connect",
        category: "Smart",
        gender: "Men",
        price: 79000,
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D",
        description: "A confident expression of intelligent timekeeping inspired by precision watchmaking. Designed with a strong contemporary profile for men who demand character and convenience from every detail. Crafted to impress, it combines distinctive style with an enduring premium presence. Paired with premium after-sales support, ownership feels as refined as the design itself.",
        inStock: true,
        stockQuantity: 25
    },
    {
        brand: "Seiko",
        name: "Seiko Modern Elegance",
        category: "Smart",
        gender: "Women",
        price: 75000,
        image: "https://images.unsplash.com/photo-1737731662588-729f42147158?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzI3fHxzbWFydCUyMHdhdGNofGVufDB8fDB8fHww",
        description: "Modern refinement meets intelligent functionality in a beautifully balanced silhouette. A graceful timepiece designed to bring subtle luxury and connected convenience to everyday moments. A sophisticated finishing touch makes this timepiece especially memorable on the wrist. Its balanced proportions make it comfortable for everyday wear without losing presence.",
        inStock: false,
        stockQuantity: 0
    }
];
const container = document.getElementById("container");
function All() {
    container.innerHTML = ``;
    for (let i = 0; i < products.length; i++) {
        let brand = products[i].brand;
        let name = products[i].name;
        let price = products[i].price;
        let category = products[i].category;
        let image = products[i].image;
        let description = products[i].description;
        let inStock = products[i].inStock;
        let stockQuantity = products[i].stockQuantity;
        container.innerHTML += `
<div data-aos="fade-up" style="width:100%;background:linear-gradient(145deg,#1a1a1a,#0f0f0f);border:1px solid rgba(212,175,55,0.25);border-radius:22px;overflow:hidden;box-shadow:0 15px 35px rgba(0,0,0,0.35);transition:all .4s ease;font-family:Arial,sans-serif">
<div style="background:linear-gradient(135deg,#2b2b2b,#181818);padding:20px;text-align:center">
<img src="${image}" alt="${name}" style="width:100%;height:230px;object-fit:cover;border:1px solid rgba(212,175,55,0.25);border-radius:11px">
</div>
<div style="padding:22px">
<span style="color:#d4af37;font-size:12px;text-transform:uppercase;letter-spacing:2px;font-weight:600">
${category}
</span>
<h3 style="color:#fff;margin:10px 0;font-size:22px;font-weight:600">
${name}
</h3>
<p style="color:#b8b8b8;font-size:14px;line-height:1.7;height:75px;overflow:hidden;margin:0 0 20px 0">
${description}
</p>
<div style="display:flex;justify-content:space-between;align-items:center;gap:10px">
<h4 style="color:#d4af37;margin:0;font-size:21px;font-weight:700;white-space:nowrap">
Rs. ${Number(price).toLocaleString()}
</h4>
<button onclick="window.location.href='single.html?name=${name}&price=${price}&category=${category}&image=${image}&desc=${description}&stock=${inStock}&quantity=${stockQuantity}'" type="button" style="background:linear-gradient(135deg,#D4AF37,#F5D77A);border:0;color:#111;padding:10px 18px;border-radius:30px;font-weight:700;cursor:pointer;white-space:nowrap">
Buy Now
</button>
</div>
</div>
</div>
`;
    }
}
AOS.refresh();
All();
let clocks = [
    {
        brand: "Rolex",
        name: "Rolex Royal Wall Clock",
        category: "Luxury",
        gender: "Men",
        price: 18500,
        image: "https://cdn.salla.sa/RvPxw/ccc10442-0c15-4509-89fb-b2976b0ac653-1000x1000-p467BdK25xMwaat562zjAD7J6Xvu8BsLXDSrLU23.jpg",
        description: "A luxurious wall clock inspired by timeless Rolex elegance, featuring a refined design and sophisticated presence for premium interiors.",
        inStock: true,
        stockQuantity: 8
    },
    {
        brand: "Michael Kors",
        name: "Michael Kors Gold Wall Clock",
        category: "Luxury",
        gender: "Women",
        price: 16800,
        image: "https://play-lh.googleusercontent.com/h4Lt75MfBpAbp2jq6FmRTye2JUtm_cZyjKY7xh3lEd4mHBp19v9tt210ghTGeVA9YUpWqwJV1V7-nj3KIvF0q8I=w526-h296-rw",
        description: "A stylish golden wall clock combining modern glamour with elegant detailing, designed to complement sophisticated living spaces.",
        inStock: true,
        stockQuantity: 12
    },
    {
        brand: "Citizen Eco-Drive",
        name: "Citizen Eco-Drive Classic Clock",
        category: "Classic",
        gender: "Men",
        price: 14200,
        image: "https://images.pexels.com/photos/14976142/pexels-photo-14976142.jpeg",
        description: "A refined classic clock inspired by Citizen precision, offering a clean appearance and timeless character for elegant interiors.",
        inStock: true,
        stockQuantity: 15
    },
    {
        brand: "Bulova",
        name: "Bulova Heritage Wall Clock",
        category: "Vintage",
        gender: "Men",
        price: 15500,
        image: "https://images.pexels.com/photos/38744243/pexels-photo-38744243.jpeg",
        description: "A heritage-inspired wall clock featuring traditional styling and elegant details that bring classic character to any room.",
        inStock: true,
        stockQuantity: 9
    },
    {
        brand: "Omega",
        name: "Omega Prestige Clock",
        category: "Luxury",
        gender: "Men",
        price: 22500,
        image: "https://images.pexels.com/photos/19296990/pexels-photo-19296990.jpeg",
        description: "A sophisticated Omega-inspired clock designed with a premium appearance, making it an impressive addition to refined interiors.",
        inStock: true,
        stockQuantity: 6
    },
    {
        brand: "Longines",
        name: "Longines Classic Desk Clock",
        category: "Classic",
        gender: "Women",
        price: 13800,
        image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "An elegant desk clock inspired by Longines heritage, combining graceful styling with a sophisticated and timeless appearance.",
        inStock: true,
        stockQuantity: 11
    },
    {
        brand: "Seiko",
        name: "Seiko Modern Wall Clock",
        category: "Modern",
        gender: "Men",
        price: 11800,
        image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "A clean modern wall clock inspired by Seiko precision, designed to provide a stylish and contemporary touch to your interior.",
        inStock: true,
        stockQuantity: 18
    },
    {
        brand: "TAG Heuer",
        name: "TAG Heuer Sport Clock",
        category: "Modern",
        gender: "Men",
        price: 17500,
        image: "https://images.unsplash.com/photo-1633603125151-6a3c1a4778a5?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "A bold sport-inspired clock with a contemporary appearance, created for interiors that appreciate precision and dynamic design.",
        inStock: true,
        stockQuantity: 7
    },
    {
        brand: "Tissot",
        name: "Tissot Elegant Wall Clock",
        category: "Classic",
        gender: "Women",
        price: 12900,
        image: "https://plus.unsplash.com/premium_photo-1725075084045-4c1ee2ab9349?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "An elegant wall clock inspired by Tissot's refined character, featuring a balanced design suitable for modern and classic spaces.",
        inStock: true,
        stockQuantity: 14
    },
    {
        brand: "Alberto",
        name: "Alberto Signature Wall Clock",
        category: "Luxury",
        gender: "Men",
        price: 21000,
        image: "https://images.unsplash.com/photo-1602162786736-1575a5b1be76?q=80&w=879&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "The Alberto Signature Clock brings refined luxury and timeless character together in a statement piece designed for premium interiors.",
        inStock: true,
        stockQuantity: 10
    },
    {
        brand: "Rolex",
        name: "Rolex Classic Roman Clock",
        category: "Classic",
        gender: "Women",
        price: 19200,
        image: "https://images.unsplash.com/photo-1609980775647-1fb1ef376268?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "A sophisticated Roman numeral clock inspired by classic Rolex aesthetics, bringing traditional elegance and premium character to your space.",
        inStock: true,
        stockQuantity: 5
    },
    {
        brand: "Michael Kors",
        name: "Michael Kors Crystal Clock",
        category: "Luxury",
        gender: "Women",
        price: 19800,
        image: "https://images.unsplash.com/photo-1707348102631-5a4c0a6eed6f?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "A glamorous crystal-inspired clock featuring elegant detailing and a luxurious appearance designed for sophisticated interiors.",
        inStock: true,
        stockQuantity: 9
    },
    {
        brand: "Citizen Eco-Drive",
        name: "Citizen Eco-Drive Modern Clock",
        category: "Modern",
        gender: "Men",
        price: 13500,
        image: "https://images.unsplash.com/photo-1558395872-85709c6d3639?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "A contemporary clock inspired by Citizen's clean design language, offering a polished appearance for modern homes and offices.",
        inStock: true,
        stockQuantity: 16
    },
    {
        brand: "Bulova",
        name: "Bulova Gold Desk Clock",
        category: "Luxury",
        gender: "Women",
        price: 17200,
        image: "https://images.unsplash.com/photo-1555505324-d1ba066a38f4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "A refined golden desk clock inspired by Bulova heritage, designed to add elegance and sophistication to any workspace.",
        inStock: true,
        stockQuantity: 13
    },
    {
        brand: "Omega",
        name: "Omega Executive Desk Clock",
        category: "Luxury",
        gender: "Men",
        price: 23500,
        image: "https://plus.unsplash.com/premium_photo-1744471321853-5a3a8378c1fa?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "A premium executive clock inspired by Omega's sophisticated identity, perfect for elegant offices and professional environments.",
        inStock: true,
        stockQuantity: 4
    },
    {
        brand: "Longines",
        name: "Longines Heritage Clock",
        category: "Vintage",
        gender: "Men",
        price: 18200,
        image: "https://images.unsplash.com/photo-1638814089537-87535ea2fd5b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "A vintage-inspired heritage clock combining traditional character with refined styling for interiors that celebrate timeless design.",
        inStock: true,
        stockQuantity: 8
    },
    {
        brand: "Seiko",
        name: "Seiko Minimal Wall Clock",
        category: "Modern",
        gender: "Women",
        price: 9800,
        image: "https://images.unsplash.com/photo-1650094980789-b0121916e666?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "A minimalist wall clock with a clean profile and easy-to-read design, ideal for contemporary homes and stylish workspaces.",
        inStock: true,
        stockQuantity: 20
    },
    {
        brand: "TAG Heuer",
        name: "TAG Heuer Racing Clock",
        category: "Sports",
        gender: "Men",
        price: 18800,
        image: "https://images.unsplash.com/photo-1590808149724-b7fdd0e2c500?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "A dynamic racing-inspired clock featuring a bold appearance designed for enthusiasts who appreciate sporty and energetic interiors.",
        inStock: true,
        stockQuantity: 6
    },
    {
        brand: "Tissot",
        name: "Tissot Heritage Desk Clock",
        category: "Vintage",
        gender: "Men",
        price: 14900,
        image: "https://images.unsplash.com/photo-1597935258269-c94aca687fbd?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "A heritage-style desk clock inspired by traditional craftsmanship, offering an elegant decorative presence for offices and studies.",
        inStock: true,
        stockQuantity: 12
    },
    {
        brand: "Alberto",
        name: "Alberto Royal Desk Clock",
        category: "Luxury",
        gender: "Women",
        price: 16000,
        image: "https://images.unsplash.com/photo-1685967461376-0a4b9b3a734d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "A graceful Alberto desk clock designed with a luxurious profile and refined details, perfect for elegant personal spaces.",
        inStock: true,
        stockQuantity: 10
    },
    {
        brand: "Rolex",
        name: "Rolex Grand Wall Clock",
        category: "Luxury",
        gender: "Men",
        price: 26000,
        image: "https://plus.unsplash.com/premium_photo-1733317494230-589672d50467?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "A commanding luxury wall clock inspired by Rolex sophistication, designed to become a distinguished centerpiece in premium interiors.",
        inStock: true,
        stockQuantity: 3
    },
    {
        brand: "Michael Kors",
        name: "Michael Kors Modern Clock",
        category: "Modern",
        gender: "Women",
        price: 14500,
        image: "https://images.unsplash.com/photo-1642071272153-d64e1c557434?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "A contemporary clock with fashionable styling and elegant detailing, designed to complement modern and stylish living spaces.",
        inStock: true,
        stockQuantity: 15
    },
    {
        brand: "Citizen Eco-Drive",
        name: "Citizen Eco-Drive Office Clock",
        category: "Modern",
        gender: "Men",
        price: 11200,
        image: "https://images.unsplash.com/photo-1681406189519-e8fc60854ed6?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "A professional office clock inspired by Citizen precision, featuring a clean appearance suitable for modern work environments.",
        inStock: true,
        stockQuantity: 17
    },
    {
        brand: "Bulova",
        name: "Bulova Classic Roman Clock",
        category: "Classic",
        gender: "Women",
        price: 16500,
        image: "https://images.unsplash.com/photo-1527454743534-ba93f2148eb0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "A timeless Roman numeral clock inspired by Bulova's classic character, designed to add sophistication and heritage to your interior.",
        inStock: true,
        stockQuantity: 7
    },
    {
        brand: "Omega",
        name: "Omega Golden Wall Clock",
        category: "Luxury",
        gender: "Women",
        price: 24800,
        image: "https://images.unsplash.com/photo-1745954757871-3be53100bad7?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "A luxurious golden wall clock inspired by Omega elegance, created to add a premium and sophisticated statement to any room.",
        inStock: true,
        stockQuantity: 5
    },
    {
        brand: "Longines",
        name: "Longines Elegant Wall Clock",
        category: "Classic",
        gender: "Women",
        price: 15800,
        image: "https://images.unsplash.com/photo-1677727852890-17e17c8f32ff?q=80&w=993&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "A graceful wall clock inspired by Longines heritage, combining classic styling with an elegant profile for refined interiors.",
        inStock: true,
        stockQuantity: 9
    },
    {
        brand: "Seiko",
        name: "Seiko Vintage Clock",
        category: "Vintage",
        gender: "Men",
        price: 13500,
        image: "https://images.unsplash.com/photo-1641525646982-79c5ad792e79?q=80&w=945&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "A vintage-inspired Seiko clock designed with traditional character and a warm appearance that complements classic interior themes.",
        inStock: true,
        stockQuantity: 11
    },
    {
        brand: "TAG Heuer",
        name: "TAG Heuer Performance Clock",
        category: "Sports",
        gender: "Men",
        price: 19500,
        image: "https://images.unsplash.com/photo-1662307193589-a55c45324ed2?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "A performance-inspired clock with a bold sporty design, created for modern spaces that celebrate precision, speed, and energy.",
        inStock: true,
        stockQuantity: 8
    },
    {
        brand: "Tissot",
        name: "Tissot Gold Table Clock",
        category: "Luxury",
        gender: "Women",
        price: 17600,
        image: "https://plus.unsplash.com/premium_photo-1669812541815-97f3406ae8ba?q=80&w=977&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "A sophisticated gold table clock inspired by Tissot elegance, offering a refined decorative touch for desks and premium interiors.",
        inStock: true,
        stockQuantity: 6
    },
    {
        brand: "Alberto",
        name: "Alberto Classic Wall Clock",
        category: "Classic",
        gender: "Men",
        price: 12500,
        image: "https://images.unsplash.com/photo-1662210750016-2aa9bb15763d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "A timeless Alberto wall clock featuring a balanced classic design, created to bring elegance and dependable character to everyday interiors.",
        inStock: true,
        stockQuantity: 14
    },
    {
        brand: "Rolex",
        name: "Rolex Vintage Desk Clock",
        category: "Vintage",
        gender: "Men",
        price: 21500,
        image: "https://images.unsplash.com/photo-1578337834280-0cbc7fcec092?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "A heritage-inspired desk clock featuring a distinctive vintage appearance and refined character for collectors and elegant workspaces.",
        inStock: true,
        stockQuantity: 4
    },
    {
        brand: "Michael Kors",
        name: "Michael Kors Luxury Desk Clock",
        category: "Luxury",
        gender: "Women",
        price: 18500,
        image: "https://images.unsplash.com/photo-1763189851338-3f2a693afb30?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "A glamorous desk clock inspired by Michael Kors style, designed with a sophisticated appearance for fashionable and luxurious interiors.",
        inStock: true,
        stockQuantity: 10
    },
    {
        brand: "Citizen Eco-Drive",
        name: "Citizen Eco-Drive Classic Wall Clock",
        category: "Classic",
        gender: "Women",
        price: 12800,
        image: "https://images.unsplash.com/photo-1740706081469-5fdc99404a5b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "A graceful classic wall clock inspired by Citizen precision, offering an elegant design that works beautifully in traditional interiors.",
        inStock: true,
        stockQuantity: 13
    },
    {
        brand: "Bulova",
        name: "Bulova Luxury Mantel Clock",
        category: "Luxury",
        gender: "Men",
        price: 27500,
        image: "https://images.unsplash.com/photo-1669767834094-ca3d1c8ba052?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "A statement mantel clock inspired by Bulova heritage, combining luxurious styling with traditional character for sophisticated interiors.",
        inStock: true,
        stockQuantity: 3
    },
    {
        brand: "Omega",
        name: "Omega Heritage Desk Clock",
        category: "Vintage",
        gender: "Men",
        price: 20500,
        image: "https://images.unsplash.com/photo-1731696912364-a369ad331857?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "A refined heritage desk clock inspired by Omega's timeless identity, designed for collectors and interiors that appreciate classic elegance.",
        inStock: true,
        stockQuantity: 7
    }
];
const clockContainer = document.getElementById("clockContainer");
function showClocks() {
    clockContainer.innerHTML = ``;
    for (let i = 0; i < clocks.length; i++) {
        let name = clocks[i].name;
        let price = clocks[i].price;
        let category = clocks[i].category;
        let image = clocks[i].image;
        let description = clocks[i].description;
        let inStock = clocks[i].inStock;
        let stockQuantity = clocks[i].stockQuantity;
        clockContainer.innerHTML += `
<div data-aos="fade-up" style="width:100%;height:100%;box-sizing:border-box;display:flex;flex-direction:column;background:linear-gradient(145deg,#1a1a1a,#0f0f0f);border:1px solid rgba(212,175,55,0.25);border-radius:22px;overflow:hidden;box-shadow:0 15px 35px rgba(0,0,0,0.35);transition:all .4s ease;font-family:Arial,sans-serif">
<div style="background:linear-gradient(135deg,#2b2b2b,#181818);padding:20px;text-align:center">
<img src="${image}" alt="${name}" style="width:100%;height:230px;object-fit:cover;border:1px solid rgba(212,175,55,0.25);border-radius:11px">
</div>
<div style="padding:22px;display:flex;flex-direction:column;flex:1">
<span style="color:#d4af37;font-size:12px;text-transform:uppercase;letter-spacing:2px;font-weight:600">
${category}
</span>
<h3 style="color:#fff;margin:10px 0;font-size:22px;font-weight:600">
${name}
</h3>
<p style="color:#b8b8b8;font-size:14px;line-height:1.7;height:75px;overflow:hidden;margin:0 0 20px 0">
${description}
</p>
<div style="display:flex;justify-content:space-between;align-items:center;gap:10px;margin-top:auto">
<h4 style="color:#d4af37;margin:0;font-size:21px;font-weight:700;white-space:nowrap">
Rs. ${Number(price).toLocaleString()}
</h4>
<button onclick="window.location.href='single.html?name=${name}&price=${price}&category=${category}&image=${image}&desc=${description}&stock=${inStock}&quantity=${stockQuantity}'" type="button" style="background:linear-gradient(135deg,#D4AF37,#F5D77A);border:0;color:#111;padding:10px 18px;border-radius:30px;font-weight:700;cursor:pointer;white-space:nowrap">
Buy Now
</button>
</div>
</div>
</div>
`;
    }
}
AOS.refresh();
showClocks();
// CATEGORY FILTER
function clockCategoryFilter(value) {
    clockContainer.innerHTML = ``;
    if (value == 'all') {
        showClocks()
    }
    else {
        let filterData = clocks.filter(function (clock) {
            return clock.category == value
        })
        for (let i = 0; i < filterData.length; i++) {
            let name = filterData[i].name;
            let price = filterData[i].price;
            let category = filterData[i].category;
            let image = filterData[i].image;
            let description = filterData[i].description;
            let inStock = filterData[i].inStock;
            let stockQuantity = filterData[i].stockQuantity;
            clockContainer.innerHTML += `
<div data-aos="flip-right" style="width:100%;height:100%;box-sizing:border-box;display:flex;flex-direction:column;background:linear-gradient(145deg,#1a1a1a,#0f0f0f);border:1px solid rgba(212,175,55,0.25);border-radius:22px;overflow:hidden;box-shadow:0 15px 35px rgba(0,0,0,0.35);transition:all .4s ease;font-family:Arial,sans-serif">
<div style="background:linear-gradient(135deg,#2b2b2b,#181818);padding:20px;text-align:center">
<img src="${image}" alt="${name}" style="width:100%;height:230px;object-fit:cover;border:1px solid rgba(212,175,55,0.25);border-radius:11px">
</div>
<div style="padding:22px;display:flex;flex-direction:column;flex:1">
<span style="color:#d4af37;font-size:12px;text-transform:uppercase;letter-spacing:2px;font-weight:600">
${category}
</span>
<h3 style="color:#fff;margin:10px 0;font-size:22px;font-weight:600">
${name}
</h3>
<p style="color:#b8b8b8;font-size:14px;line-height:1.7;height:75px;overflow:hidden;margin:0 0 20px 0">
${description}
</p>
<div style="display:flex;justify-content:space-between;align-items:center;gap:10px;margin-top:auto">
<h4 style="color:#d4af37;margin:0;font-size:21px;font-weight:700;white-space:nowrap">
Rs. ${Number(price).toLocaleString()}
</h4>
<button onclick="window.location.href='single.html?name=${name}&price=${price}&category=${category}&image=${image}&desc=${description}&stock=${inStock}&quantity=${stockQuantity}'" type="button" style="background:linear-gradient(135deg,#D4AF37,#F5D77A);border:0;color:#111;padding:10px 18px;border-radius:30px;font-weight:700;cursor:pointer;white-space:nowrap">
Buy Now
</button>
</div>
</div>
</div>
`;
        }
    }
}
// GENDER FILTER
function clockGenderFilter(value) {
    clockContainer.innerHTML = ``;
    if (value == 'all') {
        showClocks()
    }
    else {
        let filterData = clocks.filter(function (clock) {
            return clock.gender == value
        })
        for (let i = 0; i < filterData.length; i++) {
            let name = filterData[i].name;
            let price = filterData[i].price;
            let category = filterData[i].category;
            let image = filterData[i].image;
            let description = filterData[i].description;
            let inStock = filterData[i].inStock;
            let stockQuantity = filterData[i].stockQuantity;
            clockContainer.innerHTML += `
<div data-aos="flip-right" style="width:100%;height:100%;box-sizing:border-box;display:flex;flex-direction:column;background:linear-gradient(145deg,#1a1a1a,#0f0f0f);border:1px solid rgba(212,175,55,0.25);border-radius:22px;overflow:hidden;box-shadow:0 15px 35px rgba(0,0,0,0.35);transition:all .4s ease;font-family:Arial,sans-serif">
<div style="background:linear-gradient(135deg,#2b2b2b,#181818);padding:20px;text-align:center">
<img src="${image}" alt="${name}" style="width:100%;height:230px;object-fit:cover;border:1px solid rgba(212,175,55,0.25);border-radius:11px">
</div>
<div style="padding:22px;display:flex;flex-direction:column;flex:1">
<span style="color:#d4af37;font-size:12px;text-transform:uppercase;letter-spacing:2px;font-weight:600">
${category}
</span>
<h3 style="color:#fff;margin:10px 0;font-size:22px;font-weight:600">
${name}
</h3>
<p style="color:#b8b8b8;font-size:14px;line-height:1.7;height:75px;overflow:hidden;margin:0 0 20px 0">
${description}
</p>
<div style="display:flex;justify-content:space-between;align-items:center;gap:10px;margin-top:auto">
<h4 style="color:#d4af37;margin:0;font-size:21px;font-weight:700;white-space:nowrap">
Rs. ${Number(price).toLocaleString()}
</h4>
<button onclick="window.location.href='single.html?name=${name}&price=${price}&category=${category}&image=${image}&desc=${description}&stock=${inStock}&quantity=${stockQuantity}'" type="button" style="background:linear-gradient(135deg,#D4AF37,#F5D77A);border:0;color:#111;padding:10px 18px;border-radius:30px;font-weight:700;cursor:pointer;white-space:nowrap">
Buy Now
</button>
</div>
</div>
</div>
`;
        }
    }
}
// BRAND FILTER
function clockBrandFilter(value) {
    clockContainer.innerHTML = ``;
    if (value == 'all') {
        showClocks()
    }
    else {
        let filterData = clocks.filter(function (clock) {
            return clock.brand == value
        })
        for (let i = 0; i < filterData.length; i++) {
            let name = filterData[i].name;
            let price = filterData[i].price;
            let category = filterData[i].category;
            let image = filterData[i].image;
            let description = filterData[i].description;
            let inStock = filterData[i].inStock;
            let stockQuantity = filterData[i].stockQuantity;
            clockContainer.innerHTML += `
<div data-aos="flip-right" style="width:100%;height:100%;box-sizing:border-box;display:flex;flex-direction:column;background:linear-gradient(145deg,#1a1a1a,#0f0f0f);border:1px solid rgba(212,175,55,0.25);border-radius:22px;overflow:hidden;box-shadow:0 15px 35px rgba(0,0,0,0.35);transition:all .4s ease;font-family:Arial,sans-serif">
<div style="background:linear-gradient(135deg,#2b2b2b,#181818);padding:20px;text-align:center">
<img src="${image}" alt="${name}" style="width:100%;height:230px;object-fit:cover;border:1px solid rgba(212,175,55,0.25);border-radius:11px">
</div>
<div style="padding:22px;display:flex;flex-direction:column;flex:1">
<span style="color:#d4af37;font-size:12px;text-transform:uppercase;letter-spacing:2px;font-weight:600">
${category}
</span>
<h3 style="color:#fff;margin:10px 0;font-size:22px;font-weight:600">
${name}
</h3>
<p style="color:#b8b8b8;font-size:14px;line-height:1.7;height:75px;overflow:hidden;margin:0 0 20px 0">
${description}
</p>
<div style="display:flex;justify-content:space-between;align-items:center;gap:10px;margin-top:auto">
<h4 style="color:#d4af37;margin:0;font-size:21px;font-weight:700;white-space:nowrap">
Rs. ${Number(price).toLocaleString()}
</h4>
<button onclick="window.location.href='single.html?name=${name}&price=${price}&category=${category}&image=${image}&desc=${description}&stock=${inStock}&quantity=${stockQuantity}'" type="button" style="background:linear-gradient(135deg,#D4AF37,#F5D77A);border:0;color:#111;padding:10px 18px;border-radius:30px;font-weight:700;cursor:pointer;white-space:nowrap">
Buy Now
</button>
</div>
</div>
</div>
`;
        }
    }
}
function showSection(sectionId) {
    const sections = document.querySelectorAll(
        "#home, #products,#clocks, #category, #technology, #store, #support, #gallery, #about, #contact"
    );
    // Pehle sab sections hide karo
    sections.forEach(function (section) {
        section.style.display = "none";
    });
    // Phir sirf selected section show karo
    const selectedSection = document.querySelector(sectionId);
    if (selectedSection) {
        selectedSection.style.display = "block";
        selectedSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}
const navLinks = document.querySelectorAll(
    ".navbar a,.mobile-menu a, .footer-column a"
);
const navbarOnlyLinks = document.querySelectorAll(".navbar a", ".mobile-menu a");
navLinks.forEach(function (link) {
    const href = link.getAttribute("href");
    if (!href || href === "#" || !href.startsWith("#")) return;
    link.addEventListener("click", function (event) {
        event.preventDefault();
        showSection(href);
        navbarOnlyLinks.forEach(function (navItem) {
            navItem.classList.remove("active");
            if (navItem.getAttribute("href") === href) {
                navItem.classList.add("active");
            }
        });
    });
});
// FILTRATION
function catFilter(value) {
    container.innerHTML = ``;
    if (value == 'all') {
        All()
    }
    else {
        let filterData = products.filter(function (product) {
            return product.category == value
        })
        for (let i = 0; i < filterData.length; i++) {
            let name = filterData[i].name;
            let price = filterData[i].price;
            let productCategory = filterData[i].category;
            let image = filterData[i].image;
            let description = filterData[i].description;
            container.innerHTML += `
<div data-aos="flip-right" style="width:100%;background:linear-gradient(145deg,#1a1a1a,#0f0f0f);border:1px solid rgba(212,175,55,0.25);border-radius:22px;overflow:hidden;box-shadow:0 15px 35px rgba(0,0,0,0.35);transition:all .4s ease;font-family:Arial,sans-serif">
<div style="background:linear-gradient(135deg,#2b2b2b,#181818);padding:20px;text-align:center">
<img src="${image}" alt="${name}" style="width:100%;height:230px;object-fit:cover;border:1px solid rgba(212,175,55,0.25);border-radius:11px">
</div>
<div style="padding:22px">
<span style="color:#d4af37;font-size:12px;text-transform:uppercase;letter-spacing:2px;font-weight:600">
${productCategory}
</span>
<h3 style="color:#fff;margin:10px 0;font-size:22px;font-weight:600">
${name}
</h3>
<p style="color:#b8b8b8;font-size:14px;line-height:1.7;height:75px;overflow:hidden;margin:0 0 20px 0">
${description}
</p>
<div style="display:flex;justify-content:space-between;align-items:center;gap:10px">
<h4 style="color:#d4af37;margin:0;font-size:21px;font-weight:700;white-space:nowrap">
Rs. ${Number(price).toLocaleString()}
</h4>
<button type="button" style="background:linear-gradient(135deg,#D4AF37,#F5D77A);border:0;color:#111;padding:10px 18px;border-radius:30px;font-weight:700;cursor:pointer;white-space:nowrap">
Buy Now
</button>
</div>
</div>
</div>
`;
        }
    }
}
function genderFilter(value) {
    container.innerHTML = ``;
    if (value == 'all') {
        All()
    }
    else {
        let filterData = products.filter(function (product) {
            return product.gender == value
        })
        for (let i = 0; i < filterData.length; i++) {
            let name = filterData[i].name;
            let price = filterData[i].price;
            let productCategory = filterData[i].category;
            let image = filterData[i].image;
            let description = filterData[i].description;
            container.innerHTML += `
<div style="width:100%;background:linear-gradient(145deg,#1a1a1a,#0f0f0f);border:1px solid rgba(212,175,55,0.25);border-radius:22px;overflow:hidden;box-shadow:0 15px 35px rgba(0,0,0,0.35);transition:all .4s ease;font-family:Arial,sans-serif">
<div style="background:linear-gradient(135deg,#2b2b2b,#181818);padding:20px;text-align:center">
<img src="${image}" alt="${name}" style="width:100%;height:230px;object-fit:cover;border:1px solid rgba(212,175,55,0.25);border-radius:11px">
</div>
<div style="padding:22px">
<span style="color:#d4af37;font-size:12px;text-transform:uppercase;letter-spacing:2px;font-weight:600">
${productCategory}
</span>
<h3 style="color:#fff;margin:10px 0;font-size:22px;font-weight:600">
${name}
</h3>
<p style="color:#b8b8b8;font-size:14px;line-height:1.7;height:75px;overflow:hidden;margin:0 0 20px 0">
${description}
</p>
<div style="display:flex;justify-content:space-between;align-items:center;gap:10px">
<h4 style="color:#d4af37;margin:0;font-size:21px;font-weight:700;white-space:nowrap">
Rs. ${Number(price).toLocaleString()}
</h4>
<button type="button" style="background:linear-gradient(135deg,#D4AF37,#F5D77A);border:0;color:#111;padding:10px 18px;border-radius:30px;font-weight:700;cursor:pointer;white-space:nowrap">
Buy Now
</button>
</div>
</div>
</div>
`;
        }
    }
}
function brandsFilter(value) {
    container.innerHTML = ``;
    if (value == 'all') {
        All()
    }
    else {
        let filterData = products.filter(function (product) {
            return product.brand == value
        })
        for (let i = 0; i < filterData.length; i++) {
            let name = filterData[i].name;
            let price = filterData[i].price;
            let productCategory = filterData[i].category;
            let image = filterData[i].image;
            let description = filterData[i].description;
            container.innerHTML += `
<div style="width:100%;background:linear-gradient(145deg,#1a1a1a,#0f0f0f);border:1px solid rgba(212,175,55,0.25);border-radius:22px;overflow:hidden;box-shadow:0 15px 35px rgba(0,0,0,0.35);transition:all .4s ease;font-family:Arial,sans-serif">
<div style="background:linear-gradient(135deg,#2b2b2b,#181818);padding:20px;text-align:center">
<img src="${image}" alt="${name}" style="width:100%;height:230px;object-fit:cover;border:1px solid rgba(212,175,55,0.25);border-radius:11px">
</div>
<div style="padding:22px">
<span style="color:#d4af37;font-size:12px;text-transform:uppercase;letter-spacing:2px;font-weight:600">
${productCategory}
</span>
<h3 style="color:#fff;margin:10px 0;font-size:22px;font-weight:600">
${name}
</h3>
<p style="color:#b8b8b8;font-size:14px;line-height:1.7;height:75px;overflow:hidden;margin:0 0 20px 0">
${description}
</p>
<div style="display:flex;justify-content:space-between;align-items:center;gap:10px">
<h4 style="color:#d4af37;margin:0;font-size:21px;font-weight:700;white-space:nowrap">
Rs. ${Number(price).toLocaleString()}
</h4>
<button type="button" style="background:linear-gradient(135deg,#D4AF37,#F5D77A);border:0;color:#111;padding:10px 18px;border-radius:30px;font-weight:700;cursor:pointer;white-space:nowrap">
Buy Now
</button>
</div>
</div>
</div>
`;
        }
    }
}