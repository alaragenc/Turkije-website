// Selecteer alle elementen met de class 'image' en sla ze op in een lijst
const images = document.querySelectorAll('.image');
// Huidige index van de weergegeven afbeelding
let currentIndex = 0;

// Functie om een specifieke afbeelding weer te geven op basis van de index
function showImage(index) {
    images.forEach((image, i) => {
        if (i === index) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}

// Functie om naar de vorige afbeelding te gaan
function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

// Functie om naar de volgende afbeelding te gaan
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

// Voeg een eventlistener toe aan het element met de class 'prev' om naar de vorige afbeelding te gaan
document.querySelector('.prev').addEventListener('click', prevImage);

// Voeg een eventlistener toe aan het element met de class 'next' om naar de volgende afbeelding te gaan
document.querySelector('.next').addEventListener('click', nextImage);

// Start met de eerste afbeelding weergegeven
showImage(currentIndex);