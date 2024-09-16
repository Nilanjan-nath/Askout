const noButton = document.getElementById('no-button');
const yesButton = document.getElementById('yes-button');
const successContainer = document.getElementById('success-container');
const mainCard = document.getElementById('main-card');
const whatsappButton = document.getElementById('whatsapp-button');

// Function to move the "No" button
function moveButton() {
    const x = Math.floor(Math.random() * 200) - 100;
    const y = Math.floor(Math.random() * 200) - 100;
    noButton.style.transform = `translate(${x}px, ${y}px)`;
}

// Function to detect if the device is mobile
function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

// Apply different behavior based on device type
if (isMobileDevice()) {
    noButton.addEventListener('touchstart', (e) => {
        e.preventDefault();
        moveButton();
    });
} else {
    noButton.addEventListener('mouseover', moveButton);
}

// Function to handle "Yes" button click
yesButton.addEventListener('click', () => {
    // Hide the main card and show the success container
    mainCard.style.display = 'none';
    successContainer.classList.remove('hidden');
});

// Handle WhatsApp button click
whatsappButton.addEventListener('click', () => {
    const phoneNumber = '8787368751'; // Replace with your WhatsApp number
    const message = 'Hey! Excited for the date!';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
});
